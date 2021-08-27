<template>
  <div class="bg-one-yellow max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Lift off!
        <br />You're all set up.
      </h1>
      <h1 class="title mt-6">
        Time for a
        <br />movie?
      </h1>
    </div>

    <div class="container-grid__hero">
      <img class="object-contain w-full" src="/hero/launch.svg" alt="launch" />
    </div>
    <div class="container-grid__button flex flex-col">
      <button @click="watchVideo()" class="button">Watch</button>
      <button @click="skipToComplete()" class="button mt-6">Not now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  methods: {
    watchVideo() {
      this.$router.push("/video");
    },
    skipToComplete() {
      this.$router.push("/complete");
    },
  },
};
</script>
