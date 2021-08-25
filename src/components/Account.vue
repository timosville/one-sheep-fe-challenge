<template>
  <div class="max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Hey {{ store.state.name }}, <br />let’s create your account.
      </h1>
    </div>
    <div class="container-grid__form">
      <input type="email" class="field" placeholder="Email" v-model="email" />
      <input
        type="password"
        class="field"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div class="container-grid__hero">
      <img class="" src="/hero/security.svg" alt="security" />
    </div>
    <div class="container-grid__button">
      <button @click="changeRoute()" class="button">Create</button>
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
  methods: {
    changeRoute() {
      this.$router.push("/settings");
    },
  },
};
</script>
