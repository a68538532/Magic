
<template>
    <div class="test">
    <p>
        跳转成功
    </p>
    <div id="myChart" :style="{width: '500px', height: '500px'} " ></div>
      
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
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
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
    width: 500px;
    height: 500px;
    text-align: center;
    margin: 0 auto
}
</style>