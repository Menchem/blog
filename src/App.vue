<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data(){
    return {
      store: {
        a: 1
      }
    }
  },
  name: 'App',
  components: {

  },
}
</script>

<style lang="less">
@import 'common/css/reset.css';
@import 'common/css/iconfont.css';

@color:#efefef;
body{
  background-color: @color;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
