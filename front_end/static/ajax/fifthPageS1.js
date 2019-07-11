var data1 = {
    "type_code": 15
};

$(function () {
    fifthPagelt1();
})

function fifthPagelt1() {
    $.ajax({
        url: "/fifthPageRt1",
        data: data1,
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('lt15-s1'), "light")
            option_lt15 = {
                title: {
                    text: "纪录片新增数量与年份分布",
                    x: 'center',
                    y: "top"
                },
                xAxis: {
                    type: 'category',
                    data: datas["year"]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: datas["count"],
                    type: 'line',
                    smooth: true
                }]
            };
            myChart.setOption(option_lt15)

        }
    })

}


$(function () {
    fifthPageld1();
})

function fifthPageld1() {
    $.ajax({
        url: "/fifthPageld1",
        data: data1,
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('ld15-s1'), "light")
            option_ld15 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['会员专享', '会员抢先', '非会员']
                },
                series: [
                    {
                        name: '收费视频占比',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '60%'],
                        data: datas["data"],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option_ld15)

        }
    })

}


$(function () {
    fifthPageM();
})


function fifthPageM() {
    $.ajax({
        url: '/fifthPageM',
        data: data1,
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('m15-s1'));

            option = {
                title: {
                    text: '纪录片类型矩形图',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c}"
                },
                toolbox: {
                    show: true,
                    feature: {
                        // mark: {show: true},
                        // dataView: {show: true, readOnly: false},
                        // restore: {show: true},
                        // saveAsImage: {show: true}
                    }
                },
                calculable: false,
                series: [
                    {
                        name: '纪录片类型矩形图',
                        type: 'treemap',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: "{b}"
                                },
                                borderWidth: 1
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        },
                        data: datas["fanjudata"]
                    }
                ]
            };
            myChart.setOption(option);
        }
    })
}


$(function () {
    fifthPageRt();

})

function fifthPageRt() {
    $.ajax({
        url: '/fifthPageRt',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rt15-s1'));

            var labelOption = {
                normal: {
                    show: false,
                    rotate: 90,
                    align: 'left',
                    verticalAlign: 'middle',
                    position: 'insideBottom',
                    distance: 15,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {
                            textBorderColor: '#fff'
                        }
                    }
                }
            };

            option_rt15_s1 = {
                title: {
                    text: "纪录片时间长度与来源分布",
                    x: 'center',
                    y: "bottom"
                },
                color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['中国', '美国', '英国', '法国', '日本']
                },
                calculable: true,
                xAxis: [
                    {
                        name:"热度",
                        type: 'category',
                        axisTick: {show: false},
                        data: ['0~15', '15~35', '35~65', '65~95', '>95']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '中国',
                        type: 'bar',
                        barGap: 0,
                        data: datas["中国"]
                    },
                    {
                        name: '美国',
                        type: 'bar',
                        data: datas["美国"]
                    },
                    {
                        name: '英国',
                        type: 'bar',
                        data: datas["英国"]
                    },
                    {
                        name: '法国',
                        type: 'bar',
                        data: datas["法国"]
                    },
                    {
                        name: '日本',
                        type: 'bar',
                        data: datas["日本"]
                    }
                ]
            };
            myChart.setOption(option_rt15_s1)
        }
    })
}


$(function () {
    fifthPageRd();

})


function fifthPageRd() {


    $.ajax({
        url: '/fifthPageRd',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        data: data1,
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rd15-s1'));

            var data = [
                datas["data"],
            ];

            option_rd15_s1 = {
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                legend: {
                    right: 10,
                    data: ['热门纪录片']
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true,
                    show: false
                },
                series: [{
                    name: '热门纪录片',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 60;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(251, 118, 123)'
                            }, {
                                offset: 1,
                                color: 'rgb(204, 46, 72)'
                            }])
                        }
                    }
                }]
            };
            myChart.setOption(option_rd15_s1)
        }
    })
}

