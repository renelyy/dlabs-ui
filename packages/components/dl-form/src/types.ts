import type { Component } from 'vue';

export interface FormItemConfig {
  label: string;
  prop: string;
  type: 'input' | 'number' | 'select' | (() => Component);
  [key: string]: any;
}