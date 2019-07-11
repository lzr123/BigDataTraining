import json
from multiprocessing.dummy import Pool, Lock
from time import sleep

import requests

WORKER_COUNT = 5

mutex = Lock()

def get_data(url_idx):

    url = 'https://api.bilibili.com/x/web-interface/card?mid={}'.format(url_idx)
    sleep(1)
    try:
        json_data = requests.get(url).json()
    except:
        print('[x] ----- User {} failed'.format(url_idx))
    else:
        if json_data['code'] != 0:
            print('[x] ----- User {} not exist'.format(url_idx))
        else:
            user_info_data = json_data['data']
            # print(user_info_data['card'])

            user_entity = {}
            user_entity['mid'] = user_info_data['card']['mid']
            user_entity['name'] = user_info_data['card']['name']
            user_entity['sex'] = user_info_data['card']['sex']
            user_entity['sign'] = user_info_data['card']['sign']
            user_entity['rank'] = user_info_data['card']['rank']
            user_entity['level'] = user_info_data['card']['level_info']['current_level']
            user_entity['jointime'] = user_info_data['card']['regtime']
            user_entity['moral'] = 0
            user_entity['slience'] = 0
            user_entity['birthday'] = user_info_data['card']['birthday']
            user_entity['coins'] = 0
            user_entity['fans_badge'] = False
            user_entity['official'] = user_info_data['card']['Official']
            user_entity['vip'] = {}
            user_entity['vip']['type'] = user_info_data['card']['vip']['vipType']
            user_entity['vip']['status'] = user_info_data['card']['vip']['vipStatus']
            user_entity['vip']['theme_type'] = user_info_data['card']['vip']['theme_type']
            user_entity['is_followed'] = False
            user_entity['top_photo'] = user_info_data['card']['face']

            mutex.acquire()
            with open('user1.json', 'a', encoding='utf-8') as res:
                json.dump(user_entity, res, ensure_ascii=False)
                res.write('\n')
                print('[v] -- User {} success'.format(url_idx))
            mutex.release()

def spider(thread_pool, start_idx, end_idx):

    for i in range(start_idx, end_idx, WORKER_COUNT):
        idx = []
        for j in range(i, i + WORKER_COUNT):
            idx.append(j)
        pool.map(get_data, idx)

if __name__ == '__main__':

    pool = Pool(WORKER_COUNT)
    # get_data(69)
    spider(pool, 222090, 435000000)
    pool.close()
    pool.join()