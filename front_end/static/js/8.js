//左上
var data_lt7 = [112798, 1154, 626, 488, 433, 311, 345, 238, 202, 182, 189, 162, 188, 236, 186, 201, 140, 161, 147, 157, 148, 142, 172, 192];
var level_lt7 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt7 = {
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
            data: level_lt7,
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
            max: 1500,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 1500,
            interval: 500,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt7
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt7,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld7 = [
 ['', '投稿数量', '弹幕数量'],
            ['1-2h', 2615, 63345],
            ['2-3h', 2246, 36775],
            ['3-4h', 2241, 20298],
            ['4-5h', 2127, 11620],
            ['5-6h', 1789, 7877],
            ['6-7h', 1523, 7106],
            ['7-8h', 1548, 12333],
            ['8-9h', 1707, 23098],
            ['9-10h', 2948, 35297],
            ['10-11h', 5281, 44984],
            ['11-12h', 8734, 52998],
            ['12-13h', 8782, 59013],
            ['13-14h',7102,78540],
            ['14-15h',6952,69113],
            ['15-16h',8833,53422],
            ['16-17h',10051,51415],
            ['17-18h',10022,55795],
            ['18-19h',10088,66279],
            ['19-20h',7940,79992],
            ['20-21h',8028,83327],
            ['21-22h',8975,86025],
            ['22-23h',7982,91324],
            ['23-24h',10679,178010],
        ]

option_ld7 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld7
    },
    title: {text: '投稿时间分部'},
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
option_mt7 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 3555],
            [0.1, 4019],
            [0.15, 3588],
            [0.2, 4512],
            [0.25, 4248],
            [0.3, 4837],
            [0.35, 5927],
            [0.4, 5691],
            [0.45,5546],
            [0.5,7312],
            [0.55,20899],
            [0.6,5432],
            [0.65,5327],
            [0.7,5710],
            [0.75,6078],
            [0.8,5301],
            [0.85,5949],
            [0.9,7244],
            [0.95,6299],
            [1,9316]   
        ]
    },
    title: {text: '弹幕情感分析', left: 'center'},
    xAxis: {
        name: '情感倾向',
        nameLocation: 'middle',
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
option_md7 = {
    tooltip: {},
    legend: {
        data: ['中国是GDP大国','小学语文课本','国防部']
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
           { name: '播放数', max: 2000000},
           { name: '点赞数', max: 170000},
           { name: '收藏数', max: 100000},
           { name: '弹幕数', max: 15000},
           { name: '评论数', max: 12000},
        ]
    },
    title: {text: '最热视频雷达图', left: 'center', top: 'bottom'},
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [1891525, 70000, 17674, 0, 7207],
                name : '中国是GDP大国'
            },
            {
                value : [1693922, 162000, 95000, 14000, 11515],
                name : '小学语文课本'
            },
            {
                value : [1685280, 38000, 9382, 4508, 5351],
                name : '国防部'
            }
        ]
    }]
};

//右上
var data_rt7 = [[99, 90, 1693922.0, '-阿健-'],[92, 93, 1624334.0, 'RealChubbyemu'],[72, 37, 1447396.0, '哔哩哔哩弹幕网'],[75, 22, 1101018.0, '丨一缕青烟丨'],[62, 94, 818217.5, '齐天大肾余潇洒'],[48, 44, 592128.5, '芳斯塔芙'],[74, 45, 578281.0, '丶Tmz丶'],[0, 75, 550240.67, '树根龙门阵'],[93, 27, 549533.0, '大乔617'],[84, 58, 508362.5, '凹凸赛克'],[33, 39, 481504.0, '不苦豆沙'],[54, 27, 437381.0, '小米公司'],[42, 76, 416073.0, '蓝火dadada'],[51, 89, 409605.0, '都市夜魔人'],[83, 1, 404409.0, '人间杂货铺'],[71, 65, 395744.0, '好奇五先生'],[78, 98, 385923.0, '太阳照常升起0424'],[47, 36, 381046.0, '萧十1狼'],[63, 79, 369062.0, '奇思大探索'],[52, 13, 361102.0, '数据库kira']];

option_rt7 = {
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
        data: data_rt7,
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
option_rd7 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [67.67, 6767, '教程'],
            [53.04, 5304, '视频'],
            [47.4, 4704, '考研'],
            [28.9, 2890, '基础'],
            [26.77, 2677, '数学'],
            [24.39, 2439, '制作'],
            [23.2, 2320, '教学'],
            [18.65, 1865, '老师'],
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
        nameLocation: 'end',
        
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
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
    var myChart = echarts.init(document.getElementById('lt7'),"light").setOption(option_lt7)
    var myChart = echarts.init(document.getElementById('ld7'),"light").setOption(option_ld7)
    var myChart = echarts.init(document.getElementById('mt7'),"light").setOption(option_mt7)
    var myChart = echarts.init(document.getElementById('md7'),"light").setOption(option_md7)
    var myChart = echarts.init(document.getElementById('rt7'),"light").setOption(option_rt7)
    var myChart = echarts.init(document.getElementById('rd7'),"light").setOption(option_rd7)
});
