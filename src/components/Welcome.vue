<template>
  <div class="bg-one-yellow max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        Hi there.
        <br />Ready to do your best ever work?
      </h1>
    </div>
    
    <div class="container-grid__hero">
      <img class="object-contain w-full" src="/hero/welcome.svg" alt="welcome" />
    </div>
    <div class="container-grid__button">
      <button @click="changeRoute()" class="button">Let's Go!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    changeRoute() {

    this.$router.push("/start");
    },
  },
};
</script>


