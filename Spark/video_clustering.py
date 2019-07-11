import getopt
import sys

from pyspark.ml.clustering import BisectingKMeans
from pyspark.ml.feature import VectorAssembler
from pyspark.sql import SparkSession
from pyspark.sql.types import Row

from Spark.Utils.FuctionUtils import handle_params
from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, SPARK_MASTER_PORT, SPARK_MASTER_ADDR

video_type_code = 0

def create_clustering_result_entity(row):
    entity = {}

    entity['play_count'] = row['features'][0]
    entity['favorite_count'] = row['features'][1]
    entity['comment_count'] = row['features'][2]
    entity['barrage_count'] = row['features'][3]
    entity['clustering'] = row['prediction']

    return entity

def main(argv):

    spark = SparkSession.builder \
        .appName('VIDEO_CLUSTERING') \
        .master('spark://{}:{}'.format(SPARK_MASTER_ADDR, SPARK_MASTER_PORT)) \
        .getOrCreate()
    spark.conf.set('spark.sql.execution.arrow.enabled', 'true')
    spark.conf.set('spark.driver.maxResultSize', '0')
    spark.conf.set('spark.driver.cores', '4')
    spark.conf.set('spark.driver.memory', '4g')
    spark.conf.set('spark.executor.memory', '4g')
    spark.conf.set('spark.executor.cores', '4')

    video_type_code = handle_params(argv)

    video_df = spark.read.format('jdbc')\
        .option('url', 'jdbc:mysql://192.168.174.133:3306/big_data')\
        .option('driver', 'com.mysql.cj.jdbc.Driver')\
        .option('dbtable', 'VIDEO_STATISTIC')\
        .option('user', 'root').option('password', 'root').load()

    assembler = VectorAssembler()\
        .setInputCols(['play_count',
                        'favorite_count',
                        'comment_count',
                        'barrage_count'])\
        .setOutputCol('features')

    video_vector = assembler.transform(video_df.select(
        'play_count', 'favorite_count', 'comment_count', 'barrage_count'
    ).limit(1000))

    bkm = BisectingKMeans(k=8, minDivisibleClusterSize=1.0)
    model = bkm.fit(video_vector)
    centers = model.clusterCenters()

    video_vector = assembler.transform(video_df.select(
        'play_count', 'favorite_count', 'comment_count', 'barrage_count'
    ))

    transformed = model.transform(video_vector).select('features', 'prediction')


    transformed.show()

def test(argv):
    video_type_code = handle_params(argv)





if __name__ == '__main__':
    main(sys.argv[1:])