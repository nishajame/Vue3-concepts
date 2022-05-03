import { createApp } from 'vue'
import App from './App.vue'
import BindingText from './components/BindingText.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import Methods from './components/Methods.vue'
import EventHandling from './components/EventHandling.vue'
import FormHandling from './components/FormHandling.vue'
import vOnceDirective from './components/vOnceDirective.vue'
import ComputedProperties from './components/ComputedProperties.vue'

const app = createApp(App)
app.component('BindingText',BindingText)
app.component('ConditionalRendering',ConditionalRendering)
app.component('ListRendering',ListRendering)
app.component('Methods',Methods)
app.component('EventHandling',EventHandling)
app.component('FormHandling', FormHandling)
app.component('vOnceDirective', vOnceDirective)
app.component('ComputedProperties', ComputedProperties)
app.mount('#app')
