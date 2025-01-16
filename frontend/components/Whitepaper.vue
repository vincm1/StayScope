<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';

const scrollThreshold = 100; // Define the scroll level in pixels
const showModal = ref(false); // Control modal visibility
const hasClosedModal = ref(false); // Track if the modal was closed

// Scroll event handler
const handleScroll = () => {
  if (window.scrollY > scrollThreshold && !showModal.value && !hasClosedModal.value) {
    showModal.value = true; // Show the modal
  }
};

// Close the modal
const closeModal = () => {
  showModal.value = false;
  hasClosedModal.value = true; // Mark the modal as closed
};

// Set up and clean up the scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Define reactive properties for form fields
const formData = ref({
  firstname: '',
  lastname: '',
  company: '',
  employees: 0,
  email: '',
  password: '',
  acceptTerms: false,
});

// Submit handler
const handleSubmit = () => {
  console.log('Form Submitted:', formData.value);
};
</script>

<template>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 border border-primary bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-beige border-2 border-primary rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white bg-primary hover:text-secondary hover:cursor-auto rounded-full w-8 h-8 flex items-center justify-center"
      >
        X
      </button>

      <!-- Modal Content -->
      <div class="text-center mb-7">
        <h1 class="text-grey">Download our Report</h1>
        <h2 class="text-primary text-2xl mt-2">
          Get the latest insights about the <br> Experience Economy
        </h2>
      </div>

      <!-- Image and Form Section -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Image -->
        <div class="col-span-1">
          <img
            src="/images/kite_whitepaper.jpg"
            alt="Kite Whitepaper"
            class="rounded h-full w-auto"
          />
        </div>
        <!-- Dynamic Form -->
        <div class="col-span-1">
            <form @submit.prevent="handleSubmit" action="">
                <label for="firstname">Firstname</label>
                <InputText unstyled="true" placeholder="Max" 
                    class="w-full p-2 mb-4 border-2 border-primary rounded-lg" 
                    v-model="formData.firstname"
                    required
                />
                <label for="lastname">Lastname</label>
                <InputText unstyled="true" placeholder="Mustermann" 
                    class="w-full p-2 mb-4 border-2 border-primary rounded-lg" 
                    v-model="formData.lastname"
                    required
                />
                <label for="hotelname">Hotel- / Company name</label>
                <InputText unstyled="true" placeholder="Alpenglück" 
                    class="w-full p-2 mb-4 border-2 border-primary rounded-lg" 
                    v-model="formData.company"    
                />

                <InputText />
                <Slider  unstyled="true"/>

                <label for="email">Email</label>
                <InputText unstyled="true" placeholder="E-Mail" 
                    class="w-full p-2 mb-4 border-2 border-primary rounded-lg" 
                    v-model="formData.email"
                    required
                    type="email"
                />
            
                <ButtonBaseButton 
                    sizeClass="md"
                    bgClass="bg-primary"
                    textClass="text-secondary"
                    class="w-full mt-4"
                    type="submit"
                >
                    Download
                </ButtonBaseButton>
            </form>
            
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles */
</style>
