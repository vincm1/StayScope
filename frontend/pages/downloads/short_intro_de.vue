<script setup lang="ts">
import { ref } from 'vue';

const isHovered = ref(false);

</script>

<template>
  <section class="bg-primary text-white py-5">
    <div class="LandingHero flex items-center justify-center pb-5" id="hero">
      <div class="hero-body font-init mt-5 rounded-lg">
        <div class="text-center text-beige">
          <!-- Headline -->
          <h1 class="title text-2xl md:text-4xl font-bold leading-relaxed mt-10 mb-6">
            Curated experiences <span class="text-secondary font-serif underline font-semibold">directly</span> <br class="block pb-2">
            on your hotel website
          </h1>
          <!-- Subtitle -->
          <p class="subtitle font-beige leading-loose my-6">
            Effortlessly manage and showcase unforgettable in-destination activities and <br>
            guest experiences—all in one powerful platform.
          </p>
          <!-- Call to Action -->
          <div class="flex justify-center space-x-4 mb-5">
            <NuxtLink to="#download-section">
              <ButtonHero 
                :button-text="'Presentation'"
              />
            </NuxtLink>
          </div>
          <div class="flex items-center justify-center text-xs mt-10">
            <span>Trusted by <span class="text-secondary font-play">leading</span> hotels:</span>
            <ul class="flex justify-around space-x-5 ml-5">
              <li>Torggler Hof</li>
              <li>Hotel Lenz</li>
              <li>Hotel Crillon Le Brave</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white text-primary text-center">
    <div class="py-10">
      <h1 class="text-2xl font-bold pb-2">Create curated personalized stays for your guests</h1>
      <p class="px-20 pt-2">
        Don't miss your chance to seamlessly integrate exclusive experiences and activities directly into your hotel website. 
        Enhance guest engagement and boost revenue — effortlessly! 
      </p>
      <p class="text-sm pt-5">Read about it here:</p>
    </div>
    <div 
      class="flex justify-center items-center relative group" 
      id="download-section"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
      <!-- SVG Image -->
      <img class="rounded-lg transition-transform duration-300 hover:opacity-10 md:w-1/2" 
        src="public/images/cover.svg" alt="Cover Image">

      <!-- Hover Effect: Download Button -->
      <div v-if="isHovered" class="absolute inset-0 flex justify-center items-center">
        <a href="/downloads/expentura_short_de.pdf" download class="bg-primary text-secondary text-xl font-semibold px-4 py-2 rounded-xl shadow-lg transition pr-5">
          Download <font-awesome :icon="['fas', 'download']" />
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center text-center py-5">
        <p class="text-lg font-medium pb-2">Interested in a detailed introduction to our product?</p>
        <p class="text-lg pb-2">Schedule a personalized demo and discover how we can elevate your experience. <span class="font-semibold text-xl">Book now!</span></p>
        <NuxtLink to="#download-section" class="my-5">
            <ButtonHero />
        </NuxtLink>
    </div>
  </section>
  <Cta />
  <Whitepaper />
</template>

<style scoped lang="scss">

</style>