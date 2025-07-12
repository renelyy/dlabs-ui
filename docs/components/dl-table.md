# DlTable 高级表格

基于 Element Plus Table 封装的高级表格组件，提供更便捷的配置化用法和增强功能。

## 基本用法

```vue
<template>
  <DlTable
    :columns="columns"
    :data="tableData"
    :pagination="true"
    @row-click="handleRowClick"
  />
</template>

<script setup>
import { DlTable } from 'dlabs-ui';

const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', type: 'number', align: 'center' },
  { prop: 'email', label: '邮箱' },
  { prop: 'status', label: '状态', formatter: (row) => (row.status ? '启用' : '禁用') }
];

const tableData = [
  { name: '张三', age: 28, email: 'zhangsan@example.com', status: true },
  { name: '李四', age: 32, email: 'lisi@example.com', status: false }
];

const handleRowClick = (row) => {
  console.log('点击行数据:', row);
};
</script>
```

## Props

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| columns | Column[] | [] | 表格列配置 |
| data | any[] | [] | 表格数据源 |
| pagination | boolean \| PaginationProps | false | 是否显示分页 |
| border | boolean | false | 是否显示边框 |
| stripe | boolean | true | 是否显示斑马纹 |

## Column 配置项

| 参数名 | 类型 | 说明 |
|--------|------|------|
| prop | string | 对应数据源的字段名 |
| label | string | 列标题 |
| width | number \| string | 列宽度 |
| align | 'left' \| 'center' \| 'right' | 对齐方式 |
| type | 'selection' \| 'index' \| 'expand' \| 'number' | 列类型 |
| formatter | (row: any, column: any) => any | 单元格格式化函数 |

## 事件

| 事件名 | 回调参数 | 说明 |
|--------|----------|------|
| row-click | row, column, event | 行点击事件 |
| selection-change | selection | 选择项变化事件 |
| sort-change | { column, prop, order } | 排序变化事件 |