<template>
  <div id="app" class="bg-blue-50">
    <loading />
    <default-toast />
    <router-view />
  </div>
</template>

<script>
import Loading from './components/common/loading.vue';
import DefaultToast from './components/toasts/default-toast.vue';

export default {
  name: 'App',
  components: {
    DefaultToast,
    Loading,
  },
};
</script>
