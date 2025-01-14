<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    required: false,
    default: 'Click Me',
  },
  bgClass: {
    type: String,
    required: false,
    default: 'bg-primary',
  },
  borderClass: {
    type: String,
    required: false,
    default: 'border-none',
  },
  textClass: {
    type: String,
    required: false,
    default: 'text-white',
  },
  size: {
    type: String,
    required: false,
    default: 'md',
    validator: (value: string) => {
      return ['sm', 'md', 'lg', 'xl'].includes(value);
    },
  },
  hoverEnabled: {
    type: Boolean,
    required: false,
    default: true, // Hover effects enabled by default
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: 'button',
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value);
    },
  },
  sizeClass: {
    type: String,
    required: false,
    default: 'md',
    validator: (value: string) => {
      return ['sm', 'md', 'lg'].includes(value);
    },
  },
});

</script>

<template>
  <button
    :class="[ 
      'rounded-full shadow-sm',
      bgClass,
      textClass,
      borderClass,
      sizeClass === 'sm' ? 'px-2 py-1 text-sm' : '',
      sizeClass === 'md' ? 'px-5 py-2 text-sm' : '',
      sizeClass === 'lg' ? 'px-10 py-3 text-lg' : '',
      hoverEnabled && bgClass === 'bg-primary' ? 'hover:bg-secondary hover:text-primary hover:transform-scale-105' : '',
    ]"
    :disabled="disabled"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<style lang="scss" scoped>
/* Optional: Add some scoped styles for additional polish */
button {
  &:focus {
    outline: none;
  }
}
</style>
