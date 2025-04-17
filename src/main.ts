import { createRouter, setTheme } from '#/index';

import './assets/main.css';

setTheme('lime', 'red', 'yellow');

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';

const app = createApp(App);
const pinia = createPinia();
const router = createRouter(App, []);
app.use(pinia);
app.use(router);
app.mount('#root');