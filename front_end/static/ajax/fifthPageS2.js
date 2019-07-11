var data2 = {
    "type_code": 16
};


$(function () {
    fifthPageRd2();

})


function fifthPageRd2() {


    $.ajax({
        url: '/fifthPageRd2',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        data: data2,
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rd15-s2'));

            var data = [
                datas["data"],
            ];

            option_rd15_s2 = {
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                legend: {
                    right: 10,
                    data: ['热门电影']
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
                    name: '热门电影',
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
            myChart.setOption(option_rd15_s2)
        }
    })
}


$(function () {
    fifthPagelt2();
})

function fifthPagelt2() {
    $.ajax({
        url: "/fifthPageRt2",
        data: data2,
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('lt15-s2'), "light")
            option_lt15 = {
                title: {
                    text: "电影新增数量与年份分布",
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
    fifthPageld2();
})

function fifthPageld2() {
    $.ajax({
        url: "/fifthPageld2",
        data: data2,
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('ld15-s2'), "light")
            option_ld15 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['付费观看', '会员专享', '会员半价', "非会员"]
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
    fifthPageM2();
})


function fifthPageM2() {
    $.ajax({
        url: '/fifthPageM2',
        data: data2,
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('m15-s2'));

            option = {
                title: {
                    text: '电影类型矩形图',
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
                        name: '电影矩形图',
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
    fifthPageRtS2();
})

function fifthPageRtS2() {
    $.ajax({
        url: '/fifthPageRtS2',
        data: data2,
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {

            var myChart = echarts.init(document.getElementById('rt15-s2'));
            option_rt15_s23 = {
                 title: {
                    text: '电影来源分布',
                     x: "center",
                     y:"top"
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: datas["country"],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '数量',
                        type: 'bar',
                        barWidth: '60%',
                        data: datas["data"]
                    }
                ]
            };
            myChart.setOption(option_rt15_s23);
        }
    })
}







