import Vue from 'vue';
import VueTailwind from 'vue-tailwind/dist/full';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import events from './plugins/events';
import App from './App.vue';
import router from './router';
import axios from './plugins/interceptor';
import './plugins/validate';
import './assets/tailwind.css';
import VueTailwindSettings from './plugins/vue-tailwind';

Vue.config.productionTip = false;

Vue.use(VueTailwind, VueTailwindSettings);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
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

router.beforeEach(async (to, from, next) => {
  const authIgnoreRoutes = ['Login', 'Register', 'Home'];
  if (authIgnoreRoutes.includes(to.name)) {
    next();
  } else {
    const userProfile = await Vue.prototype.$http.get('users/profile/');
    if (userProfile) {
      Vue.prototype.$currentUser = userProfile;
      next();
    }
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
