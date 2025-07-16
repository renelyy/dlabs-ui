---
outline: deep
---

# DlabsUI API 示例

本页展示 DlabsUI 组件库提供的部分组件 API 使用方法。

## DlForm API

### validate 方法
手动触发表单验证

```vue
<template>
  <DlForm ref="formRef" :formList="formList" v-model="formData"></DlForm>
  <el-button @click="handleValidate">验证表单</el-button>
</template>

<script setup>
import { ref } from 'vue';
import { DlForm } from 'dlabs-ui';

const formRef = ref(null);
const formData = ref({ username: '' });
const formList = [{ prop: 'username', label: '用户名', type: 'input' }];

const handleValidate = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    alert('表单验证通过');
  }
};
</script>
```

## DlTable API

### reload 方法
刷新表格数据

```vue
<template>
  <DlTable ref="tableRef" :columns="columns" :data="tableData"></DlTable>
  <el-button @click="handleReload">刷新数据</el-button>
</template>

<script setup>
import { ref } from 'vue';
import { DlTable } from 'dlabs-ui';

const tableRef = ref(null);
const columns = [{ prop: 'name', label: '姓名' }];
const tableData = [{ name: '张三' }];

const handleReload = () => {
  tableRef.value.reload();
};
</script>
```
