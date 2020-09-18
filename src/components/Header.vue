<template>
  <div class="header">
    <div class="nav">
      <img src="../assets/mylogo.png"  height="50" align="left" alt="logo" />
      <ul class="clearfix">
        <li><router-link to="/"><span class="iconfont icon-shouye"></span>&nbsp;首页</router-link></li>
        <li><router-link to="/category"><span class="iconfont icon-zuopin"></span>&nbsp;文章</router-link></li>
        <li><router-link to="/music"><span class="iconfont1 icon-yinle"></span>&nbsp;听歌</router-link></li>
        <li><router-link to="/about"><span class="iconfont icon-wode"></span>&nbsp;关于我</router-link></li>
        <li class="qr-box"><router-link to="/wap"><span class="iconfont icon-gengduo"></span>&nbsp;{{mes}}</router-link><div class="qrcode"><img src="../assets/wap.png"></div></li>
      </ul>
      <div class="login">
        <a class="login-btn" href="/#/login">{{$store.state.loginName}}</a>
      </div>
    </div>

  </div>
</template>

<script>
 export default {
   name: 'Header-box',
   props: {
     loginMsg: String
   },
   data: function(){
     return {
       mes: "手机版"
     }
   },
   mounted() {
     let that = this;
     if(this.$store.state.hasLogin){
          this.$store.commit('changeName');
          let node = document.querySelector('.login-btn');
          let that = this;
          node.setAttribute('href','javascript:void(0);');
          node.addEventListener('click',function(){
            that.$http({
              method: 'post',
              url: that.$store.state.baseUrl + '/valilogin',
              headers: {
                'Authorization': JSON.parse(localStorage.getItem('info')).token
              }
            }).then((res)=>{
              //console.log(res);
              if(res.data.code === 1){
                window.location.href = res.data.url;
              }else if(res.data.code == 401){
                localStorage.removeItem('info');
                that.$message('账号已过期，请刷新重新登陆!');
              }else{
                that.$message('读取信息失败，请稍后再试!');
              }
            });
          });
     }
   }
 }
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  min-width: 1150px;
  height: 50px;
  line-height: 50px;
  background-color: #000;
  background-color: rgba(0,0,0,.8);
  position: fixed;
  top: 0;
  z-index: 1000;
  color: #fff;
  .nav{
    width: 1150px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    img{
      position: absolute;
      left: 0;
      top: 0;
    }
    ul{
      max-width: 700px;
      margin: 0 50px;
      li{
        width: 100px;
        height: 50px;
        float: left;
        margin-right: 2px;
        font-size: 18px;
        transition: all .5s;
        cursor: pointer;
        position: relative;
        .qrcode{
          display: none;
          position: absolute;
          left: -25px;
          top: 50px;
          z-index: 100;
          transform-origin:60px 0;
        }
        a{
          color: #fff;
        }
      }
      li:hover{
        background-color: #2693e8;
        font-size: 20px;
      }
      li.qr-box:hover{
        .qrcode{
          display: block;
          animation: zoom .5s linear both;
        }
      }
    }
  }
  .login{
    position: absolute;
    right: 10px;
    top: 0;
    a{
      color: #fff;
      font-size: 16px;
    }
    a:hover{
      color: #09dbf1;
    }
  }
}
@keyframes zoom{
  0%{
    opacity: 0;
    transform: scale(0);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
</style>
