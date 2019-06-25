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
                type_code = UrlUtils.get_video_type(url)
                url_parts = url.split('?type=')
                url = UrlUtils.add_component_to_url(url_parts[0], re.search(r'(/[a-z_ ]*)/$', url_parts[1]).group())
                url = UrlUtils.add_video_type(url, type_code)
                item['url'] = url
            yield item

