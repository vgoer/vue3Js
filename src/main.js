import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style/dark.css'


// 路由文件
import {router} from './router/index'

createApp(App).use(router).use(ElementPlus).mount('#app')
