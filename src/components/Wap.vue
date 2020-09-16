<template>
<div class="wap">
  <div class="w_nav">
    <div class="space"></div>
    <div class="title"><span><router-link to="/">欢迎来到我的博客</router-link></span></div>
    <div class="font-box"><span class="iconfont icon-gengduo"></span></div>
  </div>
  <article class="main">

    <section v-for="item in articleArr" class="sec">
      <div class="sec-box">
          <h2>{{item.title}}</h2>
          <div class="time">{{item.create_time}}</div>
          <div class="description">{{item.description.substr(0,40)}}...</div>
          <div class="yuedu">阅读原文</div>
      </div>
    </section>

  </article>
<footer>
  <p>copyright©2019</p>
</footer>
</div>
</template>

<script>
export default {
  name: "Wap",
  data(){
    return {
      articleArr: []
    }
  },
  mounted() {
    let that = this;
    let fbox = document.querySelector('.font-box');
    fbox.addEventListener('click', function(){
      that.$message('正在努力设计中！！')
    });
    this.$http({
      method: 'get',
      url:'http://admin.zhoumengcheng.cn/news',
    }).then((res)=>{
      this.articleArr = res.data.content;
    });
  }
}
</script>

<style lang="less">
@base: 75;
@rem: @base*1rem;
html.wap-html{
  font-size: @base/375*100vw;
  @media screen and (max-width: 320px) {
    font-size: 64px;
  }
  @media screen and (min-width: 540px) {
    font-size: 108px;
  }
}

body.wap-body{
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
}
.wap{
  width: 100%;
  overflow: hidden;
  background-color: hsla(40,33%,60%,.3);
  .w_nav{
    font-size: 20/@rem;
    height: 60/@rem;
    background-color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      a{
        color: #c1866a;
      }
    }
    .space,.font-box{
      width: 40/@rem;
      color: #c1866a;
    }
    .font-box span{
      font-size: 24/@rem;
    }
  }
  .main{
    padding: 0 15/@rem;
    .sec{
      width: 100%;
      margin-top: 15/@rem;
      box-sizing: border-box;
      background-color: #fff;
      padding: 10px;
      .sec-box{
        box-sizing: border-box;
        border: 1px dashed #999;
        width: 100%;
        padding: 0 10/@rem;
        h2{
          font-size: 20/@rem;
          margin-top: 30/@rem;
          line-height: 32/@rem;
          color: #db5640;
        }
        .time{
          font-size: 14/@rem;
          height: 40/@rem;
          line-height: 40/@rem;
          color: #666;
        }
        .description{
          text-align: justify;
          font-size: 16/@rem;
          line-height: 30/@rem;
          color: #999;
        }
        .yuedu{
          width: 100/@rem;
          height: 35/@rem;
          line-height: 35/@rem;
          font-weight: bold;
          background-color: #e65822;
          color: #fff;
          margin:20/@rem auto;
          font-size: 18/@rem;
        }
      }
    }
  }
  footer{
    width: 100%;
    height: 50/@rem;
    font-size: 16/@rem;
    p{
      height: 50/@rem;
      line-height: 50/@rem;
    }
  }
}
</style>
