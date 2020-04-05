<template>
  <div class="jd_index" style="body">
    <div>
      <img alt="welcome" src="@/assets/Test1.jpg" />
      <h1>welcome</h1>
    </div>
    <p>友情支持：jd</p>
    <div>
      <a href="http://jd.com" target="_blank" rel="noopener">点击进入京东商城</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          img: "url1",
          title: "华为1"
        },
        {
          img: "url2",
          title: "华为2"
        }
      ]

    };
  }
};
</script>

#jd_index<style scoped>
a {
  color: #42b983;
}
h1 {
  text-align: center;
}
</style>