import re


class UrlUtils():

    @staticmethod
    def move_video_type_to_tile(url):
        type_code = re.search('\?type=([0-9]*)', url).group()
        url = re.sub(r'\?type=[0-9]*/v/[a-z]*/', '', url, count=0)
        url = url + type_code
        return url, type_code

    @staticmethod
    def remove_video_type(url):
        url = re.sub(r'\?type=[0-9]*/v/[a-z]*/', '', url, count=0)
        return url

    @staticmethod
    def get_video_type(url):
        type_code = re.search('\?type=([0-9]*)', url).group()
        return type_code