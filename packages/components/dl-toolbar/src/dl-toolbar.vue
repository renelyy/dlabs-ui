<template>
  <div class="dl-toolbar">
    <el-space wrap>
      <template v-for="button in visibleButtons" :key="button.type">
        <el-button
          v-bind="button.props"
          @click="handleClick(button.type)"
        >
          <template #icon>
            <el-icon><component :is="button.icon" /></el-icon>
          </template>
          {{ button.label }}
        </el-button>
      </template>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Plus,
  Edit,
  Delete,
  Search,
  Refresh,
  Download,
  Upload
} from '@element-plus/icons-vue'

interface ButtonConfig {
  type: string
  label: string
  icon: any
  props?: Record<string, any>
  show?: boolean
}

const props = defineProps<{
  buttons?: string[]
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', type: string): void
}>()

const defaultButtons: Record<string, ButtonConfig> = {
  add: {
    type: 'add',
    label: '新增',
    icon: Plus,
    props: {
      type: 'primary'
    }
  },
  edit: {
    type: 'edit',
    label: '编辑',
    icon: Edit,
    props: {
      type: 'primary'
    }
  },
  remove: {
    type: 'remove',
    label: '删除',
    icon: Delete,
    props: {
      type: 'danger'
    }
  },
  search: {
    type: 'search',
    label: '搜索',
    icon: Search,
    props: {
      type: 'primary'
    }
  },
  refresh: {
    type: 'refresh',
    label: '刷新',
    icon: Refresh
  },
  export: {
    type: 'export',
    label: '导出',
    icon: Download
  },
  import: {
    type: 'import',
    label: '导入',
    icon: Upload
  }
}

const visibleButtons = computed(() => {
  if (!props.buttons || props.buttons.length === 0) {
    return [defaultButtons.add, defaultButtons.edit, defaultButtons.remove]
  }
  
  return props.buttons
    .map(type => defaultButtons[type])
    .filter(button => button && (button.show !== false))
    .map(button => ({
      ...button,
      props: {
        ...button.props,
        disabled: props.disabled
      }
    }))
})

const handleClick = (type: string) => {
  emit('click', type)
}
</script>

<style scoped>
.dl-toolbar {
  margin-bottom: 16px;
}
</style>