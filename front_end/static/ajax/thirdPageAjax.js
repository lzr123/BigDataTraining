$(function () {
    getFanjuCount();
})

function getFanjuCount() {
    $.ajax({
        url: '/getDuijiTu',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('lt2'));

            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['一月', '四月', '七月', '十月']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'

                },
                yAxis: {

                    type: 'category',
                    data: ['2019', '2018', '2017', '2016', '2015', '2010-2014', '2005-2009', '2000-2004', '90年代', '80年代', '更早']

                },
                series: [
                    {
                        name: '一月',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: datas["month1"]
                    },
                    {
                        name: '四月',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: datas["month4"]
                    },
                    {
                        name: '七月',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: datas["month7"]
                    },
                    {
                        name: '十月',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: datas["month10"]
                    }
                ]
            };
            myChart.setOption(option);
        }
    })
}

$(function () {
    thirdPageRd1();
})

function thirdPageRd1() {
    $.ajax({
        url: '/thirdPageRd1',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('ld2'));

            option_ld2 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['付费观看', '会员专享', '会员抢先', '限时免费', '非会员']
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
            myChart.setOption(option_ld2)
        }
    })
}

$(function () {
    thirdPageM2();
})

function thirdPageM2() {
    $.ajax({
        url: '/thirdPageM2',
        data: {},
        type: 'POST',
        async: true,
        dataType: 'json',
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('m2'));

            option = {
                title: {
                    text: 'Tag矩形图',
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
                        name: 'Tag矩形图',
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
    thirdPageRt2();
})

function thirdPageRt2() {
    $.ajax({
        url: "/thirdPageRt2",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rt2'), "light")
            var danMu = datas["danmu"]["count"]
            var tougao = datas["tougao"]["count"]
            var data_rt2 = [
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

            option_rt2 = {
                title: {
                    text: "投稿弹幕数量与时间的分布",
                    x: 'center',
                    y: "bottom"
                },
                legend: {},
                tooltip: {},
                dataset: {
                    source: data_rt2
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

            myChart.setOption(option_rt2)

        }
    })
}


$(function () {
    thirdPageRd2();
})


function thirdPageRd2() {
    $.ajax({
        url: "/thirdPageRd2",
        data: {},
        type: "POST",
        async: true,
        dataType: "json",
        success: function (datas) {
            var myChart = echarts.init(document.getElementById('rd2'), "light")

            var data = [
                datas["data"],
            ];

            option_rd2 = {
                backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                legend: {
                    right: 10,
                    data: ['热门番剧']
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },

                // yAxis: {
                //     type: myChart.yAxis.type,
                //     name: myChart.yAxis.name,
                //     nameGap: myChart.yAxis.nameGap,
                //     nameLocation: myChart.yAxis.nameLocation,
                //     axisLabel: {
                //         formatter: function (value) {
                //             var res = value.toString();
                //             var numN1 = 0;
                //             var numN2 = 1;
                //             var num1 = 0;
                //             var num2 = 0;
                //             var t1 = 1;
                //             for (var k = 0; k < res.length; k++) {
                //                 if (res[k] == ".")
                //                     t1 = 0;
                //                 if (t1)
                //                     num1++;
                //                 else
                //                     num2++;
                //             }
                //
                //             if (Math.abs(value) < 1 && res.length > 4) {
                //                 for (var i = 2; i < res.length; i++) {
                //                     if (res[i] == "0") {
                //                         numN2++;
                //                     } else if (res[i] == ".")
                //                         continue;
                //                     else
                //                         break;
                //                 }
                //                 var v = parseFloat(value);
                //                 v = v * Math.pow(10, numN2);
                //                 return v.toString() + "e-" + numN2;
                //             } else if (num1 > 4) {
                //                 if (res[0] == "-")
                //                     numN1 = num1 - 2;
                //                 else
                //                     numN1 = num1 - 1;
                //                 var v = parseFloat(value);
                //                 v = v / Math.pow(10, numN1);
                //                 if (num2 > 4)
                //                     v = v.toFixed(4);
                //                 return v.toString() + "e" + numN1;
                //             } else
                //                 return parseFloat(value);
                //         }
                //     }
                // },






                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true,
                    show: true
                },
                series: [{
                    name: '活跃up主',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 18;
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

            myChart.setOption(option_rd2)

        }
    })

}


