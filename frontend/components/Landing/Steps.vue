<script setup lang="ts">
const options = {
        url: 'https://calendly.com/vincent-michler94/30min',   
    };
</script>

<template>
  <section class="bg-lightbeige text-primary py-20 px-6">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">Sell an experience in less than an hour.</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Whether you’re a B2B or B2C SaaS, Marketplace, E-commerce, or feeling limitations with your current provider, OpenPay can help. Here's how to get started:
      </p>
      <a href="/get-started" class="text-primary font-semibold hover:underline mt-4 inline-block">
        Get started for free →
      </a>
    </div>
    
    <!-- Steps Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
        <!-- Step 1 -->
        <div class="flex flex-col items-center">
            <div class="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <font-awesome :icon="['far', 'user']" class="text-2xl text-secondary" />
            </div>
            <p class="text-xs text-grey">STEP 1</p>
            <h2 class="text-xl font-semibold mb-2">Create an account</h2>
            <p class="text-gray-600 text-center">
                Sign up for an account in less than a minute. No credit card required.
            </p>
        </div>
        <!-- Step 2 -->
        <div class="flex flex-col items-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <font-awesome :icon="['far', 'message']" class="text-2xl text-secondary" />
            </div>
            <p class="text-xs text-grey">STEP 2</p>
            <h2 class="text-xl font-semibold mb-2">Make a booking</h2>
            <p class="text-gray-600 text-center">
                Book a call with StayScope Expert. They'll become your go-to person during onboarding.
            </p>
        </div>
        <!-- Step 3 -->
        <div class="flex flex-col items-center">
            <div class="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <font-awesome :icon="['far', 'square-check']" class="text-2xl text-secondary" />
            </div>
            <p class="text-xs text-grey">STEP 3</p>
            <h2 class="text-xl font-semibold mb-2">Create an account</h2>
            <p class="text-gray-600 text-center">
                Done-with-you migration. We’ll help you navigate the process with zero downtime.
            </p>
        </div>
    </div>

    <div>
      <CalendlyInlineWidget v-bind="options" />
    </div>
  </section>
</template>

<style scoped>

</style>
