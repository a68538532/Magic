
<template>
    <div class="test">
 
    <div id="myChart" :style="{width: '700px', height: '450px'} " ></div>
    <div id="myChart1" :style="{width: '700px', height: '450px'} " ></div>
    <div id="myChart2" :style="{width: '700px', height: '500px'} " ></div>
    <div id="myChart3" :style="{width: '700px', height: '500px'} " ></div>
    </div>
</template>

<script>
export default {

      name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart.setOption({
             backgroundColor: '#FFF4C1',
             textStyle: {
                color: '#42b983',
                fontSize:32
             },
            title: { text: '笔记本销量柱状分析图', 
                     textStyle:{
                         fontSize:32,
                         color:'#42b983'
                     },
                     x:'center',
            },
            tooltip: {},
            xAxis: {
                data: ["戴尔","华硕","华为","惠普","联想","Apple","微星","小米"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [3711865, 1713403, 2128569, 5152834, 10328749, 2275128,101388,5350986]
            }]
        });
        myChart1.setOption({
            backgroundColor: '#FFEEDD',
             textStyle: {
                color: '#42b983',
                fontSize:32
             },
            title: { text: '手机销量柱状分析图', 
                     textStyle:{
                         fontSize:32,
                         color:'#42b983'
                     },
                     x:'center',
            },
            tooltip: {},
            xAxis: {
                data: ["飞利浦","华为","三星","小米","一加","Apple","oppo","vivo"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [1731786, 13492657, 218160, 6060366, 194612, 10266232,699796,808427]
            }]
        })
        myChart2.setOption({
             backgroundColor: '#E8FFC4',
             title: { text: '笔记本扇形分析图', 
                     textStyle:{
                         fontSize:32,
                         color:'#42b983'
                     },
                     x:'center',
             },
            series : [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
           
            data:[
                {value:3711865, name:'戴尔'},
                {value:1713403, name:'华硕'},
                {value:2128569, name:'华为'},
                {value:5152834, name:'惠普'},
                {value:10328749, name:'联想'},
                {value:2275128, name:'Apple'},
                {value:101388, name:'微星'},
                {value:5350986, name:'小米'}
                ]
             }]
        })
        myChart3.setOption({
             backgroundColor: '#FFBD9D',
             title: { text: '手机扇形分析图', 
                     textStyle:{
                         fontSize:32,
                         color:'#42b983'
                     },
                     x:'center',
             },
            series : [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',

           
            data:[
                {value:1731786, name:'飞利浦'},
                {value:13492657, name:'华为'},
                {value:218160, name:'三星'},
                {value:6060366, name:'小米'},
                {value:194612, name:'一加'},
                {value:10266232, name:'Apple'},
                {value:699796, name:'oppo'},
                {value:808427, name:'vivo'}
                ]
             }]
        });
    } 
  }
}
</script>

<style scoped>

.p{
    /* background-image: url(./bg.jpg); */
    text-align: center;
}
#myChart{
    width: 100px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
    float: left;
    margin-right: 325px;
    /* margin-bottom: 10px; */
}
#myChart1{
    width: 100px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
    float: left
}
#myChart2{
    width: 100px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
    float: left;
    margin-right: 325px
}
#myChart3{
    width: 100px;
    height: 600px;
    text-align: center;
    margin: 0 auto;
    float: left
}
</style>