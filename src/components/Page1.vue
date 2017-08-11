<template>
    <div id="page1">
        <!--234
        <div id="echart-app" style="width: 100%; height:200px; background-color: red;"></div>-->
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // this.init()
        },
        methods: {
            init() {
                var listCounts = ['0', '50', '40', '60', '50', '20', '70', '0'],
                    listMonths = ['0', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '0'],
                    listMarkPoints = [],
                    len = listCounts.length;

                for(var i = 1; i < len - 1; i++) {
                    //      this.listMarkPoints.push({  xAxis: i, yAxis: listCounts[i] })
                }

                drawEcharts();

                function drawEcharts() {
                    var myChart = echarts.init(document.getElementById('echart-app'));
                    var option = {
                        backgroundColor: "#fff",
                        tooltip: {
                            show: false,
                        },
                        grid: {
                            top: 45,
                            bottom: 35,
                            left: -30,
                            right: -30,
                        },
                        // dataZoom: [{
                        //     type: 'inside',
                        //     xAxisIndex: [0],
                        //     start: 0,
                        //     end: 70
                        // }],
                        xAxis: [{
                            type: 'category',
                            data: listMonths,
                            boundaryGap: false,
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#888'
                                }
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#fff',
                                }
                            }

                        }],
                        yAxis: [{
                            type: 'value',
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false
                            },
                        }],
                        series: [{
                            type: 'line',
                            // showAllSymbol: true,
                            // symbol: 'emptyCircle',
                            symbolSize: 10,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        color: '#3c8bf9'
                                    },
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#3c8bf9'
                                    }, {
                                        offset: 1,
                                        color: '#fff'
                                    }]),
                                    areaStyle: {
                                        type: 'default'
                                    }
                                }
                            },
                            data: listCounts,
                            markPoint: {
                                symbol: 'roundRect',
                                symbolOffset: [0, -20],
                                symbolSize: [28, 20],
                                itemStyle: {
                                    normal: {
                                        color: '#3c8bf9',
                                    }
                                },
                                data: listMarkPoints,
                            },
                        }, {
                            name: 'line',
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: 1,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                                offset: 0,
                                                color: 'rgba(20,200,212,0.5)'
                                            },
                                            {
                                                offset: 0.2,
                                                color: 'rgba(20,200,212,0.2)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(20,200,212,0)'
                                            }
                                        ]
                                    )
                                }
                            },
                            z: -12,
                            data: listCounts,
                        }, ]
                    };
                    myChart.setOption(option);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>