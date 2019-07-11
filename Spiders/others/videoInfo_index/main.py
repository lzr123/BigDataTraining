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

year = {'all' :-1,
        '2019':'2009',
        '2018' : '2018',
        '2017' :'2017',
        '2016' :'2016',
        '2015' : '2015',
        '2014-2010' :'2014-2010',
        '2009-2005' :'2009-2005',
        '2004-2000' :'2004-2000',
        '90s' :'90年代',
        '80s' :'80年代' ,
        'before': '更早'
}

type = 15
#纪录片

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}


# if __name__ == '__main__':
#     for s_id in style_id.values():
#         for p_id in producer_id.values():
#             for y in year.values():
#                 url = 'https://bangumi.bilibili.com/media/web_api/search/result?' \
#                       'style_id={0}&producer_id={1}&year={2}&order=2&st=3&sort=0&page={3}' \
#                       '&season_type=3&pagesize=20'
#
#                 s_id = -1
#                 p_id = -1
#                 year = -1
#                 get_videoInfo(url,type,s_id,p_id,str(year))

if __name__ == '__main__':
    for i in range(1,10):
        url = 'https://bangumi.bilibili.com/media/web_api/search/result?' \
              'style_id={0}&producer_id={1}&year={2}&order=2&st=3&sort=0&page={3}' \
              '&season_type={4}&pagesize=20'
        s_id = -1
        p_id = -1
        year = -1
        s_type = i
        get_videoInfo(url,s_type, s_id, p_id, str(year))
