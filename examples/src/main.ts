import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 从本地路径导入 DlabsUI
import DlabsUI from '../../packages/index.ts'

const app = createApp(App)
app.use(ElementPlus)
app.use(DlabsUI)
app.mount('#app')
