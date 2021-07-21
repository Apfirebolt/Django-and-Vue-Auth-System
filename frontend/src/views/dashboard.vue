<template>
  <div>
    <p class="text-blue-500">
      Dashboard Page
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      userData: null,
    };
  },
  mounted() {
    console.log('Dashboard page ');
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const response = await this.$http.get('users/profile');
      if (response) {
        console.log('Response ', response);
      }
    },
  },
};
</script>
