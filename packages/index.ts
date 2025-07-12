import type { App } from 'vue'
import { DlTable } from './components/index'
import { DlForm } from './components/index'

const components = [
    DlTable,
    DlForm,
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name as string, component)
    })
}

export {
    DlTable,
    DlForm,
}

export default { install }