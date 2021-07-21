<template>
  <div>
    <hero-section v-if="userData" :user="userData" />
  </div>
</template>

<script>
import HeroSection from '../components/common/hero-section.vue';

export default {
  name: 'Dashboard',
  components: {
    HeroSection,
  },
  data() {
    return {
      userData: null,
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      this.$loading.show();
      const response = await this.$http.get('users/profile');
      if (response) {
        this.userData = response;
      }
      this.$loading.hide();
    },
  },
};
</script>
