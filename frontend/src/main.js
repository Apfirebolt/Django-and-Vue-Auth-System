import Vue from 'vue';
import VueTailwind from 'vue-tailwind/dist/full';
import events from './plugins/events';
import App from './App.vue';
import router from './router';
import axios from './plugins/interceptor';
import './assets/tailwind.css';
import VueTailwindSettings from './plugins/vue-tailwind';

Vue.config.productionTip = false;

Vue.use(VueTailwind, VueTailwindSettings);
Vue.prototype.$http = axios;
Vue.prototype.$bus = events;
Vue.prototype.$toast = {
  show: (message) => {
    Vue.prototype.$bus.emit('add_toast', message);
  },
};
Vue.prototype.$loading = {
  show: () => {
    Vue.prototype.$bus.emit('show_loading');
  },
  hide: () => {
    Vue.prototype.$bus.emit('hide_loading');
  },
};

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.ignoreAuth)) {
//     const token = window.localStorage.getItem('access_token');
//     if (token) {
//       next({ name: 'Home' });
//     } else {
//       next();
//     }
//   } else {
//     const me = await Vue.prototype.$http.get('me');
//     if (me && me.id) {
//       Vue.prototype.$currentUser = me;
//     }
//   }
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
