import VueRouter from 'vue-router'
import AuthGuard from './authGuard'

const routes = [
    {
        path: '/',
        component: () => import('@/components/Main'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/User/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/components/User/Register')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/components/User/Profile'),
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/components/Dashboard/Home'),
        beforeEnter: AuthGuard
    },
    {
        path: '/tech',
        name: 'Tech',
        component: () => import('@/components/Partials/Technologies')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/components/Partials/Projects')
    },
    {
        path: '/open-source',
        name: 'OpenSource',
        component: () => import('@/components/Partials/OpenSource')
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default  router;