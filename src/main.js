import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';

import './assets/app.css'
import 'primevue/resources/themes/vela-green/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Carousel', Carousel)

app.mount('#app')
