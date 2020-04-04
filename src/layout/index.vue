<template>
  <div id="app"> 
    <div class="app1" >
       <router-link to="/home"><p>商城首页</p></router-link>     
      <br>
        <router-link to="/pages">商品数据分析</router-link>
        
    </div>
    <div class="app2">
       <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
body,html{
   height: 100%;
   margin:0;
}
#app {
  width: 100%;
  height: 100%;
 
}
/* #app>div{
  float: left;
  width: 33.33%;
  height: 100%;
} */
.app1{
  /* background: #2c3e50 ; */
  float:left;
  width: 10%;
  height: 100%;
}
.app2{
  text-align: center;
  height: 100%;
  overflow: hidden;
  margin: 0 auto
}
.p{
    color: #42b983;
}
</style>