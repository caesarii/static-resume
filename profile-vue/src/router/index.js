import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'二维火简历系统',
      component:require('../components/Home.vue'),
      children:[
        {
          path:'hr',
          name:'HR',
          component:require('../components/hr.vue')
        },
        {
          path:'resume',
          name:'新增简历',
          component:require('../components/resume.vue')
        },
      ]
    },
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path: '/404',
      name: '404',
      component: require('../components/common/Error404.vue')
    },
    { path: '*', redirect: '/404', hidden: true }
  ],
  // hashbang: false,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    console.log(to.hash)
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})
