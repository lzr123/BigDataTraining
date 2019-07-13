#!/usr/bin/env python
# encoding: utf-8
import sys
import time
from multiprocessing.dummy import Pool
import redis
import getDanMu
import getComment



def work(url):
    getDanMu.get_dan_mu(url)
    # getComment.get_comment(url)

if __name__ == "__main__":

    pool = redis.ConnectionPool(host='127.0.0.1', password='', decode_responses=True)
    redis_obj = redis.Redis(connection_pool=pool)
    proc_pool = Pool(5)
    items = []
    check_time = time.time()
    while 1:
        item = redis_obj.lpop('bilibili:video_url')
        if item is None:
            break
        items.append(item)
        if len(items) >= 5 or redis_obj.llen('bilibili:video_url') <= 0:
            proc_pool.map(work, items)
            items = []
    proc_pool.close()
    proc_pool.join()