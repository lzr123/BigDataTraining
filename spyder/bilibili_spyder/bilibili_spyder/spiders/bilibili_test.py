# -*- coding: utf-8 -*-
import scrapy

from bilibili_spyder.items import BilibiliNavBtnItem


class BilibiliTestSpider(scrapy.Spider):
    name = 'bilibili_test'
    allowed_domains = ['bilibili.com']
    start_urls = ['http://www.bilibili.com/']

    def parse(self, response):

        class_nav_menu = response.xpath(r'//ul[@class="nav-menu"]')
        btn_title_item = class_nav_menu[0].xpath('./li')

        for btn_title in btn_title_item:
            item = BilibiliNavBtnItem()
            item['title'] = btn_title.xpath(r'./a/div[@class!="num-wrap"]/text()').extract_first()
            item['url'] = btn_title.xpath(r'./a[@href]').attrib['href'].lstrip('//')
            if item['title'] is not None:
                yield item
