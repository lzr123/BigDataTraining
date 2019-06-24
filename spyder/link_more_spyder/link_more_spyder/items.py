# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class LinkMoreSpyderItem(scrapy.Item):
    '''
        This class stores url pointing to video list
    :param label: name of class label
    :param url: link point to video list
    '''
    # define the fields for your item here like:
    # name = scrapy.Field()

    label = scrapy.Field()
    url = scrapy.Field()
