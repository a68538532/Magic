<template>
  <div class="phone">
    <div v-for="data in list" :key="data.title">
      <Item :item="data" />
    </div>
  </div>
</template>

<script>
import Item from "./components/item";

export default {
  components: {
    Item
  },
  data() {
    return {
      list: [
        {
          url: "https://item.jd.com/59788697903.html",
          img:"http://localhost:3000/api/file/%E5%8D%8E%E4%B8%BAmate30RS5G%E7%89%88%E4%BF%9D%E6%97%B6%E6%8D%B7%E9%99%90%E9%87%8F%E7%89%88%E6%89%8B%E6%9C%BA%E7%8E%84%E9%BB%9112GB+512GB%E5%85%A8%E7%BD%91%E9%80%9A.jpg",
          title: "华为nova5i"
        },
        {
          url: "https://item.jd.com/6666.html",
          img:
            "https://i2.hdslb.com/bfs/archive/3d579c2b806db15161e02a67c8aa263c8ea58622.jpg@412w_232h_1c_100q.jpg",
          title: "傻逼手机"
        }
      ]
    };
  }
};
</script>

<style scoped>
#picture {
  margin: 0 auto;
  text-align: center;
  float: left;
  /* margin-bottom: 10px; */
}
#picture img {
  height: 200px;
  width: 150px;
  margin-left: 150px;
  margin-top: 100px;
}
#picture p {
  font-size: 20px;
  margin: 0 auto;
  margin-left: 220px;
}
</style>