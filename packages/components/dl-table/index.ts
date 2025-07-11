import DlTable from './src/dl-table.vue'
import type { App } from 'vue'

DlTable.install = (app: App) => {
    app.component(DlTable.name || 'DlTable', DlTable)
}

export default DlTable
export {
    DlTable
}