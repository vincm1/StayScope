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
  <section class="problem bg-white text-primary px-4 py-10">
    <div class="bg-white text-primary container-sm text-center mx-auto py-5" data-aos="fade-up">
      <!-- Heading -->
      <h1 class="text-1xl text-grey text-playfair mb-5">PROBLEM</h1>

      <!-- Problem Statement -->
      <div>
        <p class="text-2xl md:text-4xl font-bold my-3">Guests require curated and personalized experiences</p>
        <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
          Create a seemless experience for your guests by providing them with curated and personalized experiences
        </p>
        <NuxtLink to="/signup" class="pt-5 hover:underline transition">
          Try StayScope for free
          <font-awesome class="arrow-icon pl-2" :icon="['fas', 'arrow-right']" />
        </NuxtLink>
      </div>

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

