<script setup lang="ts">
const keywords = 
    [
        "Experiences",
        "Up-Selling",
        "Guest experience",
        "Personalization",
        "Cross-Selling",
        "Revenue growth"
    ]
</script>

<template>
  <section class="problem flex justify-center items-center bg-white text-primary px-4 pt-5 pb-10 mx-auto">
    <div class="container text-center py-5" data-aos="fade-up">
      <!-- Heading -->
      <h1 class="text-1xl text-grey text-playfair mb-5">PROBLEM</h1>
      <h1 class="text-2xl md:text-4xl font-bold mt-3">
        Guests require curated and personalized experiences
      </h1>
      <!-- Subheading -->
      <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
        Create a seemless experience for your guests by providing them with <span class="hidden lg:inline"><br></span>
        curated and personalized experiences.
      </p>
      <NuxtLink
        href="#"
        class="inline-block mt-2 text-primary relative font-medium text-lg group"
      >
        Try expentura for Free →
        <span
          class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
        ></span>
      </NuxtLink>
    </div>
  </section>
  <!-- Continuous Scrolling Keywords -->
  <div class="keywords-container bg-white container-fluid">
      <NuxtMarquee :speed="50" class="flex items-center">
          <div
            v-for="(word, index) in keywords"
            :key="index"
            class="flex items-center justify-center"
          >
            <div
              class="keyword-box w-48 h-12 flex items-center justify-center border border-primary rounded-full text-md font-semibold 10 text-center"
            >
              {{ word }}
            </div>
            <div class="bg-primary rounded-full mx-3">
              <font-awesome
              :icon="['fas', 'circle-exclamation']"
              class="text-secondary exclamation-icon w-10 h-10 flex items-center
                    justify-center p-2 rounded-full"
              />
            </div>
            
          </div>
      </NuxtMarquee>
    </div>
</template>
  
<style scoped lang="scss">
</style>

