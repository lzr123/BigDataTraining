import getopt
import sys
from functools import reduce

import jieba
import jieba.analyse
import pandas as pd
from pyspark.sql.types import Row
from pyspark.sql import SparkSession

from Spark.Utils.FuctionUtils import FuncUtils
from Spark.settings import SPARK_HOST_PORT, SPARK_HOST_ADDR, WORD_FILTER, HDFS_HOST_PORT, HDFS_HOST_ADDR, \
    SPARK_MASTER_ADDR, SPARK_MASTER_PORT, mysql_conn_param

video_type_code = 0

def load_data(filepath):

    if isinstance(filepath, str):
        data = pd.read_csv(filepath)
        return data

def word_split(sentence):
    sentence = sentence['弹幕内容']
    word_list = jieba.analyse.extract_tags(sentence, topK=5,
                                           allowPOS=('Ag', 'a', 'ad', 'an', 'i', 'l', 'Ng',
                                                     'n', 'vn', 'un'
                                                     ))
    return word_list

def create_word_entity(word, type_str, type_code):
    entity = {}
    entity['word'] = word[0]
    entity['source'] = type_str
    entity['type_code'] = type_code
    entity['count'] = word[1]
    return entity


def main(argv):
    # --- TODO ---

    global video_type_code

    spark = SparkSession.builder \
        .appName('BARRAGE_WORD_COUNT') \
        .master('spark://{}:{}'.format(SPARK_MASTER_ADDR, SPARK_MASTER_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')


    video_type_code = FuncUtils.handle_params(argv)

    filepath = FuncUtils.create_filepath(video_type_code, 'barrage_data/barrage_type')

    video_df = spark.read.format('csv').options(header='true').load(filepath)

    text_data = video_df.select('弹幕内容')
    text_rdd = text_data.rdd
    text_rdd = text_rdd.filter(lambda x: x['弹幕内容'] is not None)
    word_data = text_rdd.flatMap(word_split)
    word_data = word_data.filter(lambda word: word not in WORD_FILTER)
    pair_data = word_data.map(lambda word: (word, 1))
    pair_data = pair_data.reduceByKey(lambda a, b: a + b)

    word_df = pair_data.map(
        lambda pair:
        Row(**create_word_entity(pair, 'barrage',  video_type_code))
    ).toDF()
    word_df.createOrReplaceTempView('WORD')
    word_df = word_df.sort('count', ascending=False)
    word_df.show()

    word_df = word_df.limit(500)
    word_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                             'WORD_FREQ', 'append', mysql_conn_param)


if __name__ == '__main__':

    main(argv=sys.argv[1:])