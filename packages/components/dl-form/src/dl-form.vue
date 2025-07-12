<template>
  <el-form ref="formRef" :rules="rules" class="color">
    <el-form-item v-for="form in formList" :label="form.label" :key="form.prop">
      <component
        :is="getComponent(form)"
        v-bind="getProps(form)"
        v-model="modelValue[form.prop]"
      ></component>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import type { Component, VNode } from "vue";
import { ref, watch, useTemplateRef } from "vue";
import { ElInput, ElInputNumber, ElSelect } from "element-plus";

defineOptions({
  name: "DlForm"
});

const FormTypeMap = {
  input: ElInput,
  number: ElInputNumber,
  select: ElSelect
};

import type { FormItemConfig } from './types';

const props = defineProps<{
  modelValue: Record<string, any>;
  formList: FormItemConfig[];
  rules?: FormRules;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void;
}>();

const localModel = ref<Record<string, any>>({ ...props.modelValue });

// 监听外部modelValue变化同步到本地
watch(() => props.modelValue,
  (newVal) => {
    localModel.value = { ...newVal };
  },
  { deep: true }
);

// 监听本地变化同步到外部
watch(localModel,
  (newVal) => {
    emit('update:modelValue', newVal);
  },
  { deep: true }
);

const formInstance = useTemplateRef<FormInstance>("formRef");

const getComponent = (form: FormItemConfig) => {
  if (typeof form.type !== "string") return form.type;

  return FormTypeMap[form.type];
};

const EXCLUDES = ["label", "type", "prop"];
const getProps = (form: FormItemConfig) => {
  const props: Record<string, any> = {};
  Object.keys(form).forEach(key => {
    if (!EXCLUDES.includes(key)) {
      props[key] = form[key];
    }
  });
  return props;
};

defineExpose({
  validate() {
    return formInstance.value?.validate();
  }
});
</script>
<style lang="scss" scoped>
</style>
