import DlForm from "./src/dl-form.vue";
import type { App } from "vue";

DlForm.install = (app: App) => {
  app.component(DlForm.name || "DlForm", DlForm); // 注册组件
}

export { DlForm };
export default DlForm;
// export * from './src/dl-form.vue';
export * from './src/types';
