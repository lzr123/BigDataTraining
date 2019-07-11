$(function(){
    $('.btn_submit').click(function(){
      window.alert("hehe")
  });
});


$(function(){
    $('#dowebok').fullpage({
        // sectionsColor: ['', '', '', '', '', '', '', '','#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],    
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7','page8','page9','page10','page11','page12','page13','page14','page15','page16',],
        menu: '#menu',
        // loopBottom: true,
        // loopTop: true
        loopHorizontal: false
    });
});

//
// //首页
// // 数量的最小值和最大值，最小值默认为0
// var data_lt = [
//     [0, 12000],
//     [0, 10000],
//     [0, 6500],
//     [0, 5600],
//     [0, 4000],
//     [0, 4000],
//     [0, 4000],
//     [0, 4000],
//     [0, 3500],
//     [0, 3000],
//     [0, 3000],
//     [0, 2700],
//     [0, 2800],
//     [0, 2300],
//     [0, 3500],
// ];
// var cities_lt = ['动画', '番剧', '国创', '音乐', '舞蹈', '游戏', '科技', '数码', '生活', '鬼畜', '时尚', '广告', '娱乐', '影视', '放映厅'];
// var barHeight = 50;
//
// option_lt = {
//     grid: {
//         top: 100
//     },
//     angleAxis: {
//         type: 'category',
//         data: cities_lt
//     },
//     tooltip: {
//         show: true,
//         formatter: function (params) {
//             var id = params.dataIndex;
//             return cities_lt[id] + '<br>数量：' + data_lt[id][1];
//         }
//     },
//     radiusAxis: {
//     },
//     polar: {
//     },
//     series: [{
//         type: 'bar',
//         itemStyle: {
//             normal: {
//                 color: 'transparent'
//             }
//         },
//         data: data_lt.map(function (d) {
//             return d[0];
//         }),
//         coordinateSystem: 'polar',
//         stack: '最大最小值',
//         silent: true
//     }, {
//         type: 'bar',
//         data: data_lt.map(function (d) {
//             return d[1] - d[0];
//         }),
//         coordinateSystem: 'polar',
//         name: '分区数量',
//         stack: '最大最小值'
//     }],
//     legend: {
//         show: true,
//     }
// };


// var data_ld = [700, 500, 400, 100, 300, 50, 100];
// var level_ld = ['0级','1级','2级','3级','4级','5级','6级'];
// option_ld = {
//     tooltip: {
//         // trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             crossStyle: {
//                 color: '#fff'
//             }
//         }
//     },
//     legend: {
//         data:['up主人数','up主人数']
//     },
//     xAxis: [
//         {
//             type: 'category',
//             data: level_ld,
//             axisPointer: {
//                 type: 'shadow'
//             }
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value',
//             name: 'up主人数',
//             min: 0,
//             max: 1000,
//             interval: 100,
//             show: false
//         },
//         {
//             type: 'value',
//             name: 'up主人数',
//             min: 0,
//             max: 1000,
//             interval: 100,
//         }
//     ],
//     series: [
//         {
//             name:'up主人数',
//             type:'bar',
//             data:data_ld
//         },
//         {
//             name:'up主人数',
//             type:'line',
//             yAxisIndex: 1,
//             data:data_ld,
//             color: 'rgb(255,216,92)'
//         }
//     ]
// };

//
// var data_rt = {
//     male: 100,
//     male_vip: 100,
//     female: 110,
//     female_vip: 105,
//     other: 96,
//     other_vip: 106,
// }
// var data_rt_title = ['男','男vip','女','女vip','未知', '未知vip']
// var data_rt_color = {male: "#F45A8D", female: "#00A1D6", other:"#B8C0CC"}
// var data_main = [{
//     value: data_rt.male,
//     name:'男',
//     itemStyle: {
//         color: data_rt_color.male,
//     }},
//     {
//     value:data_rt.male_vip,
//     name:'男vip',
//     itemStyle: {
//         color: data_rt_color.male,
//     }},
//     {
//     value: data_rt.female,
//      name:'女',
//     itemStyle: {
//         color: data_rt_color.female,
//     }},
//     {
//     value: data_rt.female_vip,
//      name: '女vip',
//     itemStyle: {
//         color: data_rt_color.female,
//     }},
//     {
//     value:data_rt.other,
//      name:'未知',
//     itemStyle: {
//         color: data_rt_color.other,
//     }},
//     {value:data_rt.other_vip,
//      name:'未知vip',
//     itemStyle: {
//         color: data_rt_color.other,
//     }
//  }]
//
// option_rt = {
//     title : {
//         text: '性别vip比例',
//         subtext: '同色同性别',
//         x:'center'
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: data_rt_title
//     },
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius : '55%',
//             center: ['50%', '60%'],
//             data:data_main,
//             itemStyle: {
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         }
//     ],
//     roseType: 'angle'
// };


//
// 第一个分区 动画
// var data_lt1 = [1700, 3500, 1400, 1000, 300, 500, 2000, 3100, 2700, 4600, 900, 1300];
// var level_lt1 = ['0-2h','2-4h','4-6h','6-8h','8-10h','10-12h','12-14h','14-16h','16-18h','18-20h','22-22h','22-24h'];
// option_lt1 = {
//     tooltip: {
//         // trigger: 'axis',
//         axisPointer: {
//             type: 'cross',
//             crossStyle: {
//                 color: '#fff'
//             }
//         }
//     },
//     legend: {
//         data:['过审时间人数','过审时间人数']
//     },
//     xAxis: [
//         {
//             type: 'category',
//             data: level_lt1,
//             axisPointer: {
//                 type: 'shadow'
//             }
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value',
//             name: '过审时间人数',
//             min: 0,
//             max: 5000,
//             interval: 500,
//             show: false
//         },
//         {
//             type: 'value',
//             name: '过审时间人数',
//             min: 0,
//             max: 5000,
//             interval: 500,
//         }
//     ],
//     series: [
//         {
//             name:'过审时间人数',
//             type:'bar',
//             data:data_lt1
//         },
//         {
//             name:'过审时间人数',
//             type:'line',
//             yAxisIndex: 1,
//             data:data_lt1,
//             color: 'rgb(255,216,92)'
//         }
//     ]
// };
//

// var data_ld1 = [
//             ['0-2h', '投稿数量', '弹幕数量'],
//             ['2-4h', 43.3, 85.8],
//             ['4-6h', 83.1, 73.4],
//             ['6-8h', 86.4, 65.2],
//             ['8-10h', 72.4, 53.9],
//             ['10-12h', 69.3, 70.9],
//             ['12-14h', 43.3, 85.8],
//             ['14-16h', 83.1, 73.4],
//             ['16-18h', 86.4, 65.2],
//             ['18-20h', 72.4, 53.9],
//             ['20-22h', 83.1, 73.4],
//             ['22-24h', 86.4, 65.2],
//         ]
//
// option_ld1 = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//         source: data_ld1
//     },
//     xAxis: {type: 'category'},
//     yAxis: {},
//     // Declare several bar series, each will be mapped
//     // to a column of dataset.source by default.
//     series: [
//         {type: 'bar'},
//         {type: 'bar'},
//     ]
// };


// var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
// var yMax = 500;
// var dataShadow = [];

// for (var i = 0; i < data.length; i++) {
//     dataShadow.push(yMax);
// }

// option_mt1 = {
//     title: {
//         text: '特性示例：渐变色 阴影 点击缩放',
//         subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
//     },
//     xAxis: {
//         data: dataAxis,
//         axisLabel: {
//             inside: true,
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             show: false
//         },
//         z: 10
//     },
//     yAxis: {
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#999'
//             }
//         }
//     },
//     dataZoom: [
//         {
//             type: 'inside'
//         }
//     ],
//     series: [
//         { // For shadow
//             type: 'bar',
//             itemStyle: {
//                 normal: {color: 'rgba(0,0,0,0.05)'}
//             },
//             barGap:'-100%',
//             barCategoryGap:'40%',
//             data: dataShadow,
//             animation: false
//         },
//         {
//             type: 'bar',
//             itemStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1,
//                         [
//                             {offset: 0, color: '#83bff6'},
//                             {offset: 0.5, color: '#188df0'},
//                             {offset: 1, color: '#188df0'}
//                         ]
//                     )
//                 },
//                 emphasis: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1,
//                         [
//                             {offset: 0, color: '#2378f7'},
//                             {offset: 0.7, color: '#2378f7'},
//                             {offset: 1, color: '#83bff6'}
//                         ]
//                     )
//                 }
//             },
//             data: data
//         }
//     ]
// };

// option_md1 = {
//     tooltip: {},
//     legend: {
//         data: ['达芬奇', '大土豆', '学校']
//     },
//     radar: {
//         // shape: 'circle',
//         name: {
//             textStyle: {
//                 color: '#fff',
//                 backgroundColor: '#999',
//                 borderRadius: 3,
//                 padding: [3, 5]
//            }
//         },
//         indicator: [
//            { name: '播放数（sales）', max: 6500},
//            { name: '点赞数（Administration）', max: 16000},
//            { name: '收藏数（Information Techology）', max: 30000},
//            { name: '弹幕数（Customer Support）', max: 38000},
//            { name: '评论数（Development）', max: 52000},
//         ]
//     },
//     series: [{
//         name: '预算 vs 开销（Budget vs spending）',
//         type: 'radar',
//         // areaStyle: {normal: {}},
//         data : [
//             {
//                 value : [4300, 10000, 28000, 35000, 50000],
//                 name : '达芬奇'
//             },
//             {
//                 value : [5000, 12000, 18000, 21000, 32000],
//                 name : '大土豆'
//             },
//             {
//                 value : [6000, 14000, 28000, 31000, 42000],
//                 name : '学校'
//             }
//         ]
//     }]
// };
//




// var data = [
//     [[28604,77,17096869,'活跃up主1'],[31163,77.4,27662440,'活跃up主2'],[1516,68,1154605773,'活跃up主3',1990],[13670,74.7,10582082,'Cuba'],[28599,75,4986705,'Finland'],[29476,77.1,56943299,'France'],[31476,75.4,78958237,'Germany'],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India'],[29550,79.1,122249285,'Japan'],[2076,67.9,20194354,'North Korea'],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
// ];

// option_rt1 = {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//         offset: 0,
//         color: '#f7f8fa'
//     }, {
//         offset: 1,
//         color: '#cdd0d5'
//     }]),
//     legend: {
//         right: 10,
//         data: ['活跃up主']
//     },
//     xAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         }
//     },
//     yAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         },
//         scale: true,
//         // show: false
//     },
//     series: [{
//         name: '活跃up主',
//         data: data[0],
//         type: 'scatter',
//         symbolSize: function (data) {
//             return Math.sqrt(data[2]) / 5e2;
//         },
//         label: {
//             emphasis: {
//                 show: true,
//                 formatter: function (param) {
//                     return param.data[3];
//                 },
//                 position: 'top'
//             }
//         },
//         itemStyle: {
//             normal: {
//                 shadowBlur: 10,
//                 shadowColor: 'rgba(120, 36, 50, 0.5)',
//                 shadowOffsetY: 5,
//                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                     offset: 0,
//                     color: 'rgb(251, 118, 123)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(204, 46, 72)'
//                 }])
//             }
//         }
//     }]
// };


// option_rd1 = {
//     dataset: {
//         source: [
//             ['score', 'amount', 'product'],
//             [89.3, 58212, '震惊'],
//             [57.1, 78254, '篮球'],
//             [74.4, 41032, '火影'],
//             [50.1, 12755, '可爱'],
//             [89.7, 20145, '厉害'],
//             [68.1, 79146, '牛逼'],
//             [19.6, 91852, '冒险'],
//             // [10.6, 101852, '蔡徐坤'],
//         ]
//     },
//     // grid: {containLabel: true},
//     xAxis: {name: 'amount'},
//     yAxis: {type: 'category'},
//     visualMap: {
//         orient: 'horizontal',
//         left: 'center',
//         min: 10,
//         max: 100,
//         text: ['最热', '最冷'],
//         // Map the score column to color
//         dimension: 0,
//         inRange: {
//             color: ['#D7DA8B', '#E15457']
//         }
//     },
//     series: [
//         {
//             type: 'bar',
//             encode: {
//                 // Map the "amount" column to X axis.
//                 x: 'amount',
//                 // Map the "product" column to Y axis
//                 y: 'product'
//             }
//         }
//     ]
// };


//第二个分区 番剧
// option_ld2 = {
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: ['免费','收费','大会员']
//     },
//     series : [
//         {
//             name: '收费视频占比',
//             type: 'pie',
//             radius : '65%',
//             center: ['50%', '60%'],
//             data:[
//                 {value:335, name:'免费'},
//                 {value:310, name:'收费'},
//                 {value:310, name:'大会员'},
//             ],
//             itemStyle: {
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         }
//     ]
// };


// option_m2 = {
//     tooltip : {
//         trigger: 'item',
//         formatter: "{b}: {c}"
//     },
//     calculable : false,
//     series : [
//         {
//             name:'矩形图',
//             show: false,
//             type:'treemap',
//             itemStyle: {
//                 normal: {
//                     label: {
//                         show: true,
//                         formatter: "{b}"
//                     },
//                     borderWidth: 1
//                 },
//                 emphasis: {
//                     label: {
//                         show: true
//                     }
//                 }
//             },
//             data:[
//                 {
//                     name: '剧情',
//                     value: 6
//                 },
//                 {
//                     name: '喜剧',
//                     value: 4
//                 },
//                 {
//                     name: '家庭',
//                     value: 4
//                 },
//                 {
//                     name: '爱情',
//                     value: 2
//                 },
//                 {
//                     name: '科幻',
//                     value: 2
//                 },
//                 {
//                     name: '爱情',
//                     value: 1
//                 },
//                 {
//                     name: '友情',
//                     value: 1
//                 }
//             ]
//         }
//     ]
// };
//



// var data_rt2 = [
//             ['0-2h', '投稿数量', '弹幕数量'],
//             ['2-4h', 43.3, 85.8],
//             ['4-6h', 83.1, 73.4],
//             ['6-8h', 86.4, 65.2],
//             ['8-10h', 72.4, 53.9],
//             ['10-12h', 69.3, 70.9],
//             ['12-14h', 43.3, 85.8],
//             ['14-16h', 83.1, 73.4],
//             ['16-18h', 86.4, 65.2],
//             ['18-20h', 72.4, 53.9],
//             ['20-22h', 83.1, 73.4],
//             ['22-24h', 86.4, 65.2],
//         ]
//
// option_rt2 = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//         source: data_ld1
//     },
//     xAxis: {type: 'category'},
//     yAxis: {},
//     // Declare several bar series, each will be mapped
//     // to a column of dataset.source by default.
//     series: [
//         {type: 'bar'},
//         {type: 'bar'},
//     ]
// };


//第三个分区 放映厅
// option_lt15 = {
//     xAxis: {
//         type: 'category',
//         data: ['1998', '2001', '2004', '2007', '2010', '2013', '2016', '2019']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290, 1330, 1320, 1520],
//         type: 'line',
//         smooth: true
//     }]
// };
    
option_ld15 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['收费','不收费']
    },
    series : [
        {
            name: '收费视频占比',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'收费'},
                {value:310, name:'不收费'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

option_m15 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            show: false,
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '剧情',
                    value: 6
                },
                {
                    name: '喜剧',
                    value: 4
                },
                {
                    name: '家庭',
                    value: 4
                },
                {
                    name: '爱情',
                    value: 2
                },
                {
                    name: '科幻',
                    value: 2
                },
                {
                    name: '爱情',
                    value: 1
                },
                {
                    name: '友情',
                    value: 1
                }
            ]
        }
    ]
};
                    

var labelOption = {
    normal: {
        show: false,
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option_rt15_s1 = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['中国', '美国', '英国', '法国', '日本']
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['0~15', '15~35', '35~65', '65~95', '>95']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '中国',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '美国',
            type: 'bar',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '英国',
            type: 'bar',
            data: [150, 232, 201, 154, 190]
        },
        {
            name: '法国',
            type: 'bar',
            data: [98, 77, 101, 99, 40]
        },
        {
            name: '日本',
            type: 'bar',
            data: [260, 177, 51, 106,140]
        }
    ]
};

option_rt15_s23 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['中国', '美国', '英国', '法国', '日本'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'数量',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390]
        }
    ]
};

// var data = [
//     [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
//     [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
// ];

// option_rd15 = {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//         offset: 0,
//         color: '#f7f8fa'
//     }, {
//         offset: 1,
//         color: '#cdd0d5'
//     }]),
//     title: {
//         text: '1990 与 2015 年各国家人均寿命与 GDP'
//     },
//     legend: {
//         right: 10,
//         data: ['1990', '2015']
//     },
//     xAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         }
//     },
//     yAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         },
//         scale: true
//     },
//     series: [{
//         name: '1990',
//         data: data[0],
//         type: 'scatter',
//         symbolSize: function (data) {
//             return Math.sqrt(data[2]) / 5e2;
//         },
//         label: {
//             emphasis: {
//                 show: true,
//                 formatter: function (param) {
//                     return param.data[3];
//                 },
//                 position: 'top'
//             }
//         },
//         itemStyle: {
//             normal: {
//                 shadowBlur: 10,
//                 shadowColor: 'rgba(120, 36, 50, 0.5)',
//                 shadowOffsetY: 5,
//                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                     offset: 0,
//                     color: 'rgb(251, 118, 123)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(204, 46, 72)'
//                 }])
//             }
//         }
//     }, {
//         name: '2015',
//         data: data[1],
//         type: 'scatter',
//         symbolSize: function (data) {
//             return Math.sqrt(data[2]) / 5e2;
//         },
//         label: {
//             emphasis: {
//                 show: true,
//                 formatter: function (param) {
//                     return param.data[3];
//                 },
//                 position: 'top'
//             }
//         },
//         itemStyle: {
//             normal: {
//                 shadowBlur: 10,
//                 shadowColor: 'rgba(25, 100, 150, 0.5)',
//                 shadowOffsetY: 5,
//                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                     offset: 0,
//                     color: 'rgb(129, 227, 238)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(25, 183, 207)'
//                 }])
//             }
//         }
//     }]
// };





$(function(){
    // var myChart = echarts.init(document.getElementById('lt'),"light").setOption(option_lt)
    // var myChart = echarts.init(document.getElementById('ld'),"light").setOption(option_ld)
    // var myChart = echarts.init(document.getElementById('rt'),"light").setOption(option_rt)



    // var myChart = echarts.init(document.getElementById('lt1'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld1'),"light").setOption(option_ld1)
    // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md1'),"light").setOption(option_md1)
    // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd1'),"light").setOption(option_rd1)


    //
    // var myChart = echarts.init(document.getElementById('lt3'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld3'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md3'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd3'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt4'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld4'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md4'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd4'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt5'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld5'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md5'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd5'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt6'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld6'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md6'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd6'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt7'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld7'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md7'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd7'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt8'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld8'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md8'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd8'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt9'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld9'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md9'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd9'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt10'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld10'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md10'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd10'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt11'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld11'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md11'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd11'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt12'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld12'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md12'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd12'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt13'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld13'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md13'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd13'),"light").setOption(option_rd1)
    //
    //
    //
    // var myChart = echarts.init(document.getElementById('lt14'),"light").setOption(option_lt1)
    // var myChart = echarts.init(document.getElementById('ld14'),"light").setOption(option_ld1)
    // // var myChart = echarts.init(document.getElementById('mt1'),"light").setOption(option_mt1)
    // var myChart = echarts.init(document.getElementById('md14'),"light").setOption(option_md1)
    // // var myChart = echarts.init(document.getElementById('rt1'),"light").setOption(option_rt1)
    // var myChart = echarts.init(document.getElementById('rd14'),"light").setOption(option_rd1)
    //
    //
    //
    // // var myChart = echarts.init(document.getElementById('lt2'),"light").setOption(option_lt2)
    // // var myChart = echarts.init(document.getElementById('ld2'),"light").setOption(option_ld2)
    // // var myChart = echarts.init(document.getElementById('m2'),"light").setOption(option_m2)
    // var myChart = echarts.init(document.getElementById('rt2'),"light").setOption(option_rt2)
    // // var myChart = echarts.init(document.getElementById('rd2'),"light").setOption(option_rt15_s1)
    //
    //
    // // var myChart = echarts.init(document.getElementById('lt15-s1'),"light").setOption(option_lt15)
    // var myChart = echarts.init(document.getElementById('ld15-s1'),"light").setOption(option_ld15)
    // var myChart = echarts.init(document.getElementById('m15-s1'),"light").setOption(option_m15)
    // var myChart = echarts.init(document.getElementById('rt15-s1'),"light").setOption(option_rt15_s1)
    // // var myChart = echarts.init(document.getElementById('rd15-s1'),"light").setOption(option_rd15)
    //
    // var myChart = echarts.init(document.getElementById('lt15-s2'),"light").setOption(option_lt15)
    // var myChart = echarts.init(document.getElementById('ld15-s2'),"light").setOption(option_ld15)
    // var myChart = echarts.init(document.getElementById('m15-s2'),"light").setOption(option_m15)
    // var myChart = echarts.init(document.getElementById('rt15-s2'),"light").setOption(option_rt15_s23)
    // // var myChart = echarts.init(document.getElementById('rd15-s2'),"light").setOption(option_rd15)
    //
    // var myChart = echarts.init(document.getElementById('lt15-s3'),"light").setOption(option_lt15)
    // var myChart = echarts.init(document.getElementById('ld15-s3'),"light").setOption(option_ld15)
    // var myChart = echarts.init(document.getElementById('m15-s3'),"light").setOption(option_m15)
    // var myChart = echarts.init(document.getElementById('rt15-s3'),"light").setOption(option_rt15_s23)
    // var myChart = echarts.init(document.getElementById('rd15-s3'),"light").setOption(option_rd15)
});



// $(function(){
//     $(".hover").hover(function(){
//         if ($(this).attr("list") === "rank-list") {
//             $(".rank-list").show()
//             $(".recommend-list").hide()
//             $(".rank").css("color", "#00A1D6")
//             $(".recommend").css("color", "black")
//         } else {
//             $(".recommend-list").show()
//             $(".rank-list").hide()
//             $(".recommend").css("color", "#00A1D6")
//             $(".rank").css("color", "black")
//         }
//     });
// });

// window.onload=function(){
//     $(".rank-list").show()
//     $(".recommend-list").hide()
//     $(".rank").css("color", "#00A1D6")
//     $(".recommend").css("color", "black")
// };