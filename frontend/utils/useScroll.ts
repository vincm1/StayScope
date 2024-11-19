import { computed } from 'vue';
import { useWindowScroll } from '@vueuse/core';

export default function useScroll(threshold = 0) {
  const { x, y } = useWindowScroll();

  // Reactive property to determine if the threshold is passed
  const isScrolled = computed(() => y.value > threshold);

  return {
    x,
    y,
    isScrolled,
  };
}