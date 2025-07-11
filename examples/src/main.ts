import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DlabsUI from 'dlabs-ui'

const app = createApp(App)
app.use(ElementPlus)
app.use(DlabsUI)
app.mount('#app')
