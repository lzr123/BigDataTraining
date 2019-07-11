//左上
var data_lt3 = [5301,116,68,34,45,39,13,26,26,18,43,16,18,15,16,15,17,18,16,15,17,16,16,15];
var level_lt3 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];

option_lt3 = {
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
    title: {
        text: '过审时间分布'
    },
    xAxis: [
        {
            type: 'category',
            name: '时间',
            nameLocation: 'middle',
            data: level_lt3,
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
            max: 200,
            interval: 50,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 200,
            interval: 50,
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
            data:data_lt3
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt3,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld3 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 221, 8509],
            ['2-3h', 185, 4648],
            ['3-4h', 158, 2556],
            ['4-5h', 137, 1396],
            ['5-6h', 112, 971],
            ['6-7h', 95, 935],
            ['7-8h', 90, 1753],
            ['8-9h', 121, 3210],
            ['9-10h', 180, 5196],
            ['10-11h', 262, 6702],
            ['11-12h', 489, 7316],
            ['12-13h', 523, 8180],
            ['13-14h',464,11160],
            ['14-15h',396,10513],
            ['15-16h',382,8403],
            ['16-17h',364,7962],
            ['17-18h',428,8475],
            ['18-19h',426,10115],
            ['19-20h',493,12081],
            ['20-21h',434,12791],
            ['21-22h',429,13837],
            ['22-23h',417,14852],
            ['23-24h',632,24967],
        ]

option_ld3 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld3
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
                if (v > 0)
                {
                    return (v/1000) + '-e3';
                }
                else
                {
                    return v;
                }
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
option_mt3 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 248],
            [0.1, 425],
            [0.15, 361],
            [0.2, 460],
            [0.25, 473],
            [0.3, 536],
            [0.35, 619],
            [0.4, 662],
            [0.45,644],
            [0.5,2245],
            [0.55,1218],
            [0.6,763],
            [0.65,785],
            [0.7,826],
            [0.75,1084],
            [0.8,876],
            [0.85,1007],
            [0.9,1528],
            [0.95,1221],
            [1,2972]
        ]
    },
    title: {
        text: '弹幕情感分析',
        left: 'center'
    },
    xAxis: {
        type: 'value',
        name: '情感倾向',
        nameLocation: 'middle'
        },
    yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        interval: 2000,
        axisLabel: {
                margin: 5,
                interval: 0,
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
option_md3 = {
    tooltip: {},
//    title: {
//        text: '火热视频雷达图'
//    },
    legend: {
        data: ['王者？别闹！', '刺客伍六七', '女武神的餐桌']
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
            {name: '播放数', max: 2500000},
            {name: '收藏数', max: 45000},
            {name: '弹幕数', max: 10000},
            {name: '评论数', max: 12000},
            {name: '综合', max: 800000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [2133520, 1076, 6870, 8853, 749467.05],
                name : '王者？别闹！'
            },
            {
                value : [1837645, 40120, 8092, 5416, 659243.95],
                name : '刺客伍六七'
            },
            {
                value : [1140068, 23724, 1524, 11579, 409292.65],
                name : '女武神的餐桌'
            }
        ]
    }]
};

//右上
var data_rt3 = [
    [15,77,2133520,'友人么么哒'],[20,45,1837645,'啊哈娱乐'],[60,10,1140068,'崩坏3第一偶像爱酱'],[54,77,1049339,'罗小黑战记'],
    [47,20,984874.75,'网易阴阳师动画屋'],[43,60,875327,'夏泽Devil'],[80,77,630596.67,'七创社7doc'],[60,68,549028.87,'哔哩哔哩国创'],[33,33,530293,'亚食人'],
    [10,50,401714.2,'北京若森数字'],[44,39,399631,'艾尔十六'],[39,69,356609.78,'中影年年'],[40,78,344181,'奇思Cheers'],[56,22,253369,'绘光灬东方小范'],
    [74,6,237471,'炎央文化'],[88,41,210831.22,'阿衰_online'],[71,88,198276,'小琨爱小蛊'],[10,35,191191.33,'皮蛋小迷弟'],[30,35,185051,'86天堂'],
    [30,55,183465,'知世酱吖'],[56,20,177263.5,'无毒放心奶'],[10,85,176802,'大白兔白不白'],[35,84,167513.5,'国漫宣传君'],[65,37,157734,'荣耀剧组']

];

option_rt3 = {
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
        data: data_rt3,
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
option_rd3 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [90.6, 453, '霹雳'],
            [58.6, 293, '布袋戏'],
            [52.8, 264, '国漫'],
            [45, 245, '歌行'],
            [48.4, 242, '动画'],
            [46.8, 234, '天行'],
            [46.4, 232, '祖师'],
            [46, 230, '漫画'],
        ]
    },
    title: {text: '视频标题热词', left: 'center'},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 20,
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
    var myChart = echarts.init(document.getElementById('lt3'),"light").setOption(option_lt3)
    var myChart = echarts.init(document.getElementById('ld3'),"light").setOption(option_ld3)
    var myChart = echarts.init(document.getElementById('md3'),"light").setOption(option_md3)
    var myChart = echarts.init(document.getElementById('mt3'),"light").setOption(option_mt3)
    var myChart = echarts.init(document.getElementById('rt3'),"light").setOption(option_rt3)
    var myChart = echarts.init(document.getElementById('rd3'),"light").setOption(option_rd3)
});
