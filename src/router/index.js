import Vue from 'vue'
import Router from 'vue-router'
import first from '@/pages/first'
import news from '@/pages/news'
import newsDetail from '@/pages/newsDetail'
import shop from '@/pages/shop'
import shopDetail from '@/pages/shopDetail'
import mine from '@/pages/mine'
import App from '../App'
Vue.use(Router)

export default new Router({
    mode: "hash",
    base: '/dist',
    path: '/',
    component: App,
    routes: [
        { path: '', redirect: '/first' },
        {
            path: '/first',
            name: 'first',
            component: first,
        },
        {
            path: '/news',
            name: 'news',
            component: news,
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: newsDetail,
        },
        {
            path: '/shopDetail',
            name: 'shopDetail',
            component: shopDetail,
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine,
        }


    ],
})