<template>
  <div class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div class="flex justify-between items-center">
        <a href="#" class="flex">
          <img class="h-8 w-auto sm:h-10" src="https://www.inovex.de/wp-content/uploads/2021/04/training-python.png" alt="">
        </a>
        <router-link :to="{name: 'Dashboard'}" class="font-semibold text-gray-500 mx-2 text-lg cursor-pointer">
          Django Vue Auth
        </router-link>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-around">
        <div class="flex items-center md:ml-12">
          <a v-if="checkUserLoggedIn" class="text-base font-medium text-gray-500 hover:text-gray-900 mx-4 cursor-pointer" @click.prevent="attemptLogout">
            Log Out
          </a>
          <div v-else>
            <router-link :to="{name: 'Login'}" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign in
            </router-link>
            <router-link :to="{name: 'Register'}" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  computed: {
    checkUserLoggedIn() {
      const storedToken = localStorage.getItem('access_token');
      if (storedToken) {
        return true;
      }
      return false;
    },
  },
  methods: {
    attemptLogout() {
      window.localStorage.removeItem('access_token');
      this.$bus.emit('add_toast', {
        content: 'Logged out successfully, please login to continue',
        type: 'success',
      });
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
