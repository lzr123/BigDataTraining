# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class BilibiliSpyderPipeline(object):
    '''
        This is the pipeline which receive data from BilibiliTestSpider
    and store them to a CSV file.
    '''
    def process_item(self, item, spider):

        with open('./nav_btn_item.csv', 'a') as csv_rec:
            csv_rec.write('%s,%s,\n' % (item['title'], item['url']))
