
try:
    from bilibili_spyder.items import BilibiliNavBtnItem
    from link_more_spyder.items import LinkMoreSpyderItem
except:
    pass


class RedisUtils():

    @staticmethod
    def insert_to_redis(pipeline, item, key):
        if isinstance(item, BilibiliNavBtnItem):
            pipeline.redis_obj.rpush('bilibili:%s' % key, item['url'])
        elif isinstance(item, LinkMoreSpyderItem):
            pipeline.redis_obj.rpush('bilibili:%s' % key, item['url'])