// 路由文件

import { createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    // 其他
    {
        path:'/',
        // 添加新属性
        meta:{
            transition:'animate__fadeInDown',
            index:0,
        },
        component:() => import('../views/Home/index.vue'),

    },
    // 登录页面
    {
        path:'/login',
        // 添加新属性
        meta:{
            transition:'animate__fadeInDown',
            index:1,
        },
        component:() => import('../views/Login/index.vue')
    },
    // 注册页面
    {
        path:'/register',
        // 添加新属性
        meta:{
            transition:'animate__fadeInDown',
            index:1,
        },
        component:() => import('../views/Register/index.vue')
    },
    // 图表
    {
        path:'/echarts',
        meta:{
            transition:'animate__fadeInDown',
            index:0,
        },
        component:() => import('../views/Echarts/index.vue')
    }
]


// 路由守卫



export const router = createRouter({
    history:createWebHashHistory(),
    routes
})