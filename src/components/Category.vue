<template>
<div class="category">
  <HeaderBox></HeaderBox>
  <div class="cate-box">
    <div class="catelist" v-for="item in listarr">
      <div class="title"><router-link :to="'/show/'+item.id">{{item.title}}</router-link></div>
      <div class="time">{{item.create_time}}</div>
      <div class="description">{{item.description}}...</div>
      <div class="link"><router-link :to="'/show/'+item.id">查看</router-link></div>
    </div>
  </div>
  <Myfooter></Myfooter>
</div>
</template>

<script>
import HeaderBox from './Header.vue'
import Myfooter from './Foorer.vue'

export default {
  name: 'Category',
  data(){
    return {
      listarr: []
    }
  },
  components:{
    HeaderBox,
    Myfooter
  },
  mounted() {
    this.$http({
      methods: 'get',
      url: 'http://admin.zhoumengcheng.cn/showall',
    }).then((res)=>{
      this.listarr = res.data.content;
    });
  }
}
</script>

<style lang="less">
.cate-box{
  margin: 70px auto 20px;
  width: 600px;
  min-height: 600px;
  .catelist{
    margin-bottom: 20px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border: 1px dashed #999;
    .title{
      font-size: 22px;
      line-height: 50px;
      a{
        color: #db5640;
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .time{
      font-size: 14px;
      line-height: 20px;
      color: #555;
    }
    .description{
      font-size: 16px;
      color: #666;
      text-align: left;
      margin-top: 10px;
    }
    .link{
      width: 50px;
      height: 50px;
      background-color: #42B983;
      margin: 20px auto 0;
      border-radius: 50%;
      line-height: 50px;
      font-size: 16px;
      a{
        color: #fff;
      }
    }
  }
}
</style>
