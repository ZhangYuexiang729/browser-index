import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import './assets/css/global.css' //引入全局文件
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
