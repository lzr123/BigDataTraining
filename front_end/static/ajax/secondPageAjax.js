$(function () {
    getTimeCount();
})

$(function () {
    getTouGaoDanMucount();
})

$(function () {
    getLeiDaTu();
})

$(function () {
    emotionAnan();
})

$(function () {
    huoyueUp();
})

$(function () {
    heatedVideoTitle();
})


function getTimeCount() {
    $.ajax({
        url: "/gettimecount",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (data) {
            var myChart = echarts.init(document.getElementById('lt1'), "light")
            var data_lt1 = data["time_count"];
            var level_lt1 = ['0-1h', '1-2h', '2-3h', '3-4h', '4-5h', '5-6h', '6-7h', '7-8h', '8-9h', '9-10h', '10-11h', '11-12h',
                '12-13h', '13-14h', '14-15h', '15-16h', '16-17h', '17-18h', '18-19h', '19-20h', '20-21h', '21-22h', '22-23h', '23-24h'];
            option_lt1 = {
                title: {
                    text: "过审视频数量与时间的分布",
                    x: 'center',
                    y: "bottom"
                },
                tooltip: {
                    // trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#fff'
                        }
                    }
                },
                legend: {
                    data: ['过审数量', '过审数量']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: level_lt1,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '过审数量',
                        min: 0,
                        max: 3000,
                        interval: 500,
                        show: false
                    },
                    {
                        type: 'value',
                        name: '过审数量',
                        min: 0,
                        max: 3000,
                        interval: 500,
                    }
                ],
                series: [
                    {
                        name: '过审数量',
                        type: 'bar',
                        data: data_lt1
                    },
                    {
                        name: '过审数量',
                        type: 'line',
                        yAxisIndex: 1,
                        data: data_lt1,
                        color: 'rgb(255,216,92)'
                    }
                ]
            };


            var data_ld1 = [
                ['0-2h', '投稿数量', '弹幕数量'],
                ['2-4h', 43.3, 85.8],
                ['4-6h', 83.1, 73.4],
                ['6-8h', 86.4, 65.2],
                ['8-10h', 72.4, 53.9],
                ['10-12h', 69.3, 70.9],
                ['12-14h', 43.3, 85.8],
                ['14-16h', 83.1, 73.4],
                ['16-18h', 86.4, 65.2],
                ['18-20h', 72.4, 53.9],
                ['20-22h', 83.1, 73.4],
                ['22-24h', 86.4, 65.2],
            ]

            option_ld1 = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: data_ld1
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                ]
            };

            myChart.setOption(option_lt1)
        }

    })

}

function getTouGaoDanMucount() {

    $.ajax({
        url: "/getTouGaoDanMucount",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (data) {

            var myChart = echarts.init(document.getElementById('ld1'), "light")
            var danMu = data["danmu"]["count"]
            var tougao = data["tougao"]["count"]
            var data_ld1 = [
                ['0-1h', '投稿', '弹幕'],
                ['1-2h', tougao[0], danMu[0]],
                ['2-3h', tougao[1], danMu[1]],
                ['3-4h', tougao[2], danMu[2]],
                ['4-5h', tougao[3], danMu[3]],
                ['5-6h', tougao[4], danMu[4]],
                ['6-7h', tougao[5], danMu[5]],
                ['7-8h', tougao[6], danMu[6]],
                ['8-9h', tougao[7], danMu[7]],
                ['9-10h', tougao[8], danMu[8]],
                ['10-11h', tougao[9], danMu[9]],
                ['11-12h', tougao[10], danMu[10]],
                ['12-13h', tougao[11], danMu[11]],
                ['13-14h', tougao[12], danMu[12]],
                ['14-15h', tougao[13], danMu[13]],
                ['15-16h', tougao[14], danMu[14]],
                ['16-17h', tougao[15], danMu[15]],
                ['17-18h', tougao[16], danMu[16]],
                ['18-19h', tougao[17], danMu[17]],
                ['19-20h', tougao[18], danMu[18]],
                ['20-21h', tougao[19], danMu[19]],
                ['21-22h', tougao[20], danMu[20]],
                ['22-23h', tougao[21], danMu[21]],
                ['23-24h', tougao[22], danMu[22]],
            ]

            option_ld1 = {
                title: {
                    text: "投稿弹幕数量与时间的分布",
                    x: 'center',
                    y: "bottom"
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: data_ld1
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                ]
            };
            myChart.setOption(option_ld1)
        }

    })

}

function getLeiDaTu() {
    $.ajax({
        url: "/getLeiDaTu",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (data) {

            var myChart = echarts.init(document.getElementById('md1'), "light")

            option_md1 = {
                title: {
                    text: "热度视频雷达图",
                    x: 'center',
                    y: "bottom"
                },
                tooltip: {},
                legend: {
                    data: ['达芬奇', '大土豆', '学校', "a", "b"]
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        {name: '播放数', max: 5000000},
                        {name: '收藏数', max: 350000},
                        {name: '弹幕数', max: 25000},
                        {name: '评论数', max: 25000},
                        {name: '综合', max: 1600000},
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: data["0"],
                            name: '达芬奇'
                        },
                        {
                            value: data["1"],
                            name: '大土豆'
                        },
                        {
                            value: data["2"],
                            name: '学校'
                        }
                        ,
                        {
                            value: data["3"],
                            name: 'a'
                        },
                        {
                            value: data["4"],
                            name: 'b'
                        }
                    ]
                }]
            };
            myChart.setOption(option_md1)


        }
    })
}

function emotionAnan() {
    $.ajax({
        url: "/getEmotion",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (data) {
            var myChart = echarts.init(document.getElementById('mt1'), "light")
            var dataAxis = ['负面', '', '', '', '', '', '', '', '', '', '中性', '', '', '', '', '', '', '', '', '正面'];
            var data = data["count"];

            option_mt1 = {
                title: {
                    text: "情感分析",
                    x: 'center',
                    y: "top",
//                      textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
//                 fontFamily: 'Arial, Verdana, sans...',
//                 fontSize: 12,
//                 fontStyle: 'normal',
//                 fontWeight: 'normal',
//             },
                },
                xAxis: {
                    data: dataAxis,
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                visualMap: {
                    orient: 'horizontal',
                    left: 'center',
                    min: 1,
                    max: 20,
                    text: ['正面情绪', '负面情绪'],
                    // Map the score column to color
                    dimension: 0,
                    inRange: {
                        color: ['#D7DA8B', '#E15457']
                    }
                },
                series: [
                    { // For shadow
                        type: 'bar',
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        animation: false
                    },
                    {
                        type: 'bar',
                        data: data
                    }
                ]
            };

            myChart.setOption(option_mt1)
        }
    })

}

function huoyueUp() {
    $.ajax({
        url: "/huoyueUp",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rt1'), "light")

            var data = [
                datas["qipao"],
            ];

            option_rt1 = {
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                legend: {
                    right: 10,
                    data: ['活跃up主']
                },
                xAxis: {
                    name: '热度',
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
                    name: '活跃up主',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 40;
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
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
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

            myChart.setOption(option_rt1)

        }
    })

}

function heatedVideoTitle() {
    $.ajax({
        url: "/heatedVideoTitle",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {

            var myChart = echarts.init(document.getElementById('rd1'), "light")
            option_rd1 = {
                title: {
                    text: "标题词频热度",
                    x: 'center',
                    y: "top"
                },
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        datas["data"][0],
                        datas["data"][1],
                        datas["data"][2],
                        datas["data"][3],
                        datas["data"][4],
                        datas["data"][5],
                        datas["data"][6],
                        // [10.6, 101852, '蔡徐坤'],
                    ]
                },
                // grid: {containLabel: true},
                xAxis: {name: '热度'},
                yAxis: {type: 'category'},
                visualMap: {
                    orient: 'horizontal',
                    left: 'center',
                    min: 10,
                    max: 100,
                    text: ['最热', '最冷'],
                    // Map the score column to color
                    dimension: 0,
                    inRange: {
                        color: ['#D7DA8B', '#E15457']
                    }
                },
                series: [
                    {
                        type: 'bar',
                        encode: {
                            // Map the "amount" column to X axis.
                            x: 'amount',
                            // Map the "product" column to Y axis
                            y: 'product'
                        }
                    }
                ]
            };

            myChart.setOption(option_rd1)

        }
    })
}


