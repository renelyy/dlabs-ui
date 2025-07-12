<script setup lang="ts">
import { ref } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
const formList = ref([
  { label: "姓名", prop: "name", type: "input" },
  { label: "年龄", prop: "age", type: "input" },
  {
    label: "性别",
    prop: "gender",
    type: "select",
    options: [
      { label: "男", value: "男" },
      { label: "女", value: "女" }
    ]
  }
]);
const formData = ref({ name: "", age: "", gender: "" });
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

  <DlForm v-model="formData" :form-list="formList" />
  
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
