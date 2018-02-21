import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import moment from 'moment'
Vue.prototype.moment = moment
import 'vue-event-calendar/dist/style.css'
import vueEventCalender from 'vue-event-calendar'
Vue.use(vueEventCalender, {locale: 'en'})

import {routes} from './routes'
const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
