// import '@oruga-ui/oruga-next/dist/oruga-full.css';
import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';
import Oruga from '@oruga-ui/oruga-next';

createApp(App).use(Oruga).use(vfjsPlugin).mount('#app');
