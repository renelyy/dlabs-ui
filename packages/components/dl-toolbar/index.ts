import type { App } from 'vue'
import DlToolbar from './src/dl-toolbar.vue'

DlToolbar.install = function (app: App) {
    app.component(DlToolbar.name || 'DlToolbar', DlToolbar)
}

export { DlToolbar }

export default DlToolbar