import { reactive, readonly } from "vue";

const state = reactive({
  name: "",
  code: "",
  post_codes: [],
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
