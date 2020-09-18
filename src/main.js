// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import App from './App'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$message = Message

Vue.use(VueAxios, axios)
Vue.use(Router)


const router = new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/components/Home.vue'),
      meta: {title: "年朔的博客首页"}
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/components/Login.vue'),
      mata: {title: "网站登录"}
    },
    {
      name: 'Show',
      path: '/show/:id',
      component: () => import('@/components/Show.vue')
    },
	  {
      name: 'Category',
		  path: '/category',
		  component: () => import('@/components/Category.vue')
	  },
    {
      name: 'About',
      path: '/about',
      component: () => import('@/components/About.vue'),
      meta: {title: "关于我"}
    },
    {
      name: 'Wap',
      path: '/wap',
      component: () => import('@/components/Wap.vue')
    },
    {
      name: 'Music',
      path: '/music',
      component: () => import('@/components/Music.vue'),
      meta: {title: "欣赏音乐"}
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

router.afterEach((to,from)=>{
    if(to.name == 'Wap'){
      document.getElementsByTagName('html')[0].className='wap-html';
      document.getElementsByTagName('body')[0].className='wap-body';
    }else{
      document.getElementsByTagName('html')[0].className='';
      document.getElementsByTagName('body')[0].className='';
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
