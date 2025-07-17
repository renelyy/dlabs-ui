import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
      aliasesExclude: [/auto-imports\.d\.ts/, /components\.d\.ts/],
      // 添加以下配置
      rollupTypes: true,
      bundledPackages: ['dlabs-ui']
    })
  ],
  build: {
    lib: {
      entry: 'packages/index.ts',
      name: 'dlabs-ui',
      fileName: (format) => `dlabs-ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: (id) => /^vue/.test(id) || /^element-plus/.test(id),
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        }
      }
    }
  }
})
