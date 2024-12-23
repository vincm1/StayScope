<template>
    <div
      :class="[
        'cta flex-shrink flex items-center justify-center gap-3 rounded-full px-3 py-2 transition-all duration-300 opacity-80',
        bgClass,
      ]"
    >
        <font-awesome class="text-primary" :icon="['far', 'lightbulb']" />
        <p :class="['font-bold text-center text-sm md:text-lg lg:text-xl', textClass]">{{ title }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
      default: 'Get Started Today!',
    },
    buttonText: {
      type: String,
      required: true,
      default: 'Learn More',
    },
    bgClass: {
      type: String,
      required: false,
      default: 'bg-secondary',
    },
    textClass: {
      type: String,
      required: false,
      default: 'text-primary',
    },
  });
  </script>
  
  <style scoped>
  .cta-container {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  