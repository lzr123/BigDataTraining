//左上
var data_lt11 = [4000, 100, 140, 100, 30, 50, 200, 179, 200, 255, 78, 112, 109, 87, 130, 100, 30, 50, 200, 25, 20, 28, 15, 11];
var level_lt11 = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h',];
option_lt11 = {
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
            data:data_lt11
        },
        {
            name:'过审时间人数',
            type:'line',
            yAxisIndex: 1,
            data:data_lt11,
            color: 'rgb(255,216,92)'
        }
    ]
};

//左下
var data_ld11 = [
            ['', '投稿数量', '弹幕数量'],
            ['1-2h', 1154, 18547],
            ['2-3h', 989, 14547],
            ['4-5h', 845, 12547],
            ['5-6h', 954, 7547],
            ['6-7h', 1240, 6547],
            ['7-8h', 1368, 7547],
            ['8-9h', 1395, 8245],   
            ['9-10h', 1424, 22687],
            ['10-11h', 1547, 24587],
            ['11-12h', 1694, 26571],
            ['12-13h', 1754, 30021],
            ['13-14h', 1874, 38021],
            ['14-15h', 1654, 36521],
            ['16-17h', 1598, 32047],
            ['17-18h', 1547, 27548],
            ['18-19h', 1157, 33547],
            ['19-20h', 1265, 36547],
            ['20-21h', 1357, 37541],
            ['21-22h', 1487, 38451],
            ['22-23h', 1574, 41054],
            ['23-24h', 3021, 48021],
        ]

option_ld11 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: data_ld11
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
option_mt11 = {
    dataset: {
        source: [
            ['score', 'emotion'],
            [0.05, 3750],
            [0.1, 2432],
            [0.15, 3412],
            [0.2, 4543],
            [0.25, 3456],
            [0.3, 3768],
            [0.35, 4523],
            [0.4, 4785],
            [0.45,5546],
            [0.5,6722],
            [0.55,18423],
            [0.6,27512],
            [0.65,8012],
            [0.7,6752],
            [0.75,6078],
            [0.8,5310],
            [0.85,4752],
            [0.9,8423],
            [0.95,7853],
            [1,8226]
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
option_md11 = {
    tooltip: {},
    legend: {
        data: ['教你快速毁灭黑头', '有手就会扎', '瘦腿系列']
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
           { name: '播放数', max: 450000},
           { name: '点赞数', max: 30000},
           { name: '收藏数', max: 40000},
           { name: '弹幕数', max: 40000},
           { name: '评论数', max: 2000},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [402000, 16000, 25000, 35000, 1903],
                name : '教你快速毁灭黑头'
            },
            {
                value : [206000, 27000, 34000, 28500, 976],
                name : '有手就会扎'
            },
            {
                value : [121000, 5802, 22000, 21000, 459],
                name : '瘦腿系列'
            }
        ]
    }]
};

//右上

var data_rt11 = [
[45, 51, 2065099.5, '机智的党妹'],[76, 90, 1090729.5, '一夜北风吹'],[12, 96, 621993.0, '-獄龍-'],[6, 21, 600689.0, '假美食po主'],
[19, 52, 552517.0, '活蹦乱跳的肥曈'],[16, 49, 529328.5, 'zettaranc'],[0, 57, 454293.2, 'nya酱的一生'],[12, 7, 444598.5, '帅奇Fit'],
[65, 16, 419374.0, '幽熙_Fairy'],[93, 85, 412047.0, 'CuteYuri-尤里姐姐'],[32, 17, 408690.0, '梁耀燮的后妈粉'],[28, 12, 387091.0, '游在森林的鱼啦'],
[41, 79, 368338.0, '灵子犀'],[25, 74, 346754.5, '帅soserious'],[34, 6, 342840.6, '周六野Zoey'],[45, 2, 330887.0, '视角姬'],
[20, 12, 319284.6, '宝剑嫂'],[18, 53, 313345.5, '朵朵花林'],[26, 40, 301961.33, 'o小庄o'],[76, 34, 297265.0, '不会骑马的健身少年']

];

option_rt11 = {
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
        data: data_rt11,
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
option_rd11 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [99.1, 99114, '美妆'],
            [84.5, 84524, '服饰'],
            [74.4, 74451, '小腿'],
            [50.1, 50175, '健身'],
            [42.8, 42838, 'T台'],
            [30.5, 30564, '汉服'],
            [24.5, 24575, '搭配'],
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
    var myChart = echarts.init(document.getElementById('lt11'),"light").setOption(option_lt11)
    var myChart = echarts.init(document.getElementById('ld11'),"light").setOption(option_ld11)
    var myChart = echarts.init(document.getElementById('mt11'),"light").setOption(option_mt11)
    var myChart = echarts.init(document.getElementById('md11'),"light").setOption(option_md11)
    var myChart = echarts.init(document.getElementById('rt11'),"light").setOption(option_rt11)
    var myChart = echarts.init(document.getElementById('rd11'),"light").setOption(option_rd11)
});
