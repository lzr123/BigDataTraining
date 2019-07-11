//左上
var data_lt12 = [800, 34, 43, 25, 29, 18, 17, 19, 12, 15, 17, 18, 11, 16, 20, 10, 8, 9, 6, 7, 7, 8, 5, 2];
var level_lt12 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt12 = {
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
            max: 50,
            interval: 500,
            show: false
        },
        {
            type: 'value',
            name: '过审时间人数',
            min: 0,
            max: 50,
            interval: 500,
        }
    ],
    series: [
        {
            name:'过审时间人数',
            type:'bar',
            data:data_lt12
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt12,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld12 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 294, 3102],
            ['2-3h', 287, 2751],
            ['4-5h', 243, 2100],
            ['5-6h', 164, 1605],
            ['6-7h', 187, 1805],
            ['7-8h', 264, 2300],
            ['8-9h', 287, 2547],
            ['9-10h', 275, 2694],
            ['10-11h', 275, 2814],
            ['11-12h', 301, 3150],
            ['12-13h', 354, 4200],
            ['13-14h', 387, 4700],
            ['14-15h', 324, 4300],
            ['16-17h', 287, 3945],
            ['17-18h', 312, 3414],
            ['18-19h', 289, 3142],
            ['19-20h', 310, 3714],
            ['20-21h', 329, 4157],
            ['21-22h', 342, 4287],
            ['22-23h', 357, 4357],
            ['23-24h', 615, 9051],
        ]

option_ld12 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld12
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
option_mt12 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 3785],
            [0.1, 5444],
            [0.15, 5624],
            [0.2, 5641],
            [0.25, 5621],
            [0.3, 4668],
            [0.35, 5927],
            [0.4, 5623],
            [0.45,8123],
            [0.5,7862],
            [0.55,28646],
            [0.6,3234],
            [0.65,6233],
            [0.7,4568],
            [0.75,6078],
            [0.8,4856],
            [0.85,5623],
            [0.9,6244],
            [0.95,8299],
            [1,10316]
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
option_md12 = {
    tooltip: {},
    legend: {
        data: ['小罗伯特·唐尼', '奥丹姆奇兵宣传片', '迷之广告']
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
           { name: '播放数', max: 117000},
           { name: '点赞数', max: 6500},
           { name: '收藏数', max: 900},
           { name: '弹幕数', max: 40000},
           { name: '评论数', max: 300},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [107000, 5696, 754, 35000, 280],
                name : '小罗伯特·唐尼'
            },
            {
                value : [65000, 1029, 782, 21000, 261],
                name : '奥丹姆奇兵宣传片'
            },
            {
                value : [34000, 1348, 334, 14000, 138],
                name : '迷之广告'
            }
        ]
    }]
};


//右上
var data_rt12 = [[65, 26, 330568.0, '小丶霞'],[95, 96, 93643.0, '李老鼠说车'],[10, 90, 87053.0, '混混噩噩的废柴咸鱼'],[23, 91, 66898.0, '爱否科技FView'],
[0, 15, 57863.33, '喜仔的世界'],[27, 44, 40914.67, 'HuayTV'],[94, 95, 37696.0, 'CotheTee'],[14, 43, 35281.0, 'i皮诺曹儿'],
[30, 81, 32908.0, '共青团中央'],[99, 89, 32590.0, 'Insta360全景相机'],[29, 28, 26907.0, '冒险雷探长'],[82, 28, 24604.0, '深海色带鱼'],
[18, 28, 23574.0, '商业小纸条'],[5, 70, 21930.6, '华为终端'],[13, 15, 20472.0, '穷的叮当不响'],[96, 64, 20042.0, '是银不是颖'],
[3, 61, 19798.0, '约定ザ'],[98, 92, 19159.0, '大宝子肉不肉'],[51, 4, 18777.0, '老张与叮叮'],[47, 97, 18096.67, '希望日渐消瘦']
];

option_rt12 = {
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
        data: data_rt12,
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 10;
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
option_rd12 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 89357, '脑洞'],
            [77.1, 78254, '公益'],
            [54.4, 53219, '宣传'],
            [50.1, 50139, '感人'],
            [45.5, 45598, '短片'],
            [36.1, 36198, '科技'],
            [15.3, 15398, '盛世'],
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
    var myChart = echarts.init(document.getElementById('lt12'),"light").setOption(option_lt12)
    var myChart = echarts.init(document.getElementById('ld12'),"light").setOption(option_ld12)
    var myChart = echarts.init(document.getElementById('mt12'),"light").setOption(option_mt12)
    var myChart = echarts.init(document.getElementById('md12'),"light").setOption(option_md12)
    var myChart = echarts.init(document.getElementById('rt12'),"light").setOption(option_rt12)
    var myChart = echarts.init(document.getElementById('rd12'),"light").setOption(option_rd12)
});
