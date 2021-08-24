<template>
  <div class="min-h-screen flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        Hey {{ store.state.name }}, <br />let’s create your account.
      </h1>
      <form class="flex flex-col items-center">
        <input type="email" class="field" placeholder="Email" v-model="email" />

        <input
          type="password"
          class="field"
          placeholder="Password"
          v-model="password"
        />

        <button
          @click="changeRoute()"
          class="absolute bottom-0 mb-12 sm:mb-28 button"
        >
          Create
        </button>
      </form>
    </div>
    <div class="sm:flex-1 flex flex-col items-center justify-center">
      <img class="sm:mx-3 sm:w-9/12" src="/hero/security.svg" alt="security" />
    </div>
  </div>
</template>


<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const store = inject("store");
    const email = ref(null);
    const password = ref(null);
    return {
      store,
      email,
      password,
    };
  },
};
</script>
    
