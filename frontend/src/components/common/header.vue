<template>
  <div class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div class="flex justify-between items-center">
        <a href="#" class="flex">
          <img class="h-8 w-auto sm:h-10" src="https://www.inovex.de/wp-content/uploads/2021/04/training-python.png" alt="">
        </a>
        <span class="font-semibold text-gray-500 mx-2 text-lg">Django Vue Auth</span>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <nav class="flex space-x-10">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <span>More</span>
            </button>
          </div>
        </nav>
        <div class="flex items-center md:ml-12">
          <router-link :to="{name: 'Login'}" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </router-link>
          <router-link :to="{name: 'Register'}" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </router-link>
          <t-button class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" @click.prevent="attemptLogout">
            Log Out
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  methods: {
    attemptLogout() {
      window.localStorage.removeItem('access_token');
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
