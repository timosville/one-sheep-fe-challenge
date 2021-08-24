<template>
  <div class="min-h-screen flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        Finally, let’s <br />
        customise your experience.
      </h1>
      <h2 class="subtitle">Lights on or off?</h2>
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
export default {
  name: "Name",
  methods: {
    changeRoute() {
      this.$router.push("/account");
    },
  },
};
</script>


