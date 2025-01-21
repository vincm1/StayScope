<script setup lang="ts"></script>

<template>
  <section class="software bg-white text-center py-20 text-primary" id="howitworks">
    <div class="pb-5 pt-10" data-aos="fade-up">
        <!-- Heading -->
        <h1 class="text-1xl text-grey text-playfair mb-5">
          HOSPITALITY FUTURE
        </h1>
        <h1 class="text-2xl md:text-4xl font-bold my-3">
          Maximize Revenue with Smart Up- and Cross-Selling
        </h1>
        <!-- Subheading -->
        <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
          Seamlessly embed your experience booking engine into your hotel website and deliver personalized guest experiences that drive success.
        </p>
    </div>

    <div class="product-demo mx-10 mt-2 px-5 overflow-hidden max-w-screen">
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 text-center lg:text-start gap-20">
        <!-- Row 1 -->
        <div class="flex flex-col lg:flex-row gap-5 lg:gap-10" data-aos="fade-right">
          <img src="/images/productprev/futura_browser_(desktop).svg" alt="Software Image 1" class="w-full lg:w-1/2 rounded-lg shadow-lg">
          <div class="mt-4 md:mt-0 md:ml-4">
            <h1 class="text-2xl text-grey text-playfair mb-5">
              EFFORTLESS INTEGRATION
            </h1>
            <h3 class="text-4xl text-primary font-bold mb-2">API & WHITELABEL SOLUTIONS</h3>
            <p class="text-lg lg:text-xl text-grey pt-4">
              Easily integrate our platform into your existing systems or opt for a fully branded white-label solution.
              Enhance guest experiences effortlessly—perfect for any hotel, whether you’re a global chain or a boutique property.
            </p>
          </div>
        </div>
        <!-- Row 2 -->
        <div class="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10" data-aos="fade-left">
          <div class="mt-4 md:mt-0 md:mr-4 order-2 md:order-1">
            <h1 class="text-2xl text-grey text-playfair mb-5">
              STREAMLINED CHECKOUT
            </h1>
            <h3 class="text-4xl font-bold mb-2">Effortless Upgrades & Add-Ons</h3>
            <p class="text-lg lg:text-xl text-grey pt-4">Simplify the booking process with a checkout experience that boosts revenue. 
              Offer room upgrades, exclusive experiences, and personalized add-ons seamlessly—making every transaction smooth, fast, and guest-friendly.
            </p>
          </div>
          <img src="/images/productprev/expentura_experience_checkout_(desktop).svg" alt="Software Image 2" class="w-full lg:w-1/2 rounded-lg order-1 md:order-2 shadow-lg">
        </div>
        <!-- Row 3 -->
        <div class="flex flex-col lg:flex-row gap-5 lg:gap-10" data-aos="fade-right">
          <img src="/images/productprev/expentura_maindb.svg" alt="Software Image 1" class="w-full lg:w-1/2 rounded-lg shadow-lg">
          <div class="mt-4 md:mt-0 md:ml-4">
            <h1 class="text-2xl text-grey text-playfair mb-5">
              CURATED DASHBOARDS
            </h1>
            <h3 class="text-4xl font-bold mb-2">Control Experiences with Ease</h3>
            <p class="text-lg lg:text-xl text-grey pt-4">Stay in command with a dashboard designed for simplicity and impact. 
              Monitor performance, manage experiences, and fine-tune offerings—all in real time to enhance guest satisfaction.
            </p>
          </div>
        </div>
        <!-- Row 4 -->
        <div class="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10" data-aos="fade-left">
          <div class="mt-4 md:mt-0 md:mr-4 order-2 md:order-1">
            <h1 class="text-2xl text-grey text-playfair mb-5">
              SEAMLESS CONTROL, ENDLESS OPPORTUNITIES
            </h1>
            <h3 class="text-4xl font-bold mb-2">Manage Experiences & Partner Operators</h3>
            <p class="text-lg lg:text-xl text-grey pt-4">
              Quickly manage room upgrades, exclusive experiences, and partnerships with operators—all from one platform.
              Simplify coordination, tailor offerings, and create memorable guest experiences and drive revenue growth with ease.
            </p>
          </div>
          <img src="/images/productprev/expentura_experiencesdb.svg" alt="Software Image 2" class="w-full lg:w-1/2 rounded-lg order-1 md:order-2 shadow-lg">
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-5">
      <NuxtLink
            href="#book-demo"
            class="inline-block mt-6 text-primary relative font-medium text-lg group"
          >
            Try expentura for Free →
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
            ></span>
      </NuxtLink>
    </div>
    
  </section>
</template>

<style>
</style>
