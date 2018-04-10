import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import moment from 'moment'
Vue.prototype.moment = moment;
import 'vue-event-calendar/dist/style.css'
import vueEventCalender from 'vue-event-calendar'
Vue.use(vueEventCalender, {locale: 'en',
  weekStartOn: 1});

import VueImg from 'v-img';
Vue.use(VueImg);


import {routes} from './routes'
const router = new VueRouter({
  routes
});

window.Vue = Vue;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
