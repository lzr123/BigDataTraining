# -*- coding: utf-8 -*-
import re

import scrapy
from scrapy_redis.spiders import RedisCrawlSpider

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
                # item['url'] = clearfix.xpath(
                #     r'./div[@class="video-floor-m l-con"]' +
                #     r'/div[@class="zone-title"]' +
                #     r'/div[@class="headline clearfix"]' +
                #     r'/a[@href]'
                # ).attrib['href']
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
                type_code = re.search('\?type=([0-9]*)', url).group()
                print('Type code: ', type_code)
                url = re.sub(r'\?type=[0-9]*/v/[a-z]*/', '', url, count=0)
                # print('Item URL: ', url)
                item['url'] = url + type_code
                print('Final URL: ', item['url'])
                # print('Processed URL: ', item['url'])


            yield item

