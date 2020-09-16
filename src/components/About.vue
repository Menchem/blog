<template>
<div class="about">
  <HeaderBox></HeaderBox>
  <div class="a-box">
    <h1>周梦成的个人博客</h1>
    <div class="con-text">
        <p style="color: #666;font-size: 24px;"><i>一个爱瞎折腾的代码搬运工</i></p>
        <p>90后，对一些新鲜事物感到好奇，性格有些腼腆但内心又渴望与人交流。</p>
        <p>电话：153********（具体见控制台）</p>
        <p style="font-size: 20px;line-height: 30px;color: #e6a23c;">==为什么建这个博客==</p>
        <p>建这个博客最开始是用来学习vue知识，</p>
        <p>后来将这个博客慢慢搭建起来，</p>
        <p>一是可以记录一些东西,二是可以用来学习。</p>
        <p>现在前端已经不再是html+css的时代，需要学习很多东西，</p>
        <p>各种框架和思想都需要学习和吸收，</p>
        <p>我不是一个有天赋的人，只能慢慢通过练习来熟悉和了解这些东西。</p>
        <p>也非常希望和更多的小伙伴一起来讨论学习。</p>
    </div>

  </div>

</div>
</template>

<script>
import HeaderBox from './Header.vue'

export default {
  name: "About",
  components:{
    HeaderBox
  },
  mounted(){
    console.log("%c%s","color:red;background-color:yellow;font-size: 18px","联系电话：15307206926");
  }
}
</script>

<style lang="less">
  .a-box{
    margin-top: 80px;
    h1{
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #e2dfdf;
    }
    .con-text{
      width: 700px;
      margin: 20px auto;
      text-align: left;
      p{
        font-size: 16px;
        line-height: 40px;
      }
    }
  }
</style>
