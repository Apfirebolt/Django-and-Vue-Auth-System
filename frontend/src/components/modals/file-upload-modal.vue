<template>
  <form enctype="multipart/form-data" @submit.prevent="submitForm">
    <div class="space-y-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4">
        <input ref="fileinput" type="file" class="hidden" multiple @change="uploadFile">
        <div>
          <p :class="errorText ? 'text-red-500': ''">
            Upload JSON file containing User data
          </p>
          <p class="text-red-500">
            {{ errorText }}
          </p>
        </div>
        <t-button class="flex justify-center" type="button" @click.prevent="$refs.fileinput.click()">
          <icon-component color="#fff" class="mx-2" name="upload" />
        </t-button>
      </div>
    </div>
    <div class="flex justify-center">
      <t-button type="submit">
        Upload
      </t-button>
    </div>
  </form>
</template>
<script>
import IconComponent from '../common/svg-icon.vue';

export default {
  name: 'UploadFileModal',
  components: {
    IconComponent,
  },
  data() {
    return {
      file: null,
      errorText: '',
    };
  },
  methods: {
    uploadFile() {
      this.file = { ...this.$refs.fileinput.files };
    },
    async submitForm() {
      if (!this.file) {
        this.errorText = 'No file chosen';
      } else {
        this.errorText = '';
        this.$emit('uploadFile', this.file[0]);
      }
    },
  },
};
</script>
