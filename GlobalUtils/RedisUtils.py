

class RedisUtils():

    @staticmethod
    def insert_url_to_redis(pipeline, item, attr, key):
        pipeline.redis_obj.rpush('bilibili:%s' % key, item[attr])
