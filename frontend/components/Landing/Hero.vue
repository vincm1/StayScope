<template>
  <div class="LandingHero flex items-center justify-center">
    <div class="hero-body font-init mt-8 rounded-lg">
      <Info
        title="Become a Betatester for our new product!"
        class="px-10"
      />
      <div class="text-center text-beige">
        <!-- Headline -->
        <h1 class="title text-2xl md:text-4xl font-bold leading-relaxed mt-10 mb-6">
          Offer experiences <span class="text-secondary font-serif underline font-semibold">directly</span> <br class="block pb-2">
          through your hotel website
        </h1>
        <!-- Subtitle -->
        <p class="subtitle font-beige leading-loose mb-6">
          An all-in-one platform that helps hotels easily manage and promote <br />
          in-destination activities, excursions, and guest experiences.
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
    <!-- <div class="product_screen flex items-center justify-center text-center mx-10">
      <img src="/images/product.png" alt="hero" class="w-[-100] text-center" />
    </div> -->
  <ProductPrev />
</template>

<style lang="scss" scoped>
</style>
  