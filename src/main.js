import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import VueRouter from 'vue-router'
import router from '@/router/index'
import firebase from "firebase";
import { store } from './store'

let firebaseConfig = {
  apiKey: "AIzaSyAHxlKO-g1jGVe-YuKM-0ptezIzJp0yrYE",
  authDomain: "ld-vue.firebaseapp.com",
  databaseURL: "https://ld-vue.firebaseio.com",
  projectId: "ld-vue",
  storageBucket: "ld-vue.appspot.com",
  messagingSenderId: "424200377039",
  appId: "1:424200377039:web:378e1e73b55faf56be5dba",
  measurementId: "G-XDCZL43EHE"
};


firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(VueRouter)

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!currentUser) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
