<script setup lang="ts">
const keywords = 
    [
        "Revenue management",
        "Impersonal",
        "Guests experience",
        "Experience packages",
        "Integration",
        "Uncurated",
        "Experience Economy",
        "TAs & OTAs",
    ]
</script>

<template>
  <section class="problem max-w-full bg-white text-primary px-4">
    <div class="bg-white text-primary container-sm text-center mx-auto py-5">
      <!-- Heading -->
      <h1 class="text-1xl text-grey text-playfair mb-5">Problem</h1>

      <!-- Problem Statement -->
      <div>
        <p class="text-3xl my-3">Are you leaving revenue on the table?</p>
        <p class="text-3xl container-sm mx-10 mb-8">
          Provide your guests an unforgettable all-around package by integrating TAs and OTAs into your revenue engine.
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

