<template>
    <el-table v-bind="$attrs" :data="data">
        <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label">
            <template #default="scope">
                {{ scope.row[column.prop] }}
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup lang="ts">
import { defineProps, defineOptions } from 'vue'

interface Props {
    data: any[],
    columns: {
        prop: string,
        label: string,
    }[]
}

defineProps<Props>()

defineOptions({
    name: 'DlTable'
})
</script>
