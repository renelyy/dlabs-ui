import type { App } from 'vue'
import { DlTable } from './components/index'

const components = [
    DlTable,
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name as string, component)
    })
}

export {
    DlTable
}

export default { install }