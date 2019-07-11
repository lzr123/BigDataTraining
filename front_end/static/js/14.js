//左上
var data_lt13 = [9000, 2700, 2400, 2100, 2165, 1980, 2015, 1845, 1755, 1654, 1700, 1507, 1309, 1608, 1208, 988, 978, 1005, 877, 799, 754, 721, 655, 200];
var level_lt13 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt13 = {
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
            max: 5000,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 5000,
            interval: 500,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt13
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt13,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld13 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 984, 110054],
            ['2-3h', 1021, 87014],
            ['4-5h', 781, 64548],
            ['5-6h', 654, 42561],
            ['6-7h', 791, 35444],
            ['7-8h', 1021, 41004],
            ['8-9h', 1154, 51427],
            ['9-10h', 1357, 69814],
            ['10-11h', 1554, 91014],
            ['11-12h', 1674, 114572],
            ['12-13h', 1457, 124547],
            ['13-14h', 1364, 145874],
            ['14-15h', 1457, 184574],
            ['16-17h', 1524, 215478],
            ['17-18h', 1201, 164587],
            ['18-19h', 1435, 154878],
            ['19-20h', 1534, 175487],
            ['20-21h', 1671, 187847],
            ['21-22h', 1824, 195487],
            ['22-23h', 1924, 215474],
            ['23-24h', 2841, 375474],
        ]

option_ld13 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld13
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
option_mt13 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 8956],
            [0.1, 8952],
            [0.15, 8452],
            [0.2, 7923],
            [0.25, 7635],
            [0.3, 7989],
            [0.35, 8056],
            [0.4, 9004],
            [0.45,10004],
            [0.5,10368],
            [0.55,35982],
            [0.6,10585],
            [0.65,8956],
            [0.7,7065],
            [0.75,8712],
            [0.8,7044],
            [0.85,7972],
            [0.9,8077],
            [0.95,9008],
            [1,9785]
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
option_md13 = {
    tooltip: {},
    legend: {
        data: ['暴走大事件', '白客 vlog', 'bilibili十周年']
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
           { name: '播放数', max: 2300000},
           { name: '点赞数', max: 120000},
           { name: '收藏数', max: 100000},
           { name: '弹幕数', max: 350000},
           { name: '评论数', max: 8000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [1300000, 98000, 21000, 335000, 4483],
                name : '暴走大事件'
            },
            {
                value : [1480000, 73000, 13000, 221000, 3259],
                name : '白客 vlog'
            },
            {
                value : [2240000, 113000, 98000, 321000, 6760],
                name : 'bilibili十周年'
            }
        ]
    }]
};

//
//右上

var data_rt13 = [
    [48, 9, 1480571.33, '暴走漫画'],[74, 65, 1254943.0, '芝语心'],[99, 4, 1233502.0, 'CristianoR柒'],[20, 88, 1162470.0, '讨厌肉爱吃青菜'],
    [39, 79, 769095.0, '哔哩哔哩弹幕网'],[70, 76, 711127.5, '-克里辛-'],[23, 25, 674737.0, '要脸哥'],[33, 75, 674036.0, '泉山的农夫'],
    [36, 38, 655286.0, '唠不停的哔哔机'],[94, 49, 646658.0, '扬小帆儿'],[94, 38, 628823.0, '美食作家王刚R'],[36, 8, 626608.0, '小幻酱吖'],
    [37, 82, 563817.0, 'szshdj'],[71, 85, 560000.0, '辣醬君'],[19, 50, 530976.0, '天涯共此时官方'],[17, 26, 522564.0, '东方小鬼头'],
    [82, 87, 520783.67, '游乐王子-袁奇峰'],[79, 92, 495535.0, '卿字早醒侬自梦'],[60, 80, 491180.0, '英语演讲视频精选'],[21, 11, 487289.0, '一只猫的旅行日记']
];

option_rt13 = {
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
        data: data_rt13,
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
option_rd13 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [95.7, 95212, '综艺'],
            [75.6, 75654, '说过'],
            [74.4, 74432, '神仙'],
            [55.1, 55167, '歌曲'],
            [40.2, 40235, '劲爆'],
            [29.6, 29646, '韩国'],
            [12.3, 12352, '夜店'],
            // [10.6, 101852, '蔡徐坤'],
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
    var myChart = echarts.init(document.getElementById('lt13'),"light").setOption(option_lt13)
    var myChart = echarts.init(document.getElementById('ld13'),"light").setOption(option_ld13)
    var myChart = echarts.init(document.getElementById('mt13'),"light").setOption(option_mt13)
    var myChart = echarts.init(document.getElementById('md13'),"light").setOption(option_md13)
    var myChart = echarts.init(document.getElementById('rt13'),"light").setOption(option_rt13)
    var myChart = echarts.init(document.getElementById('rd13'),"light").setOption(option_rd13)
});
