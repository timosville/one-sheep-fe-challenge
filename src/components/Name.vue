<template>
  <div class="min-h-screen flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        We need a couple<br />
        of details to get you set up.
      </h1>
      <button
        @click="changeRoute()"
        class="absolute bottom-0 mb-12 sm:mb-28 button"
      >
        Next
      </button>
    </div>
    <div class="sm:flex-1 flex flex-col items-center justify-center">
      <img class="sm:mx-3 sm:w-9/12" src="/hero/work-at-home.svg" alt="work at home" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Name",
  methods: {
    changeRoute() {
      this.$router.push("/account");
    },
  },
};
</script>


