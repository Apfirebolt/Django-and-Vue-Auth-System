<template>
  <div
    class="flex flex-col items-center justify-center py-12 px-4 w-full"
    role="status"
    aria-label="Loading"
  >
    <div class="relative flex items-center justify-center">
      <!-- Background track ring -->
      <div
        :class="[
          spinnerDimensions,
          'rounded-full border-primary-300/20 dark:border-slate-800 transition-all'
        ]"
      ></div>

      <!-- Animated spinning accent head -->
      <div
        :class="[
          spinnerDimensions,
          'absolute rounded-full border-transparent border-t-primary-100 animate-spin'
        ]"
      ></div>
    </div>

    <!-- Optional loading text -->
    <p
      v-if="label"
      class="mt-4 text-xs font-semibold tracking-wider uppercase text-primary-300 dark:text-secondary-300/80 animate-pulse"
    >
      {{ label }}
    </p>
    <span class="sr-only">Loading content...</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "md", // "sm" | "md" | "lg" | "xl" | "2xl"
  },
  label: {
    type: String,
    default: "",
  },
});

const spinnerDimensions = computed(() => {
  switch (props.size) {
    case "sm":
      return "w-6 h-6 border-2";
    case "lg":
      return "w-16 h-16 border-4";
    case "xl":
      return "w-24 h-24 border-[5px]";
    case "2xl":
      return "w-40 h-40 border-8";
    case "md":
    default:
      return "w-12 h-12 border-4";
  }
});
</script>