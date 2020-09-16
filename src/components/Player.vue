<template>
<div class="player">
  <div class="thumb" ref="thumb"><img src="../assets/dpimg.png" alt="图片" width="60" height="60"></div>
  <a href="javascript:;" @click="prevPlay" class="btn-prev"></a>
  <a href="javascript:;" @click="audioPlay" class="btn-play"  ref="cd"></a>
  <a href="javascript:;" @click="nextPlay" class="btn-next"></a>
  <input class="rang" type="range" v-model="precent" min="0" max="100" step="0.1" />
  <div class="title">{{musicName}}</div>
  <div class="music-time">{{mycurrentTime}}  / {{duration}}</div>
  <audio ref="audio"  :src="url" @ended="onended"></audio>
</div>
</template>

<script>
import {mapState} from 'vuex'
import jsonp from '../common/js/jsonp.js'

export default {
  name: "Player",
  props: {
    mList: Array
  },
  data(){
    return {
      num: 0,
      url: '',
      musicName: '',
      mycurrentTime: '00:00',
      duration: '00:00',
      dur: 0,
      curTime: 0,
      precent: 0
    }
  },
  computed:{
    ...mapState(['musicList'])
  },
  watch:{
    musicList: function(xin){
        localStorage.setItem('songIndex', 0);
        this.musicUrl(this.musicList[localStorage.getItem('songIndex')].mid, this.musicList[localStorage.getItem('songIndex')].sign);
    }
  },
  mounted() {
    let that = this;
    this.$refs.audio.addEventListener('timeupdate',function(){
      that.updateTime();
    });
  },
  methods: {
    musicUrl(mid, sign){
      let udata = encodeURIComponent('{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"5944376384","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"5944376384","songmid":["'+ mid +'"],"songtype":[0],"uin":"284939796","loginflag":1,"platform":"20"}},"comm":{"uin":284939796,"format":"json","ct":24,"cv":0}}');
      let url = 'https://u.y.qq.com/cgi-bin/musics.fcg?-=getplaysongvkey946525336002839&g_tk=5381&sign='+sign+'&loginUin=284939796&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=';
      url = url + udata;
      jsonp(url,{param: 'callback'}).then((res)=>{
            //console.log(res);
            if(document.querySelectorAll(".music-list li")){
              let nodeli = document.querySelectorAll(".music-list li");
              for(let i =0; i < nodeli.length; i++){
                nodeli[i].querySelector('.song-name').style.color = '#fff';
              }
              nodeli[localStorage.songIndex].querySelector(".song-name").style.color = "rgb(53,247,7)";
            }
            if(!res.req_0.hasOwnProperty('data')){
              console.log('歌曲有错误自动播放下一首');
              this.nextPlay();
              return ;
            }
            this.url= 'https://ws.stream.qqmusic.qq.com/' + res.req_0.data.midurlinfo[0].purl;
            this.$refs.audio.src = this.url;
            this.$refs.audio.load();
            let that = this;
            this.$refs.audio.ondurationchange =function(){
              that.musicName = that.musicList[localStorage.songIndex].title;
              that.dur = this.duration;
              that.duration = that.formatTime(this.duration);
              that.mycurrentTime = '00:00';
              that.precent = 0;
              if(that.num>0){
                that.audioPlay();
              }
            }
      });
    },
    audioPlay(){
      this.num = 1;
      if(this.$refs.audio.paused){
        this.$refs.cd.classList.remove('btn-play');
        this.$refs.cd.classList.add('btn-pause');
        this.$refs.thumb.classList.add('ani-rotate');
        this.$refs.audio.play();
      }else{
        this.$refs.cd.classList.remove('btn-pause');
        this.$refs.cd.classList.add('btn-play');
        this.$refs.thumb.classList.remove('ani-rotate');
        this.$refs.audio.pause();
      }

    },
    prevPlay(){
      localStorage.songIndex--;
      if(localStorage.songIndex < 0){
        localStorage.songIndex = this.musicList.length-1;
      }
      this.musicUrl(this.musicList[localStorage.songIndex].mid,this.musicList[localStorage.songIndex].sign);
      this.audioPlay();
    },
    nextPlay(){
      localStorage.songIndex++;
      if(localStorage.songIndex > this.musicList.length-1){
         localStorage.songIndex = 0;
      }
      this.musicUrl(this.musicList[localStorage.songIndex].mid,this.musicList[localStorage.songIndex].sign);
      this.audioPlay();
    },
    onended(){
      this.nextPlay();
    },
    formatTime (time) {
       if (time === 0) {
        this.mycurrentTime = '00:00';
        return ;
      }
      const mins = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
      const sec = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
      return `${mins}:${sec}`;
    },
    updateTime(){
      this.curTime = this.$refs.audio.currentTime;
      this.mycurrentTime = this.formatTime(this.$refs.audio.currentTime);
      this.updateProgress(this.curTime, this.dur);
    },
    updateProgress (currentTime, duration) { // 更新进度条
     this.precent = ((currentTime / duration) * 100).toFixed(5);
    }
  }
}
</script>

<style lang="less" scoped>
.player{
  width: 100%;
  max-width: 640px;
  height: 80px;
  .thumb{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  .ani-rotate{
    animation: rotate 2s linear infinite;
  }
  .btn-prev{
    position: absolute;
    top: 15px;
    left: 100px;
    width: 19px;
    height: 20px;
    background: url(../assets/player.png) 0 -30px no-repeat;
  }
  .btn-play{
    position: absolute;
    top: 11px;
    left: 165px;
    width: 21px;
    height: 29px;
    background: url(../assets/player.png) 0 0 no-repeat;
  }
  .btn-pause{
    position: absolute;
    top: 11px;
    left: 165px;
    width: 21px;
    height: 29px;
    background: url(../assets/player.png) -30px 0 no-repeat;
  }
  .btn-next{
    position: absolute;
    top: 15px;
    left: 232px;
    width: 19px;
    height: 20px;
    background: url(../assets/player.png) 0 -52px no-repeat;
  }
  input[type="range"]{
    width: 100%;
    max-width: 350px;
    height: 3px;
    appearance: none;
    outline: none;
    position: absolute;
    left: 300px;
    top: 30px;
  }
  input[type="range"]::-webkit-slider-thumb{
      appearance: none;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: #efefef;
  }
  .title{
    font-size: 16px;
    position: absolute;
    left: 310px;
    top: 2px;
    color: #fff;
    color: rgba(255,255,255,.8);
  }
  .music-time{
    font-size: 16px;
    position: absolute;
    top: 2px;
    right: 0;
    color: #fff;
    color: rgba(255,255,255,.8);
  }
}
@keyframes rotate{
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
