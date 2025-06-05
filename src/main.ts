import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Landing from './components/Landing.vue';
import Home from './components/Home.vue';
import Loading from './components/Loading.vue';
import Landing2 from './components/Landing2.vue';
import Profile from './components/Profile.vue';
import Web from './components/Web.vue';
import SEO from './components/SEO.vue';
import Logo from './components/Logo.vue';
import Video from './components/Video.vue';


const router = createRouter({
    routes: [
        {
            path: '/landing',
            children: [
                {
                    path: '1',
                    component: Landing
                },
                {
                    path: '2',
                    component: Landing2
                },
            ]
        }, 
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            component: Loading
        }, 
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/web',
            component: Web
        },
        {
            path: '/video',
            component: Video
        },
        {
            path: '/logo',
            component: Logo
        },
        {
            path: '/seo',
            component: SEO
        },
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app');
