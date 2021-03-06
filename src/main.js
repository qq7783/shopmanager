// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入css样式
import '@/assets/css/base.css';
import axios from 'axios';
// 设置url
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";
Vue.prototype.$http = axios;
// 使用element-ui插件
Vue.use(ElementUI);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
