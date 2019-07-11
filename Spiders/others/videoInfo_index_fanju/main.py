#!/usr/bin/env python
# encoding: utf-8
from multiprocessing.dummy import Pool
import redis
import requests

from vInfoSpider import get_videoInfo


style_id = {'all': -1, 'history': 25 , 'food': 39, 'culture': 19, 'technology': 27,
        'explore': 29, 'universe': 1201, 'pet': 1202, 'society': 1203, 'animal': 989 ,
        'nature': 34, 'medical': 1204, 'military': 988, 'disaster': 1205,
        'crime': 1205, 'mystery': 1205, 'journey': 31, 'sport': 1205
}

producer_id  = {'all': -1, 'cctv': 4, 'BBC': 1, 'discovery': 7,
                'NHK':  2, 'history': 6, 'tv': 8, 'homemade': 9,
                'ITV': 5, 'SKY': 3, 'ZDF': 10 ,
                'Cooperation': 11, 'domestic': 12,'foreign': 13
}

# year = {'all' :-1,
#         '2019':'2009',
#         '2018' : '2018',
#         '2017' :'2017',
#         '2016' :'2016',
#         '2015' : '2015',
#         '2014-2010' :'2014-2010',
#         '2009-2005' :'2009-2005',
#         '2004-2000' :'2004-2000',
#         '90s' :'90年代',
#         '80s' :'80年代' ,
#         'before': '更早'
# }

year=[
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014-2010',
        '2009-2005',
        '2004-2000',
        '90年代',
        '80年代' ,
        '更早']

month = ['1','4','7','10']

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}



if __name__ == '__main__':
    for y in year:
        for m in month:
            url = 'https://bangumi.bilibili.com/media/web_api/search/result?' \
              'season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&' \
              'season_month={}&pub_date={}' \
              '&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=20'.format(m,y)
            get_videoInfo(y,m,url)

