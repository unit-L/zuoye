import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/mymain' //重定向
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

    {
        path: '/mymain',
        name: 'mymain',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/mymain.vue')
    },

    {
        path: '/myfont',
        name: 'myfont',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/myfont.vue'),
        children:[
            {"path":"/",redirect:'tuijian'},
            {"path":'tuijian',name:"tuijian",component:()=>import(/* webpackChunkName: "mytuijian" */ '../views/tuijian.vue')},
            {"path":'guanzhu',name:"guanzhu",component:()=>import(/* webpackChunkName: "myguanzhu" */ '../views/guanzhu.vue')},
            {"path":'tongcheng',name:"tongcheng",component:()=>import(/* webpackChunkName: "mytongcheng" */ '../views/tongcheng.vue')}
        ]
    },
    {
        path: '/main',
        name: 'main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/main.vue')

    },
    {
        path: '/content',
        name: 'content',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "content" */ '../views/content.vue')
    },
    {
        path:'/myitem:itemid',
        name:'myitem',
        //路由栏加载,性能更好
        component: () => import(/* webpackChunkName: "myitem" */ '../views/myitem.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
