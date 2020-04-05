<template>
    <div id = "picture">
        <a :href="item.url">
          <img :src="item.img" >
          <p>{{item.title}}</p>
        </a>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style scoped>
#picture{
    margin: 0 auto;
    text-align: center;
    float: left;
    /* margin-bottom: 10px; */
}
#picture img{
    height: 200px;
    width: 150px;
    margin-left: 150px;
    margin-top: 100px;
}
#picture p{
   font-size: 20px; 
   margin: 0 auto;
   margin-left: 220px;
  
}
</style>