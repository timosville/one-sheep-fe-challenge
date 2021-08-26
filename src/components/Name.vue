<template>
  <div class="max-h-screen container-grid">
    <div class="container-grid__title">
      <h1 class="title">
        We need a couple<br />
        of details to get you set up.
      </h1>
    </div>
    <div class="container-grid__form">
      <input type="text" class="field" placeholder="Name" v-model="name" />
      <div class="relative">
        <input
          type="text"
          class="field"
          placeholder="Post Code"
          v-model="code"
          @input="onChange"
        />

        <ul
          v-if="autocomplete && post_codes"
          class="
            absolute
            mx-2
            mt-1
            py-1
            w-11/12
            bg-white
            border-black border
            text-2xl
            font-bold
            rounded-md
            shadow-xl
            z-20
          "
        >
          <li
            v-for="(post_code, i) in post_codes"
            :key="i"
            @click="setCode(post_code)"
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
    </div>
    <div class="container-grid__hero">
      <img
        class="container-grid__image"
        src="/hero/work-at-home.svg"
        alt="work at home"
      />
    </div>
    <div class="container-grid__button">
      <button
        @click="changeRoute()"
        class="button disabled:opacity-50"
        :disabled="!code.length || !name.length"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref, watch } from "vue";
import axios from "axios";

export default {
  name: "Name",
  setup() {
    const store = inject("store");
    const post_codes = ref([]);
    const error_message = ref(null);
    const autocomplete = ref(false);

    const name = computed({
      get() {
        return store.state.name;
      },
      set(value) {
        return store.methods.setName(value);
      },
    });
    const code = computed({
      get() {
        return store.state.code;
      },
      set(value) {
        return store.methods.setCode(value);
      },
    });

    const getPostCodes = (code) => {
      const instance = axios.create({
        baseURL: "https://api.postcodes.io/postcodes/",
      });
      const getPostCodes = async () => {
        try {
          const response = await instance.get(`${code}/autocomplete`);

          post_codes.value = response.data.result;
        } catch (error) {
          console.log(error);
        }
      };
      getPostCodes();
    };

    const onChange = () => {
      getPostCodes(store.state.code);
      if (store.state.code) {
        autocomplete.value = true;
      }
      if (!store.state.code) {
        autocomplete.value = false;
      }
    };

    const setCode = (code) => {
      store.methods.setCode(code);
      autocomplete.value = false;
    };

    return { name, code, post_codes, onChange, setCode, autocomplete };
  },
  methods: {
    changeRoute() {
      this.$router.push("/account");
    },
  },
};
</script>
