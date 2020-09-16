<template>
  <div id="login">
    <HeaderBox></HeaderBox>
    <div class="login-wrap">
      <h3>登录操作</h3>
      <form action="/login" class="loginform" method="post">
      <div class="zhanghao">
        <span>账号：</span><input name="user" type="text" maxlength="11" v-model="formdata.user" />
      </div>
      <div class="password">
        <span>密码：</span><input name="pwd" type="password" maxlength="24" v-model="formdata.password" />
      </div>
      <div class="remember"><input type="checkbox" v-model="autoLogin" /><span>记住密码</span></div>
      <div class="submit" @click="submitform">登录</div>
      </form>
    </div>
  </div>
</template>

<script>
import  Qs from 'qs';
import HeaderBox from './Header.vue';

export default{
  name: "Login",
  components:{
    HeaderBox
  },
  data(){
    return {
      login_bg: require('../assets/login_bg.jpeg'),
      autoLogin: false,
      formdata: {
        user: "",
        password: ""
      }
    }
  },
  methods:{
    submitform(){
      if(this.testForm()){
            this.$message('账号或密码不能为空!');
      }else{
        let fdata = Qs.stringify(this.formdata);
        this.$http.post('http://test.com:8090/login',fdata).then((res)=>{
             if(res.data.code == 1){
               localStorage.removeItem('info');
               localStorage.setItem('info',JSON.stringify(res.data.info));
               window.location.href = '/';
             }else{
               this.$message(res.data.msg);
             }
        });
      }

    },
    testForm(){
      if(this.formdata.user.trim() == "" || this.formdata.password.trim() == ""){
        return true;
      }else{
        return false;
      }
    }
  },
  mounted() {
    let oheight = document.documentElement.clientHeight || document.body.clientHeight;
    let login = document.getElementById('login');
    login.style.height = oheight + 'px';
    login.style.background = 'url('+ this.login_bg +') center center no-repeat';
  }
}
</script>

<style lang="less">
#login{
  width: 100%;
  background-size: cover;
  .login-wrap{
    position: fixed;
    left: 50%;
    top: 50%;
    border-radius: 2px;
    width: 500px;
    height: 280px;
    color: #444;
    background-color: #fff;
    margin-left: -250px;
    margin-top: -130px;
    h3{
      font-size: 24px;
      height: 35px;
      line-height: 35px;
      margin-top: 30px;
    }
    .zhanghao,.password{
      width: 250px;
      height: 36px;
      font-size: 18px;
      border: 1px solid #999;
      position: relative;
      margin: 10px auto;
      border-radius: 2px;
      span{
        position: absolute;
        left: 2px;
        top: 0;
        display: inline-block;
        height: 100%;
        line-height: 36px;
      }
      input{
        display: inline-block;
        position: absolute;
        outline: none;
        right: 0;
        top: 0;
        width: 200px;
        height: 36px;
        border: 0;
        line-height: 36px;
        font-size: 18px;
      }
    }
    .remember{
      width: 250px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      margin: 10px auto;
      font-size: 0;
      input{
        display: inline-block;
        vertical-align: middle;
        zoom: 150%;
      }
      span{
        font-size: 16px;
        display: inline-block;
        height: 100%;
        vertical-align: top;
      }
    }
    .submit{
      user-select: none;
      border-radius: 4px;
      width: 250px;
      height: 38px;
      line-height: 38px;
      font-size: 20px;
      background-color: #e31725;
      color: #fff;
      margin: 10px auto;
      font-weight: bold;
      cursor: pointer;
    }
    .submit:active{
      background-color: #5d0309;
    }
  }
}
</style>
