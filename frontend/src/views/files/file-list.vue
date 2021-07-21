<template>
  <div>
    <p class="text-blue-500 text-2xl text-center my-3 font-bold">
      LIST OF USERS
    </p>
    <div class="container mx-auto w-3/4">
      <file-list-table :file-users="fileData" />
    </div>
  </div>
</template>

<script>
import FileListTable from '../../components/common/file-list-table.vue';

export default {
  name: 'FileList',
  components: {
    FileListTable,
  },
  data() {
    return {
      fileData: [],
    };
  },
  mounted() {
    this.getFileData();
  },
  methods: {
    async getFileData() {
      this.$loading.show();
      const response = await this.$http.get('files/');
      if (response) {
        this.fileData = response.data;
      }
      this.$loading.hide();
    },
  },
};
</script>
