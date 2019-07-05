import datetime
import json

import numpy

import pandas
import sys

from Spark.Utils.FuctionUtils import FuncUtils

video_type_code = 0

def main(argv):
    for video_type_code in range(1, 15):

        filepath = './video_details/video_info_type{}.csv'.format(
            video_type_code
        )

        df = pandas.read_csv(filepath)
        df = df[['av号', '发布时间']]
        df.columns = ['av', 'script_time']

        data = df['script_time'].values

        hours = []

        for i in range(len(data)):
            try:
                publish_timestamp = datetime.datetime.strptime(data[i], '%Y-%m-%d %H:%M:%S')
            except:
                print('Wrong!')
            hours.append(publish_timestamp.hour)

        hours = numpy.array(hours)
        hist = numpy.histogram(hours, bins=23)

        json_str = json.dumps({'type_code': video_type_code, 'count': hist[0].tolist(), 'bucket': hist[1].tolist()})

        with open('./video_publish_time.json', 'a') as res:
            json.dump(json_str, res, ensure_ascii=True)
            res.write('\n')

if __name__ == '__main__':
    main(sys.argv[1:])