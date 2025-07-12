# DlabsUI

基于 Element Plus 的 Vue3 组件库，提供企业级中后台常用组件。

## ✨ 特性
- 基于 Vue 3 和 TypeScript 开发，提供完整的类型定义
- 组件设计遵循企业级中后台 UI 设计规范
- 支持按需引入和完整引入两种方式
- 与 Element Plus 组件无缝兼容

## 📦 安装

### 使用 npm
```bash
npm install dlabs-ui --save
```

### 使用 pnpm
```bash
pnpm add dlabs-ui
```

## 🔨 快速开始

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import DlabsUI from 'dlabs-ui'
import 'dlabs-ui/dist/style.css'

createApp(App)
  .use(DlabsUI)
  .mount('#app')
```

### 按需引入

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { DlTable, DlForm } from 'dlabs-ui'
import 'dlabs-ui/dist/style.css'

const app = createApp(App)
app.component('DlTable', DlTable)
app.component('DlForm', DlForm)
app.mount('#app')
```

## ⚠️ 版本要求

使用 DlabsUI 时，需确保项目环境满足以下版本要求：

| 依赖 | 版本要求 |
|------|----------|
| Vue | ≥ 3.5.17 |
| Element Plus | ≥ 2.10.3 |
| Node.js | ≥ 14.0.0 |
| TypeScript | ≥ 4.5.0 |

## 📋 使用注意事项

1. **样式导入**：无论使用哪种引入方式，都需要手动导入组件库样式
   ```typescript
   import 'dlabs-ui/dist/style.css'
   ```

2. **Element Plus 冲突**：DlabsUI 基于 Element Plus 开发，无需重复安装 Element Plus，但需确保版本兼容

3. **TypeScript 配置**：请确保 `tsconfig.json` 中设置了正确的模块解析方式
   ```json
   {
     "compilerOptions": {
       "moduleResolution": "bundler",
       "allowSyntheticDefaultImports": true
     }
   }
   ```

4. **构建工具**：推荐使用 Vite 4.x 及以上版本进行项目构建

## 📚 文档

完整文档请访问：[http://localhost:5173/](http://localhost:5173/)

### 本地运行文档
```bash
pnpm docs:dev
```

## 🔧 开发指南

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev:all
```

### 构建组件库
```bash
pnpm build
```

### 构建文档和示例
```bash
pnpm build:all
```

## 📄 许可证

[MIT](LICENSE)
