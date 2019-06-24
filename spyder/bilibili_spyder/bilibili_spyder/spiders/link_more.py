# -*- coding: utf-8 -*-
import scrapy
from scrapy_redis.spiders import RedisCrawlSpider

from bilibili_spyder.items import BilibiliLinkMoreItem


class LinkMoreSpider(RedisCrawlSpider):
    name = 'class_link_more'
    allowed_domains = ['bilibili.com']
    # start_urls = ['http://bilibili.com/']
    redis_key = 'bilibili:class_urls'

    def parse(self, response):

        clearfix_local = response.xpath(
            '//@div[@class="clearfix]'
        )

        for local in clearfix_local:
            item = BilibiliLinkMoreItem()

            # --- TODO ---
            # set item attributes
            item['label'] = None
            item['url'] = None

