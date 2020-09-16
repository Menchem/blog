<template>
<div class="show">
  <HeaderBox></HeaderBox>
  <div class="content-box">
    <div class="title">{{news.title}}</div>
    <div class="content-html" v-html="textc"></div>
  </div>
  <Myfooter></Myfooter>
</div>
</template>

<script>
import HeaderBox from './Header.vue'
import Myfooter from './Foorer.vue'

export default {
    name: "Show",
    components: {
      HeaderBox,
      Myfooter
    },
    data(){
      return {
        news: {},
        textc: ''
      }
    },
    methods: {

    },
    mounted() {

      let aid = this.$route.params.id;
      this.$http({
        methods: 'get',
        url: 'http://admin.zhoumengcheng.cn/show',
        params: {
          id: aid
        }
      }).then((res)=>{
        this.news = res.data.content;
        document.title = this.news.title;
        this.textc = this.news.editorValue;
      });
    }
}
</script>

<style lang="less" scoped>
.content-box{
  width: 960px;
  height: auto;
  padding: 0 20px;
  min-height: 560px;
  margin: 50px auto 0;
  background-color: #fff;
  box-shadow: 0 0 5px #999999;
  font-size: 18px;
  line-height: 50px;
  .title{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
  }
  .content-html{
    text-align: left;
  }
}

.my-footer{
  margin-top: 0 !important;
}
</style>
