import type { Component } from 'vue';

export interface FormItemConfig {
  label: string;
  prop: string;
  type: 'input' | 'number' | 'select' | (() => Component);

  /**
   * 是否隐藏标单项
   */
  hidden?: boolean;

  /**
   * 是否禁用表单项
   */
  disabled?: boolean;

  /**
   * 表单的依赖项
   * 1. 如果当前表单是下拉选择，则其下拉选择内容需要根据依赖项的值进行查询，外部需要提供查询方法 loadOptions
   * 2. 如果当前表单是输入框或者其他表单，则其内容需要根据依赖项的值进行联动，外部需要提供联动方法 link
   */
  dependencies?: string[];

  /**
   * 下拉选择的查询方法
   */
  loadOptions?: (newFormData: any, dependencies: string[]) => Promise<any[]>;

  /**
   * 其他表单的联动方法
   */
  link?: (newFormData: any, dependencies: string[]) => any;
  [key: string]: any;
}