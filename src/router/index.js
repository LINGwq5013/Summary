import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/smartTown'
            },
            {
              path: '/software/smartTown',
              name: 'software',
              component: resolve => require(['@/view/Software_smartTown'], resolve),
              meta: {
                title: '软件产品丨智能小镇管理系统'
              }
            },
            {
              path: '/software/bigData',
              name: 'software',
              component: resolve => require(['@/view/Software_bigData'], resolve),
              meta: {
                title: '软件产品丨大数据管理系统'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/introduce',
          name: 'introduce',
          component: resolve => require(['@/view/introduce'], resolve),
          meta: {
            title: '自我介绍',
            requireAuth: true // 需要验证登录状态
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, 
        {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/vantlist',
          name: 'vantlist',
          components: {
            "big": resolve => require(['@/view/vant/Vantlist'], resolve),
          },
          meta: {
            title: 'Vantlist'
          }
        },
        {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/view/login'], resolve),
          meta: {
            title: 'login'
          }
        },
        {
          path: '/try',
          name: 'try',
          components:{
           'big':resolve => require(['@/view/try'], resolve),
          },
          // component: resolve => require(['@/view/try'], resolve),
          meta: {
            title: 'try'
          }
        },
        {
          path: '/weather/:cityid',
          name: 'weather',
          components:{
            'big': resolve => require(['@/view/weather'], resolve),
          },
          // component: resolve => require(['@/view/weather'], resolve),
          meta: {
            title: 'weather'
          }
        },
        {
          path: '/amap',
          name: 'amap',
          components:{
            'big':resolve => require(['@/view/amap1'], resolve),
          },
          // component: resolve => require(['@/view/amap1'], resolve),
          meta: {
            title: '购物车案例'
          },
          children:[
            {
              path:'/amap',
              redirect:'/amap/goods'
            },
            {
              path:'/amap/goods',
              name: 'goods',
              component: resolve => require(['@/view/cart/goods'], resolve),
            },
            {
              path:'/amap/orders',
              name: 'orders',
              component: resolve => require(['@/view/cart/orders'], resolve),
            }
          ]
        },
        {
          path: '/servicedetail/:id',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'], resolve),
          meta: {
            title: '相关服务'
          }
        },
        {
          path: '/error',
          name: 'error',
          component: resolve => require(['@/view/error'], resolve),
          meta: {
            title: '相关服务'
          }
        },
        {
          path: '/shuju',
          name: 'shuju',
          component: resolve => require(['@/view/shuju'], resolve),
          meta: {
            title: '数据处理'
          }
        }
      ]
    }
  ]
})
