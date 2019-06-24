import sys
import requests, re, time, csv
from bs4 import BeautifulSoup as BS
from selenium import webdriver
# 打开网页
import requests
import json
import pprint
if __name__ == '__main__':
    r = requests.get('https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=45382106&sort=2&_=1561366127586')
    data = json.loads(r.text)
    for i in data['data']['replies']:
        pprint.pprint(i)
