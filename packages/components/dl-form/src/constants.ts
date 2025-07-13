import type { FormItemConfig } from "./types";
import {
  ElInput,
  ElInputNumber,
  ElSelect,
  ElRadio,
  ElCheckbox,
  ElSwitch,
  ElDatePicker,
  ElTimePicker,
  ElCascader,
  ElRate,
  ElSlider,
  ElUpload,
} from "element-plus";
import type { Component } from 'vue';

export const REQUIRED_FORM_PROPS: (keyof FormItemConfig)[] = [
  'label',
  'prop',
  'type',
] as const;

export const FORM_TYPE_MAP: Record<string, Component> = {
  input: ElInput,
  number: ElInputNumber,
  select: ElSelect,
  radio: ElRadio,
  checkbox: ElCheckbox,
  switch: ElSwitch,
  date: ElDatePicker,
  time: ElTimePicker,
  cascader: ElCascader,
  rate: ElRate,
  slider: ElSlider,
  upload: ElUpload,
} as const;