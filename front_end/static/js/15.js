//左上
var data_lt14 = [5100, 1100, 1008, 1200, 905, 902, 702, 610, 502, 570, 622, 401, 430, 310, 360, 210, 112, 124, 87, 79, 47, 46, 37, 32];
var level_lt14 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt14 = {
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
            data: level_lt9,
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
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt14
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt14,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld14 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 864, 14221],
            ['2-3h', 910, 87014],
            ['4-5h', 864, 54548],
            ['5-6h', 781, 32561],
            ['6-7h', 812, 25444],
            ['7-8h', 912, 37004],
            ['8-9h', 1211, 51427],
            ['9-10h', 1356, 72814],
            ['10-11h', 1654, 84014],
            ['11-12h', 1425, 104572],
            ['12-13h', 1265, 114547],
            ['13-14h', 1184, 125874],
            ['14-15h', 1354, 154574],
            ['16-17h', 1475, 185478],
            ['17-18h', 1698, 164587],
            ['18-19h', 1247, 154878],
            ['19-20h', 1364, 154547],
            ['20-21h', 1495, 131547],
            ['21-22h', 1785, 154871],
            ['22-23h', 1754, 165487],
            ['23-24h', 2654, 345474],
        ]

option_ld14 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld14
    },
    title: {text: '投稿时间分布'},
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
                if (v == 0)
                    return v
                else 
                    return (v / 1000) + 'k'
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
option_mt14 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 2356],
            [0.1, 3865],
            [0.15, 3567],
            [0.2, 4520],
            [0.25, 4710],
            [0.3, 4802],
            [0.35, 6075],
            [0.4, 7052],
            [0.45,7152],
            [0.5,8007],
            [0.55,18552],
            [0.6,7453],
            [0.65,7005],
            [0.7,6985],
            [0.75,7045],
            [0.8,6098],
            [0.85,6482],
            [0.9,7089],
            [0.95,8644],
            [1,9679]
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
            formatter: function(v) {
                if(v == 0)
                    return v
                else
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
option_md14 = {
    tooltip: {},
    legend: {
        data: ['陈情令', '盛世如你所愿', '反派们的觉醒']
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
           { name: '播放数', max: 2100000},
           { name: '点赞数', max: 250000},
           { name: '收藏数', max: 250000},
           { name: '弹幕数', max: 600000},
           { name: '评论数', max: 8000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [1180000, 101000, 117000, 345000, 7206],
                name : '陈情令'
            },
            {
                value : [2050000, 241000, 201000, 551000, 5987],
                name : '盛世如你所愿'
            },
            {
                value : [360000, 33000, 33000, 31000, 1277],
                name : '反派们的觉醒'
            }
        ]
    }]
};

//右上
var data_rt14 = [
[14, 73, 2126865.0, '请叫我龙小白'],[79, 1, 1694034.0, '俊美的胖次侠'],[52, 39, 1446764.0, '御前带刀厨子'],[99, 21, 1265006.0, '六眼V谈'],
[45, 0, 1138358.0, '你们的男盆友'],[6, 65, 1130964.0, '进进进来了'],[26, 19, 976283.0, '孙丶大大'],[98, 33, 945280.5, '嘻咦啊看'],[
2, 30, 919964.0, 'l李较瘦l'],[71, 16, 857181.0, '冰龙玥'],[71, 1, 824830.57, '开心嘴炮'],[69, 46, 820580.0, '哇哇哇妹'],
[45, 8, 813169.0, '辣目洋子'],[17, 47, 811582.8, '努力的Lorre'],[66, 99, 781128.0, '六六如'],[66, 74, 746918.0, '大炮就是俺樣'],
[82, 22, 694568.0, '墙墙墙墙墙墙贰'],[43, 93, 686965.0, '哔哩哔哩影业'],[26, 59, 681058.4, '刘老师说电影'],[63, 66, 642570.75, '老邪说电影']
];

option_rt14 = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '活跃Up主',
        left: 'center'
    },
    legend: {
        right: 10,
        // data: ['活跃Up主']
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
        data: data_rt14,
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
option_rd14 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [97.3, 97312, '票房'],
            [89.1, 89154, '硬核'],
            [70.6, 70632, '演技'],
            [50.1, 50155, '主角'],
            [36.3, 36351, '感情'],
            [20.6, 20646, '强势'],
            [10.3, 10352, '炸裂'],
            // [10.6, 101852, '蔡徐坤'],
        ]
    },
    title: {text: '视频标题热词', left: 'center'},
    xAxis: {
        type: 'category',
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




$(function(){
    var myChart = echarts.init(document.getElementById('lt14'),"light").setOption(option_lt14)
    var myChart = echarts.init(document.getElementById('ld14'),"light").setOption(option_ld14)
    var myChart = echarts.init(document.getElementById('mt14'),"light").setOption(option_mt14)
    var myChart = echarts.init(document.getElementById('md14'),"light").setOption(option_md14)
    var myChart = echarts.init(document.getElementById('rt14'),"light").setOption(option_rt14)
    var myChart = echarts.init(document.getElementById('rd14'),"light").setOption(option_rd14)
});
