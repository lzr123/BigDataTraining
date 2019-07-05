import datetime
import getopt
import sys
import time

from pyspark.sql.functions import udf
from pyspark.sql.types import Row, IntegerType, BooleanType

from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, mysql_conn_param
from pyspark.sql import SparkSession

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
            video_type_code = int(arg)

    if video_type_code <= 0:
        raise ValueError('Wrong video type!\n')

    return video_type_code

def create_filepath(video_type_code):
    filepath = r'file:///home/lzr/data/video_details/video_info_type{}.csv'.format(
        video_type_code
    )
    return filepath

def calc_pass_duration(script_time, publish_time):

    script_time = int(script_time)
    publish_time = datetime.datetime.strptime(publish_time, '%Y-%m-%d %H:%M:%S')
    publish_time = int(time.mktime(publish_time.timetuple()))

    duration = script_time - publish_time
    return duration

def add_type_code():

    return video_type_code

def illegal_filter(s, p):
    if s.isdigit() and p.isdigit():
        return True
    else:
        return False

def gen_hist_bucket(start, end, step):

    i = 0
    while i <= step:
        # --- TODO---
        pass


def main(argv):
    spark = SparkSession.builder \
        .appName('PASS_DURATION') \
        .master('spark://{}:{}'.format(SPARK_HOST_ADDR, SPARK_HOST_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')

    video_type_code = handle_params(argv)
    filepath = create_filepath(video_type_code)

    video_df = spark.read.format('csv').options(header='true').load(filepath)

    pass_time_info = video_df.select('av号', '投稿时间', '发布时间')

    pass_time_udf = udf(calc_pass_duration, IntegerType())

    # filter_udf = udf(illegal_filter, BooleanType())



    # pass_time_info = pass_time_info.filter(filter_udf('投稿时间',
    #                                                 '发布时间'))

    pass_time_info = pass_time_info.withColumnRenamed('av号', 'av')
    pass_time_info = pass_time_info.withColumnRenamed('投稿时间', 'script_time')
    pass_time_info = pass_time_info.withColumnRenamed('发布时间', 'publish_time')

    pass_time_df = pass_time_info.withColumn('pass_time', pass_time_udf('script_time', 'publish_time'))
    pass_time_df = pass_time_df.withColumn('type_code', udf(add_type_code, IntegerType())())

    duration_rdd = pass_time_df.select('pass_time').rdd
    # duration_rdd = duration_rdd.flatMap(lambda x: x)
    # duration_hist = duration_rdd.histogram([0, 10000000, 20000000])


    pass_time_df.show()

    pass_time_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                'TAG_STATISTIC', 'append', mysql_conn_param)

if __name__ == '__main__':
    main(sys.argv[1:])