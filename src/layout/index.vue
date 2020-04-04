<template>
  <div id="app"> 
    <div class="app1" >
       <router-link to="/home"><p>商城首页</p></router-link>     

        <router-link to="/pages">商品数据分析</router-link>
      <br>
      <br>
      <ul class="main_menu">
        <li>
            <span>热销商品</span>
            <ul class="sub_menu">
                <li><router-link to="/page2">手机</router-link></li>
                <li>电脑</li>
            </ul>
    </li>
</ul>
    </div>
    <div class="app2">
       <router-view></router-view>
    </div>
  </div>
  
</template>
<script>
export default {
    showother:({

    })
}
</script>

<style>
ul.sub_menu {display:none;}  
ul.main_menu>li:hover ul.sub_menu {display:block;} 
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
.p,li{
    color: #42b983;
    font-size: 30px;
}
</style>