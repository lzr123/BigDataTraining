from flask import Flask, render_template, current_app, request

app = Flask(__name__)
import global_var
import pymysql
import json
import random

def get_json():
    dict={}
    dict["0"] = 1
    json_file = json.dumps(dict, ensure_ascii=False)
    return json_file


def get_conn():
    conn = pymysql.connect(global_var.DataBaseIP, global_var.user, global_var.password, global_var.DataBaseName)
    return conn.cursor()


def get_sex_proportion():
    cur = get_conn()
    sql = "select sex, sum(count) from USER_STATISTIC group by sex"
    cur.execute(sql)
    ret = cur.fetchall()
    dict = {}
    for i in ret:
        dict[i[0]] = int(i[1])
    json_file = json.dumps(dict,ensure_ascii=False)
    return json_file


def get_level_proportion():
    cur = get_conn()
    sql = "select level, sum(count) from USER_STATISTIC group by level"
    cur.execute(sql)
    ret = cur.fetchall()
    dict = {}
    for i in ret:
        dict["L%s" % i[0]] = int(i[1])
    json_file = json.dumps(dict, ensure_ascii=False)
    return json_file


def get_tag_heated(type_code):
    cur = get_conn()
    sql = "select * from TAG_STATISTIC where type_code={} order by count DESC".format(type_code)
    cur.execute(sql)


def get_word_freq():
    cur = get_conn()
    sql = "select * from WORD_FREQ order by count desc limit 200"
    cur.execute(sql)
    ret = cur.fetchall()
    my_list = []
    for i in ret:
        my_dict = {}
        my_dict["name"] = i[0]
        my_dict["value"] = i[3]
        my_list.append(my_dict)

    ret_dict = {}
    ret_dict["wordfreq"] = my_list
    my_json = json.dumps(ret_dict, ensure_ascii=False)
    return my_json


def get_sex_vip():
    cur = get_conn()
    sql = "select sex, vip_type, sum(count) from USER_STATISTIC group by sex, vip_type"
    cur.execute(sql)
    ret = cur.fetchall()
    secret_0 = 0
    secret_1 = 0
    male_0 = 0
    male_1 = 0
    man_0 = 0
    man_1 = 0
    my_dict = {}
    for i in ret:
        if i[0] == "保密" and i[1] == 0:
            secret_0 = i[2]
        elif i[0] == "保密" and (i[1] == 1 or i[1] == 2):
            secret_1 += i[2]
        elif i[0] == "女" and i[1] == 0:
            male_0 = i[2]
        elif i[0] == "女" and (i[1] == 1 or i[1] == 2):
            male_1 += i[2]
        elif i[0] == "男" and i[1] == 0:
            man_0 = i[2]
        elif i[0] == "男" and (i[1] == 1 or i[1] == 2):
            man_1 += i[2]
    my_dict["性别保密非VIP"] = int(secret_0)
    my_dict["性别保密VIP"] = int(secret_1)
    my_dict["女非VIP"] = int(male_0)
    my_dict["女VIP"] = int(male_1)
    my_dict["男非VIP"] = int(man_0)
    my_dict["男VIP"] = int(man_1)
    json_file = json.dumps(my_dict, ensure_ascii=False)
    return json_file


def get_video_count():
    cur = get_conn()
    video_count_dict = {}
    for i in range(1, 15):
        sql = "select count(type_code) from VIDEO_STATISTIC where type_code={}".format(i);
        cur.execute(sql)
        ret = cur.fetchall()
        video_count_dict[i] = ret[0][0]
    file_josn = json.dumps(video_count_dict, ensure_ascii=False)
    return file_josn


def get_fanju_info_hetu():
    cur = get_conn()
    sql = "select * from VIDEO_STYLE_COUNT where type_code = 2 order by count desc limit 20"
    cur.execute(sql)
    ret = cur.fetchall()
    value_list = []

    for i in ret:
        fanju_dict = {}
        fanju_dict["name"] = i[0]
        fanju_dict["value"] = i[2]
        value_list.append(fanju_dict)
    fanju_ret_dict = {}
    fanju_ret_dict["fanjudata"] = value_list
    fanju_json_file = json.dumps(fanju_ret_dict, ensure_ascii=False)
    return fanju_json_file

def get_fanju_count():
    cur = get_conn()
    sql = "select * from FANJU_COUNT"
    cur.execute(sql)
    ret = cur.fetchall()
    value_list1 = []
    value_list4 = []
    value_list7 = []
    value_list10 = []
    for i in ret:
        if i[1] == 1:
            value_list1.append(i[2])
        if i[1] == 4:
            value_list4.append(i[2])
        if i[1] == 7:
            value_list7.append(i[2])
        if i[1] == 10:
            value_list10.append(i[2])
    value_list10.insert(0, 0)
    fanju_count_dict = {}
    fanju_count_dict["month1"] = value_list1
    fanju_count_dict["month4"] = value_list4
    fanju_count_dict["month7"] = value_list7
    fanju_count_dict["month10"] = value_list10
    json_file = json.dumps(fanju_count_dict, ensure_ascii=False)
    return json_file

def get_time_count():
    cur = get_conn()
    sql = "select pass_time  from VIDEO_STATISTIC where type_code = 1"
    cur.execute(sql)
    ret = cur.fetchall()
    my_list = []
    count1 = 0
    count2 = 0
    count3 = 0
    count4 = 0
    count5 = 0
    count6 = 0
    count7 = 0
    count8 = 0
    count9 = 0
    count10 = 0
    count11 = 0
    count12 = 0
    count13 = 0
    count14 = 0
    count15 = 0
    count16 = 0
    count17 = 0
    count18 = 0
    count19 = 0
    count20 = 0
    count21 = 0
    count22 = 0
    count23 = 0
    count24 = 0
    for i in ret:
        if i[0] <= 3600:
            count1 += 1
        elif 3600 < i[0] <= 7200:
            count2 += 1
        elif 7200 < i[0] <= 10800:
            count3 += 1
        elif 10800 < i[0] <= 14400:
            count4 += 1
        elif 14400 < i[0] <= 18000:
            count5 += 1
        elif 18000 < i[0] <= 21600:
            count6 += 1
        elif 21600 < i[0] <= 25200:
            count7 += 1
        elif 25200 < i[0] <= 28800:
            count8 += 1
        elif 28800 < i[0] <= 32400:
            count9 += 1
        elif 32400 < i[0] <= 36000:
            count10 += 1
        elif 36000 < i[0] <= 39600:
            count11 += 1
        elif 39600 < i[0] <= 43200:
            count12 += 1
        elif 43200 < i[0] <= 46800:
            count13 += 1
        elif 46800 < i[0] <= 50400:
            count14 += 1
        elif 50400 < i[0] <= 54000:
            count15 += 1
        elif 54000 < i[0] <= 57600:
            count16 += 1
        elif 57600 < i[0] <= 61200:
            count17 += 1
        elif 61200 < i[0] <= 64800:
            count18 += 1
        elif 64800 < i[0] <= 68400:
            count19 += 1
        elif 68400 < i[0] <= 72000:
            count20 += 1
        elif 72000 < i[0] <= 75600:
            count21 += 1
        elif 75600 < i[0] <= 79200:
            count22 += 1
        elif 79200 < i[0] <= 82800:
            count23 += 1
        elif 82800 < i[0] <= 86400:
            count24 += 1
    my_list.append(count1)
    my_list.append(count2)
    my_list.append(count3)
    my_list.append(count4)
    my_list.append(count5)
    my_list.append(count6)
    my_list.append(count7)
    my_list.append(count8)
    my_list.append(count9)
    my_list.append(count10)
    my_list.append(count11)
    my_list.append(count12)
    my_list.append(count13)
    my_list.append(count14)
    my_list.append(count15)
    my_list.append(count16)
    my_list.append(count17)
    my_list.append(count18)
    my_list.append(count19)
    my_list.append(count20)
    my_list.append(count21)
    my_list.append(count22)
    my_list.append(count23)
    my_list.append(count24)
    my_dict = {}
    my_dict["time_count"] = my_list
    json_file = json.dumps(my_dict, ensure_ascii=False)
    return json_file

def get_tougao_danmu(type):
    barrage_data = []
    with open("./static/json/barrage_send_time.json", "r") as f:
        barrage_data = f.readlines()
    bareage_json_data = []
    for item in barrage_data:
        j = json.loads(item)
        bareage_json_data.append(j)

    data = []
    with open("./static/json/video_publish_time.json", "r") as f:
        data = f.readlines()
    json_data = []
    for item in data:
        j = json.loads(item)
        json_data.append(j)

    dict = {}
    dict["danmu"] = bareage_json_data[type]
    dict["tougao"] = json_data[type]
    file_json = json.dumps(dict, ensure_ascii=False)
    return file_json

def get_top_heated_video():
    cur = get_conn()
    sql = "select av,play_count,favorite_count,barrage_count,comment_count,compre_heat from VIDEO_STATISTIC where type_code = 1 order by compre_heat DESC limit 5"
    cur.execute(sql)
    ret = cur.fetchall()
    heated_dict = {}
    flag = 0
    for i in ret:
        heated_list = []
        heated_list.append(i[1])
        heated_list.append(i[2])
        heated_list.append(i[3])
        heated_list.append(i[4])
        heated_list.append(int(i[5]))
        heated_dict[flag] = heated_list
        flag += 1
    json_file = json.dumps(heated_dict, ensure_ascii=False)
    return json_file

def get_emtion_analsys():
    barrage_data = []
    with open("./static/json/emotion_analyse.json", "r") as f:
        barrage_data = f.readlines()
    bareage_json_data = []
    for item in barrage_data:
        j = json.loads(item)
        bareage_json_data.append(j)
    json_file = json.dumps(bareage_json_data[0])
    return json_file

def get_qipaotu():
    cur = get_conn()

    sql = "select * from AUTHOR_STATISTIC  where type_code = 1 order by avg_play_count desc limit 20"
    cur.execute(sql)
    ret = cur.fetchall()
    flag = 50000
    ret_list = []
    for i in ret:
        list = []
        list.append(flag)
        list.append(random.randint(55,85))
        list.append(int(i[1]))
        list.append(i[0])
        flag -= 2500
        ret_list.append(list)
    ret_dict = {}
    ret_dict["qipao"] = ret_list
    json_file = json.dumps(ret_dict, ensure_ascii=False)
    return json_file


def get_title_heat():
    cur = get_conn()
    sql = "select word,count from WORD_FREQ where type_code=1 and source=\"title\" order by count desc limit 7"
    cur.execute(sql)
    ret = cur.fetchall()
    flag = 95
    ret_list = []
    for i in ret:
        title_heat_list = []
        title_heat_list.append(flag)
        title_heat_list.append(i[1])
        title_heat_list.append(i[0])
        flag = flag - 13
        ret_list.append(title_heat_list)
    title_heat_dict = {}
    title_heat_dict["data"] = ret_list
    json_file = json.dumps(title_heat_dict,ensure_ascii=False)
    return json_file

def get_duijitu():
    cur = get_conn()
    sql = "select * from FANJU_COUNT"
    cur.execute(sql)
    ret = cur.fetchall()
    value_list1 = []
    value_list4 = []
    value_list7 = []
    value_list10 = []
    for i in ret:
        if i[1] == 1:
            value_list1.append(i[2])
        if i[1] == 4:
            value_list4.append(i[2])
        if i[1] == 7:
            value_list7.append(i[2])
        if i[1] == 10:
            value_list10.append(i[2])
    value_list10.insert(0, 0)
    fanju_count_dict = {}
    fanju_count_dict["month1"] = value_list1
    fanju_count_dict["month4"] = value_list4
    fanju_count_dict["month7"] = value_list7
    fanju_count_dict["month10"] = value_list10
    json_file = json.dumps(fanju_count_dict, ensure_ascii=False)
    return json_file


###################### 第三个番剧页面
def third_page_rd1():
    cur = get_conn()
    sql = "select vip_type, count from VIP_STATISTIC where type_code = 2"
    cur.execute(sql)
    ret = cur.fetchall()
    ret_list = []
    for i in ret:
        temp_dict = {}
        temp_dict["value"] = i[1]
        temp_dict["name"] = i[0]
        ret_list.append(temp_dict)
    ret_dict = {}
    ret_dict["data"] = ret_list
    json_file = json.dumps(ret_dict, ensure_ascii=False)
    return json_file

def third_page_m2():
    cur = get_conn()
    sql = "select * from VIDEO_STYLE_COUNT where type_code = 2 order by count desc limit 20"
    cur.execute(sql)
    ret = cur.fetchall()
    value_list = []

    for i in ret:
        fanju_dict = {}
        fanju_dict["name"] = i[0]
        fanju_dict["value"] = i[2]
        value_list.append(fanju_dict)
    fanju_ret_dict = {}
    fanju_ret_dict["fanjudata"] = value_list
    fanju_json_file = json.dumps(fanju_ret_dict, ensure_ascii=False)
    return fanju_json_file

def thrid_page_rd2():
    cur = get_conn()
    sql = "select * from FANJU_PLAY_SCORE order by play_count desc limit 100"
    cur.execute(sql)
    ret = cur.fetchall()
    ret_list = []
    for i in ret:
        temp_list = []
        temp_list.append(i[1])
        temp_list.append(i[2])
        temp_list.append(float(i[3])*10000)
        temp_list.append(i[0])
        ret_list.append(temp_list)
    ret_dict = {}
    ret_dict["data"] = ret_list
    json_file = json.dumps(ret_dict, ensure_ascii=False)
    return json_file
#####################  第三个番剧页面结束



################  放映厅第一个画面begin
def Page15rt1(type_code):
    cur = get_conn()
    sql = "select * from VIDEO_YEAR_COUNT where type_code = {} ".format(type_code)
    cur.execute(sql)
    ret = cur.fetchall()
    year_list = []
    count_list = []
    for i in ret:
        year_list.append(i[0])
        count_list.append(i[1])
    ret_dict = {}
    ret_dict["year"] = year_list
    ret_dict["count"] = count_list
    json_file = json.dumps(ret_dict, ensure_ascii=False)
    return json_file

def Page15rd1(type_code):
    cur = get_conn()
    sql = "select vip_type,count from VIP_STATISTIC where type_code = {} ".format(type_code)
    cur.execute(sql)
    ret = cur.fetchall()
    ret_list = []
    for i in ret:
        temp_dict = {}
        temp_dict["value"] = i[1]
        temp_dict["name"] = i[0]
        ret_list.append(temp_dict)
    ret_dict = {}
    ret_dict["data"] = ret_list
    json_file = json.dumps(ret_dict,ensure_ascii=False)
    return json_file

def Page15M(type_code):
    cur = get_conn()
    sql = "select * from VIDEO_STYLE_COUNT where type_code = {} order by count desc limit 20".format(type_code)
    cur.execute(sql)
    ret = cur.fetchall()
    value_list = []

    for i in ret:
        fanju_dict = {}
        fanju_dict["name"] = i[0]
        fanju_dict["value"] = i[2]
        value_list.append(fanju_dict)
    fanju_ret_dict = {}
    fanju_ret_dict["fanjudata"] = value_list
    fanju_json_file = json.dumps(fanju_ret_dict, ensure_ascii=False)
    return fanju_json_file

def Page15Rt1():
    cur = get_conn()
    sql = "select * from DOCU_TIME_COUNT"
    cur.execute(sql)
    ret = cur.fetchall()
    ret_dict = {}
    china_list = []
    america_list = []
    english_list = []
    france_list = []
    japan_list = []
    for i in ret:
        if i[0] == "中国大陆":
            china_list.append(i[2])
        if i[0] == "美国":
            america_list.append(i[2])
        if i[0] == "英国":
            english_list.append(i[2])
        if i[0] == "法国":
            france_list.append(i[2])
        if i[0] == "日本":
            japan_list.append(i[2])
    ret_dict["中国"] = china_list
    ret_dict["美国"] = america_list
    ret_dict["英国"] = english_list
    ret_dict["法国"] = france_list
    ret_dict["日本"] = japan_list
    json_file = json.dumps(ret_dict, ensure_ascii=False)
    return json_file

def Page15Rd(type_code):
    cur = get_conn()
    sql = "select * from VIDEO_HOT_SCORE where type_code = {}  order by score desc limit 20".format(type_code)
    cur.execute(sql)
    ret = cur.fetchall()
    flag = 50000
    ret_list = []
    for i in ret:
        temp_list = []
        temp_list.append(flag)
        temp_list.append(random.randint(55, 85))
        temp_list.append(int(i[2]))
        temp_list.append(i[0])
        flag -= 2500
        ret_list.append(temp_list)
    ret_dict = {}
    ret_dict["data"] = ret_list
    json_file = json.dumps(ret_dict,ensure_ascii=False)
    return json_file

def Page15Rt(type_code):
    cur = get_conn()
    sql = "select * from VIDEO_AREA_COUNT where type_code = {} order by count desc limit 10".format(type_code)
    cur.execute(sql)
    ret = cur.fetchall()
    country_list = []
    data_list = []
    for i in ret:
        country_list.append(i[0])
        data_list.append(i[2])
    ret_dict = {}
    ret_dict["country"] = country_list
    ret_dict["data"] = data_list
    file_json = json.dumps(ret_dict,ensure_ascii=False)
    return file_json

################  放映厅第一个画面end


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/index/')
def render_html():
    return render_template("index.html")


@app.route('/getlevelpropor', methods=["POST"])
def getlevelpropor():
    json_file = get_level_proportion()
    return json_file


@app.route('/getwordfreq',methods=['POST'])
def getwordfreq():
    ret_json = get_word_freq()
    return ret_json


@app.route('/getsexvip', methods=["POST"])
def getsexvip():
    ret_json = get_sex_vip()
    return ret_json


@app.route('/geteveryareacount', methods=["POST"])
def get_every_area_count():
    json_file = get_video_count()
    return json_file

@app.route('/getUpAuthorHeated', methods=["POST"])
def get_up_author_heatd():
    dict = {'1':123}
    json_file = json.dumps(dict, ensure_ascii=False)
    return json_file


@app.route('/getFanJuInfoHetu', methods=["POST"])
def get_fan_ju_info_hetu():
    json_ret = get_fanju_info_hetu()
    return json_ret

@app.route('/getfanjucount', methods=["POST"])
def get_fan_ju_count():
    json_ret = get_fanju_count()
    return json_ret

@app.route("/gettimecount", methods=["POST"])
def get_count_time():
    ret_file = get_time_count()
    return ret_file

@app.route("/getTouGaoDanMucount", methods=["POST"])
def get_tou_gao():
    ret_file = get_tougao_danmu(1-1)
    return ret_file


@app.route("/getLeiDaTu",methods=["POST"])
def get_leida_tu():
    ret = get_top_heated_video()
    return ret


@app.route("/getEmotion", methods=["POST"])
def get_emotion():
    ret_file = get_emtion_analsys()

    return ret_file
@app.route("/huoyueUp", methods=["POST"])
def get_huoyue_up():
    ret_file = get_qipaotu()
    print(ret_file)
    return ret_file

@app.route("/heatedVideoTitle", methods=["POST"])
def heated_video_title():
    ret_file = get_title_heat()
    return ret_file

@app.route("/getDuijiTu", methods=["POST"])
def get_duiji_tu():
    ret_file = get_duijitu()
    return ret_file



###################### 第三个番剧页面
@app.route("/thirdPageRd1", methods=["POST"])
def thirdPageRd1():
    ret_file = third_page_rd1()
    return ret_file

@app.route("/thirdPageM2", methods=["POST"])
def thirdPageM2():
    ret_file = third_page_m2()
    return ret_file

@app.route("/thirdPageRd2", methods=["POST"])
def thirdPageRd2():
    ret_file = thrid_page_rd2()
    return ret_file

@app.route("/thirdPageRt2", methods=["POST"])
def thirdPageRt2():
    ret_file = get_tougao_danmu(2-1)
    return ret_file


#####################  第三个番剧页面结束




##################### 放映厅第一个画面
@app.route("/fifthPageRt1",methods=["POST"])
def fifthPageRt1():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15rt1(type_code)
    return ret_json

@app.route("/fifthPageld1",methods=["POST"])
def fifthPageLd1():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15rd1(type_code)
    return ret_file
@app.route("/fifthPageM",methods=["POST"])
def fifthPageM():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15M(type_code    )
    return ret_json
@app.route("/fifthPageRt", methods=["POST"])
def fifthPageRt():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rt1()
    return ret_file

@app.route("/fifthPageRd",methods=["POST"])
def fifthPageRd():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rd(type_code)
    return ret_file

#####################




###################### 15页第二个
@app.route("/fifthPageRd2",methods=["POST"])
def fifthPageRd1():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rd(type_code)
    return ret_file
@app.route("/fifthPageRt2",methods=["POST"])
def fifthPageRt2():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15rt1(type_code)
    return ret_json
@app.route("/fifthPageld2",methods=["POST"])
def fifthPageld2():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15rd1(type_code)
    return ret_file

@app.route("/fifthPageM2",methods=["POST"])
def fifthPageM2():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15M(type_code)
    return ret_json

@app.route("/fifthPageRtS2", methods=["POST"])
def fifthPageRtS2():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rt(type_code)
    return ret_file






#####################


######################15页第三个


@app.route("/fifthPageRd3",methods=["POST"])
def fifthPageRd2():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rd(type_code)
    return ret_file
@app.route("/fifthPageRt3",methods=["POST"])
def fifthPageRt3():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15rt1(type_code)
    return ret_json
@app.route("/fifthPageld3",methods=["POST"])
def fifthPageld3():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15rd1(type_code)
    return ret_file
@app.route("/fifthPageM3",methods=["POST"])
def fifthPageM3():
    type_code = int(request.form.get('type_code', '0'))
    ret_json = Page15M(type_code)
    return ret_json

@app.route("/fifthPageRtS3", methods=["POST"])
def fifthPageRtS3():
    type_code = int(request.form.get('type_code', '0'))
    ret_file = Page15Rt(type_code)
    return ret_file







#####################


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=80)

