<template>
  <div class="min-h-screen flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col items-center justify-items-center">
      <h1 class="sm:mt-20 pt-24 px-8 title">
        We need a couple<br />
        of details to get you set up.
      </h1>
      <input type="text" class="field" placeholder="Name" v-model="name" />
      <div class="relative">
        <input
          type="text"
          class="field"
          placeholder="Post Code"
          v-model="code"
        />

        <ul
          class="
            absolute
            mx-2
            mt-1
            py-1
            w-11/12
            bg-white
            rounded-md
            shadow-xl
            z-20
          "
        >
          <li
            v-for="(post_code, i) in post_codes"
            :key="i"
            class="
              block
              px-4
              py-2
              text-sm
              capitalize
              text-gray-700
              hover:bg-gray-500
              hover:text-white
            "
          >
            {{ post_code }}
          </li>
        </ul>
      </div>
      <button
        @click="changeRoute()"
        class="absolute bottom-0 mb-12 sm:mb-28 button"
      >
        Next
      </button>
    </div>
    <div class="sm:flex-1 flex flex-col items-center justify-center">
      <img
        class="sm:mx-3 sm:w-9/12"
        src="/hero/work-at-home.svg"
        alt="work at home"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed } from "vue";

export default {
  name: "Name",
  setup() {
    const store = inject("store");

    const name = computed({
      get() {
        return store.state.name;
      },
      set(value) {
        return store.methods.setName;
      },
    });

    const post_codes = computed({
      get() {
        return store.state.post_codes;
      },
    });
    const code = computed({
      get() {
        return store.state.code;
      },
      set(value) {
        // const api = `http://api.postcodes.io/postcodes/${value}/autocomplete`;
        // const req = async () =>
        //   await fetch(api)
        //     .then((response) => response.json())
        //     .then((json) => (postCodes.value = json))
        //     .catch((error) => (error.value = error));

        // if (value) {
        //   req();
        // }
        // console.log(value);
        // console.log(postCodes.value);
        // console.log(error.value);
        return store.methods.setCode;
      },
    });
    return { store, name, code, post_codes };
  },
  methods: {
    changeRoute() {
      this.$router.push("/account");
    },
  },
};
</script>


