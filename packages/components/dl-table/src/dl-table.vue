<template>
  <el-table v-bind="$attrs" :data="data">
    <el-table-column type="selection" width="55" />
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="150"
    >
      <template #header="scope">
        <el-tooltip
          v-if="scope.column.label.length > 10"
          class="item"
          effect="dark"
          :content="scope.column.label"
          placement="top"
        >
          <span>{{ scope.column.label }}</span>
        </el-tooltip>
        <span v-else>
          {{ scope.column.label }}
        </span>
      </template>
      <template #default="scope">
        <span v-if="column.type == 'select'">{{
          column.selectOption[scope.row[scope.column.rawColumnKey]]
        }}</span>
        <span v-else>
          {{ scope.row[scope.column.rawColumnKey] }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps, defineOptions } from "vue";

interface Props {
  data: any[];
  columns: {
    prop: string;
    label: string;
    type: string;
    selectOption: {
      [key: string]: string;
    };
  }[];
}

defineProps<Props>();

defineOptions({
  name: "DlTable"
});
</script>
