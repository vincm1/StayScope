<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import testimonials from '@/data/testimonials.json'; // Import the JSON file

// Define the type for a testimonial
interface Testimonial {
  header: string;
  text: string;
  ceo: string;
  position: string;
  picture: string;
}

// Initialize selectedCompany with the first testimonial
const selectedCompany = ref<Testimonial>({ ...testimonials[0] });

// Function to update the content dynamically
const updateTestimonialContent = (company: string): void => {
  const testimonial = testimonials.find((t) =>
    t.position.toLowerCase().includes(company.toLowerCase())
  );
  if (testimonial) {
    selectedCompany.value = testimonial;
    restartAutoRotate(); // Restart rotation on click
  }
};

// Interval for automatic content rotation
let interval: ReturnType<typeof setInterval> | null = null;

const startAutoRotate = (): void => {
  let index = testimonials.findIndex(
    (t) => t.ceo === selectedCompany.value.ceo
  );

  interval = setInterval(() => {
    index = (index + 1) % testimonials.length; // Cycle through testimonials
    selectedCompany.value = testimonials[index];
  }, 10000); // Change every 10 seconds
};

const stopAutoRotate = (): void => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const restartAutoRotate = (): void => {
  stopAutoRotate();
  startAutoRotate();
};

// Lifecycle hooks
onMounted(() => {
  startAutoRotate();
});

onUnmounted(() => {
  stopAutoRotate();
});
</script>

<template>
    <section class="testimonial bg-white text-primary px-4 py-6 mx-auto">
      <div class="container text-center py-5" data-aos="fade-up">
        <!-- Heading -->
        <h1 class="text-1xl text-grey text-playfair mb-5">WHAT OUR PARTNERS SAY</h1>
        <h1 class="text-2xl md:text-4xl font-bold mt-3">
          Join the Experience Economy
        </h1>
        <!-- Subheading -->
        <p class="text-xl md:text-2xl mx-5 md:mx-20 my-8">
          Over 20 partners have joined us to create a seamless experience for their guests.
        </p>

        <!-- Testimonial Card -->
        <div class="card mt-10 mx-20 bg-beige px-5 py-8 rounded-xl shadow-xl">
          <h1 class="text-2xl text-center text-primary font-jakarta_sans font-bold pt-4">
            {{selectedCompany.header}}
          </h1>
          <div class="flex text-center items-center pt-5 mx-20">
            <p class="text-md text-primary flex justify-center items-center pr-10">
              {{ selectedCompany.text }}
            </p>
            <font-awesome 
                :icon="['fas', 'quote-left']" 
                class="text-5xl text-primary bg-secondary p-5 rounded-full" 
            />
          </div>
          <div class="flex items-center justify-between mt-10 mx-5">
          <!-- Left Section: Picture and Text -->
          <div class="flex items-center space-x-4 mx-10">
            <img
              class="w-12 h-12 rounded-full ring-2 ring-primary"
              :src="selectedCompany.picture"
              alt="Testimonial Image"
            />
            <div>
              <h2 class="text-lg font-semibold">{{ selectedCompany.ceo }}</h2>
              <p class="text-sm">{{ selectedCompany.position }}</p>
            </div>
          </div>

          <!-- Right Section: Clickable List -->
          <ul class="flex space-x-6 mx-10">
            <li>
              <NuxtImg
                src="/images/clients/infinity.svg"
                @click="updateTestimonialContent('infiniti')"
                class="h-5 cursor-pointer"
              />
            </li>
            <li>
              <NuxtImg
                src="/images/clients/mfinity.svg"
                @click="updateTestimonialContent('mfinity')"
                class="h-5 cursor-pointer"
              />
            </li>
            <li>
              <NuxtImg
                src="/images/clients/caudile.svg"
                  @click="updateTestimonialContent('caudile')"
                  class="h-5 cursor-pointer"
                />
              </li>
          </ul>
          </div>
        </div>
        
        <!-- Call to Action Buttons -->
        <div class="flex justify-center gap-6 pt-10">
          <NuxtLink
          to="#book-demo"
          class="items-center justify-center flex"
          >
              <ButtonHero
              sizeClass="lg"
              bgClass="bg-primary"
              />
          </NuxtLink>
          <NuxtLink
              to="/downloads/whitepaper"
              class="items-center justify-center flex"
          >
              <ButtonBaseButton
                  sizeClass="lg"
                  bgClass="bg-none"
                  textClass="text-primary"
                  borderClass="border border-primary"
              >
                  Whitepaper
              </ButtonBaseButton>
          </NuxtLink>
        </div>
      
      </div>
    </section>
  </template>

<style scoped lang="scss">
</style>