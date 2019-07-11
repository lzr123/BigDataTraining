
HDFS_HOST_ADDR = 'localhost'
HDFS_HOST_PORT = '9000'

SPARK_HOST_ADDR = 'localhost'
SPARK_HOST_PORT = '7077'

SPARK_MASTER_ADDR = 'master'
SPARK_MASTER_PORT = '7077'

WORD_FILTER = [
    '', ' ', '  ', '   ', '。', '，', '？', '、', '·', '~',
    '“', '”', '《', '》', '{', '}', '【', '】', '+', '-', '——',
    '=', '_', '|', '/', '\\', '\"', '\'', '我', '是', '这是', '代言',
    '吗', '?', '哼', '哈', '啦', '吧', '~'
]

mysql_conn_param = {
    'user': 'root',
    'password': 'root',
    'driver': 'com.mysql.cj.jdbc.Driver'
}