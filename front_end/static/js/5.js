//左上
var data_lt4 = [6743,2418,1186,827,738,593,358,495,452,414,420,400,409,418,404,400,398,388,390,395,388,370,378,377];
var level_lt4 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt4 = {
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
            name: '时间段',
            nameLocation: 'middle',
            data: level_lt4,
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 3000,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 3000,
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
            data:data_lt4
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt4,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld4 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 6472, 88655],
            ['2-3h', 5729, 53013],
            ['3-4h', 5314, 27682],
            ['4-5h', 4994, 14886],
            ['5-6h', 4320, 9389],
            ['6-7h', 3919, 8322],
            ['7-8h', 3057, 13385],
            ['8-9h', 3234, 24488],
            ['9-10h', 4413, 38415],
            ['10-11h', 6858, 50020],
            ['11-12h', 9229, 58247],
            ['12-13h', 8890, 62271],
            ['13-14h',9195,84532],
            ['14-15h',10138,81590],
            ['15-16h',9500,61191],
            ['16-17h',9559,59578],
            ['17-18h',9961,61801],
            ['18-19h',11506,70838],
            ['19-20h',10944,85895],
            ['20-21h',12553,92606],
            ['21-22h',13063,96657],
            ['22-23h',12674,111622],
            ['23-24h',20622,237517],
        ]

option_ld4 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld4
    },
    title: {text: '投稿时间分布'},
    xAxis: {
        type: 'category',
        name: '时间段',
        nameLocation: 'middle',
        },
    yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        axisLabel : {
            formatter: function(v) {
                if (v > 0)
                    return (v/10000) + '-e4'
                else
                    return v
            },
            margin: 2,
            show: true
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
option_mt4 = {
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
        nameLocation: 'middle'
        },
    yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        interval: 10000,
        axisLabel: {
                margin:10,
                formatter: function(v) {
                    return (v/1000) + 'k'
                },
                show: true
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
option_md4 = {
    tooltip: {},
    legend: {
        data: ['【万物死】每天一遍，防止恋爱', '高考前《Bombs away》', '《摸仙女王不洗脚》']
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
            {name: '播放数', max: 4000000},
            {name: '收藏数', max: 200000},
            {name: '弹幕数', max: 35000},
            {name: '评论数', max: 10000},
            {name: '综合', max: 1350000},
        ]
    },
    title: {text: '最热视频雷达图', top: 'bottom', left: 'center'},
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [3574538, 172665, 30161, 8023, 1317248.65],
                name : '【万物死】每天一遍，防止恋爱'
            },
            {
                value : [1822205, 28542, 3796, 7040, 649386.85],
                name: '高考前《Bombs away》'
            },
            {
                value : [1550440, 55285, 4986, 1562, 562985.95],
                name : '《摸仙女王不洗脚》'
            }
        ]
    }]
};


//右上
var data_rt4 = [
    [14, 60, 2055717.0, 'McLaren傲龙'],[90, 30, 1822205.0, '迅雷Thunder'],[74, 68, 1722821.0, '卡布叻_周深'],[33, 67, 1477535.33, 'Nino学长努力唱歌'],
    [48, 52, 1422465.0, '=咬人猫='],[24, 93, 1226476.0, '祈Inory'],[3, 88, 983371.0, '兄台君'],[17, 30, 885744.0, 'woz沃兹'],
    [9, 14, 825521.0, 'chaochai'],[19, 42, 803641.0, '半夏初伊'],[65, 11, 761844.0, '苦b大学'],[88, 16, 754115.5, '墨墨墨三岁'],
    [55, 27, 738865.0, '明日方舟'],[11, 99, 704370.0, '仙本娜Semporna'],[67, 99, 670989.0, '矮砸一米八'],[60, 63, 639937.0, '厂长是窝表哥'],
    [40, 84, 634147.0, '咸鱼_栗'],[79, 83, 613736.5, '长歌与小见见'],[70, 80, 534977.0, '梦星辰的光'],[94, 40, 526000.0, 'ilem']
];

option_rt4 = {
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
        show: false,
        scale: true
    },
    series: [{
        name: '活跃Up主',
        data: data_rt4,
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
option_rd4 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [61.69, 6169, '现场'],
            [59.63, 5963, '音乐'],
            [59.40, 5940, '演唱会'],
            [41.42, 4142, '弹唱'],
            [39.94, 3494, '钢琴'],
            [34.57, 3457, '歌曲'],
            [30.80, 3080, '音乐节'],
            [28.20, 2820, '乐队'],
        ]
    },
    title: {text: '视频标题热词', left: 'center'},
    xAxis: {
        name: '热度',
        nameLocation: 'middle'
        },
    yAxis: {
        type: 'category',
        name: '热词',
        nameLocation: 'end',
        axisLabel: {
                margin: 3
            }
        },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 20,
        max: 70,
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
    var myChart = echarts.init(document.getElementById('lt4'),"light").setOption(option_lt4)
    var myChart = echarts.init(document.getElementById('ld4'),"light").setOption(option_ld4)
    var myChart = echarts.init(document.getElementById('md4'),"light").setOption(option_md4)
    var myChart = echarts.init(document.getElementById('mt4'),"light").setOption(option_mt4)
    var myChart = echarts.init(document.getElementById('rd4'),"light").setOption(option_rd4)
    var myChart = echarts.init(document.getElementById('rt4'),"light").setOption(option_rt4)
});
