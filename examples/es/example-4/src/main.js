import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createApp } from 'vue'
import App from './App.vue'
import {vfjsPlugin} from 'vue3-form-json-schema';
import {createBootstrap} from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import { BFormInput } from 'bootstrap-vue-next/components';

createApp(App).use(createBootstrap()).component('BFormInput', BFormInput).use(vfjsPlugin).mount('#app');
