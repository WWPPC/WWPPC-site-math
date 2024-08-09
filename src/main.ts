import { isDev, setTheme } from '#/index';

import './assets/main.css';

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
            path: '/:page(informatics)',
            components: { App },
            children: [
                {
                    path: ':panel',
                    components: { App }
                },
                {
                    path: ':panel(problemView)/:problemId',
                    components: { App }
                },
                {
                    path: ':panel(problemView)/:problemRound(\\d+)_:problemNumber(\\d+)',
                    components: { App }
                },
                {
                    path: ':panel(archive)/:archiveContest',
                    components: { App },
                    children: [{
                        path: ':archiveRound',
                        components: { App },
                        children: [{
                            path: ':archiveProblem',
                            components: { App }
                        }]
                    }]
                },
                {
                    path: ':panel(archiveView)/:archiveContest/:archiveRound/:archiveProblem',
                    components: { App }
                }
            ]
        },
        {
            path: '/:page(user)/@:userView',
            components: { App }
        },
        // spaghetti-er
        {
            path: '/account/:catchAll*',
            redirect(to) {
                window.location.replace(isDev ? 'http://localhost:5173' + to.fullPath : 'https://wwppc.tech' + to.fullPath);
                return { path: '/home' };
            },
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