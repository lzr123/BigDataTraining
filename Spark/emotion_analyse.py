import json

import numpy

import pandas
import sys

from progressbar import ProgressBar, Bar, Timer, ETA
from snownlp import SnowNLP

from Spark.Utils.FuctionUtils import FuncUtils
import matplotlib.pyplot as plt

video_type_code = 0

def main(argv):



    for video_type_code in range(1, 10):

        filepath = r'D:\xixi\barrage_type{}.csv'.format(video_type_code)

        print('Loading data [type={}] ... '.format(video_type_code))
        barrage_df = pandas.read_csv(filepath)
        barrage_df = barrage_df['弹幕内容']
        barrage_df.columns = ['barrage']
        barrage_df = barrage_df.dropna()
        barrage_df = barrage_df.iloc[::10]
        emotion = []

        progress_bar = ProgressBar(
            widgets=[
                '[Video type: {}]'.format(video_type_code),
                Bar(),
                '(', Timer(), '|', ETA(), ')'
            ]
        )

        for i in progress_bar(range(len(barrage_df))):
            s = SnowNLP(barrage_df.iloc[i])
            emotion.append(s.sentiments)

        emotion = numpy.array(emotion)

        hist = numpy.histogram(emotion, bins=20)

        json_str = json.dumps({'type_code': video_type_code, 'count': hist[0].tolist(), 'bucket': hist[1].tolist()})

        with open('./emotion_analyse.json', 'a') as res:
            json.dump(json_str, res, ensure_ascii=True)
            res.write('\n')



if __name__ == '__main__':

    main(sys.argv[1:])