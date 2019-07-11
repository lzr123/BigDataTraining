//左上
var data_lt6 = [4500,1482,867,664,532,493,404,379,389,305,352,285,282,280,286,279,280,277,285,290,260,270,276,247];
var level_lt6 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];

option_lt6 = {
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
        data:['过审时间人数','过审时间人数']
    },
    title: {text: '过审时间分布'},
    xAxis: [
        {
            type: 'category',
            name: '时间',
            nameLocation: 'middle',
            data: level_lt6,
            axisPointer: {
                type: 'shadow'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 2000,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 2000,
            interval: 500,
            axisLabel: {
                formatter: function(v) {
                    if(v < 1000)
                        return v
                    else 
                        return (v/1000) + 'k'
                }
            }
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt6
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt6,
            color: 'rgb(255,216,92)'
        }
    ]
};



//左下
var data_ld6 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 4125, 88655],
            ['2-3h', 3354, 53013],
            ['3-4h', 3327, 27682],
            ['4-5h', 3347, 14886],
            ['5-6h', 3131, 9389],
            ['6-7h', 2996, 8322],
            ['7-8h', 2605, 13385],
            ['8-9h', 3917, 24488],
            ['9-10h', 4493, 38415],
            ['10-11h', 6089, 50020],
            ['11-12h', 6742, 58247],
            ['12-13h', 7461, 62271],
            ['13-14h',7147,84532],
            ['14-15h',7023,81590],
            ['15-16h',6962,61191],
            ['16-17h',7208,59578],
            ['17-18h',6962,61801],
            ['18-19h',7208,70838],
            ['19-20h',8418,85895],
            ['20-21h',8448,92606],
            ['21-22h',8898,96657],
            ['22-23h',7699,111622],
            ['23-24h',11918,237517],
        ]

option_ld6 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld6
    },
    title: {text: '投稿时间分布'},
    xAxis: {
        type: 'category',
        name: '时间段',
        nameLocation: 'middle',

    },
    yAxis: {
        name: '数量',
        nameLocation: 'end',
        axisLabel: {
            formatter: function(v) {
                return (v/1000) + 'k'
            }
        }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
    ]
};

//中上
option_mt6 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 2654],
            [0.1, 3667],
            [0.15, 3467],
            [0.2, 4882],
            [0.25, 4030],
            [0.3, 5023],
            [0.35, 6990],
            [0.4, 5410],
            [0.45,5501],
            [0.5,7824],
            [0.55,22580],
            [0.6,5469],
            [0.65,5561],
            [0.7,6388],
            [0.75,8257],
            [0.8,6559],
            [0.85,7742],
            [0.9,9879],
            [0.95,9031],
            [1,18346]
        ]
    },
    title: {text: '弹幕情感分析', left: 'center'},
    xAxis: {
        name: '情感倾向',
        nameLocation: 'middle',
    },
    yAxis: {
        type: 'value',
        interval: 10000,
        name: '数量',
        nameLocation: 'end',
        axisLabel: {
            formatter: function(v) {
                return (v / 1000) + 'k'
            }
        }
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 0,
        max: 1,
        text: ['High Score', 'Low score'],
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
                x: 'score',
                // Map the "product" column to Y axis
                y: 'emotion'
            }
        }
    ]
};


//中下
option_md6 = {
    tooltip: {},
    legend: {
        data: ['世界上BUG最多的搞笑游戏', '【老番茄】史上最骚大侦探(第一集)','【敖厂长】目前画面最好的沙雕游戏']
    },
    title: {text: '最热视频雷达图', top: 'bottom', left: 'center'},
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
            {name: '播放数', max: 4000000},
            {name: '收藏数', max: 150000},
            {name: '弹幕数', max: 25000},
            {name: '评论数', max: 7500},
            {name: '综合', max: 1400000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [3774248, 133026, 19149, 3034, 1370873.35],
                name : '世界上BUG最多的搞笑游戏'
            },
            {
                value : [3347479, 126875, 23885, 6641, 1220602.8],
                name : '【老番茄】史上最骚大侦探(第一集)'
            },
            {
                value : [3297762, 61985, 22105, 5144, 1179998.8],
                name : '【敖厂长】目前画面最好的沙雕游戏'
            },
        ]
    }]
};


//右上
var data_rt6 = [
[49, 54, 2898080.5, '敖厂长'],[56, 70, 2665910.44, '老番茄'],[19, 85, 2429004.0, '罗汉解说'],[33, 10, 2323619.0, '云紫Sama'],
[32, 97, 1565948.0, '守护茶茶'],[33, 24, 1419771.86, '黑镖客梦回'],[84, 75, 1333937.0, '超级神奇的木偶'],
[30, 56, 1236306.5, '某幻君'],[17, 54, 1150098.0, '别搅_'],[4, 13, 1112907.0, 'LexBurner'],[87, 90, 1078180.0, '铁牛锅'],
[96, 4, 1055013.0, '女装小佳酱'],[45, 30, 1024517.0, '原神'],[79, 8, 970304.67, '渗透之C君'],
[53, 22, 930493.33, '中国BOY超级大猩猩'],[80, 60, 902868.0, '嫡仙'],[50, 89, 859178.0, '小潮院长'],
[68, 96, 848128.0, '泛式'],[32, 70, 810089.93, '靠脸吃饭的徐大王'],[95, 48, 795004.0, '明日方舟']

];



option_rt6 = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '最火热Up主',
        left: 'center'
    },
    legend: {
        right: 10,
        data: ['活跃Up主']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        show: false
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
        name: '活跃Up主',
        data: data_rt6,
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 30;
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



//右下
option_rd6 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [43.65, 4365, '游戏'],
            [30.22, 3022, '炉石传说'],
            [29.45, 2945, '玩家'],
            [27.23, 2723, '世界'],
            [26.23, 2623, '王者'],
            [25.80, 2580, '手游'],
            [23.65, 2365, '方舟'],
            [23.56, 2356, '直播'],
        ]
    },
    title: {text: '视频标题热词', left: 'center'},
    xAxis: {
        name: '数量',
        nameLocation: 'middle'
    },
    yAxis: {
        type: 'category',
        name: '热词',
        nameLocation: 'end'
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 45,
        max: 20,
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




$(function(){
    var myChart = echarts.init(document.getElementById('lt6'),"light").setOption(option_lt6)
    var myChart = echarts.init(document.getElementById('ld6'),"light").setOption(option_ld6)
    var myChart = echarts.init(document.getElementById('mt6'),"light").setOption(option_mt6)
    var myChart = echarts.init(document.getElementById('md6'),"light").setOption(option_md6)
    var myChart = echarts.init(document.getElementById('rd6'),"light").setOption(option_rd6)
    var myChart = echarts.init(document.getElementById('rt6'),"light").setOption(option_rt6)
});
