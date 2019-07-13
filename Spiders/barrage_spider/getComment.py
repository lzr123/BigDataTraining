import os
from multiprocessing import Lock
from multiprocessing.dummy import Pool

import requests, re, time, csv, time
import UrlUtils
# 打开网页
import requests
import json
import redis
import global_var

mutex = Lock()

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'}

def __open_url(url):
    headers = {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'}
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    html = response.text
    return html

def __csv_write(tablelist, type):
    tableheader = ['时间', '点赞', '评论者ID', '评论者昵称', '评论者性别' ,'评论者个性签名', '评论内容']
    flag = os.path.exists(global_var.comment_folder_path+'/comment_type{}.csv'.format(type))
    mutex.acquire()
    with open(global_var.comment_folder_path+'/comment_type{}.csv'.format(type), 'a', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        if flag == False:
            writer.writerow(tableheader)
        for row in tablelist:
            writer.writerow(row)
    mutex.release()


def get_comment(url):
    # http://www.bilibili.com/video/av5038338/type=1
    # print(url)
    url_tuple = UrlUtils.UrlUtils.remove_video_type(url)
    url = url_tuple[0]
    type = url_tuple[1]

    url_av_number_list = re.findall(r"\d", url)
    # type = url_av_number_list[-1]
    str_av_number = "".join(url_av_number_list)
    int_av_number = int(str_av_number)

    try:
        time.sleep(1)
        r = requests.get('https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid={}&sort=2'.format(int_av_number), headers=headers)
        print(r)
        data = json.loads(r.text)
        total_pages = (data['data']['page']['count'] - 1) // 20 + 1
        all_list = []
        for j in range(0, total_pages):
            r = requests.get(
                'https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn={}&type=1&oid={}&sort=2'.format(j + 1,int_av_number),headers=headers)
            for i in data['data']['replies']:
                comment_list = []
                comment_list.append(time.ctime(i['ctime']))
                member = i['member']
                comment_list.append(i['like'])
                comment_list.append(member['mid'])
                comment_list.append(member['uname'])
                comment_list.append(member['sex'])
                comment_list.append(member['sign'])
                comment_list.append(i['content']['message'])
                all_list.append(comment_list)
                # print(comment_list)
        __csv_write(all_list,type)
    except Exception as e :
        print("{} 视频出问题了,可能视频没了，可能你被禁了".format(str_av_number))



# if __name__ == '__main__':
#     proc_pool = Pool(10)
#     pool = redis.ConnectionPool(host='192.168.43.100', password='',decode_responses=True)
#     redis_obj = redis.Redis(connection_pool=pool )
#     items = []
#     while 1:
#         item = redis_obj.lpop('bilibili:wh_test')
#         if item is None:
#             break
#         items.append(item)
#         if len(items) >= 3 or redis_obj.llen('bilibili:wh_test') <= 0:
#             proc_pool.map(mul_process, items)
#             items = []
#     proc_pool.close()
#     proc_pool.join()




        #get_comment(redis_obj.lpop('bilibili:link_more'))
    # r = requests.get('https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=45382106&sort=2')
    # data = json.loads(r.text)
    # total_pages = (data['data']['page']['count'] - 1)// 20 +1
    # all_list=[]
    # for j in range(0,total_pages):
    #     r = requests.get(
    #         'https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn={}&type=1&oid=45382106&sort=2'.format(j+1))
    #     for i in data['data']['replies']:
    #         comment_list=[]
    #         comment_list.append(time.ctime(i['ctime']))
    #         member = i['member']
    #         comment_list.append(i['like'])
    #         comment_list.append(member['mid'])
    #         comment_list.append(member['uname'])
    #         comment_list.append(member['sex'])
    #         comment_list.append(member['sign'])
    #         comment_list.append(i['content']['message'])
    #         all_list.append(comment_list)
    #         print(comment_list)
    # __csv_write(all_list)

