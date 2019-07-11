# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import redis

from RedisUtils import RedisUtils
from link_more_spyder.items import LinkMoreSpyderItem


class LinkMoreSpyderPipeline(object):
    def __init__(self):
        pool = redis.ConnectionPool(host='localhost', password='')
        self.redis_obj = redis.Redis(connection_pool=pool)

    def process_item(self, item, spider):
        # pass
        # print(item['url'])
        # --- TODO ---
        RedisUtils.insert_url_to_redis(self, item, 'link_more')
