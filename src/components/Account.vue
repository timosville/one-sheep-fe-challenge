<template>
  <h1>Account</h1>
  <h2>{{ store.state.name }}</h2>
  <h2>Code: {{ store.state.code }}</h2>
</template>

<script>
import { inject, computed } from "vue";

export default {
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>
    
