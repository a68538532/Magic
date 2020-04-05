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
          img:
            "https://i2.hdslb.com/bfs/archive/8738634e09b214d6b47144acfd9e62f387b174dd.jpg@412w_232h_1c_100q.jpg",
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