import { reactive, readonly } from "vue";

const state = reactive({
  name: "Timothy",
  code: "Eah",
});

export default {
  state: readonly(state),
};
