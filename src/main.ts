import { setTheme } from '#/index';

import '#/assets/common.css';
import '#/assets/fonts.css';
import './assets/main.css';

import '#/serviceWorker';

setTheme('#0CF', '#F0C', 'orange');

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from '@/App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        // not the right way to do this (but oh well)
        {
            path: '/:page',
            components: { App },
            children: [{
                path: ':panel',
                components: { App }
            }]
        },
        {
            path: '/:page(contest)',
            components: { App },
            children: [{
                path: ':panel',
                components: { App }
            }]
        },
        {
            path: '/:page(user)/@:userView',
            components: { App }
        },
        // spaghetti
        {
            path: '/:catchAll+',
            components: { App }
        }
    ]
});
let handledRoute = false;
router.beforeEach((to, from, next) => {
    // keep old queries unless cleared
    if (to.query.clearQuery !== undefined) {
        next({ ...to, query: { ...to.query, clearQuery: undefined, ignore_server: (from.query.ignore_server !== undefined || to.query.ignore_server !== undefined) ? null : undefined } });
    } else if (handledRoute) {
        next();
    } else {
        next({ ...to, query: { ...to.query, ...from.query, clearQuery: undefined } });
    }
    handledRoute = true;
});
router.afterEach(() => {
    handledRoute = false;
});
app.use(router);
app.mount('#root');