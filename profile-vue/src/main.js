// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import NProgress from 'nprogress'; // Progress 进度条
import '@/styles/nprogress.scss';// Progress 进度条 样式
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './static/theme/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(iView)

Vue.prototype.$axios = axios
NProgress.configure({ ease: 'ease', speed: 400 });

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  next()
})
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
