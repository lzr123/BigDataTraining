import getopt
import sys
import pandas as pd
from pyspark.sql.types import Row

from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, mysql_conn_param

video_type_code = 0

def handle_params(argv):
    global video_type_code
    try:
        opts, args = getopt.getopt(argv, 't:', ['type='])
    except getopt.GetoptError:
        print('Wrong parameters: {}\n'.format(argv))
        sys.exit(2)

    for opt, arg in opts:
        if opt in ('-t', '--type'):
            video_type_code= int(arg)

    if video_type_code <= 0:
        raise ValueError('Wrong barrage type!\n')

    return video_type_code

def create_filepath(video_type_code):
    filepath = r'file:///home/lzr/data/video_details/video_info_type{}.csv'.format(
        video_type_code
    )
    return filepath

def load_data(filepath):

    if isinstance(filepath, str):
        data = pd.read_csv(filepath)
        return data

def create_tag_entity(tag):

    entity = {}
    entity['tag'] = tag[0]
    entity['type_code'] = video_type_code
    entity['count'] = tag[1]

    return entity

def main(argv):
    from pyspark.sql import SparkSession
    spark = SparkSession.builder \
        .appName('HOT_TAG_COUNT') \
        .master('spark://{}:{}'.format(SPARK_HOST_ADDR, SPARK_HOST_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')

    video_type_code = handle_params(argv)
    filepath = create_filepath(video_type_code)
    # data = load_data(filepath)
    #
    # video_df = spark.createDataFrame(data)
    video_df = spark.read.format('csv').options(header='true').load(filepath)

    tag_df = video_df.select('标签')
    tag_rdd = tag_df.rdd
    tag_data = tag_rdd.filter(lambda line: line['标签'] is not None)
    tag_data = tag_data.flatMap(lambda line: line['标签'].split(','))
    pair_data = tag_data.map(lambda tag: (tag, 1))
    pair_data = pair_data.reduceByKey(lambda a, b: a + b)

    pair_data = pair_data.filter(lambda pair: pair[1] >= 100)

    pair_df = pair_data.map(
        lambda pair:
        Row(**create_tag_entity(pair))
    ).toDF()

    pair_df.createOrReplaceTempView('TAG_STATISTIC')
    pair_df = pair_df.sort('count', ascending=False)
    pair_df = pair_df.dropDuplicates(['tag', 'type_code'])
    pair_df.show()

    pair_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                             'TAG_STATISTIC', 'append', mysql_conn_param)





if __name__ == '__main__':
    main(sys.argv[1:])