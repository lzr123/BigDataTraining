//左上
var data_lt10 = [5923, 222, 95, 74, 64, 71, 69, 62, 57, 60, 35,29,30,27,23, 26, 21, 19, 25, 21, 30, 28, 30, 33];
var level_lt10 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt10 = {
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
            max: 300,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 300,
            interval: 500,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt10
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt10,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld10 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 2615/10, 63345/5],
            ['2-3h', 2246/10, 36775/5],
            ['3-4h', 2241/10, 20290/5],
            ['4-5h', 2127/10, 11620/5],
            ['5-6h', 1789/10, 7875/5],
            ['6-7h', 1523/10, 7100/5],
            ['7-8h', 1548/10, 12335/5],
            ['8-9h', 1707/10, 23090/5],
            ['9-10h', 2948/10, 35290/5],
            ['10-11h', 5281/10, 44980/5],
            ['11-12h', 8734/10, 52990/5],
            ['12-13h', 8782/10, 59015/5],
            ['13-14h',7102/10,78540/5],
            ['14-15h',6952/10,69115/5],
            ['15-16h',8833/10,53440/5],
            ['16-17h',10051/10,51415/5],
            ['17-18h',10022/10,55795/5],
            ['18-19h',10088/10,66270/5],
            ['19-20h',7940/10,79990/5],
            ['20-21h',8028/10,83320/5],
            ['21-22h',8975/10,86025/5],
            ['22-23h',7982/10,91325/5],
            ['23-24h',10679/10,178010/5],
        ]

option_ld10 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld10
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
    series: [
        {type: 'bar'},
        {type: 'bar'},
    ]
};

//中上
option_mt10 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 1222],
            [0.1, 2184],
            [0.15, 1999],
            [0.2, 2075],
            [0.25, 2155],
            [0.3, 2735],
            [0.35, 3085],
            [0.4, 3107],
            [0.45,3214],
            [0.5,4552],
            [0.55,16788],
            [0.6,4456],
            [0.65,3310],
            [0.7,3326],
            [0.75,3908],
            [0.8,3536],
            [0.85,4528],
            [0.9,5768],
            [0.95,3499],
            [1,11787]   
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
option_md10 = {
    tooltip: {},
    legend: {
        data: ['游乐王子', '特殊的辩论技巧', '采访第一个出考场的同学']
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
           { name: '播放数', max: 7400000},
           { name: '点赞数', max: 280000},
           { name: '收藏数', max: 167000},
           { name: '弹幕数', max: 15000},
           { name: '评论数', max: 7300},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [7372227, 102000, 122584, 13952, 6720],
                name : '游乐王子'
            },
            {
                value : [3560543, 270019, 166655, 14737, 7200],
                name : '特殊的辩论技巧'
            },
            {
                value : [3519654, 168123, 84111, 5519, 1956],
                name : '采访第一个出考场的同学'
            }
        ]
    }]
};

//右上
var data_rt10 = [[40, 77, 7372227.0, '满江红红'],[61, 12, 3560543.0, '伊丽莎白鼠'],[46, 35, 2665960.0, '豪言の经理'],[42, 32, 2572541.0, 'AB鲜'],[75, 64, 2085859.0, '小卡塔克'],[72, 16, 1848112.0, '用户名未填写'],[66, 71, 1839462.0, '6老铁2333'],[88, 52, 1360680.5, '潮汕好男人'],[62, 75, 1064922.0, '吃我鲁莽挥击啦'],[54, 5, 942917.0, '泽野螳螂'],[20, 6, 890205.0, '瞬间爆炸型LowSing'],[61, 3, 876880.75, '白熊ONEヽ'],[62, 9, 850211.0, '绝地科学茶'],[29, 7, 796750.0, '轴心S'],[90, 33, 776327.0, '深海色带鱼'],[23, 14, 740818.0, 'Snowf_Ake'],[37, 86, 730387.5, '枪弹轨迹'],[47, 79, 714097.5, '小可儿'],[7, 90, 688192.0, '波多狸'],[32, 3, 682426.0, '冷奶酪']];
option_rt10 = {
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
        data: data_rt10,
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
option_rd10 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [90.1, 901, '鬼畜'],
            [79.7, 797, '耳光'],
            [71.3, 713, '音乐'],
            [61.7, 617, '枪声'],
            [23.1, 231, '考场'],
            [16.4, 164, '洗脑'],
            [14.4,144, '游乐'],
            [13.8,138,'方舟'],
            [12.4,124,'哲学'],
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
        min: 11,
        max: 91,
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
    var myChart = echarts.init(document.getElementById('lt10'),"light").setOption(option_lt10)
    var myChart = echarts.init(document.getElementById('ld10'),"light").setOption(option_ld10)
    var myChart = echarts.init(document.getElementById('mt10'),"light").setOption(option_mt10)
    var myChart = echarts.init(document.getElementById('md10'),"light").setOption(option_md10)
    var myChart = echarts.init(document.getElementById('rt10'),"light").setOption(option_rt10)
    var myChart = echarts.init(document.getElementById('rd10'),"light").setOption(option_rd10)
});
