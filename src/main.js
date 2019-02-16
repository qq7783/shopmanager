// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用element-ui插件
Vue.use(ElementUI);

Vue.config.productionTip = false
// 啊啊啊1111
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
