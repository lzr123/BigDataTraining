//左上
var data_lt9 = [124014, 1631, 868, 705,591, 500, 490, 484, 476, 461, 449, 437, 425, 412, 404, 395, 381, 367, 350, 326, 272, 301, 293, 276];
var level_lt9 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt9 = {
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
            max: 1700,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 1700,
            interval: 500,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt9
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt9,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld9 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 687*3, 63344/2],
            ['2-3h', 656*3, 36774/2],
            ['3-4h', 634*3, 20298/2],
            ['4-5h', 559*3, 11620/2],
            ['5-6h', 430*3, 7874/2],
            ['6-7h', 399*3, 7106/2],
            ['7-8h', 452*3, 12334/2],
            ['8-9h', 675*3, 23098/2],
            ['9-10h', 1067*3,35298/2],
            ['10-11h', 1488*3,44984/2],
            ['11-12h', 1444*3,52998/2],
            ['12-13h',1519*3, 59012/2],
            ['13-14h',1430*3,78540/2],
            ['14-15h',1607*3,69112/2],
            ['15-16h',1817*3,53422/2],
            ['16-17h',1835*3,51410/2],
            ['17-18h',2017*3,55792/2],
            ['18-19h',2001*3,66278/2],
            ['19-20h',1997*3,79992/2],
            ['20-21h',1965*3,83328/2],
            ['21-22h',1727*3,86026/2],
            ['22-23h',2254*3,91324/2],
            ['23-24h',2509*3,178010/2],
        ]

option_ld9 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld9
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
option_mt9 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 1510],
            [0.1, 2184],
            [0.15, 1927],
            [0.2, 2575],
            [0.25, 2355],
            [0.3, 2735],
            [0.35, 3085],
            [0.4, 3107],
            [0.45,3214],
            [0.5,4552],
            [0.55,14912],
            [0.6,3356],
            [0.65,3310],
            [0.7,3326],
            [0.75,3908],
            [0.8,3516],
            [0.85,3528],
            [0.9,6468],
            [0.95,3799],
            [1,10787]   
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
        interval: 5000,
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
option_md9 = {
    tooltip: {},
    legend: {
        data: ['高考提前交卷',
                '摸仙堡的方言',
                 '试吃皇帝蟹']
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
           { name: '播放数', max: 6650000},
           { name: '点赞数', max: 2380000},
           { name: '收藏数', max: 150000},
           { name: '弹幕数', max: 50090},
           { name: '评论数', max: 176000},
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [6649677, 72345, 35389, 20068, 17504],
                name : '高考提前交卷'
            },
            {
                value : [5800749, 2080112, 149125, 5491, 5673],
                name : '摸仙堡的方言'
            },
            {
                value : [4739365, 2371234, 47280, 50803, 8714],
                name : '试吃皇帝蟹'
            }
        ]
    }]
};

//右上
var data_rt9 = [[10, 5, 4442928.0, '云紫Sama'],[85, 11, 3573361.0, '罗汉解说'],[83, 13, 3407682.0, '老番茄'],[4, 6, 2907873.5, '挡到我的鸭肠了'],[0, 48, 2374039.2, '信誓蛋蛋'],[81, 66, 2267677.0, 'Morninglee丶a'],[10, 47, 2085608.44, '翔翔大作战'],[95, 97, 2040704.88, '大祥哥来了'],[27, 12, 1972803.5, '快乐白郎'],[35, 0, 1812624.0, '点滴菌'],[61, 31, 1764726.5, '刘美含Mikan'],[63, 52, 1733960.0, '手工耿'],[14, 31, 1724862.67, '华农兄弟'],[73, 8, 1714157.0, '不自觉演员栋子'],[51, 39, 1587350.0, '许笑生'],[40, 67, 1580495.0, 'papi酱'],[1, 76, 1507400.5, '花花与三猫CatLive'],[87, 9, 1489686.0, '蚀血之暗'],[33, 23, 1326741.0, '老书衣'],[74, 21, 1317681.0, '浮生梦黄梁']];
option_rt9 = {
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
        show: false,
        scale: true
    },
    series: [{
        name: '活跃Up主',
        data: data_rt9,
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
option_rd9 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [40.18, 4018, '教程'],
            [24.56, 2456, '绘画'],
            [22.65, 2265, '开箱'],
            [20.85, 2085, '沙雕'],
            [20.81, 2081, '过程'],
            [18.81, 1881, '水彩'],
            [16.26, 1626, '手账'],
            [14.92, 1492, '挑战'],
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
        min: 41,
        max: 13,
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
    var myChart = echarts.init(document.getElementById('lt9'),"light").setOption(option_lt9)
    var myChart = echarts.init(document.getElementById('ld9'),"light").setOption(option_ld9)
    var myChart = echarts.init(document.getElementById('mt9'),"light").setOption(option_mt9)
    var myChart = echarts.init(document.getElementById('md9'),"light").setOption(option_md9)
    var myChart = echarts.init(document.getElementById('rt9'),"light").setOption(option_rt9)
    var myChart = echarts.init(document.getElementById('rd9'),"light").setOption(option_rd9)
});
