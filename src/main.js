import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'vuetify/dist/vuetify.min.css' // Agrega esta línea para importar los estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const vuetify = createVuetify() // Crea una instancia de Vuetify

app.use(vuetify) // Registra Vuetify en tu aplicación Vue
app.mount('#app')
