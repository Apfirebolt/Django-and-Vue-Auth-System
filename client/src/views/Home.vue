<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="about">
    <!-- Header / Search Guide -->
    <div class="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-300 dark:bg-primary-300/40 text-primary-300 dark:text-secondary-300 ring-1 ring-primary-100/20 text-xs font-semibold mb-3">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        GitHub Profile Search
      </div>
      <h1 class="text-3xl sm:text-4xl font-black text-primary-200 dark:text-secondary-300 tracking-tight">
        Discover Developers
      </h1>
      <p class="mt-2 text-sm text-primary-300 dark:text-slate-400">
        Enter a GitHub username to explore repositories, followers, contributions, and community insights.
      </p>
    </div>

    <!-- Search Controls Card -->
    <div
      class="bg-white dark:bg-primary-200 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xl shadow-primary-200/5 mb-8"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="flex flex-col sm:flex-row items-center gap-3">
        <!-- Search Input with Leading Icon -->
        <div class="relative flex-1 w-full">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            v-model="searchTerm"
            @keyup.enter="handleSearch"
            placeholder="Search GitHub by username..."
            class="block w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-primary-300/30 border border-slate-200 dark:border-slate-700/60 rounded-2xl text-sm text-primary-200 dark:text-secondary-300 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent focus:bg-white dark:focus:bg-primary-300/50 transition-all"
          />
        </div>

        <!-- Controls Group -->
        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            @click="handleSearch"
            :disabled="loading"
            class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-semibold text-white bg-primary-100 hover:bg-primary-300 active:scale-[0.99] shadow-md shadow-primary-100/25 disabled:opacity-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100 cursor-pointer"
          >
            <span>Search</span>
          </button>

          <!-- Per-Page Dropdown -->
          <div class="relative">
            <select
              v-model="itemsPerPage"
              class="appearance-none pl-3.5 pr-8 py-2.5 bg-slate-50 dark:bg-primary-300/30 border border-slate-200 dark:border-slate-700/60 rounded-2xl text-xs font-medium text-primary-200 dark:text-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 cursor-pointer transition-all"
            >
              <option :value="6">6 / page</option>
              <option :value="10">10 / page</option>
              <option :value="25">25 / page</option>
              <option :value="50">50 / page</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
              <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <loader-component v-if="loading" />

    <!-- Empty State -->
    <div
      v-else-if="users.length === 0"
      class="text-center py-16 bg-white dark:bg-primary-200 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 shadow-sm"
    >
      <div class="mx-auto h-12 w-12 rounded-2xl bg-secondary-300 text-primary-300 flex items-center justify-center ring-8 ring-secondary-300/60 mb-4">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 class="text-base font-semibold text-primary-200 dark:text-secondary-300">No users found</h3>
      <p class="mt-1 text-xs text-primary-300/80 dark:text-slate-400">Try searching for a different username or check for typos.</p>
    </div>

    <!-- User Grid -->
    <div
      v-else
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div
        v-for="user in users"
        :key="user.id"
        class="group flex flex-col justify-between bg-white dark:bg-primary-200 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-100/10 hover:border-primary-100/60 dark:hover:border-primary-100/50 transition-all duration-300"
      >
        <div>
          <!-- Avatar + Status -->
          <div class="relative w-20 h-20 mx-auto mb-4">
            <img
              :src="user.avatar_url"
              :alt="`${user.login}'s avatar`"
              class="w-20 h-20 rounded-2xl object-cover ring-4 ring-secondary-300 dark:ring-primary-300/40 shadow-sm"
            />
            <span class="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-100 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-primary-100 ring-2 ring-white dark:ring-primary-200"></span>
            </span>
          </div>

          <!-- Login & ID -->
          <h3 class="text-lg font-bold text-center text-primary-200 dark:text-secondary-300 tracking-tight group-hover:text-primary-100 transition-colors">
            {{ user.login }}
          </h3>
          <p class="text-center text-[11px] text-slate-400 font-mono mt-0.5">
            ID: {{ user.id }}
          </p>

          <!-- External Profile Link -->
          <div class="mt-3 flex justify-center">
            <a
              :href="user.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-medium text-secondary-200 dark:text-primary-100 hover:text-secondary-100 dark:hover:text-secondary-300 transition-colors"
            >
              <span>github.com/{{ user.login }}</span>
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Action Area -->
        <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            @click="goToDetails(user.login)"
            class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-primary-100 hover:bg-primary-300 active:scale-[0.99] shadow-sm hover:shadow shadow-primary-100/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
          >
            <span>View Full Details</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-10" v-if="users.length > 0">
      <pagination
        :currentPage="currentPage"
        :numberOfItemsPerPage="itemsPerPage"
        :total="totalItems"
        @goToNextPage="goToNextPage"
        @goToPreviousPage="goToPreviousPage"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import aos from "aos";
import "aos/dist/aos.css";
import Pagination from "../components/Pagination.vue";
import LoaderComponent from "../components/Loader.vue";

const router = useRouter();

const users = ref([]);
const loading = ref(false);
const searchTerm = ref("vue");
const itemsPerPage = ref(10);
const currentPage = ref(1);
const totalItems = ref(0);

const searchUser = async (term, page, perPage) => {
  if (!term.trim()) return;
  loading.value = true;
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${term}&per_page=${perPage}&page=${page}`
    );
    if (response?.data) {
      users.value = response.data.items || [];
      totalItems.value = Math.min(response.data.total_count, 1000); // GitHub Search API caps at 1,000 results
    }
  } catch (err) {
    console.error("Error fetching GitHub users:", err);
    users.value = [];
    totalItems.value = 0;
  } finally {
    loading.value = false;
  }
};

const handleSearch = () => {
  currentPage.value = 1;
  searchUser(searchTerm.value, currentPage.value, itemsPerPage.value);
};

const goToDetails = (username) => {
  router.push({ name: "UserDetail", params: { username } });
};

const goToNextPage = () => {
  currentPage.value += 1;
  searchUser(searchTerm.value, currentPage.value, itemsPerPage.value);
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    searchUser(searchTerm.value, currentPage.value, itemsPerPage.value);
  }
};

watch(itemsPerPage, (newVal) => {
  currentPage.value = 1;
  searchUser(searchTerm.value, currentPage.value, newVal);
});

onMounted(() => {
  aos.init();
  searchUser(searchTerm.value, currentPage.value, itemsPerPage.value);
});
</script>