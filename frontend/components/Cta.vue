<script setup lang="ts"></script>

<template>
  <section class="flex-shrink text-white">
    <div class="cta-wrapper bg-primary grid-cols-6 grid">
      <div class="cta-circle-container col-span-1 lg:col-span-2">
        <div class="cta-circle"></div>
      </div>
      <div class="cta-main-wrapper bg-primarydark col-span-4 lg:col-span-2 text-center flex items-center justify-center">
        <div class="cta-main-content flex flex-col items-center py-20 my-12 text-center rounded-lg">
          <h1 class="text-2xl font-bold mb-4">
            Supercharge your 
            <br> Hotel experience
          </h1>
          <p class="text-gray-200 text-center mb-8">
            Try expentura today. We are here to make your life easier.
          </p>
          <NuxtLink to="/get-started">
            <ButtonHero>Book a Call</ButtonHero>
          </NuxtLink>
        </div>
      </div>
      <div class="cta-circle-container col-span-1 lg:col-span-2 md:ml-8 lg:ml-20">
        <div class="cta-circle-inverted"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Default styles for small screens (smaller than md) */
.cta-circle,
.cta-circle-inverted {
  display: none; /* Hide circles on smaller screens */
}

.cta-main-wrapper {
  background-image: linear-gradient(270deg, #102d21, #1b4333 50%, #102d21);
  display: flex; /* Make the wrapper a flex container */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 10px;
  padding: 20px;
}

/* Apply styles for medium screens and larger */
@media (min-width: 768px) {
  .cta-circle {
    display: block;
    border-right: rgb(92, 255, 152) solid 2px;
    height: 100%;
    width: 90%;
    border-radius: 50%;
  }

  .cta-circle-inverted {
    display: block;
    border-left: rgb(92, 255, 152) solid 2px;
    height: 100%;
    width: 90%;
    border-radius: 50%;
  }

  .cta-main-wrapper {
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
}
</style>
