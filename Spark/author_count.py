import sys

from pyspark.sql import SparkSession
from pyspark.sql.types import Row

from Spark.Utils.FuctionUtils import FuncUtils
from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, SPARK_MASTER_ADDR, SPARK_MASTER_PORT, mysql_conn_param

video_type_code = 0

def create_author_entity(item, type_code):
    entity = {}

    entity['author'] = item[0]
    entity['avg_play_count'] = item[1]
    entity['type_code'] = type_code

    return entity

def main(argv):

    spark = SparkSession.builder \
        .appName('AUTHOR_STATISTIC') \
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
    # video_df = None
    # for i in range(1, 15):
    #     filepath = FuncUtils.create_filepath(i, 'video_details/video_info_type')
    #     df = spark.read.format('csv').options(header='true').load(filepath)
    #     if video_df is None:
    #         video_df = df
    #     else:
    #         video_df = video_df.union(df)

    author_df = video_df.select('Up主', '播放量')
    author_rdd = video_df.rdd
    author_rdd = author_rdd.filter(lambda x: x['播放量'].isdigit())
    pair_rdd = author_rdd.map(lambda x: (x['Up主'], (int(x['播放量']), 1)))
    pair_rdd = pair_rdd.reduceByKey(lambda a, b: (a[0] + b[0], a[1] + b[1]))
    pair_rdd = pair_rdd.filter(lambda x: x[1][0] != 0)
    pair_rdd = pair_rdd.map(lambda x: (x[0], x[1][0] / x[1][1]))
    pair_df = pair_rdd.map(
        lambda pair:
        Row(**create_author_entity(pair, video_type_code))
    ).toDF()
    pair_df = pair_df.sort('avg_play_count', ascending=False)

    pair_df = pair_df.limit(200)
    pair_df.show()
    pair_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                             'AUTHOR_STATISTIC', 'append', mysql_conn_param)




if __name__ == '__main__':
    main(sys.argv[1:])