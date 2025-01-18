import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';
import {createBootstrap} from 'bootstrap-vue-next';

createApp(App).use(createBootstrap()).use(vfjsPlugin).mount('#app');
