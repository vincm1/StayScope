import { ref } from "vue";

export default defineNuxtPlugin(() => {
  const globalCount = ref(0);

  return {
    provide: {
      globalCount,
    },
  };
});