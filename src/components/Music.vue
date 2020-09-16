<template>
<div class="music-box">
    <div class="play_bg"></div>
    <div class="music-list-header">
      <ul>
        <li>歌曲名字</li>
        <li>歌手</li>
        <li>时长</li>
      </ul>
    </div>

    <div class="music-list">
      <ul>
        <li v-for="(item,index) in songlist" :data-index="index">
          <div class="song-name">{{item.title}}</div>
          <div class="song-anthor">{{item.singer}}</div>
          <div class="song-time">{{format(item.interval)}}</div>
        </li>
      </ul>
    </div>
    <div class="player-wrap">
      <Player></Player>
    </div>
    <div class="return-home"><router-link to="/">返回首页</router-link></div>

</div>
</template>

<script>

import Player from './Player.vue'
import jsonp from '../common/js/jsonp.js'
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'Music',
  data(){
    return {
      songlist: [
        {
          title: "兄弟想你了(完整版)",
          singer: "潇公子（刘潇）",
          interval: 261,
          mid: "003wY9Zt1D8eri",
          sign: "zzay9gmkjzucdo81vbu474efbad7d4f2f77f226e3fe241c68e4"
        },
        {
          title: "谪仙",
          singer: "伊格赛听",
          interval: 178,
          mid: "000zFAcX3JhXzY",
          sign: "zza2vbrwg5mh8wti1abdcd5a3bb1ada012f2b8b298a83dc9"
        },
        {
          title: "游山恋",
          singer: "海伦",
          interval: 223,
          mid: '001oGtPo00bUil',
          sign: "zzaclajrxh0ew7o6f88876d3f6ee2d0d9bb55714c066c9420a"
        },
        {
          title: "少年",
          singer: "梦然",
          interval: 236,
          mid: "000S7TGL43hhBO",
          sign: "zza6ugp28g3sxndcrnfe76e6f3466cfc1cbf1bd121377be7fbd"
        },
        {
          title: "永不失联的爱",
          singer: "单依纯",
          interval: 263,
          mid: "002GwAma2DGN2x",
          sign: "zzawc0rdvalyxn0e988bf18d5564b4bdf18e98d1eb0d64"
        },
        {
          title: "甜甜咸咸",
          singer: "赵芷彤",
          interval: 197,
          mid: "000XOKAc3HhtFp",
          sign: "zza8xjok0ekup2a9s50459a1cff38f9480327cb493a276bb384"
        },
        {
          title: "海海海",
          singer: "阿悄",
          interval: 246,
          mid: "003zgIEp0IaErZ",
          sign: "zza3i7mn2pzo25491d4243aafdc024d6d070ab9237c5d"
        }
      ]
    }
  },
  components:{
    Player
  },
  computed:{
    ...mapState(['musicList'])
  },
  mounted() {
    let musicBox = document.querySelector('.music-box');
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    musicBox.style.height = height + 'px';
    let jsonpdata = {
      uin: 0,
      format: 'jsonp',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: 26
    };
    jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', jsonpdata, {
      param: 'jsonpCallback'
    }).then((res)=>{
      //this.songlist = res.songlist.slice(0,8);
      //let mid = [];
      //for(let i = 0; i<this.songlist.length; i++){
        //let obj = {
          //title: this.songlist[i].data.albumname + ' - ' + this.songlist[i].data.singer[0].name,
          //time: this.songlist[i].data.interval,
          //mid: this.songlist[i].data.songmid
        //};
        //mid.push(obj);
      //}
      //this.addMusic(mid);
    });
    this.addMusic(this.songlist);
  },
  methods: {
    ...mapMutations(['addMusic']),
    format(interval){
       let minute =  this.addZero(parseInt(interval / 60));
       let second = this.addZero(interval % 60);
       return `${minute} : ${second}`;
    },
    addZero(num){
      return num > 9 ? num : '0'+num;
    }
  }
}
</script>

<style lang="less" scoped>
.music-box{
  width: 100%;
  background-color: #292a2b;
  background-size: cover;
  .play_bg{
    background: url('https://y.gtimg.cn/music/photo_new/T002R300x300M000003FH7ql1bNHFQ.jpg?max_age=2592000') center center no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(65px);
    opacity: 0.85;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .music-list-header{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    font-size: 0;
    height: 60px;
    border-bottom: 1px solid rgba(255,255,255,.2);
    li{
      font-size: 18px;
      display: inline-block;
      height: 60px;
      line-height: 60px;
      color: #fff;
      color: rgba(255,255,255,.8);
      text-align: left;
      font-weight: bold;
    }
    li:nth-child(1){
      width: 65%;
    }
    li:nth-child(2){
      width: 26%;
    }
    li:nth-child(3){
      width: 9%;
    }

  }
  .music-list{
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    font-size: 0;
    height: 55px;
    li{
      border-bottom: 1px solid rgba(240,240,240,.1);
    }
    div{
      font-size: 16px;
      display: inline-block;
      height: 55px;
      line-height: 55px;
      color: #fff;
      color: rgba(255,255,255,.8);
      text-align: left;
    }
    div:nth-child(1){
      width: 65%;
    }
    div:nth-child(2){
      width: 26%;
    }
    div:nth-child(3){
      width: 9%;
    }
  }
  .player-wrap{
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 640px;
    z-index: 100;
  }
  .return-home{
    width: 100px;
    height: 35px;
    line-height: 35px;
    background-color: #55ab55;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    font-size: 16px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    a{
      color: #fff;
    }
  }
}
</style>
