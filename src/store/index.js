import { reactive, readonly } from "vue";

const state = reactive({
  name: "",
  code: "",
  post_codes: ["OX49 5NU", "M32 0JG", "NE30 1DP"],
  isLight: true,
});

const methods = {
  setName(value) {
    state.name = value;
  },
  setCode(value) {
    state.code = value;
  },
  setPostCodes(value) {
    state.post_codes = value;
  },

  toggleLight() {
    state.isLight = !state.isLight;
  },
};

export default {
  state: readonly(state),
  methods,
};
