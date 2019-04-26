// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import ElementUI from 'element-ui';
import Toast from 'muse-ui-toast';
import  config from './config/config'
import VueFab from 'vue-float-action-button' //悬浮按钮
import 'element-ui/lib/theme-chalk/index.css';
//封装好的有拦截器的axios：this.$http
import packedAxios from "./axios/axios";
Vue.use(packedAxios); //使用this.$http代替封装好的axios
Vue.use(MuseUI);
Vue.use(ElementUI);
Vue.use(Toast,config);
Vue.use(VueFab);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
