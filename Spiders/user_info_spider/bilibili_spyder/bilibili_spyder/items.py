# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class BilibiliNavBtnItem(scrapy.Item):
    '''
        This class stores urls hold by buttons
    in main page of www.bilibili.com
    :param title: name of navigate button
    :param url: store url linking to every video class
    '''

    title = scrapy.Field()
    url = scrapy.Field()

