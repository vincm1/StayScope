<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '#app';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

// State for hover effect
const isHovered = ref(false);

// State for PrimeVue Dialog visibility
const isDialogVisible = ref(false);

// Form data
const email = ref('');
const hotelUrl = ref('');
const errorMessage = ref('');
const isSubmitting = ref(false);

// Function to open modal
const openDownloadModal = () => {
  isDialogVisible.value = true;
};

// Function to close modal
const closeModal = () => {
  isDialogVisible.value = false;
};

// Function to validate email and URL
const validateForm = (): boolean => {
  errorMessage.value = '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d-]+(\/[\w\d-]*)*\/?$/;

  if (!email.value || !emailRegex.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address.';
    return false;
  }

  if (!hotelUrl.value || !urlRegex.test(hotelUrl.value)) {
    errorMessage.value = 'Please enter a valid hotel website URL.';
    return false;
  }

  return true;
};

// Function to handle form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Send email notification to admin
    await useFetch('/api/contact', {
      method: 'POST',
      body: { email: email.value, hotelUrl: hotelUrl.value },
    });

    // Trigger the download
    const link = document.createElement('a');
    link.href = '/downloads/expentura_short_de.pdf';
    link.download = 'expentura_short_de.pdf';
    link.click();
    closeModal();
  } catch (error) {
    console.error('Error sending email:', error);
    errorMessage.value = 'Something went wrong. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="bg-primary text-white py-5">
    <div class="LandingHero flex items-center justify-center pb-5" id="hero">
      <div class="hero-body font-init mt-5 rounded-lg">
        <div class="text-center text-beige">
          <!-- Headline -->
          <h1 class="title text-2xl md:text-4xl font-bold leading-relaxed mt-10 mb-6">
            Curated experiences <span class="text-secondary font-serif underline font-semibold">directly</span> <br class="block pb-2">
            on your hotel website
          </h1>
          <!-- Subtitle -->
          <p class="subtitle font-beige leading-loose my-6">
            Effortlessly manage and showcase unforgettable in-destination activities and <br>
            guest experiences—all in one powerful platform.
          </p>
          <!-- Call to Action -->
          <div class="flex justify-center space-x-4 mb-5">
            <NuxtLink to="#download-section">
              <ButtonHero 
                :button-text="'Presentation'"
              />
            </NuxtLink>
          </div>
          <div class="flex items-center justify-center text-xs mt-10">
            <span>Trusted by <span class="text-secondary font-play">leading</span> hotels:</span>
            <ul class="flex justify-around space-x-5 ml-5">
              <li>Torggler Hof</li>
              <li>Hotel Lenz</li>
              <li>Hotel Crillon Le Brave</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white text-primary text-center">
    <div class="py-10">
      <h1 class="text-2xl font-bold pb-2">Create curated personalized stays for your guests</h1>
      <p class="px-20 pt-2">
        Don't miss your chance to seamlessly integrate exclusive experiences and activities directly into your hotel website. 
        Enhance guest engagement and boost revenue — effortlessly! 
      </p>
      <p class="text-sm pt-5">Read about it here:</p>
    </div>
    <div 
      class="flex justify-center items-center relative group" 
      id="download-section"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
      <!-- SVG Image -->
      <img class="rounded-lg transition-transform duration-300 hover:opacity-10 md:w-1/2" 
        src="/images/cover_exp.svg" alt="Cover Image">

      <!-- Hover Effect: Download Button -->
      <div v-if="isHovered" @click="openDownloadModal" class="absolute inset-0 flex justify-center items-center">
        <button class="bg-primary text-secondary text-xl font-semibold px-4 py-2 rounded-xl shadow-lg transition pr-5">
          Download <font-awesome :icon="['fas', 'download']" />
        </button>
      </div>
      
      <!-- PrimeVue Dialog -->
      <Dialog 
        v-model:visible="isDialogVisible" 
        unstyled 
        modal 
        :style="{ width: '90%', maxWidth: '500px' }" 
        :class="'bg-beige text-primary rounded-lg shadow-lg p-6'"
        :position="'center'"
        :closable="false"
      >
        <!-- Header: Title & Close Button -->
        <div class="flex justify-between items-center pb-2 border-b border-gray-300">
          <h2 class="text-lg font-semibold text-primary">Download Whitepaper</h2>
          <button 
            @click="isDialogVisible = false" 
            class="bg-primary py-1 px-3 rounded-full text-white hover:text-secondary transition-all duration-200 text-xl focus:outline-none"
          >
            X
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-4">
          <p class="text-sm text-gray-600 text-center mb-4">
            Please enter your details to receive the whitepaper.
          </p>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="py-2">
              <label for="email" class="block text-sm font-semibold pb-2">Email*</label>
              <InputText 
                unstyled 
                v-model="email" 
                type="email" 
                id="email" 
                class="w-full p-2 border border-primary rounded-lg bg-lightgrey" 
                required 
              />
            </div>

            <div class="py-2">
              <label for="hotelUrl" class="block text-sm font-semibold pb-2">Hotel Website*</label>
              <InputText 
                v-model="hotelUrl" 
                id="hotelUrl" 
                unstyled 
                class="w-full p-2 border border-primary rounded-lg bg-lightgrey" 
                required 
              />
            </div>

            <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

            <!-- Buttons -->
            <div class="flex justify-end space-x-2 mt-4">
              <ButtonBaseButton type="submit" :loading="isSubmitting">
                Download
              </ButtonBaseButton>
            </div>
          </form>
        </div>
      </Dialog>

    </div>
    <div class="flex flex-col items-center text-center py-5">
        <p class="text-lg font-medium pb-2">Interested in a detailed introduction to our product?</p>
        <p class="text-lg pb-2">Schedule a personalized demo and discover how we can elevate your experience. <span class="font-semibold text-xl">Book now!</span></p>
        <NuxtLink to="#download-section" class="my-5">
            <ButtonHero />
        </NuxtLink>
    </div>
  </section>
  <Cta />
</template>

<style scoped lang="scss">
</style>