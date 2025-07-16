<template>
  <el-form ref="formRef" :rules="rules" class="color" :model="model" :label-position="props.labelPosition || 'right'">
    <el-row :gutter="getGutter()">
      <el-col v-for="form in __formList" :key="form.prop" :span="getSpan(form)">
        <el-form-item :label="form.label" :label-width="props.labelWidth || form.labelWidth || '120px'"
          :prop="form.prop">
          <component :is="getComponent(form)" v-model="model[form.prop]" v-bind="getProps(form)"
            @change="onChange(form)">
            <el-option v-if="form.type === 'select' && form.options" v-for="(option, index) in form.options"
              :key="index" :label="option.label" :value="option.value"></el-option>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from "element-plus";
import { computed, useTemplateRef } from "vue";
import type { FormItemConfig } from "./types";
import { REQUIRED_FORM_PROPS, FORM_TYPE_MAP } from "./constants";

defineOptions({
  name: "DlForm"
});

const props = defineProps<{
  /**
   * 表单数据
   */
  modelValue: Record<string, any>;

  /**
   * 表单项配置
   */
  formList: FormItemConfig[];

  /**
   * 表单验证规则
   */
  rules?: FormRules;

  /**
   * 表单列数
   */
  cols?: number;

  /**
   * 表单间距
   */
  gutter?: number;

  /**
   * 表单标签宽度
   */
  labelWidth?: string | number;

  /**
   * 标签位置
   */
  labelPosition?: 'left' | 'top' | 'right';
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Record<string, any>): void;
  (
    e: "change",
    prop: string,
    value: any,
    formData: any,
    formList: FormItemConfig[]
  ): void;
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
const __formList = computed(() => props.formList.filter(item => !item.hidden));

const formInstance = useTemplateRef<FormInstance>("formRef");

const onChange = async (form: FormItemConfig) => {
  emit(
    "change",
    form.prop,
    model.value[form.prop],
    model.value,
    props.formList
  );
  const dependentFields = props.formList.filter(item =>
    item.dependencies?.includes(form.prop)
  );

  for (const field of dependentFields) {
    if (field.loadOptions) {
      field.options = await field.loadOptions(
        model.value,
        field.dependencies as string[]
      );
    }
  }
};

const getComponent = (form: FormItemConfig) => {
  if (typeof form.type !== "string") return form.type;

  return FORM_TYPE_MAP[form.type];
};

const getGutter = () => {
  return props.gutter || 20;
};

const getSpan = (form: FormItemConfig) => {
  if (props.cols) {
    return 24 / props.cols;
  }

  if (form.span) {
    return form.span;
  }

  return 24;
};

const getProps = (form: FormItemConfig) => {
  if (form.props) {
    return form.props;
  }
  const props: Record<string, any> = {};
  Object.keys(form).forEach(key => {
    if (!REQUIRED_FORM_PROPS.includes(key)) {
      props[key] = form[key];
    }
  });
  return props;
};

defineExpose({
  validate() {
    return formInstance.value?.validate();
  },
  resetFields() {
    formInstance.value?.resetFields();
  }
});
</script>
<style lang="scss" scoped></style>
