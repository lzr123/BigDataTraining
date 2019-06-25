# -*- coding: utf-8 -*-
import scrapy
from scrapy_redis.spiders import RedisCrawlSpider

from GlobalParmas import VIDEO_TYPE_CODE
from bilibili_spyder.items import BilibiliNavBtnItem


class BilibiliTestSpider(scrapy.Spider):
    '''
        Spider for buttons in navigate menu on www.bilibili.com.
    This class retrives titles of buttons and send them to BilibiliSpyderPipeline
    '''

    name = 'bilibili_test'
    allowed_domains = ['bilibili.com']
    start_urls = ['http://www.bilibili.com/']

    def parse(self, response):

        class_nav_menu = response.xpath(r'//ul[@class="nav-menu"]')
        btn_title_item = class_nav_menu[0].xpath(r'./li')

        for btn_title in btn_title_item:
            item = BilibiliNavBtnItem()
            item['title'] = btn_title.xpath(r'./a/div[@class!="num-wrap"]/text()').extract_first()
            if item['title'] is not None and item['title'] != '首页':
                item['url'] = 'https://' + btn_title.xpath(r'./a[@href]').attrib['href']\
                                    .lstrip('//') + '?type=' + VIDEO_TYPE_CODE[item['title']]
                yield item
