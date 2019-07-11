import datetime
import getopt
import sys
import time

from pyspark.sql.functions import udf, col
from pyspark.sql.types import Row, DoubleType, IntegerType, BooleanType

from Spark.Utils.FuctionUtils import handle_params, create_filepath
from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, mysql_conn_param
from pyspark.sql import SparkSession

video_type_code = 0

def drop_na(item):

    if item['av号'] is not None and \
        item['收藏数'] is not None and \
        item['播放量'] is not None and \
        item['弹幕数'] is not None and \
        item['评论数'] is not None:
        return True
    else:
        return False

def create_video_entity(video):
    entity = {}

    print(type(video['播放量']), video['播放量'])

    entity['av'] = video['av号']
    entity['type_code'] = video_type_code
    entity['play_count'] = video['播放量']
    entity['favorite_count'] = video['收藏数']
    entity['barrage_count'] = video['弹幕数']
    entity['comment_count'] = video['评论数']
    entity['compre_heat'] = int(video['播放量']) * 0.35 + \
                            int(video['收藏数']) * 0.35 + \
                            int(video['弹幕数']) * 0.15 + \
                            int(video['评论数']) * 0.15

    return entity

def calc_compre_heat(play_count,
                     favorite_count,
                     comment_count,
                     barrage_count):
    if not (play_count.isdigit() and barrage_count.isdigit() and \
        comment_count.isdigit() and favorite_count.isdigit()):
        return 0
    else:

        return int(play_count) * 0.35 + \
                int(favorite_count) * 0.35 + \
                int(barrage_count) * 0.15 + \
                int(comment_count) * 0.15

def calc_participation(play_count,
                     favorite_count,
                     comment_count,
                     barrage_count):

    if not (play_count.isdigit() and barrage_count.isdigit() and \
        comment_count.isdigit() and favorite_count.isdigit()):
        return 0
    else:
        play_count = int(play_count)
        favorite_count = int(favorite_count)
        comment_count = int(comment_count)
        barrage_count = int(barrage_count)
        total = barrage_count+ favorite_count + comment_count
        if play_count == 0:
            return 0
        else:
            return total / play_count

def calc_pass_duration(script_time, publish_time):

    script_time = int(script_time)
    publish_time = datetime.datetime.strptime(publish_time, '%Y-%m-%d %H:%M:%S')
    publish_time = int(time.mktime(publish_time.timetuple()))

    duration = script_time - publish_time
    return duration



def column_filter(play_count, barrage_count, comment_count, favorite_count):

    return play_count.isdigit() and barrage_count.isdigit() and \
          comment_count.isdigit() and favorite_count.isdigit()

def main(argv):

    spark = SparkSession.builder \
        .appName('HOT_VIDEO') \
        .master('spark://{}:{}'.format(SPARK_HOST_ADDR, SPARK_HOST_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')

    video_type_code = handle_params(argv)
    filepath = create_filepath(video_type_code, 'video_details')

    video_df = spark.read.format('csv').options(header='true').load(filepath)
    video_info_df = video_df.select('av号', '收藏数', '播放量', '弹幕数', '评论数', '投稿时间', '发布时间')
    video_info_df = video_info_df.dropna()

    create_video_entity_udf = udf(calc_compre_heat, DoubleType())
    create_video_participation_udf = udf(calc_participation, DoubleType())
    filter_udf = udf(column_filter, BooleanType())
    pass_time_udf = udf(calc_pass_duration, IntegerType())


    video_info_df = video_info_df.withColumnRenamed('av号', 'av')
    video_info_df = video_info_df.withColumnRenamed('播放量', 'play_count')
    video_info_df = video_info_df.withColumnRenamed('收藏数', 'favorite_count')
    video_info_df = video_info_df.withColumnRenamed('评论数', 'comment_count')
    video_info_df = video_info_df.withColumnRenamed('弹幕数', 'barrage_count')
    video_info_df = video_info_df.withColumnRenamed('投稿时间', 'script_time')
    video_info_df = video_info_df.withColumnRenamed('发布时间', 'publish_time')

    video_info_df = video_info_df.filter(filter_udf('play_count',
                                                    'favorite_count',
                                                    'comment_count',
                                                    'barrage_count'))

    # video_info_df.foreach(print)
    # tmp = video_info_df.count()
    #
    video_info_df = video_info_df.withColumn('compre_heat',
                                             create_video_entity_udf('play_count',
                                                                     'favorite_count',
                                                                     'comment_count',
                                                                     'barrage_count'))
    video_info_df = video_info_df.withColumn('participation',
                                             create_video_participation_udf('play_count',
                                                                     'favorite_count',
                                                                     'comment_count',
                                                                     'barrage_count'))

    video_info_df = video_info_df.withColumn('pass_time', pass_time_udf('script_time', 'publish_time'))

    #
    video_info_df = video_info_df.withColumn('type_code', udf(lambda: video_type_code, IntegerType())())
    #
    video_info_df = video_info_df.sort('compre_heat', ascending=False)
    video_info_df = video_info_df.dropna()
    video_info_df = video_info_df.dropDuplicates(['av'])

    # video_info_df = video_info_df.limit(64)
    video_info_df.show()
    #
    video_info_df.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                             'VIDEO_STATISTIC', 'append', mysql_conn_param)






if __name__ == '__main__':
    main(sys.argv[1:])