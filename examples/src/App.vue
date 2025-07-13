<script setup lang="ts">
import type { FormItemConfig } from "dlabs-ui";
import { computed, ref } from "vue";

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

const handleChange = (
  prop: string,
  value: any,
  formData: any,
  formList: FormItemConfig[]
) => {
  console.log(prop, value, formData, formList);
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <DlForm
    :cols="3"
    v-model="formData"
    :form-list="formList"
    @change="handleChange"
  />

  <DlTable
    :data="[{ name: '123', age: 18, gender: '男' }]"
    :columns="[
      { prop: 'name', label: '姓名' },
      { prop: 'age', label: '年龄' },
      { prop: 'gender', label: '性别' }
    ]"
    >新增</DlTable
  >
</template>

<style scoped>
.logo {
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
}
</style>
