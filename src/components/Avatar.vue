<template>
  <div
    class="
      max-h-screen
      container-grid
      dark:bg-gray-800
      dark:text-gray-200
      relative
    "
  >
    <div class="container-grid__navigation-left">
      <router-link to="/settings">
        <svg viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <circle cx="43" cy="31" r="31" fill="white" />
          </g>
          <path
            d="M51.34 14.74L47.8 11.2L28 31L47.8 50.8L51.34 47.26L35.08 31L51.34 14.74Z"
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
    <div class="container-grid__title">
      <h1 class="title">
        Finally, let’s <br />
        customise your experience.
      </h1>
    </div>

    <div class="container-grid__hero">
      <img
        class="sm:mx-3 sm:w-9/12"
        src="/hero/message-notification.svg"
        alt="work at home"
      />
    </div>
    <div class="container-grid__form">
      <h2 class="subtitle">Choose an avatar..</h2>
      <div>
        <div
          class="
            bg-gray-300
            border-2 border-black
            rounded-full
            h-24
            w-24
            flex
            items-center
            justify-center
          "
        >
          <img v-if="avatar" :src="avatar" alt="" />
        </div>
      </div>
    </div>
    <div class="container-grid__button">
      <button class="button" @click="pickAvatar()">Pick One</button>
    </div>
    <div class="container-grid__button-lower">
      <button class="button" @click="changeRoute()">Done</button>
    </div>
    <div
      v-show="showModal"
      class="absolute z-40 h-screen flex flex-col justify-center"
    >
      <div
        class="
          flex flex-wrap
          max-w-sn
          m-6
          rounded-sm
          items-center
          justify-center
          shadow-lg
          border-gray-500
          bg-white
        "
      >
        <div
          class="
            w-1/2
            sm:w-1/2
            lg:w-1/3
            xl:w-1/3
            flex
            items-center
            justify-center
          "
          v-for="avatar in avatars"
          :key="avatar.id"
        >
          <img
            @click="getAvatar(avatar.icon)"
            class="h-20 w-auto m-4"
            :src="avatar.icon"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const avatar = ref(null);
    const showModal = ref(false);
    const avatars = [
      {
        id: 1,
        icon: "/avatars/1.svg",
      },
      {
        id: 2,
        icon: "/avatars/2.svg",
      },
      {
        id: 3,
        icon: "/avatars/3.svg",
      },
      {
        id: 4,
        icon: "/avatars/4.svg",
      },
      {
        id: 5,
        icon: "/avatars/5.svg",
      },
      {
        id: 6,
        icon: "/avatars/6.svg",
      },
      {
        id: 7,
        icon: "/avatars/7.svg",
      },
      {
        id: 8,
        icon: "/avatars/8.svg",
      },
      {
        id: 9,
        icon: "/avatars/9.svg",
      },
      {
        id: 10,
        icon: "/avatars/10.svg",
      },
      {
        id: 11,
        icon: "/avatars/11.svg",
      },
      {
        id: 12,
        icon: "/avatars/12.svg",
      },
    ];
    const pickAvatar = () => {
      showModal.value = true;
    };
    const getAvatar = (icon) => {
      avatar.value = icon;
      showModal.value = false;
    };
    return {
      avatar,
      avatars,
      showModal,
      getAvatar,
      pickAvatar,
    };
  },
  methods: {
    changeRoute() {
      this.$router.push("/success");
    },
  },
};
</script>