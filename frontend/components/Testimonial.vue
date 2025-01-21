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
  }, 30000); // Change every 30 seconds
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
    <div class="text-center py-5" data-aos="fade-up">
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
      <div class="flex align-center justify-center">
        <div class="card text-center w-full lg:w-3/4 2xl:w-1/2 bg-beige rounded-xl shadow-xl p-8 2xl:p-12 relative">
          <span class="hidden md:block">
            <div class="bg-primary absolute top-3 right-4 rounded-full m-1 p-1">
            <font-awesome
              :icon="['fas', 'quote-left']"
              class="text-secondary text-4xl 
                    justify-center p-3 rounded-full"
              />
            </div>
          </span>
          <h1 class="text-2xl text-primary font-jakarta_sans font-bold pt-2">
            {{ selectedCompany.header }}
          </h1>
          <p class="text-md text-primary pt-4">
            {{ selectedCompany.text }}
          </p>
          <div class="flex flex-col md:flex-row justify-between items-center mt-10">
            <!-- Left Section: Picture and Text -->
            <div class="flex items-center space-x-4 mb-10 md:mb-0">
              <img
                class="w-12 h-12 rounded-full ring-2 ring-primary"
                :src="selectedCompany.picture"
                alt="Testimonial Image"
              />
              <div class="text-left">
                <h2 class="text-lg font-semibold">{{ selectedCompany.ceo }}</h2>
                <p class="text-sm">{{ selectedCompany.position }}</p>
              </div>
            </div>

            <!-- Right Section: Clickable List -->
            <ul class="flex justify-center align-center text-center space-x-6">
              <li>
                <NuxtImg
                  src="/images/clients/logo-crillon-le-brave.svg"
                  @click="updateTestimonialContent('le brave')"
                  class="h-10 cursor-pointer bg-primary opacity-80 p-2 rounded-full"
                />
              </li>
              <li>
                <NuxtImg
                  src="/images/clients/logo_lenz.png"
                  @click="updateTestimonialContent('lenz')"
                  class="h-10 cursor-pointer bg-primary opacity-80 p-2 rounded-full"
                />
              </li>
              <li>
                <NuxtImg
                  src="/images/clients/torglerhof.png"
                  @click="updateTestimonialContent('torgglerhof')"
                  class="h-10 cursor-pointer"
                />
              </li>
            </ul>
          </div>
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
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
</style>