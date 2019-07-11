import sys

import jieba.analyse
from pyspark.sql import SparkSession
from pyspark.sql.types import Row

from Spark.Utils.FuctionUtils import FuncUtils
from Spark.settings import SPARK_MASTER_ADDR, SPARK_MASTER_PORT, WORD_FILTER, mysql_conn_param

video_type_code = 0

def word_split(title):
    title = title['title']
    word_list = jieba.analyse.extract_tags(title, topK=5,
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
    global video_type_code

    spark = SparkSession.builder \
        .appName('VIDEO_TITLE_WORD_COUNT') \
        .master('spark://{}:{}'.format(SPARK_MASTER_ADDR, SPARK_MASTER_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')


    video_type_code = FuncUtils.handle_params(argv)

    filepath = FuncUtils.create_filepath(video_type_code, 'video_details/video_info_type')
    video_df = spark.read.format('csv').options(header='true').load(filepath)
    video_info_df = video_df.select('av号', '标题')
    video_info_df = video_info_df.withColumnRenamed('av号', 'av')
    video_info_df = video_info_df.withColumnRenamed('标题', 'title')

    title_word_data = video_info_df.rdd.filter(lambda x: x['title'] is not None).flatMap(word_split)
    title_word_data = title_word_data.filter(lambda word: word not in WORD_FILTER)
    pair_data = title_word_data.map(lambda word: (word, 1))
    pair_data = pair_data.reduceByKey(lambda a, b: a + b)

    word_df = pair_data.map(
        lambda pair:
        Row(**create_word_entity(pair, 'title', video_type_code))
    ).toDF()

    word_df.show()

    word_df = word_df.sort('count', ascending=False).limit(500)

    word_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                       'WORD_FREQ', 'append', mysql_conn_param)

if __name__ == '__main__':
    main(sys.argv[1:])