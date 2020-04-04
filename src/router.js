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
            path:'echar',
            component: ()=>import('@/pages/echar')
          },
          {
            path:'JD',
            component: ()=>import('@/pages/JD')
          },
          {
            path:'phone',
            component: ()=>import('@/pages/phone')
          }
        ]
    } 
  ]
})