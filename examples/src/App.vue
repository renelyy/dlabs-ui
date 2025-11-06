<script setup lang="ts">
import type { FormItemConfig } from "../../packages/components/dl-form/src/types";
import { computed, ref, useTemplateRef } from "vue";
import type { FormInstance } from "element-plus";

const formData = ref({ name: "", age: "", gender: "" });
const formList = computed(() => [
  { label: "姓名", prop: "name", type: "input", disabled: false },
  {
    label: "年龄",
    prop: "age",
    type: "input",
    disabled: formData.value.name === "张三"
  },
  { label: "部门", prop: "department", type: "input" },
  {
    label: "负责人",
    prop: "leader",
    type: "select",
    options: [],
    dependencies: ["department", "name"],
    placeholder: "请选择负责人",
    loadOptions: async (newFormData: any, dependencies: string[]) => {
      const params: any = {};
      dependencies.forEach(key => {
        params[key] = newFormData[key];
      });
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { label: "张三", value: "张三" },
            { label: "李四", value: "李四" },
            { label: "王五", value: "王五" }
          ]);
        }, 1000);
      });
    }
  },
  {
    label: "性别",
    prop: "gender",
    type: "select",
    hidden: formData.value.name === "张三",
    placeholder: "请选择",
    options: [
      { label: "男", value: "男" },
      { label: "女", value: "女" }
    ]
  }
]);
const rules = ref({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }]
});
const formInstance = useTemplateRef<FormInstance>("formRef");

const handleChange = (
  prop: string,
  value: any,
  formData: any,
  formList: FormItemConfig[]
) => {
  console.log(prop, value, formData, formList);
};

const handleClick = () => {
  formInstance.value
    ?.validate()
    .then(res => {
      if (res) {
        console.log(formData.value);
      }
    })
    .catch(err => {
      console.error(err);
    });
};

const handleToolbarClick = (type: string) => {
  switch (type) {
    case "add":
      // 处理新增
      break;
    case "edit":
      // 处理编辑
      break;
    case "remove":
      // 处理删除
      break;
    case "refresh":
      // 处理刷新
      break;
  }
};
</script>

<template>
  <div>
    <DlForm
      ref="formRef"
      :rules="rules"
      :label-width="80"
      :cols="3"
      v-model="formData"
      :form-list="formList"
      @change="handleChange"
    ></DlForm>

    <el-button @click="handleClick">确定</el-button>

    <!-- <DlToolbar
      :buttons="['add', 'edit', 'remove', 'refresh']"
      :disabled="false"
      @click="handleToolbarClick"
    /> -->
    <DlTable
      border
      :data="[{ name: '123', age: 18, gender: '男', ss: '456' }]"
      :columns="[
        { prop: 'name1', label: '姓名' },
        { prop: 'name2', label: '姓名' },
        { prop: 'name3', label: '姓名' },
        {
          prop: 'ss',
          label: 'ss',
          type: 'select',
          selectOption: [
            { label: '123', value: '123' },
            { label: '456', value: '456' }
          ]
        },
        { prop: 'name4', label: '姓名' },
        { prop: 'name5', label: '姓名' },
        { prop: 'name6', label: '姓名' },
        { prop: 'name7', label: '姓名' },
        { prop: 'name8', label: '姓名' },
        { prop: 'name9', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'age', label: '年龄' },
        { prop: 'age', label: '年龄' },
        { prop: 'gender', label: '性别' },
        { prop: 'dept', label: '部门' },
        { prop: 'dept', label: '部门' },
        { prop: 'dept', label: '部门' },
        { prop: 'dept', label: '部门' },
        { prop: 'dept', label: '部门' },
        { prop: 'leader', label: '负责人负责人负责人负责人' },
        { prop: 'operation', label: '操作', slot: 'operation' }
      ]"
      >新增</DlTable
    >
  </div>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
