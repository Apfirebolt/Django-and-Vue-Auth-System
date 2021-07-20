<template>
  <div>
    <header-component />
    <h1>Dash</h1>
    <router-view />
    <footer-component />
  </div>
</template>
<script>
import HeaderComponent from '../components/common/header.vue';
import FooterComponent from '../components/common/footer.vue';

export default {
  name: 'DashboardLayout',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
