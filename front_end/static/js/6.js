//左上
var data_lt5 = [1754,991,267,186,145,121,101,72,69,65,62,63,60,64,58,52,50,54,56,57,59,60,62,61];
var level_lt5 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt5 = {
    tooltip: {
        // trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#fff'
            }
        }
    },
    title: {text: '过审时间分布'},
    legend: {
        data:['过审时间人数','过审时间人数']
    },
    title: {
        text: '过审时间分布',
    },
    xAxis: [
        {
            type: 'category',
            name: '时间',
            nameLocation: 'middle',
            data: level_lt5,
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                margin: 2
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 1500,
            interval: 150,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 1500,
            interval: 150,
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
            data:data_lt5
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt5,
            color: 'rgb(255,216,92)'
        }
    ]
};



//左下
var data_ld5 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 6472, 414132],
            ['2-3h', 5729, 263615],
            ['3-4h', 5314, 153677],
            ['4-5h', 4994, 92207],
            ['5-6h', 4320, 58588],
            ['6-7h', 3919, 55978],
            ['7-8h', 3057, 96996],
            ['8-9h', 3234, 167538],
            ['9-10h', 4413, 252556],
            ['10-11h', 6858, 310813],
            ['11-12h', 9229, 360352],
            ['12-13h', 8890, 428342],
            ['13-14h',9195,575028],
            ['14-15h',10138,479370],
            ['15-16h',9500,362697],
            ['16-17h',9559,340818],
            ['17-18h',9961,365968],
            ['18-19h',11506,433277],
            ['19-20h',10944,518924],
            ['20-21h',12553,517440],
            ['21-22h',13063,501064],
            ['22-23h',12674,530559],
            ['23-24h',20622,1037409],
        ]

option_ld5 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld5
    },
    title: {
        text: '投稿时间分布'
    },
    xAxis: {
        type: 'category',
        name: '时间段',
        nameLocation: 'middle'
        },
    yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        axisLabel: {
            formatter: function(v) {
                if(v == 0)
                    return v
                else
                    return (v/10000) + '-e4'
            },
            margin: 2
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
option_mt5 = {
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
    title: {
        text: '弹幕情感分析',
        left: 'center'
    },
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
                formatter: function(v) {
                    if(v == 0)
                        return v
                    else
                        return (v/1000) + 'k'
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
option_md5 = {
    tooltip: {},
    legend: {
        data: ['【猛男版】新 宝 岛', '在地铁当众跳舞是什么体验？【欣小萌】', '【Kyokyo】❤小鹿乱撞撞撞撞']
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
            {name: '播放数', max: 2900000},
            {name: '收藏数', max: 150000},
            {name: '弹幕数', max: 8000},
            {name: '评论数', max: 7000},
            {name: '综合', max: 1100000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [2833362, 144271, 7653, 5962, 1044213.8],
                name : '【猛男版】新 宝 岛'
            },
            {
                value : [2011825, 62306, 7630, 6858, 728119.05],
                name : '在地铁当众跳舞是什么体验？【欣小萌】'
            },
            {
                value : [1570621, 45570, 1223, 1725, 566109.05],
                name : '【Kyokyo】❤小鹿乱撞撞撞撞'
            }
        ]
    }]
};


//右上
var data_rt5 = [
    [56, 10, 2832992.0, '果厨果厨果'],[12, 74, 1480141.83, '-欣小萌-'],[31, 78, 967997.25, '=咬人猫='],[82, 76, 850968.13, '一只小仙若'],
    [16, 11, 750975.75, '小巫酱w'],[69, 92, 618805.67, 'Kyokyo'],[92, 63, 578581.0, '王麦麦麦'],[44, 44, 555468.38, 'Tocci椭奇'],
    [5, 30, 446069.0, '添财大大慧'],[78, 10, 444754.0, 'KAYACHANOWO'],[34, 17, 440297.75, '萌爱moi'],[34, 92, 417680.0, '小野妹子w'],
    [55, 92, 414078.0, 'Max张晋'],[35, 52, 386967.5, '两儀雕雕'],[39, 85, 372948.5, '座山雕_WT'],[86, 92, 372365.75, '楽小漫'],
    [70, 52, 367549.83, '_糖小V_'],[96, 71, 358336.5, '小雪_juvia'],[42, 28, 357134.33, '一只小短短'],[77, 56, 347666.0, 'ChunSl']
];


option_rt5 = {
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
        data: data_rt5,
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
option_rd5 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.38, 8938, '舞蹈'],
            [35.62, 3562, '编舞'],
            [25.76, 2576, '街舞'],
            [21.40, 2140, '天空'],
            [14.54, 1454, '老师'],
            [12.80, 1280, '教学'],
            [11.88, 1188, '视频'],
            [10.68, 1068, '毕业'],
        ]
    },
    title: {
        text: '视频标题热词',
        left: 'center'
    },
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
        min: 10,
        max: 90,
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
    var myChart = echarts.init(document.getElementById('lt5'),"light").setOption(option_lt5)
    var myChart = echarts.init(document.getElementById('ld5'),"light").setOption(option_ld5)
    var myChart = echarts.init(document.getElementById('md5'),"light").setOption(option_md5)
    var myChart = echarts.init(document.getElementById('mt5'),"light").setOption(option_mt5)
    var myChart = echarts.init(document.getElementById('rd5'),"light").setOption(option_rd5)
    var myChart = echarts.init(document.getElementById('rt5'),"light").setOption(option_rt5)
});
