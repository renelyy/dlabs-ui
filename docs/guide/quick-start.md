# 快速上手

## 完整引入

在 main.ts 中完整引入 DlabsUI：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import DlabsUI from 'dlabs-ui'
import 'dlabs-ui/dist/style.css'

createApp(App)
  .use(DlabsUI)
  .mount('#app')
```

## 按需引入

您可以只导入需要的组件，以减小项目体积：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { DlButton, DlTable } from 'dlabs-ui'
import 'dlabs-ui/dist/style.css'

const app = createApp(App)
app.component('DlButton', DlButton)
app.component('DlTable', DlTable)
app.mount('#app')
```

## 基础示例

以下是一个简单的 DlTable 使用示例：

```vue
<template>
  <dl-table :data="tableData" :columns="columns"></dl-table>
</template>

<script setup>
const columns = [
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age' },
  { label: '地址', prop: 'address' }
]

const tableData = [
  { name: '张三', age: 18, address: '北京市' },
  { name: '李四', age: 20, address: '上海市' }
]
</script>
```