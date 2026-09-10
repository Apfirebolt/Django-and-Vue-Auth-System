<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gray-100 p-4**"
  >
    <div
      class="**w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl**"
    >
      <h2 class="**text-3xl font-bold text-center text-gray-800**">Login</h2>
      <form @submit.prevent="handleLogin" class="**space-y-6**">
        <div class="form-group">
          <label
            for="username"
            class="**block text-sm font-medium text-gray-700 mb-1**"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="**w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm**"
          />
        </div>
        <div class="form-group">
          <label
            for="password"
            class="**block text-sm font-medium text-gray-700 mb-1**"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="**w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm**"
          />
        </div>
        <button
          type="submit"
          class="**w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out**"
        >
          Login
        </button>
      </form>
      <p
        v-if="errorMessage"
        class="error-message **text-red-500 text-center text-sm mt-4**"
      >
        {{ errorMessage }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";
import { useData } from "../composables/useData";

const { data, fetchData } = useData();

console.log("Data Composable:", data.value);

const username = ref("");
const password = ref("");
const errorMessage = ref("");
const { user, loading, error, login } = useAuth();

const handleLogin = async () => {
  try {
    const response = await login(username.value, password.value);
    if (response.error) {
      errorMessage.value = response.error;
      return;
    }
    // Handle successful login (e.g., store token, redirect)
  } catch (error) {
    errorMessage.value = "Invalid username or password.";
  }
};
</script>
