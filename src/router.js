import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/home',
      component: ()=>import('@/layout'),
        children:[
          {
            path:'pages',
            component: ()=>import('@/pages/page1/echar.vue')
          },
          {
            path:'home',
            component: ()=>import('@/pages/home/JD.vue')
          }
        ]
    } 
  ]
})