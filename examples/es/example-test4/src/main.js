import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import InputText from 'primevue/inputtext';

createApp(App).use(PrimeVue,{theme: {preset: Aura}}).component('InputText', InputText).use(vfjsPlugin).mount('#app');
