<template>
  <Disclosure
    as="nav"
    v-slot="{ open }"
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300 border-b',
      isScrolledDown
        ? 'bg-primary-200/90 dark:bg-slate-950/90 backdrop-blur-md border-primary-300/30 dark:border-slate-800 shadow-lg shadow-primary-200/20'
        : 'bg-primary-200 dark:bg-slate-950 border-primary-300/20 dark:border-slate-850 py-1'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Brand / Logo -->
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center gap-3 group focus:outline-none">
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-300/30 text-secondary-300 ring-1 ring-primary-100/30 group-hover:ring-primary-100/60 transition-all">
              <!-- GitHub Octocat Icon -->
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-lg font-bold tracking-tight text-white">Github</span>
              <span class="text-xs font-semibold uppercase tracking-wider text-primary-100">Finder</span>
            </div>
          </router-link>

          <!-- Dark Mode Toggle Button -->
          <button
            @click="toggleDarkMode"
            type="button"
            class="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-300/40 hover:bg-primary-300/70 border border-primary-100/20 text-secondary-300 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-100"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Sun icon -->
            <svg v-if="isDarkMode" class="w-4 h-4 text-primary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon -->
            <svg v-else class="w-4 h-4 text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span class="hidden md:inline">{{ isDarkMode ? 'Light' : 'Dark' }}</span>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden sm:flex sm:items-center sm:gap-2">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            :class="[
              link.highlight
                ? 'bg-primary-100 hover:bg-primary-300 text-white font-semibold shadow-md shadow-primary-100/25'
                : 'text-secondary-300 hover:text-white hover:bg-primary-300/40',
              'px-4 py-2 rounded-xl text-xs font-medium transition-all duration-150'
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Trigger -->
        <div class="flex sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-xl text-secondary-300 hover:text-white hover:bg-primary-300/40 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

      </div>
    </div>

    <!-- Mobile Panel -->
    <DisclosurePanel class="sm:hidden border-t border-primary-300/20 bg-primary-200/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-3 pb-4 space-y-1.5 shadow-xl">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.href"
        :class="[
          link.highlight
            ? 'bg-primary-100 text-white font-semibold shadow-sm'
            : 'text-secondary-300 hover:text-white hover:bg-primary-300/30',
          'block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all'
        ]"
      >
        {{ link.name }}
      </router-link>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const isDarkMode = ref(false);
const isScrolledDown = ref(false);

const links = ref([
  { name: 'Home', href: '/' },
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register', highlight: true },
]);

const setDarkMode = (value) => {
  isDarkMode.value = value;
  if (value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('darkMode', String(value));
};

const toggleDarkMode = () => {
  setDarkMode(!isDarkMode.value);
};

const checkScroll = () => {
  isScrolledDown.value = window.scrollY > 20;
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode !== null) {
    setDarkMode(savedDarkMode === 'true');
  } else {
    setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  checkScroll();
  window.addEventListener('scroll', checkScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>