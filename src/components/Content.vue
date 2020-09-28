<template>
<div class="content clearfix">
  <div class="row-left">
    <div class="space"><img src="../assets/qianduan.jpg" width="100%" /></div>

    <transition-group name="zlist" tag="div">
    <div v-for="(item,index) in arr" :key="'div'+ index" class="get-list clearfix">
      <div class="get-list-left">
        <router-link :to="'/show/' + item.id" target="_blank"><img :src="baseurl+item.thumb" alt="内容"></router-link>
      </div>
      <div class="get-list-right">
        <router-link :to="'/show/' + item.id" target="_blank"><h2>{{item.title.substr(0,24)}}</h2></router-link>
        <p>{{item.description.substr(0,92)}}</p>
      </div>
      <div class="clear"></div>
      <div class="list-wrap clearfix">
        <div class="time">{{item.create_time}}</div>
        <div class="listlink"><router-link :to="'/show/' + item.id" class="btn">阅读原文</router-link></div>

      </div>
    </div>
    </transition-group>

  </div>
  <div class="row-right">
    <div class="qrcode clearfix common-box">
      <div class="title">联系方式</div>
      <div class="qrcode-left">
        <img src="../assets/author.jpg" alt="头像" width="100">
        <h3><router-link to="about">关于我</router-link></h3>
      </div>
      <div class="qrcode-right">
        <img src="../assets/wx.jpg" width="130" alt="微信">
      </div>
      <div class="des">
        <p>没有天赋异禀,更需天道酬勤</p>
      </div>
    </div>

    <!-- 音乐块 -->
    <div class="music-wrap common-box">
      <div class="title">音乐播放区</div>
      <Playerhome></Playerhome>
    </div>

    <!-- 友情链接 -->
    <div class="links common-box">
      <div class="title">友情链接</div>
      <div class="links-sub">
        <a href="http://www.zhoumengcheng.cn" > 年朔的博客 </a>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import Playerhome from './Playerhome.vue'

export default{
  name: "Content",
  components:{
    Playerhome
  },
  data(){
    return {
      baseurl: 'http://admin.zhoumengcheng.cn',
      arr: []
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: 'http://admin.zhoumengcheng.cn/news',
        params: {
          limit: 6
        }
    }).then((res)=>{
       //console.log(res.data.content);
       this.arr = res.data.content;
    });
  },
  mounted() {
    // dom加载需要运行的代码
  }
}
</script>

<style lang="less">
.content{
  width: 1150px;
  margin: 20px auto 0;
  .row-left{
    width: 790px;
    float: left;
    .space{
      width: 100%;
      height: 154px;
      background-color: #fff;
      box-shadow: 0 0 5px #d4d4d4;
      overflow: hidden;
    }
    .get-list{
      width: 100%;
      background-color: #fff;
      margin-top: 20px;
      box-shadow: 0 0 5px #d4d4d4;
      padding-top: 1px;
      .get-list-left{
        width: 220px;
        height: 160px;
        background-color: #efefef;
        overflow: hidden;
        margin: 20px 20px;
        float: left;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .get-list-right{
        float: right;
        width: 510px;
        margin: 20px 20px 0 0;
        text-align: left;
        h2{
          font-size: 24px;
          line-height: 30px;
          font-weight: 400;
        }
        h2:hover{
          color: #e67122;
        }
        p{
          font-size: 16px;
          line-height: 30px;
          margin-top: 10px;
          color: #555555;
        }
      }
      .clear{
        clear: both;
      }
      .list-wrap{
        margin: 0 20px;
        border-top: 1px solid #ededed;
        .time{
          font-size: 20px;
          height: 36px;
          line-height: 36px;
          float: left;
          font-style: italic;
        }
        .listlink{
          float: right;
          .btn{
            display: block;
            width: 100px;
            font-weight: bold;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            color: #fff;
            background-color: #e65822;
            transition: all .3s;
          }
          .btn:hover{
            background-color: #222222;
          }
        }
      }
      .list-wrap::before,.list-wrap::after{
        height: 10px;
        display: block;
        content: "";
      }
    }

  }
  .row-right{
    width: 340px;
    float: right;
    .qrcode{
      width: 100%;
      background-color: #fff;
      box-shadow: 0 0 5px #d4d4d4;
      .qrcode-left{
        width: 100px;
        float: left;
        margin: 20px 0 0 20px;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          display: blick;
        }
        h3{
          font-size: 18px;
          text-align: center;
          a:hover{
            color: #e65822;
            text-decoration: underline;
          }
        }
      }
      .qrcode-right{
        float: right;
        width: 130px;
        margin: 20px 20px 0 0;
        img{
          width: 130px;
          height: 130px;
          display: block;

        }
      }
      .des{
        width: 100%;
        clear: both;
        overflow: hidden;
        p{
          font-size: 18px;
          text-align: left;
          font-style: italic;
          margin: 20px 20px;
        }
      }
    }
    .music-wrap{
      width: 100%;
      height: 200px;
      background-color: #fff;
      margin-top: 20px;
      box-shadow: 0 0 5px #d4d4d4;
      position: relative;
    }
    .common-box{
      text-align: left;
      .title{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
        border-bottom: 1px solid #ededed;
        position: relative;
      }
      .title::before{
        content: "";
        height: 2px;
        width: 100px;
        display: block;
        position: absolute;
        background-color: #e65822;
        left: 0;
        bottom: 0;
      }
    }
    .links{
      width: 100%;
      height: 200px;
      background-color: #fff;
      margin-top: 20px;
      box-shadow: 0 0 5px #d4d4d4;
      .links-sub{
        margin: 20px 20px;
        a{
          font-size: 16px;
        }
        a:hover{
          color: #e65822;
        }
      }
    }
  }
}

.zlist-enter-active{
  animation: fadeIn .5s linear both;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
    transform: rotate(45deg);
  }
  100%{
    opacity: 1;
    transform: rotate(0);
  }
}
</style>
