<script setup lang="ts">
const keywords = 
    [
        "Experiences",
        "UP-Selling",
        "Guest experience",
        "Personalization",
        "Cross-Selling",
    ]
</script>

<template>
  <section class="problem bg-white text-primary px-4 py-6 mx-auto">
    <div class="container text-center py-5" data-aos="fade-up">
      <!-- Heading -->
      <h1 class="text-1xl text-grey text-playfair mb-5">PROBLEM</h1>
      <h1 class="text-2xl md:text-4xl font-bold mt-3">
        Guests require curated and personalized experiences
      </h1>
      <!-- Subheading -->
      <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
        Create a seemless experience for your guests by providing them with curated and personalized experiences.
      </p>
      <NuxtLink
        href="#"
        class="inline-block mt-6 text-primary relative font-medium text-lg group"
      >
        Try expentura for Free →
        <span
          class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
        ></span>
      </NuxtLink>

      <!-- Continuous Scrolling Keywords -->
      <div class="keywords-container my-10 mx-auto">
        <NuxtMarquee :speed="50" class="flex items-center">
          <div
            v-for="(word, index) in keywords"
            :key="index"
            class="flex items-center justify-center"
          >
            <div
              class="keyword-box w-48 h-12 flex items-center justify-center border border-gray-300 rounded-full text-sm font-semibold text-center"
            >
              {{ word }}
            </div>
            <font-awesome
              :icon="['fas', 'circle-exclamation']"
              class="exclamation-icon w-12 h-10 flex items-center justify-center mx-2 rounded-full"
            />
          </div>
        </NuxtMarquee>
      </div>
    </div>
  </section>
</template>
  
<style scoped lang="scss">
</style>

