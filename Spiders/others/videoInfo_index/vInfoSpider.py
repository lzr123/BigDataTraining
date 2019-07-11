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

def __csv_write(tablelist, type):
    tableheader = ['标题', 'ss号','类型','集数','是否完结',
                  '追剧人数','播放次数','评分','media_id','发布时间','会员','会员类型','链接']
    flag = os.path.exists(global_var.infoPath+'/index_type{}.csv'.format(type))
    print(flag)
    # mutex.acquire()
    # if flag == False:
    with open(global_var.infoPath+'/index_type{}.csv'.format(type), 'a', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        if flag == False:
            writer.writerow(tableheader)
        for row in tablelist:
            writer.writerow(row)

def get_videoInfo(url,type,s_id,p_id,year):

        try:
            #首页获取信息
            startUrl = url.format(s_id,p_id,year,1,type)

            requestPage = requests.get(startUrl,headers=headers)
            print(startUrl)
            data = json.loads(requestPage.text)

            total = data['result']['page']['total']
            page_size = data['result']['page']['size']
            numPages = total // page_size + 1
            print("total:",total)

            all_list = []

            #翻页
            for j in range(1, numPages+1):
            # for j in range(1, 3):
                r = requests.get(url.format(s_id,p_id,year,j,type), headers=headers)
                print(url.format(s_id,p_id,year,j,type))
                data = json.loads(r.text)

                for i in data['result']['data']:
                    index_list = []
                    index_list.append(i['title'])
                    # print(index_list)
                    index_list.append(i['season_id'])
                    index_list.append(i['order']['type'])
                    # print(index_list)
                    try:
                        index_list.append(i['index_show']) #集数
                    except Exception as e:
                        index_list.append('')
                    # print(index_list)
                    index_list.append(i['is_finish']) #是否完结
                    # print(index_list)

                    # print(index_list)

                    # print(index_list)
                    index_list.append(i['order']['follow'])#追剧人数
                    # print(index_list)
                    index_list.append(i['order']['play'])#播放次数
                    # print(index_list)
                    try:
                        index_list.append(i['order']['score'])#评分
                    except Exception as e:
                        index_list.append('')
                    index_list.append(i['media_id'])  # media-id
                    index_list.append(i['order']['pub_date'])
                    try:
                        index_list.append(i['badge']) #会员
                        index_list.append(i['badge_type'])
                    except Exception as e:
                        index_list.append('')
                        index_list.append('')
                    index_list.append(i['link'])  # 链接
                    print(index_list)
                    all_list.append(index_list)
                print(len(all_list))
            __csv_write(all_list,type)
        except Exception as e :
            print("error!")

