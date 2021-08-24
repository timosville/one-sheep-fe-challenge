<template>
  <div
    class="min-h-screen bg-one-yellow flex flex-col sm:flex-row justify-between"
  >
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        Hi there.<br />
        Ready to do your best ever work?
      </h1>
      <button class="absolute bottom-0 mb-12 sm:mb-28 button">Let's Go!</button>
    </div>
    <div class="sm:flex-1 flex flex-col items-center justify-center">
      <img class="sm:mx-3 sm:w-9/12" src="/hero/welcome.svg" alt="welcome" />
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


