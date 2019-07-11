//左上
var data_lt8 = [24627, 781, 274, 134, 98, 84, 70, 47, 55, 50, 53, 47, 54, 67, 49, 53, 56, 51, 47,50,48,55,45,40];
var level_lt8 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt8 = {
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
            data: level_lt8,
            name: '时间',
            nameLocation: 'middle',
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            interval: 200,
            max: 1000,
            min: 0,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            interval: 200,
            max: 1000,
            min: 0,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt8
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt8,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld8 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 687, 63344/2],
            ['2-3h', 656, 36774/2],
            ['3-4h', 634, 20298/2],
            ['4-5h', 559, 11620/2],
            ['5-6h', 430, 7874/2],
            ['6-7h', 399, 7106/2],
            ['7-8h', 452, 12334/2],
            ['8-9h', 675, 23098/2],
            ['9-10h', 1067,35298/2],
            ['10-11h', 1488,44984/2],
            ['11-12h', 1444,52998/2],
            ['12-13h',1519, 59012/2],
            ['13-14h',1430,78540/2],
            ['14-15h',1607,69112/2],
            ['15-16h',1817,53422/2],
            ['16-17h',1835,51410/2],
            ['17-18h',2017,55792/2],
            ['18-19h',2001,66278/2],
            ['19-20h',1997,79992/2],
            ['20-21h',1965,83328/2],
            ['21-22h',1727,86026/2],
            ['22-23h',2254,91324/2],
            ['23-24h',2509,178010/2],
        ]

option_ld8 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld8
    },
    title: {text: '投稿时间分布'},
    xAxis: {
        type: 'category',
        name: '时间段',
        nameLocation: 'center',
    },
    yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        axisLabel: {
            formatter: function(v) {
                if(v == 0)
                    return v;
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
option_mt8 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 2248],
            [0.1, 2493],
            [0.15, 2373],
            [0.2, 2586],
            [0.25, 2452],
            [0.3, 3096],
            [0.35, 3830],
            [0.4, 3316],
            [0.45,3016],
            [0.5,4389],
            [0.55,13572],
            [0.6,2849],
            [0.65,2662],
            [0.7,3063],
            [0.75,3208],
            [0.8,2535],
            [0.85,2700],
            [0.9,3379],
            [0.95,2754],
            [1,3523]   
        ]
    },
    title: {text: '弹幕情感分析', left: 'center'},
    xAxis: {
        name: '情感倾向',
        nameLocation: 'center'
    },
    yAxis: {
        type: 'value',
        name: '数量',
        interval: 5000,
        axisLabel: {
            formatter: function(v) {
                if(v == 0)
                    return v;
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
option_md8 = {
    tooltip: {},
    legend: {
        data: ['5G的真实体验', '笔记本选购全攻略！', '华为突传大消息']
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
           { name: '播放数', max: 10200000},
           { name: '点赞数', max: 2620000},
           { name: '收藏数', max: 600000},
           { name: '弹幕数', max: 120000},
           { name: '评论数', max: 45000},
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [10187402, 1541000, 595422, 116000, 44079],
                name : '5G的真实体验'
            },
            {
                value : [1591358, 2617932, 282041, 13000, 10975],
                name : '笔记本选购全攻略！'
            },
            {
                value : [1584218, 47223,  15992, 17503, 7325],
                name : '华为突传大消息'
            }
        ]
    }]
};


//右上
var data_rt8 = [[85, 76, 10187402.0, '老师好我叫何同学'],[49, 87, 1584218.0, 'BoscoZ'],[6, 71, 1187443.0, '宇宙里的微尘'],[97, 81, 948924.0, '与安菌'],[95, 57, 818571.0, '月の哀伤avalon'],[22, 45, 726634.0, 'ChenShi阿浩'],[0, 93, 594977.0, '王跃琨_Septillion'],[16, 29, 575078.67, '熊猫P4ND4'],[74, 3, 527439.0, 'Miyuko'],[68, 80, 520963.0, '脑洞节天天过'],[88, 68, 455743.0, '横店军少vlog'],[72, 79, 371433.0, '_鼻屎拌饭加个蛋'],[31, 31, 356860.75, '短的发布会'],[94, 8, 353511.0, '阿狸才不是受'],[71, 34, 348248.0, 'STN工作室'],[99, 17, 332051.0, '挽鸽只卖六枚硬币'],[98, 91, 326736.0, '闻香识'],[41, 48, 312444.5, '古月妹纸i'],[88, 52, 290431.78, '远古时代装机猿'],[65, 94, 283104.0, '我是松松松']];
option_rt8 = {
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
        show: false,
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
        data: data_rt8,
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
option_rd8 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [33.83, 3383, '开箱'],
            [22.85, 2285, '手机'],
            [17.40, 1740, '小米'],
            [16.37, 1637, '体验'],
            [11.68, 1168, '苹果'],
            [11.29, 1129, '测试'],
            [8.19, 819, '评测'],
            [7.71,771, '摄影'],
            [7.14, 714, '电脑'],
        ]
    },
    title: {text: '视频标题热词', left: 'center'},
    xAxis: {
        name: '数量',
        nameLocation: 'middle',
    },
    yAxis: {
        type: 'category',
        name: '热词',
        nameLocation: 'end'
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 7,
        max: 40,
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
    var myChart = echarts.init(document.getElementById('lt8'),"light").setOption(option_lt8)
    var myChart = echarts.init(document.getElementById('ld8'),"light").setOption(option_ld8)
    var myChart = echarts.init(document.getElementById('mt8'),"light").setOption(option_mt8)
    var myChart = echarts.init(document.getElementById('md8'),"light").setOption(option_md8)
    var myChart = echarts.init(document.getElementById('rt8'),"light").setOption(option_rt8)
    var myChart = echarts.init(document.getElementById('rd8'),"light").setOption(option_rd8)
});
