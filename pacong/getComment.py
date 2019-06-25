import sys
import requests, re, time, csv, time
from bs4 import BeautifulSoup as BS
from selenium import webdriver
# 打开网页
import requests
import json
import pprint

def __csv_write(tablelist):
    tableheader = ['时间', '点赞', '评论者ID', '评论者昵称', '评论者性别' ,'评论者个性签名', '评论内容']
    with open('comment.csv', 'w', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        writer.writerow(tableheader)
        for row in tablelist:
            writer.writerow(row)


if __name__ == '__main__':
    r = requests.get('https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=45382106&sort=2&_=1561366127586')
    data = json.loads(r.text)
    total_pages = (data['data']['page']['count'] - 1)// 20 +1
    all_list=[]
    for j in range(0,total_pages):
        r = requests.get(
            'https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn={}&type=1&oid=45382106&sort=2&_=1561366127586'.format(j+1))
        for i in data['data']['replies']:
            comment_list=[]
            comment_list.append(time.ctime(i['ctime']))
            member = i['member']
            comment_list.append(i['like'])
            comment_list.append(member['mid'])
            comment_list.append(member['uname'])
            comment_list.append(member['sex'])
            comment_list.append(member['sign'])
            comment_list.append(i['content']['message'])
            all_list.append(comment_list)
            print(comment_list)
    __csv_write(all_list)

