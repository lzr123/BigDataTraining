import os
from multiprocessing import Lock
from multiprocessing.dummy import Pool

import requests, re, time, csv, time

import requests
import json

import global_var

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}

def __open_url(url):
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    html = response.text
    return html

def __csv_write(tablelist):
    tableheader = ['year','month','count']
    flag = os.path.exists(global_var.infoPath+'/fanju_count.csv')
    print(flag)
    # mutex.acquire()
    # if flag == False:
    with open(global_var.infoPath+'/fanju_count.csv', 'a', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        if flag == False:
            writer.writerow(tableheader)
        writer.writerow(tablelist)

def get_videoInfo(y,m,url):

        try:
            #首页获取信息
            startUrl = url
            print(url)

            requestPage = requests.get(startUrl,headers=headers)
            data = json.loads(requestPage.text)

            count = data['result']['page']['total']

            list=[]
            list.append(y)
            list.append(m)
            list.append(count)

            __csv_write(list)
        except Exception as e :
            print("error!")

