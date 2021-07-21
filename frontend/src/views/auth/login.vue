<template>
  <span>
    <div class="bg-white shadow-sm rounded-md">
      <form
        class="font-medium text-gray-700 space-y-4 flex flex-col"
        @submit.prevent="handleSubmit(attemptSignIn)"
      >
        <div
          class="
            flex flex-col
            justify-center
            bg-gray-800
            overflow-hidden
            min-h-screen
          "
        >
          <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div
              class="
                    bg-white
                    sm:max-w-md
                    sm:w-full
                    sm:mx-auto
                    sm:rounded-lg
                    sm:overflow-hidden
                  "
            >
              <div class="px-4 py-8 sm:px-10">
                <div class="mt-6">
                  <div>
                    <h2 class="mb-4 text-center text-2xl font-medium text-gray-800">
                      Signin to your account
                    </h2>
                  </div>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form
                      class="text-gray-700 space-y-4 flex flex-col"
                      @submit.prevent="handleSubmit(attemptSignIn)"
                    >
                      <div>
                        <ValidationProvider v-slot="{ errors }" name="Username" rules="required">
                          <t-input-group
                            label="Your Username"
                            :feedback="errors[0]"
                            :variant="errors.length > 0 ? 'danger' : ''"
                          >
                            <t-input
                              v-model="user.username"
                              placeholder="enter your username"
                              type="text"
                              name="username"
                              :variant="errors.length > 0 ? 'danger' : ''"
                            />
                          </t-input-group>
                        </ValidationProvider>
                      </div>
                      <div>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Password"
                          rules="required|min:8"
                        >
                          <t-input-group
                            label="Password"
                            :feedback="errors[0]"
                            :variant="errors.length > 0 ? 'danger' : ''"
                          >
                            <t-input
                              v-model="user.password"
                              placeholder="your password"
                              type="password"
                              name="password"
                              :feedback="errors[0]"
                              :variant="errors.length > 0 ? 'danger' : ''"
                            />
                          </t-input-group>
                        </ValidationProvider>
                      </div>
                      <t-button type="submit"> Sign In </t-button>
                    </form>
                  </ValidationObserver>
                  <div class="flex justify-between items-center mt-4">
                    <router-link :to="{ name: 'Register' }" class="text-blue-800">
                      Signup for a new account
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </span>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async attemptSignIn() {
      const response = await this.$http.post('users/login/', this.user);
      if (response && response.token) {
        this.$toast.show({
          content: 'Successfully logged in.',
          type: 'success',
        });
        window.localStorage.setItem('access_token', response.token);
        this.$router.replace({ name: 'Dashboard' });
      }
    },
  },
};
</script>
