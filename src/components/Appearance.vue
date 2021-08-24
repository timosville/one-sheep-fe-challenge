<template>
  <div class="min-h-screen flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        Finally, let’s <br />
        customise your experience.
      </h1>
      <h2 class="subtitle">Lights on or off?</h2>
      <button
        @click="toggleLight()"
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
    <div class="sm:flex-1 flex flex-col items-center justify-center">
      <img
        class="sm:mx-3 sm:w-9/12"
        src="/hero/message-notification.svg"
        alt="work at home"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Appearance",

  setup() {
    const isLight = ref(true);

    return {
      isLight,
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/avatar");
    },
    toggleLight() {
      this.isLight = !this.isLight;
    },
  },
};
</script>


