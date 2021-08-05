import { createApp } from 'vue'
// // import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './router' // <---
import App from './App.vue'

createApp(App).use(router).mount('#app')
