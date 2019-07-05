import getopt
import numpy

import pandas
import sys
#
# from pyspark.ml.clustering import BisectingKMeans
# from pyspark.ml.feature import VectorAssembler
# from pyspark.sql import SparkSession
# from pyspark.sql.types import Row

from Spark.Utils.FuctionUtils import FuncUtils
from Spark.settings import SPARK_HOST_ADDR, SPARK_HOST_PORT, SPARK_MASTER_PORT, SPARK_MASTER_ADDR
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import sklearn.cluster as cluster

video_type_code = 0

color_bar = [
    (1.0, 0.0, 0.0),
    (0.0, 1.0, 0.0),
    (0.0, 0.0, 1.0),
    (1.0, 1.0, 0.0),
    (1.0, 0.0, 1.0),
    (0.0, 1.0, 1.0),
    (0.5, 1.0, 0.1),
    (1.0, 0.3, 0.5)
]

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
    video_type_code = FuncUtils.handle_params(argv)

    filepath = './video_details/video_info_type{}.csv'.format(
        video_type_code
    )

    video_df = pandas.read_csv(filepath)
    video_df = video_df[['av号', '收藏数', '弹幕数', '评论数', '播放量']]
    video_df.columns = ['av', 'favorite_count', 'barrage_count', 'comment_count', 'play_count']

    # video_df = video_df[video_df.favorite_count.apply(lambda x: isinstance(x, int))]
    # video_df = video_df[video_df.barrage_count.apply(lambda x: isinstance(x, int))]
    # video_df = video_df[video_df.comment_count.apply(lambda x: isinstance(x, int))]
    # video_df = video_df[video_df.play_count.apply(lambda x: str(x).isnumeric())]
    video_df = video_df[['av', 'favorite_count', 'barrage_count', 'comment_count', 'play_count']].apply(pandas.to_numeric, errors='coerce')
    video_df = video_df.dropna()
    print(video_df.dtypes)


    features = video_df[['favorite_count', 'barrage_count', 'comment_count', 'play_count']].values

    features = features[features[:, 0] < 200]
    features = features[features[:, 1] < 15]
    features = features[features[:, 2] < 1000]
    features = features[features[:, 3] < 2000]

    features = features[::5, :]
    print(features.shape)



    # model = cluster.KMeans(n_clusters=4, max_iter=3000, random_state=42)
    # model = cluster.Birch(n_clusters=4)
    model = cluster.SpectralClustering(n_clusters=4, n_jobs=4)
    # model = cluster.AgglomerativeClustering(n_clusters=4)
    # model = cluster.DBSCAN(n_jobs=4)
    pred = model.fit_predict(features[:, [0, 2]])
    pred = numpy.expand_dims(pred, axis=0)
    print(pred.shape)

    result = numpy.hstack((features, pred.T))

    # result = result[result[:, 0] < 200]
    # result = result[result[:, 1] < 200]
    # result = result[result[:, 2] < 1000]
    # result = result[result[:, 3] < 2000]

    # ax = plt.subplot(111, projection='3d')
    # ax.scatter(result[:2000, 0], result[:2000, 1], result[:2000, 2], c=result[:2000, 4], cmap=plt.cm.Accent)
    plt.scatter(result[:2000, 0], result[:2000, 2], c=result[:2000, 4], cmap=plt.cm.Accent)

    plt.show()





if __name__ == '__main__':
    # main(sys.argv[1:])
    test(sys.argv[1:])