# DlForm 高级表单

基于 Element Plus Form 封装的高级表单组件，支持配置化生成表单元素和自动校验。

## 基本用法

```vue
<template>
  <DlForm
    v-model="formData"
    :formList="formList"
    :rules="rules"
    @submit="handleSubmit"
  >
    <template #footer>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </template>
  </DlForm>
</template>

<script setup>
import { DlForm } from 'dlabs-ui';
import { ref } from 'vue';

const formData = ref({
  username: '',
  email: '',
  age: null,
  gender: 'male'
});

const formList = [
  { prop: 'username', label: '用户名', type: 'input', placeholder: '请输入用户名' },
  { prop: 'email', label: '邮箱', type: 'input', type: 'email', placeholder: '请输入邮箱' },
  { prop: 'age', label: '年龄', type: 'input-number', min: 18, max: 100 },
  { 
    prop: 'gender', 
    label: '性别', 
    type: 'select', 
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  { 
    prop: 'city', 
    label: '城市', 
    type: 'select', 
    dependencies: ['gender'],
    loadOptions: async (formData) => {
      // 模拟根据性別加载不同城市选项
      const cityMap = {
        male: [{ label: '北京', value: 'beijing' }, { label: '上海', value: 'shanghai' }],
        female: [{ label: '广州', value: 'guangzhou' }, { label: '深圳', value: 'shenzhen' }]
      };
      return cityMap[formData.gender] || [];
    }
  }
];

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
};

const handleSubmit = () => {
  console.log('表单提交:', formData.value);
};
</script>
```

## Props

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | Record<string, any> | {} | 表单数据对象 |
| formList | FormItemConfig[] | [] | 表单配置列表 |
| rules | FormRules | {} | 表单校验规则 |
| labelWidth | string \| number | '120px' | 标签宽度 |
| inline | boolean | false | 是否行内表单 |

## FormItemConfig 配置项

| 参数名 | 类型 | 说明 |
|--------|------|------|
| prop | string | 表单字段名 |
| label | string | 标签文本 |
| type | 'input' \| 'input-number' \| 'select' \| 'radio' \| 'checkbox' | 表单组件类型 |
| placeholder | string | 输入提示文本 |
| options | { label: string, value: any }[] | 选择类组件的静态选项 |
| min | number | 数字输入框最小值 |
| max | number | 数字输入框最大值 |
| dependencies | string[] | 依赖的字段列表，用于级联更新 |
| loadOptions | (formData: Record<string, any>, dependencies: string[]) => Promise<{ label: string, value: any }[]> | 动态加载选项的函数，当依赖字段变化时触发 |
| step | number | 数字输入框步长 |

## 事件

| 事件名 | 回调参数 | 说明 |
|--------|----------|------|
| submit | - | 表单提交事件 |
| update:modelValue | value | 表单数据变化事件 |
| validate | (valid: boolean, errors: any) => void | 表单校验事件 |