# -*- coding: utf-8 -*-
import re

import scrapy
from scrapy_redis.spiders import RedisCrawlSpider

from UrlUtils import UrlUtils
from link_more_spyder.items import LinkMoreSpyderItem


class BilibiliLinkMoreSpider(RedisCrawlSpider):
    name = 'bilibili_link_more_spider'
    allowed_domains = ['bilibili.com']
    # start_urls = ['http://bilibili.com/']

    redis_key = 'bilibili:class_urls'

    def parse(self, response):

        clearfix_list = response.xpath(
            r'//div[@class="clearfix"]'
        )

        for i in range(1, len(clearfix_list)):
            clearfix = clearfix_list[i]
            item = LinkMoreSpyderItem()
            url = ''
            try:
                url = response.url + clearfix.xpath(
                    r'./div' +
                    r'/div' +
                    r'/div' +
                    r'/a[@href]'
                ).attrib['href']

            except:
                print('\n\n\n\n\n\n')
                print('EXCEPTION INFORMATION: ')
                print('\t', clearfix)
                print('\t', response)
            else:
                item['url'] = UrlUtils.move_video_type_to_tile(url)[0]
            yield item
