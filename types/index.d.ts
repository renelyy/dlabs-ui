declare module 'dlabs-ui' {
  import { App } from 'vue';
  import type { Component } from 'vue';

  export interface FormItemConfig {
    label: string;
    prop: string;
    type: 'input' | 'number' | 'select' | (() => Component);
    [key: string]: any;
  }

  export const DlForm: Component;
  export const DlTable: Component;

  const install: (app: App) => void;

  export { DlForm, DlTable, FormItemConfig };
  export default install;
}