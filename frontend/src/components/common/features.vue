<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Django Vue Auth Boilerplate
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          A boilerplate to get started with your full stack applications using Django and Vue
        </p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              JSON Web Token
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            JSON token based authentication using django rest-framework
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Front End Authentication
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            Vue prototype object and beforeRoute hook is used to implement front end authentication alongwith meta data.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Frontend Validation
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            Frontend validation using vee-validate
          </dd>
        </div>

        <div class="relative">
          <dt>
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Toasts and Loaders
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            Toasts and Loaders components are available
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Tailwind CSS
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            Fully configured with tailwind css using vue-tailwind library.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              File Upload Option
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            File upload option is available with validation, only JSON files allowed for now.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Read File Data and Save in Database
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            File data can be read from uploaded json file, it can be saved into a Django model instance.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
              Eslint enabled for Frontend
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">
            Eslint configured with Vue JS for linting and ensuring code quality.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeaturesComponent',
};
</script>
