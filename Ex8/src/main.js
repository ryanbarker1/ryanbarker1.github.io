import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        el.style.color = 'blue';
    }
});

Vue.filter('count', function(arr) {
  return arr.length;
});

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
