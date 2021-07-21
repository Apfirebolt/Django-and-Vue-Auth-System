<template>
  <main>
    <div>
      <!-- File Upload Modal -->
      <t-modal v-model="isFileUploadModalOpened" header="Upload JSON File">
        <file-upload-modal @uploadFile="uploadFile" />
      </t-modal>
      <!-- Hero card -->
      <div class="relative my-3">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Welcome, {{ user.username }}</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Through your dashboard, you can upload bulk user data using a JSON file upload, see list of already uploaded data by clicking here
                <router-link :to="{name: 'FileUserList'}" class="shadow-sm text-base font-medium text-white ml-2 font-bold text-lg">
                  User Data
                </router-link>
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <t-button class="px-4 py-3 text-base font-medium rounded-md shadow-sm sm:px-8" @click.prevent="isFileUploadModalOpened = true">
                  Upload File
                </t-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import FileUploadModal from '../modals/file-upload-modal.vue';

export default {
  name: 'HeroSection',
  components: {
    FileUploadModal,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFileUploadModalOpened: false,
    };
  },
  methods: {
    async uploadFile(fileData) {
      const data = new FormData();
      data.append('file', fileData);
      const response = await this.$http.post('files/', data);
      if (response) {
        this.$bus.emit('add_toast', {
          content: 'User JSON file successfully uploaded.',
          type: 'success',
        });
      }
      this.isFileUploadModalOpened = false;
    },
  },
};
</script>
