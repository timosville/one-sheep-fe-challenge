<template>
  <div class="max-h-screen container-grid dark:bg-gray-800 dark:text-gray-200">
    <div class="container-grid__title">
      <h1 class="title">
        Finally, let’s <br />
        customise your experience.
      </h1>
    </div>
    <div class="container-grid__navigation-right">
      <router-link to="/avatar">
        <svg viewBox="0 0 86 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <circle cx="43" cy="31" r="31" fill="white" />
          </g>
          <path
            d="M35.46 47.46L39 51L59 31L39 11L35.46 14.54L51.92 31L35.46 47.46Z"
            fill="black"
          />
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="86"
              height="86"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="12" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </router-link>
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
        v-bind:class="[
          isLight ? 'justify-start border-black' : 'justify-end border-white',
        ]"
        class="
          border-2
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
import { inject, computed, onBeforeMount, watch } from "vue";
export default {
  name: "Appearance",
  setup() {
    const store = inject("store");
    const isLight = computed({
      get() {
        return store.state.isLight;
      },
    });
    onBeforeMount(() => {
      changeAppearance(isLight._value);
    });
    const changeAppearance = (mode) => {
      if (mode) {
        return document.querySelector("html").classList.remove("dark");
      } else {
        return document.querySelector("html").classList.add("dark");
      }
    };
    watch(isLight, (newLight, oldLight) => {
      changeAppearance(newLight);
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