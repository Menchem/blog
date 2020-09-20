<template>
<div class="category">
  <HeaderBox></HeaderBox>
  <div class="cate-box">
    <transition-group tag="div" name="myZoom">
    <div class="catelist" v-for="(item,index) in listarr" :key="'list'+index">
      <div class="title"><router-link :to="'/show/'+item.id">{{item.title}}</router-link></div>
      <div class="time">{{item.create_time}}</div>
      <div class="description">{{item.description}}...</div>
      <div class="link"><router-link :to="'/show/'+item.id">查看</router-link></div>
    </div>
    </transition-group>
  </div>
  <div class="content-loading" v-if="loadShow" v-html="categoryHtml"></div>
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
      page: 1,
      allArr: [],
      listarr: [],
      loadShow: true,
      showMore: false,
      categoryHtml: "内容正在加载，请稍后...",
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
      this.allArr = res.data.content;
      this.listarr = this.allArr.slice(0,6);
    });
    this.$nextTick(()=>{
      window.addEventListener('scroll',this.getList)
    });
  },
  methods:{
    getList(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let elHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let catBox = document.querySelector(".cate-box");
      let catHeihgt = catBox.clientHeight;
      let toButtom = catHeihgt + 100 - elHeight - scrollTop ;
      if(toButtom < 20){

        setTimeout(()=>{

          let moreNum = this.allArr.length % (this.page*6);
          let tmpArr = [];
          if(this.showMore){
            this.categoryHtml = "我可是有底线的-_-!";
            return ;
          }
          if(moreNum < 6){
            tmpArr = this.allArr.slice(this.page*6,this.page*6 + moreNum);
            for(let i = 0; i < tmpArr.length; i++){
                this.listarr.push(tmpArr[i]);
            }
            this.showMore = true;
          }else{
            tmpArr = this.allArr.slice(this.page*6,this.page*6 + 6);
            for(let i = 0; i < tmpArr.length; i++){
              this.listarr.push(tmpArr[i]);
            }
            this.page++;
          }


        },500);

      }

    }
  },
  destroyed() {
    window.removeEventListener('scroll',this.getList);
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
.myZoom-enter-active{
  animation: myZoom .5s linear both;
}
@keyframes myZoom{
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
