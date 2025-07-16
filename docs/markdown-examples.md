# DlabsUI 组件 Markdown 示例

本页展示如何在 Markdown 中直接使用 DlabsUI 组件。

## DlTable 组件示例

```vue
<template>
  <DlTable
    :columns="columns"
    :data="tableData"
    stripe
    border
  />
</template>

<script setup>
import { DlTable } from 'dlabs-ui';

const columns = [
  { label: '姓名', prop: 'name', width: 120 },
  { label: '职位', prop: 'position', width: 180 },
  { label: '部门', prop: 'department' }
];

const tableData = [
  { name: '张三', position: '前端开发工程师', department: '研发部' },
  { name: '李四', position: '产品经理', department: '产品部' }
];
</script>
```

## DlForm 组件示例

```vue
<template>
  <DlForm
    :formList="formList"
    v-model="formData"
    inline
  />
</template>

<script setup>
import { DlForm } from 'dlabs-ui';
import { ref } from 'vue';

const formData = ref({ name: '', status: '' });

const formList = [
  { prop: 'name', label: '姓名', type: 'input', placeholder: '请输入姓名' },
  { 
    prop: 'status', 
    label: '状态', 
    type: 'select', 
    options: [
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' }
    ]
  }
];
</script>
```
