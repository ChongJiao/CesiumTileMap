// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import VueCesium from 'vue-cesium'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import VueLoading from 'vue-loading-template'
import XMPP from './api/Xmpp.js'
import Http from './api/Http'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import vueLogger from 'vue-logger'
Vue.use(vueLogger, {
  prefix: () => new Date(),
  dev: true,
  shortname: true,
  levels: ['log', 'warn', 'debug', 'error', 'dir'],
  forceLevels: []
})
Vue.prototype.$video = Video
Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  cesiumPath: 'http://localhost:8000/Cesium/Cesium.js'
  // 个人在线Cesium Build包：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // 官方在线Cesium Build包，有CDN加速，推荐用这个：
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致 Cesium 在线影像加载不了
  // accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNDBhMWRhNy04M2E3LTQ0ZWQtYTVkMS0yNDYyOTA3ZDNjMDgiLCJpZCI6MjIyODIsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE2NzA4NDh9.Ah9tzm1Do4yiB2zSEiHr23iDU2WWgEYSp7k3RZYH2V4'
})
// Vue.use(myStropheConn)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueLoading /** options **/)
// import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
Vue.prototype.$xmpp = XMPP.myStropheConn
// Vue.prototype.$xmppCallBack = XMPP.connectionFun
Vue.prototype.$http = Http.myHttp
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
