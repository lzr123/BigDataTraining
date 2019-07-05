import json

from pyspark import SparkContext, SparkConf
from pyspark.sql import SparkSession
from pyspark.sql.types import StructField, StringType, StructType, IntegerType, LongType, Row

from Spark.settings import HDFS_HOST_ADDR, HDFS_HOST_PORT, SPARK_HOST_ADDR, SPARK_HOST_PORT, mysql_conn_param

USER_INFO_FILE_PATH = 'hdfs://{}:{}{}'.format(
    HDFS_HOST_ADDR,
    HDFS_HOST_PORT,
    '/big_data_src_data/user.json'
)

TARGET_FILE_PATH = 'hdfs://{}:{}{}'.format(
    HDFS_HOST_ADDR,
    HDFS_HOST_PORT,
    '/big_data_res_data/user_sta.json'
)

result_str = ''

result_dict = {
    'sex': {
               'female_count': 0,
                 'male_count': 0,
    'gender_classified_count': 0,
    },
    'VIP': {
                  'VIP_count': 0,
              'non_VIP_count': 0,
    },
    'account_type': {
          'normal_user_count': 0,
            'UP_author_count': 0,
        'official_user_count': 0
    },
    'level_count': [0 for i in range(10)]
}

def logger(text):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(text)
            return func(*args, **kwargs)
        return wrapper
    return decorator

def create_user_entity(item):
    entity = {}
    entity['name'] = item['name']
    entity['sex'] = item['sex']
    entity['rank'] = item['rank']
    entity['level'] = item['level']
    entity['official_role'] = item['official']['role']
    entity['vip_type'] = item['vip']['type']

    return entity


@logger('\n\n\n\n\n')
def main():
    spark = SparkSession.builder \
        .appName('USER_STATISTIC') \
        .master('spark://{}:{}'.format(SPARK_HOST_ADDR, SPARK_HOST_PORT)) \
        .getOrCreate()

    src_file = spark.sparkContext.textFile(USER_INFO_FILE_PATH)
    json_data = src_file.map(lambda s: json.loads(s))

    entity_df = json_data.map(
        lambda item: Row(**create_user_entity(item))
    ).toDF()
    entity_df.createOrReplaceTempView('USER')

    schema_string = [
        'name', 'sex', 'rank', 'level', 'official_role', 'vip_type'
    ]

    result_schema = entity_df.groupBy(['sex', 'vip_type', 'level', 'official_role']).count()
    result_schema.show(200)

    result_schema.write.jdbc('jdbc:mysql://192.168.174.133:3306/big_data',
                             'USER_STATISTIC', 'append', mysql_conn_param)

if __name__ == '__main__':
    main()

