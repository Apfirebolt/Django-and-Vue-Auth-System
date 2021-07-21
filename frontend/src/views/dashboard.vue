<template>
  <div>
    <hero-section v-if="$currentUser" :user="$currentUser" />
  </div>
</template>

<script>
import HeroSection from '../components/common/hero-section.vue';

export default {
  name: 'Dashboard',
  components: {
    HeroSection,
  },
};
</script>
