


# getDanMu直接传入合法的URL解可以了
import warnings
import UrlUtils
import requests, re, time, csv
from bs4 import BeautifulSoup as BS
from selenium import webdriver
from multiprocessing import Lock
import os
import global_var
# 打开网页

warnings.filterwarnings('ignore')

mutex = Lock()

def __open_url(url):
    headers = {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'}
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    html = response.text
    return html

# 获取弹幕url中的数字id号
# 当requests行不通时，采用selenium的方法。
def __sele_get(url):
    SERVICE_ARGS = ['--load-images=false', '--disk-cache=true']
    driver = webdriver.PhantomJS(service_args=SERVICE_ARGS)
    driver.get(url)
    # time.sleep(1)
    danmu_id = re.findall(r'cid=(\d+)&', driver.page_source)[0]
    return danmu_id


def __get_danmu_id(html, url):
    try:
        soup = BS(html, 'lxml')
        # 视频名
        title = soup.select('title[data-vue-meta="true"]')[0].get_text()
        # 投稿人
        author = soup.select('meta[name="author"]')[0]['content']
        # 弹幕的网站代码
        try:

            danmu_id = re.findall(r'cid=(\d+)&', html)[0]
            # danmu_id = re.findall(r'/(\d+)-1-64', html)[0]
            # print(danmu_id)
        except:
            danmu_id = __sele_get(url)
        # print(title, author)
        return danmu_id
    except:
        print('视频不见了哟,{}'.format(url))
        return False

# 秒转换成时间
def __sec2str(seconds):
    seconds = eval(seconds)
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    time = "%02d:%02d:%02d" % (h, m, s)
    return time


#csv保存函数
def __csv_write(tablelist, type):
    # ['出现时间', '弹幕模式', '字号', '颜色', '发送时间' ,'弹幕池', '发送者id', 'rowID', '弹幕内容']
    tableheader = ['出现时间', '弹幕模式', '字号', '颜色', '发送时间' ,'弹幕池', '发送者id', 'rowID', '弹幕内容']
    flag = os.path.exists(global_var.danmu_folder_path+'/barrage_type{}.csv'.format(type))
    mutex.acquire()
    with open(global_var.danmu_folder_path+'/barrage_type{}.csv'.format(type), 'a', newline='', errors='ignore') as f:
        writer = csv.writer(f)
        if flag == False:
            writer.writerow(tableheader)
        for row in tablelist:
            writer.writerow(row)
    mutex.release()

def get_dan_mu(video_url):
    try:
        # video_url = 'http://www.bilibili.com/video/av5038338/?type=1'
        url_tuple = UrlUtils.UrlUtils.remove_video_type(video_url)
        type = url_tuple[1]
        video_html = __open_url(video_url)
        danmu_id = __get_danmu_id(video_html, video_url)
        all_list = []
        if danmu_id:
            danmu_url = 'http://comment.bilibili.com/{}.xml'.format(danmu_id)
            danmu_html = __open_url(url=danmu_url)
            soup = BS(danmu_html, 'lxml')
            all_d = soup.select('d')
            for d in all_d:
                # 把d标签中P的各个属性分离开
                danmu_list = d['p'].split(',')
                # d.get_text()是弹幕内容
                danmu_list.append(d.get_text())
                danmu_list[0] = __sec2str(danmu_list[0])
                danmu_list[4] = time.ctime(eval(danmu_list[4]))
                all_list.append(danmu_list)
                # print(danmu_list)
            all_list.sort()
            __csv_write(all_list,type)
    except ValueError as e:
        print("InvalidParameters")


#
# if __name__ == "__main__":
#     proc_pool = Pool(10)
#     pool = redis.ConnectionPool(host='192.168.43.100', password='', decode_responses=True)
#     redis_obj = redis.Redis(connection_pool=pool)
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
