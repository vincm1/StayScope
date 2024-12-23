<template>
    <div class="LandingHero flex items-center justify-center">
      <div class="hero-body font-init p-8 rounded-lg">
        <Info
          title="Become a Betatester for our new product!"
        />
        <div class="container text-center text-beige">
          <!-- Headline -->
          <h1 class="text-4xl font-bold font-beige leading-tight my-6">
            Everything you need to <br />
            elevate your guest experiences.
          </h1>
          <!-- Subtitle -->
          <p class="subtitle font-beige text-lg mb-8">
            Elevate your hospitality game with the ultimate <br>
            experience management platform for modern hotels.
          </p>
          <!-- Call to Action -->
          <div class="flex justify-center space-x-4 mb-5">
            <NuxtLink to="#book-demo">
              <ButtonHero />
            </NuxtLink>
          </div>
          <div class="flex items-center justify-center text-xs mt-10">
            <span>Trusted by <span class="text-secondary font-play">leading</span> hotels:</span>
            <ul class="flex justify-around space-x-5 ml-5">
                        
                <li>Steigenberger</li>
                <li>Marriott</li>
                <li>Radisson</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div class="product_screen flex items-center justify-center text-center mx-10">
        <img src="/images/product.png" alt="hero" class="w-[-100] text-center" />
      </div>
  </template>
  
  <style lang="scss" scoped>
  </style>
  