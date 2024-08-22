import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import './assets/style.scss'
import './assets/sass/reset.scss'

createApp(App).
    use(router).
    use(i18n).
    mount('#app')