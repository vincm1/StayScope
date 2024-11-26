<script setup lang="ts"></script>

<template>
  <section class="bg-white px-4 py-8">
    <div class="text-center mb-10">
        <!-- Heading -->
        <h1 class="text-1xl text-grey text-playfair mb-5">
          Hospitality Future
        </h1>
        <h1 class="text-4xl text-primary font-bold">
          Experience Economy
        </h1>
        <!-- Subheading -->
        <p class="text-lg lg:text-xl text-primary my-3 leading-relaxed">
          With no complex integration and zero setup fee, you can start growing your experience offer in less than a week.
        </p>
    </div>
    <!-- Grid Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
      <!-- Image Section -->
      <div class="lg:col-span-3">
        <img
          src="/images/integration.png"
          alt="integration-screen"
          class="border border-gray-300 rounded-lg max-w-full h-100 shadow-lg"
        />
      </div>
      <!-- Text Section -->
      <div class="lg:col-span-2 justify-center space-y-6">
        
        <!-- Cards Section -->
        <div class="space-y-10 text-primary">
          <!-- Card 1 -->
          <div data-aos="fade-left" class="p-4 border border-primary bg-lightbeige rounded-lg shadow-lg overflow-hidden">
            <h2 class="text-center text-xl font-bold mb-2">Easy to set up</h2>
            <p class="text-sm lg:text-base">
              A single standardized platform for both in-house experiences, and those with local partners.
            </p>
          </div>
          <!-- Card 2 -->
          <div data-aos="fade-left" class="p-4 border border-primary bg-lightbeige rounded-lg shadow-md">
            <h2 class="text-center text-xl font-bold mb-2">Simple to manage</h2>
            <p class="text-sm lg:text-base">
              Self-serve bookings, and automated updates to pricing, availability, booking changes, and cancellations.
            </p>
          </div>
          <!-- Card 3 -->
          <div data-aos="fade-left" class="p-4 border border-primary bg-lightbeige rounded-lg shadow-md">
            <h2 class="text-center text-xl font-bold mb-2">Geared for growth</h2>
            <p class="text-sm lg:text-base">
                Live and aggregated feedback with guest reviews, booking performance and data insights
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center space-x-4 mt-10">
        <NuxtLink to="/get-started">
            <ButtonHero />
        </NuxtLink>
    </div>
  </section>
</template>
