<template>
  <div class="bg-one-yellow max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Well done.
        <br />You are awesome!
      </h1>
    </div>

    <div class="container-grid__hero">
      <img
        class="object-contain w-full"
        src="/hero/high-five.svg"
        alt="high-five"
      />
    </div>
    <div class="container-grid__button">
      <button @click="changeRoute()" class="button">Start Over</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Complete",
  methods: {
    changeRoute() {
      this.$router.push("/start");
    },
  },
};
</script>