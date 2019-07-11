#!/usr/bin/env python
# encoding: utf-8
from multiprocessing.dummy import Pool
import redis

from vInfoSpider import get_videoInfo


dict = {
    1: [24, 25, 47, 86, 27],
    2: [33, 32, 51, 152],
    3: [153, 168, 169, 195, 170],
    4: [28, 31, 30, 194, 59, 193, 29, 130],
    5: [20, 154, 156],
    6: [17, 171, 172, 65, 173, 121, 136, 19],
    7: [124, 122, 39, 96, 98, 176],
    8: [95, 189, 190, 191],
    9: [138, 21, 76, 75, 161, 162, 163, 174],
    10: [22, 26, 126, 127],
    11: [157, 158, 164, 159, 192],
    12: [166],
    13: [71, 137, 131],
    14: [182, 183, 85, 184],
    15: [37, 178, 179, 180],
    16: [147, 145, 146, 83],
    17: [185, 187]

}


if __name__ == '__main__':
    for key,val in dict.items():
        type = key
        for i in val:
            url = 'https://s.search.bilibili.com/cate/search?main_ver=v3&search_type=video&view_type=hot_rank&' \
                  'order=click&copy_right=-1&cate_id=' + str(i) +'&page={}&pagesize=20&jsonp=jsonp&time_from=20190525&time_to=20190625'
            get_videoInfo(url,type)
