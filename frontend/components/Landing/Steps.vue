<script setup lang="ts">
const options = {
        url: 'https://calendly.com/vincent-michler94/30min',   
    };
</script>

<template>
  <section class="demo bg-lightbeige text-primary px-4 py-10 mx-auto">
    <!-- Header Section -->
    <div class="text-center py-5" data-aos="fade-up">
      <h1 class="text-1xl text-grey text-playfair mb-5">GET TO KNOW THE PLATFORM TODAY</h1>
      <h1 class="text-2xl md:text-4xl font-bold mt-3">Start selling experiences in under an hour</h1>
      <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
        Whether you're a hotel, resort, or marketplace looking to enhance guest experiences—or feeling
        restricted by your current solutions—Expentura is here to help. Here's how to get started:
      </p>
    
      <!-- Steps Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 pt-10" data-aos="fade-right">
          <!-- Step 1 -->
          <div class="flex flex-col items-center">
              <div class="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <font-awesome :icon="['far', 'message']" class="text-2xl text-secondary" />
              </div>
              <p class="text-xs text-grey">STEP 1</p>
              <h2 class="text-xl font-semibold mb-2">Make a booking</h2>
              <p class="text-gray-600 text-center">
                Book a call with an expentura Expert. They'll become your go-to person during onboarding.
              </p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center">
              <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <font-awesome :icon="['far', 'user']" class="text-2xl text-secondary" />
              </div>
              <p class="text-xs text-grey">STEP 2</p>
              <h2 class="text-xl font-semibold mb-2">Create an Account</h2>
              <p class="text-gray-600 text-center">
                  We'll help you set up your account and get you started with your first experience.
              </p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center">
              <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <font-awesome :icon="['far', 'square-check']" class="text-2xl text-secondary" />
              </div>
              <p class="text-xs text-grey">STEP 3</p>
              <h2 class="text-xl font-semibold mb-2">Seamless Migration</h2>
              <p class="text-gray-600 text-center">
                We’ll guide you through a smooth, done-with-you migration process—ensuring zero downtime and minimal disruption to your operations.
              </p>
          </div>
      </div>

      <div class="mt-6 md:mt-1" id="book-demo">
        <CalendlyInlineWidget v-bind="options" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
