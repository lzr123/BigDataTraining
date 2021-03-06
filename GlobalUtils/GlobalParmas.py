import datetime

VIDEO_TYPE_CODE = {
    '动画': '1',
    '番剧': '2',
    '国创': '3',
    '音乐': '4',
    '舞蹈': '5',
    '游戏': '6',
    '科技': '7',
    '数码': '8',
    '生活': '9',
    '鬼畜': '10',
    '时尚': '11',
    '广告': '12',
    '娱乐': '13',
    '影视': '14',
  '放映厅': '15'
}

# Controls how much video will be crawled
TIME_RANGE = datetime.timedelta(days=60)

# Chrome browser driver path
CHROME_DRIVER_PATH = r'D:\Software\chromedriver.exe'