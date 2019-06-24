# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import redis

from bilibili_spyder.items import BilibiliNavBtnItem


class RedisUtils():

    @staticmethod
    def insert_to_redis(pipeline, item, key):
        pipeline.redis_obj.rpush('bilibili:%s' % key, '%s:%s' % (item['title'], item['url']))

class BilibiliSpyderPipeline(object):
    '''
        This is the pipeline which receive data from BilibiliTestSpider
    and store them to Redis database.
    '''

    def __init__(self):

        pool = redis.ConnectionPool(host='127.0.0.1', password='')
        self.redis_obj = redis.Redis(connection_pool=pool)

    def process_item(self, item, spider):

        with open('./nav_btn_item.csv', 'a') as csv_rec:
            csv_rec.write('{},{}\n'.format(item['title'], item['url']).format('utf-8'))
