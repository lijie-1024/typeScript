import Vue from 'vue';
import Router from 'vue-router';
import stickyNotePage from '../page/stickyNotePage.vue';

export default new Router({
    // history模式
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        // 常规模块加载
        {
            path: '/',
            name: 'stickyNotePage',
            component: stickyNotePage,
        },
        // 路由懒加载写法
        {
            path: '/hello',
            name: 'hello',
            component: () => import(/* webpackChunkName: "hello" */'../page/HelloWorld.vue'),
        },
        {
            path: '/learn',
            name: 'learn',
            component: () => import(/* webpackChunkName: "learn" */'../page/learn.vue'),
        },
        {
            path: '/markdown',
            name: 'markdown',
            component: () => import(/* webpackChunkName: "markdown" */'../page/markdown.vue'),
        },
    ],
})
Vue.use(Router);