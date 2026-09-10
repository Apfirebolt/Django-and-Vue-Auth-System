<template>
  <main class="min-h-screen flex items-center justify-center bg-secondary-300 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-primary-100 selection:text-white">
    <!-- Ambient Glow / Backdrop -->
    <div class="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 -right-32 w-96 h-96 bg-secondary-200/15 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 left-1/3 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl"></div>
    </div>

    <div class="w-full max-w-md">
      <!-- Card Container -->
      <div class="bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-primary-200/10 p-8 sm:p-10">
        <!-- Brand / Header -->
        <div class="text-center">
          <div class="mx-auto h-12 w-12 rounded-2xl bg-secondary-300 text-primary-300 flex items-center justify-center ring-8 ring-secondary-300/60 mb-6">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-primary-200">
            Welcome back
          </h1>
          <p class="mt-2 text-sm text-primary-300">
            Sign in to manage your video ideas and production workflow
          </p>
        </div>

        <!-- Inline Error Banner -->
        <div
          v-if="errorMessage"
          role="alert"
          class="mt-6 flex items-start gap-3 p-3.5 rounded-2xl bg-secondary-100/10 border border-secondary-100/20 text-secondary-100 text-xs"
        >
          <svg class="w-4 h-4 text-secondary-200 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p class="leading-relaxed font-medium">{{ errorMessage }}</p>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="handleLogin" class="mt-8 space-y-5">
          <!-- Username / Email -->
          <div class="space-y-1.5">
            <label for="username" class="block text-xs font-semibold uppercase tracking-wider text-primary-300">
              Username or Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary-100">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="username"
                v-model="username"
                type="text"
                autocomplete="username"
                required
                placeholder="you@example.com"
                class="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-primary-200 placeholder-slate-400 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent focus:bg-white"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-xs font-semibold uppercase tracking-wider text-primary-300">
                Password
              </label>
              <router-link to="/forgot-password" class="text-xs text-secondary-200 hover:text-secondary-100 font-medium transition-colors">
                Forgot?
              </router-link>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary-100">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                placeholder="••••••••"
                class="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-primary-200 placeholder-slate-400 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent focus:bg-white"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-primary-300 transition-colors"
                tabindex="-1"
                aria-label="Toggle password visibility"
              >
                <!-- Eye Open -->
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <!-- Eye Closed -->
                <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-primary-100 hover:bg-primary-300 active:scale-[0.99] shadow-md shadow-primary-100/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
          >
            <!-- Loading Spinner -->
            <svg
              v-if="loading"
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ loading ? 'Signing in...' : 'Sign in' }}</span>
          </button>
        </form>

        <!-- Footer Alternative -->
        <div class="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-primary-300">
          Don't have an account?
          <router-link to="/register" class="font-semibold text-secondary-200 hover:text-secondary-100 transition-colors ml-1">
            Create an account
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";
import { useData } from "../composables/useData";

const { data } = useData();

const username = ref("");
const password = ref("");
const showPassword = ref(false);
const errorMessage = ref("");

const { loading, login } = useAuth();

const handleLogin = async () => {
  errorMessage.value = "";
  try {
    const response = await login(username.value, password.value);
    if (response?.error) {
      errorMessage.value = response.error;
      return;
    }
  } catch (err) {
    errorMessage.value = "Invalid username or password.";
  }
};
</script>