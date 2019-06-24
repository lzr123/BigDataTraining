import redis
import pandas as pd

if __name__ == '__main__':
    pool = redis.ConnectionPool(host='127.0.0.1', password='')
    r = redis.Redis(connection_pool=pool)

    data = pd.read_csv('nav_btn_item.csv', header=None)
    data.columns = ['title', 'url']
    print(data)

    for i in range(len(data)):
        r.rpush('bilibili:class_urls', '%s:%s' % (data.iloc[i, 0], data.iloc[i, 1]))