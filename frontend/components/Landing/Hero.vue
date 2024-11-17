<template>
    <div class="LandingHero mt-1 flex items-center justify-center">
      <div class="hero-body font-init p-8 rounded-lg">
        <div class="container text-center text-white">
          <!-- Headline -->
          <h1 class="text-4xl font-bold font-beige leading-tight mb-5">
            Everything you need to <br />
            elevate your guest experiences.
          </h1>
          <!-- Subtitle -->
          <p class="subtitle font-beige text-lg mb-6">
            Elevate your hospitality game with the ultimate <br>
            experience management platform for modern hotels.
          </p>
          <!-- Call to Action -->
          <div class="flex justify-center space-x-4 mb-5">
            <NuxtLink to="/get-started">
              <ButtonHero />
            </NuxtLink>
          </div>
          <div class="flex items-center text-sm mt-5">
            <span class="text-md">Trusted by <span class="text-secondary font-play">leading</span> hotels:</span>
            <ul class="flex justify-around space-x-5 ml-5">
                <li>Steigenberger</li>
                <li>Marriott</li>
                <li>Radisson</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="product_screen">
        <img src="/images/product.png" alt="hero" class="w-[200]" />
      </div>
  </template>
  
  <style lang="scss" scoped>
  </style>
  