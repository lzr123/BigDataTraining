#!/usr/bin/env python
# encoding: utf-8
import json
import random

import pymysql

import global_var


def get_conn():
    db = pymysql.connect(host=global_var.DataBaseIP, user=global_var.user, password=global_var.password,db=global_var.DataBaseName)
    cur = db.cursor()
    return cur



# if __name__ == "__main__":
#     type_code = 1
#     cur = get_conn()
#     sql = "select tag,count from TAG_STATISTIC where type_code={} order by count DESC".format(type_code)
#     cur.execute(sql)
#     ret = cur.fetchall()
#     list = []
#     for i in ret:
#         print(i)
#  {"qipao": [  [50000, 73, 2624581, "LexBurner"], [47500, 74, 927894, "雪莱咚"],
#              [45000, 82, 917148, "花落千年之恋ss"], [42500, 84, 897146, "凉风Kaze"],
#              [40000, 56, 814512, "小烧基"], [37500, 58, 812720, "泛式"]
#
#              ]
#
#              }   ('人生一串', 15, Decimal('20262677.15'))


##
if __name__ == "__main__":
    cur = get_conn()
    sql = "select * from VIDEO_AREA_COUNT where type_code = 16 order by count desc limit 10"
    cur.execute(sql)
    ret = cur.fetchall()
    country_list=[]
    data_list = []
    for i in ret:
        country_list.append(i[0])
        data_list.append(i[2])
    ret_dict = {}
    ret_dict["country"] = country_list
    ret_dict["data"] = data_list
    print(ret_dict)






















