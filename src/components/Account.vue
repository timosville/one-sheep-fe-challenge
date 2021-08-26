<template>
  <div class="max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Hey {{ store.state.name }}, <br />let’s create your account.
      </h1>
    </div>
    <div class="container-grid__form">
      <input
        type="email"
        class="field"
        placeholder="Email"
        v-model="email"
        required
      />
      <span v-if="!email_valid" class="text-red-500 pt-2 text-md">{{
        email_error_message
      }}</span>
      <input
        type="password"
        class="field"
        placeholder="Password"
        v-model="password"
        required
      />
      <span v-if="!password_valid" class="text-red-500 pt-2 text-md">{{
        password_error_message
      }}</span>
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
import { inject, ref, watch } from "vue";
export default {
  setup() {
    const store = inject("store");
    const email = ref(null);
    const password = ref(null);
    const email_valid = ref(true);
    const email_error_message = ref("Invalid email address");
    const password_valid = ref(true);
    const password_error_message = ref("The password must be at least 8 characters long and contain an uppercase character, lowercase character and a number.");
    const validateEmail = (value) => {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return (email_valid.value = false);
      }
      return (email_valid.value = true);
    };
    watch(email, (email) => {
      if (email.length > 4) {
        validateEmail(email);
      }
    });
    const validatePassword = (value) => {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        return (password_valid.value = false);
      }
      return (password_valid.value = true);
    };
    watch(password, (password) => {
      if (password) {
        validatePassword(password);
      }
    });
    return {
      store,
      email,
      password,
      email_valid,
      email_error_message,
      password_valid,
      password_error_message,
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/settings");
    },
  },
};
</script>