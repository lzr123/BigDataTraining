

class RedisUtils():

    @staticmethod
    def insert_url_to_redis(pipeline, item, key):
        pipeline.redis_obj.rpush('bilibili:%s' % key, item['url'])

    @staticmethod
    def get_url_from_redis(redis_obj, key):
        redis_obj
