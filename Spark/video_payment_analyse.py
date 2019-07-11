import sys

from pyspark.sql import SparkSession
from pyspark.sql.types import Row

from Spark.settings import SPARK_MASTER_ADDR, SPARK_MASTER_PORT
from Spark.Utils.FuctionUtils import FuncUtils

video_type_code = 0

def create_is_pay_entity(pair, type_code):
    entity = {}

    entity['is_pay'] = pair[0]
    entity['type_code'] = type_code
    entity['count'] = pair[1]

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



    video_df = video_df.select('av号', '是否收费')
    video_df = video_df.withColumnRenamed('av号', 'av')
    video_df = video_df.withColumnRenamed('是否收费', 'is_pay')

    video_rdd = video_df.rdd.filter(lambda x: x['is_pay'].isdigit())
    pair_rdd = video_rdd.map(lambda x: (x['is_pay'], 1))
    pair_rdd = pair_rdd.reduceByKey(lambda a, b: a + b)
    pair_df = pair_rdd.map(
        lambda pair:
        Row(**create_is_pay_entity(pair, video_type_code))
    ).toDF()

    pair_df.show()



if __name__ == '__main__':
    main(sys.argv[1:])