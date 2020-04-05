<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
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
.app1 {
  background: #2c3e50;
  float: left;
  width: 10%;
  height: 100%;
  border-radius: 15px;
}
.app2 {
  text-align: center;
  height: 100%;
  overflow: hidden;
}
a {
  color: #42b983;
  font-size: 30px;
}
</style>
