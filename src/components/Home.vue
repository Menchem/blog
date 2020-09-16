<template>
<div class="home">
  <HeaderBox></HeaderBox>
  <Banner></Banner>
   <!-- <audio src="https://music.163.com/song/media/outer/url?id=1425626819.mp3"  controls preload></audio> -->
  <Content></Content>
  <Myfooter></Myfooter>
</div>
</template>

<script>
import HeaderBox from './Header.vue';
import Banner from './Banner.vue';
import Content from './Content.vue';
import Myfooter from './Foorer.vue';

export default{
  name: "Home",
  data(){
    return {
    }
  },
  components: {
    HeaderBox,
    Banner,
    Content,
    Myfooter
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
</style>
