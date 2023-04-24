/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import App from './components/layouts/App.vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './routes/routes.js'

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.component('pagination', Bootstrap5Pagination);
app.mount('#app');