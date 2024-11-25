<script setup lang="ts"></script>

<template>
  <section class="relative text-white py-20">
    <!-- Centered Blurry Container -->
    <div class="container mx-auto w-2/3 bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-secondary p-10 text-center">
      <h1 class="text-xl lg:text-3xl font-bold mb-4">
        Supercharge your Hotel experience
      </h1>
      <p class="text-lg lg:text-xl text-gray-200 mb-8">
        Try StayScope today. We are here to make your life easier.
      </p>
      <div class="flex justify-center space-x-4 mt-10">
        <NuxtLink to="/get-started">
          <ButtonHero />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta-container {
  padding: 100px 20px; /* Padding for spacing */
  position: relative;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
  backdrop-filter: blur(10px); /* Blurry background */
  border-radius: 16px; /* Rounded corners */
  z-index: 1;
}
</style>

