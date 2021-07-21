<template>
  <div>
    <header-component />
    <feature-list />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../components/common/header.vue';
import FooterComponent from '../components/common/footer.vue';
import FeatureList from '../components/common/features.vue';

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    FeatureList,
    FooterComponent,
  },
};
</script>
