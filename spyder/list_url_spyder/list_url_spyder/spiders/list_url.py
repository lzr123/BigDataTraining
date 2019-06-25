# -*- coding: utf-8 -*-
import scrapy
from scrapy_redis.spiders import RedisCrawlSpider
from selenium import webdriver

from GlobalParmas import CHROME_DRIVER_PATH


class ListUrlSpider(RedisCrawlSpider):
    name = 'list_url'
    allowed_domains = ['bilibili.com']
    # start_urls = ['http://bilibili.com/']
    redis_key = 'bilibili:link_more'

    def __init__(self):
        self.browser_driver = webdriver.Chrome(executable_path=CHROME_DRIVER_PATH)


    def parse(self, response):
        # --- TODO ---

        test_list = response.xpath(
            r'//div[@class="l-con"]'
            r'/div[@id="videolist_box"]'
            r'/div[@class="vd-list-cnt"]'
            r'/div[@class="pager pagination"]'
            r'/ul/li[@class="page-item last"]/button/text()'
        ).extract_first()

        print(test_list)

    def close(self, spider):
        self.browser_driver.quit()




