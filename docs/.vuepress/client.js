import { defineClientConfig } from '@vuepress/client'
import 'element-plus/dist/index.css'
// 导入组件库
import { ElButton, ElCard } from 'element-plus'

export default defineClientConfig({
  enhance ({ app }) {
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(ElButton).use(ElCard)
  }
})