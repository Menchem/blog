<template>
<div class="my-footer">
  <p>copyright&copy;2019</p>
  <p>博客由vuejs+thinkphp搭建</p>
</div>
</template>

<script>
export default{
  name: "Myfooter",
  data(){
    return {

    }
  }
}
</script>

<style lang="less">
.my-footer{
  width: 100%;
  background-color: #000;
  background-color: rgba(0,0,0,.9);
  margin-top: 20px;
  overflow: hidden;
  padding: 10px 0;
  p{
    font-size: 16px;
    color: #fff;
    height: 24px;
  }
}
</style>
