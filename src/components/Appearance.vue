<template>
  <div class="max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Finally, let’s <br />
        customise your experience.
      </h1>
    </div>

    <div class="container-grid__hero">
      <img
        class="sm:mx-3 sm:w-9/12"
        src="/hero/message-notification.svg"
        alt="work at home"
      />
    </div>
    <div class="container-grid__form">
      <h2 class="subtitle">Lights on or off?</h2>
      <button
        @click="store.methods.toggleLight"
        v-bind:class="[isLight ? 'justify-start' : 'justify-end']"
        class="
          border-black border-2
          rounded-full
          border-grey
          flex flex-col
          items-center
          cursor-pointer
          h-20
        "
      >
        <span
          v-bind:class="[isLight ? 'bg-one-green' : 'bg-white']"
          class="rounded-full border w-12 h-12 border-grey outline shadow"
        >
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref, watch } from "vue";

export default {
  name: "Appearance",

  setup() {
    const store = inject("store");

    const isLight = computed({
      get() {
        return store.state.isLight;
      },
    });

    return {
      store,
      isLight,
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/avatar");
    },
  },
};
</script>
