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
        url = re.sub(r'\?type=[0-9]*/v/[a-z]*/', '', url, count=0)
        return url

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

        if re.search(r'(/$)', url) is not None and re.search(r'^/', component) is not None:
            return url + component[1:]
        elif re.search(r'(/$)', url) is None and re.search(r'^/', component) is None:
            return url + '/' + component
        else:
            return url + component

    @staticmethod
    def get_last_url_component(url):
        return re.search(r'(/[a-z_ ]*)/$', url).group()

if __name__ == '__main__':

    url = 'https://www.bilibili.com/v/kichiku/mad/'
    url = UrlUtils.add_component_to_url(url, '/comm/')
    print(url)