<template>
<div class="banner">
  <div class="banner-wrap">
      <p class="text">{{welcome}}</p>
      <div class="input-wrap">
        <input type="text" v-model="welcome" placeholder="输入内容改变欢迎语">
      </div>
      <div class="tishiyu">输入内容改变欢迎语</div>
  </div>

</div>
</template>

<script>
 export default {
     name: 'Banner',
     data () {
       return {
         welcome: "WelCome to My Blog!"
       }
     }
 }
</script>

<style lang="less" scoped>
@keyframes typing {
  from {width: 0;}
  to{width: 100%;}
}
.banner{
  width: 100%;
  min-width: 1150px;
  height: 360px;
  background: url(../assets/web_bg.jpg) center center no-repeat;
  background-size: cover;
  overflow: hidden;
  .banner-wrap{
    width: 1150px;
    margin: 0 auto;
    .text{
      margin: 100px auto 20px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      height: 100px;
      line-height: 100px;
      color: #fff;
      font-size: 100px;
      font-family: yingwen,monospace;
      font-weight: bold;
      letter-spacing: 5px;
      animation: typing 3s linear;
      text-align: center;

    }
    .input-wrap{
      input{
        width: 400px;
        height: 40px;
        font-size: 18px;
        color: #555;
        border-radius: 6px;
        border: 0;
        overflow: hidden;
        box-shadow: 0 0 3px #efefef;
        outline: none;
        text-indent: 0.5em;
      }
    }
    .tishiyu{
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      color: #efefef;
    }
  }
}

</style>
