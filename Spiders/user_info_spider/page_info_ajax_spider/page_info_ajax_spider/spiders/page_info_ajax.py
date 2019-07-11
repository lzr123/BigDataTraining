# -*- coding: utf-8 -*-
import json
import re

import scrapy
from scrapy import Request


class PageInfoAjaxSpider(scrapy.Spider):
    name = 'page_info_ajax'
    allowed_domains = ['bilibili.com']
    # start_urls = ['http://bilibili.com/']

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    }

    def start_requests(self):
        url = 'https://s.search.bilibili.com/cate/search?callback=jqueryCallback_bili_8995260575257822&main_ver=v3&search_type=video&view_type=hot_rank&order=click&copy_right=-1&cate_id=130&page=1&pagesize=20&jsonp=jsonp&time_from=20190426&time_to=20190625&_=1561516363499'
        yield Request(url, headers=self.headers)

    def parse(self, response):
        req_body = response.body
        json_data = req_body.decode('utf-8')
        pure_json_data = re.sub(r'jqueryCallback_bili_([0-9])*', '', json_data, count=1)
        pure_json_data = json.loads(pure_json_data[1:-1])
        print(pure_json_data['numPages'])
