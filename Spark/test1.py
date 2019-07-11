from pyspark.shell import sc

from Spark.settings import HDFS_HOST_ADDR, HDFS_HOST_PORT

if __name__ == '__main__':
    text_file = sc.textFile('hdfs://{}:{}{}'.format(
        HDFS_HOST_ADDR,
        HDFS_HOST_PORT,
        '/test_data/sparktest.txt'
    ))

    filter_RDD = text_file.filter(lambda line: 'spark' in line)
    filter_RDD.cache()
    counter = filter_RDD.count()
    print('\n\n\n\n\ncounter: ', counter)
