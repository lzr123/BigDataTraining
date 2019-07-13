#!/usr/bin/env python
# encoding: utf-8


import re


class UrlUtils():

    @staticmethod
    def move_video_type_to_tail(url):
        type_code = re.search('\?type=([0-9]*)', url).group()
        url = re.sub(r'/\?type=[0-9]*', '', url, count=0)
        if re.search(r'(/$)', url) is not None:
            url = url + type_code
        else:
            url = url + '/' + type_code
        return url, type_code[6:]

    @staticmethod
    def remove_video_type(url):
        type_code = re.search('\?type=([0-9]*)', url).group()[6:]
        url = re.sub(r'/\?type=[0-9]*', '', url, count=0)
        return url, type_code

    @staticmethod
    def get_video_type(url):
        type_code = re.search('\?type=([0-9]*)', url).group()[6:]
        return type_code

    @staticmethod
    def add_video_type(url, type_code):
        if re.search(r'(/$)', url) is not None:
            url = url + '?type=' + type_code
        else:
            url = url + '/?type=' + type_code
        return url

    @staticmethod
    def add_component_to_url(url, component):

        tmp1 = url[-1]
        tmp2 = component[0]

        if tmp1 == '/' and tmp2 == '/':
            return url + component[1:]
        elif tmp1 != '/' and tmp2 != '/':
            return url + '/' + component
        else:
            return url + component

    @staticmethod
    def get_last_url_component(url):
        return re.search(r'(/[a-z_ ]*)/$', url).group()

if __name__ == '__main__':

    url = 'https://www.bilibili.com/v/kichiku/mad/?type=14'
    url = UrlUtils.remove_video_type(url)
    test_url = "http://www.bilibili.com/video/av5038338/?type=1"
    test_url = UrlUtils.remove_video_type(test_url)

    print(test_url)