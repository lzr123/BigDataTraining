import datetime
import json
import re

import numpy

import pandas
import sys

from progressbar import ProgressBar, progressbar, Bar, Timer, ETA

from Spark.Utils.FuctionUtils import FuncUtils

video_type_code = 0

def main(argv):
    for video_type_code in range(1, 10):

        filepath = r'D:\xixi\barrage_type{}.csv'.format(
            video_type_code
        )

        df = pandas.read_csv(filepath)
        df = df[['发送时间']]
        df.columns = ['send_time']

        data = df['send_time'].dropna().values
        hours = []

        progress_bar = ProgressBar(
            widgets=[
                '[Video type: {}]'.format(video_type_code),
                Bar(),
                '(', Timer(), '|', ETA(), ')'
            ]
        )

        for i in progress_bar(range(len(data))):
            try:
                time_str = re.sub(r'[A-Za-z]* [A-Za-z]*[ ]*[0-9]* ', '', data[i])
            except:
                print(data[i], type(data[i]))
            try:
                send_timestamp = datetime.datetime.strptime(time_str, '%H:%M:%S %Y')
            except:
                print(time_str)
                print('Wrong!')
            else:
                hours.append(send_timestamp.hour)

        hours = numpy.array(hours)
        hist = numpy.histogram(hours, bins=23)

        json_str = json.dumps({'type_code': video_type_code, 'count': hist[0].tolist(), 'bucket': hist[1].tolist()})


        with open('./barrage_send_time.json', 'a') as res:
            json.dump(json_str, res, ensure_ascii=True)
            res.write('\n')


if __name__ == '__main__':
    main(sys.argv[1:])