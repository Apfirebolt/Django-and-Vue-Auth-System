<template>
  <div class="shadow overflow-y-visible border-b border-gray-200 sm:rounded-lg my-3">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Body
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Uploaded By
          </th>
        </tr>
      </thead>
      <tbody v-if="fileUsers.length > 0" class="bg-white divide-y divide-gray-200">
        <tr v-for="user in fileUsers" :key="user.id">
          <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
            {{ user.id }}
          </td>
          <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
            {{ user.title }}
          </td>
          <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
            {{ user.body }}
          </td>
          <td class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
            {{ user.uploaded_by_user }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'UserListTable',
  props: {
    fileUsers: {
      type: Array,
      required: true,
    },
  },
};
</script>
