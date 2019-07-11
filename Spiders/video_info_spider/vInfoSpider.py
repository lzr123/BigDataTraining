import os
from multiprocessing import Lock
from multiprocessing.dummy import Pool

import requests, re, time, csv, time
# 打开网页
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

def __csv_write(tablelist, type):
    tableheader = ['av号', '标题','Up主','收藏数','是否收费',
                   '播放量','投稿时间','发布时间','弹幕数','评论数','标签']
    flag = os.path.exists(global_var.infoPath+'/video_info_type{}.csv'.format(type))
    print(flag)
    # mutex.acquire()
    # if flag == False:
    with open(global_var.infoPath+'/video_info_type{}.csv'.format(type), 'a', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        if flag == False:
            writer.writerow(tableheader)
        for row in tablelist:
            writer.writerow(row)




def get_videoInfo(url,type):

        try:
            startUrl = url.format(1)

            requestPage = requests.get(startUrl,headers=headers)
            data = json.loads(requestPage.text)
            print("data:",data)

            numPages = (data['numPages'])
            print("total_pages:",numPages)

            all_list = []

            for j in range(numPages):
                r = requests.get(url.format(j), headers=headers)
                data = json.loads(r.text)

                for i in data['result']:
                    comment_list = []
                    comment_list.append(i['id'])
                    comment_list.append(i['title'])
                    comment_list.append(i['author'])
                    comment_list.append(i['favorites'])
                    comment_list.append(i['is_pay'])
                    comment_list.append(i['play'])
                    comment_list.append(i['senddate'])
                    comment_list.append(i['pubdate'])
                    comment_list.append(i['video_review'])
                    comment_list.append(i['review'])
                    comment_list.append(i['tag'])

                    all_list.append(comment_list)
                    print(comment_list)
            __csv_write(all_list,type)
        except Exception as e :
            print("{} 不是一个数字".format(i['id']))
