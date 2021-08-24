import { reactive, readonly } from "vue";

const state = reactive({
  name: "Timothy",
  code: "Eah",
});

const methods = {
  setName(value) {
    state.name = value;
  },
  setCode(value) {
    state.code = value;
  },
};

export default {
  state: readonly(state),
  methods,
};
