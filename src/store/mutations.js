export default {
  changeLogin(state){
     state.hasLogin = true;
  },
  changeName(state){
     let name = JSON.parse(localStorage.getItem('info')).username;
     state.loginName = name;
  },
  addMusic(state, newarr){
    state.musicList =  newarr;
  }
}
