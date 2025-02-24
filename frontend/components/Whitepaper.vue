<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineExpose } from 'vue';

// Access runtime config
const config = useRuntimeConfig();

// Base URL for API calls
const apiBaseUrl = config.public.BASE_URL;

// Scroll and modal management
const scrollThreshold = 1000; // Pixel scroll threshold
const showModal = ref(false); // Modal visibility state
const hasClosedModal = ref(false); // Track if modal was closed
const sliderValue = ref(10); // Slider value

const openModal = () => {
  showModal.value = true;
  hasClosedModal.value = false;
};

// Form state and validation
const formData = ref({
  firstname: '',
  lastname: '',
  hotelname: '',
  numhotels: sliderValue.value,
  email: '',
});

const errorMessages = ref<string[]>([]); // Stores validation errors
const downloadButtonState = ref<'default' | 'success' | 'loading'>('default'); // Button state
const waiting = ref(false); // Tracks submission status

// Scroll event handler
const handleScroll = () => {
  if (window.scrollY > scrollThreshold && !showModal.value && !hasClosedModal.value) {
    showModal.value = true;
  }
};

// Modal actions
const closeModal = () => {
  showModal.value = false;
  hasClosedModal.value = true;
};

// Validation function
const validateForm = (): boolean => {
  errorMessages.value = [];
  if (formData.value.firstname.trim().length < 2) {
    errorMessages.value.push('First name must be at least 2 characters long.');
  }
  if (formData.value.lastname.trim().length < 2) {
    errorMessages.value.push('Last name must be at least 2 characters long.');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    errorMessages.value.push('Please enter a valid email address.');
  }
  return errorMessages.value.length === 0;
};

// Submission handler
const handleSubmit = async () => {
  if (!validateForm()) {
    return; // Exit if validation fails
  }
  
  console.log(`${apiBaseUrl}/api/contact`);
  waiting.value = true;
  downloadButtonState.value = 'loading';

  try {
    const response = await $fetch(`/api/contact`, {
      method: 'POST',
      body: formData.value,
    });

    if (response.code === 200) {
      // Handle success
      formData.value = {
        firstname: '',
        lastname: '',
        hotelname: '',
        numhotels: sliderValue.value,
        email: '',
      };
      downloadButtonState.value = 'success';

      // Keep the success button visible for 3 seconds before closing the modal
      setTimeout(() => {
        closeModal();
        downloadButtonState.value = 'default'; // Reset button state after modal closes
      }, 1000);

    } else {
      throw new Error('Unexpected response');
    }
  } catch (error) {
    console.error('Submission error:', error);
    downloadButtonState.value = 'default';
  } finally {
    waiting.value = false;
  }
};

// Sync slider value with formData
const syncSliderValue = computed({
  get: () => sliderValue.value,
  set: (val) => {
    sliderValue.value = val;
    formData.value.numhotels = val;
  },
});

// Event listeners for scroll
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

defineExpose({openModal, closeModal});	
</script>

<template>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div class="border-2 border-primary bg-beige rounded-xl shadow-lg w-full max-w-[90%] md:max-w-2xl mx-auto p-6 min-h-[60vh] md:min-h-[70vh] max-h-[90vh] overflow-y-auto flex flex-col justify-center relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-2 text-white bg-primary hover:text-secondary rounded-full w-8 h-8 flex items-center justify-center z-50"
      >
        X
      </button>

      <!-- Modal Header -->
      <div class="modal-header text-center pt-20">
        <h1 class="text-grey text-sm">Download our Report</h1>
        <h2 class="text-primary text-2xl pt-2">
          Get the latest insights
        </h2>
        <h2 class="text-primary text-2xl">
          about the Experience Economy
        </h2>
      </div>

      <!-- Modal Body -->
      <div class="modal-body grid grid-cols-1 md:grid-cols-2 pt-10 gap-4">
        <!-- Image -->
        <div class="flex justify-center items-center">
          <img
            src="/images/kite_whitepaper.jpg"
            alt="Kite Whitepaper"
            class="rounded w-full max-w-[200px] md:max-w-full"
          />
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="w-full space-y-4">
          <div class="form-group">
            <label for="firstname">Firstname*</label>
            <input
              id="firstname"
              v-model="formData.firstname"
              type="text"
              class="w-full border rounded-lg p-2"
              placeholder="Max"
              required
            />
          </div>

          <div class="form-group">
            <label for="lastname">Lastname*</label>
            <input
              id="lastname"
              v-model="formData.lastname"
              type="text"
              class="w-full border rounded-lg p-2"
              placeholder="Mustermann"
              required
            />
          </div>

          <div class="form-group">
            <label for="hotelname">Hotel- / Company Name</label>
            <input
              id="hotelname"
              v-model="formData.hotelname"
              type="text"
              class="w-full border rounded-lg p-2"
              placeholder="Hotel Alpenglück"
            />
          </div>

          <div class="form-group">
            <label for="numhotels">Number of Hotels</label>
            <input
              id="numhotels"
              type="range"
              v-model="syncSliderValue"
              min="1"
              max="100"
              class="appearance-none bg-secondary rounded-lg slider w-full my-2"
            />
            <p>{{ sliderValue }}</p>
          </div>

          <div class="form-group">
            <label for="email">Email*</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full border rounded-lg p-2"
              placeholder="max.mustermann@hotel-alpenglueck.de"
              required
            />
          </div>

          <!-- Buttons -->
          <div class="flex flex-col items-center space-y-2">
            <button
              v-if="downloadButtonState === 'default'"
              class="w-full bg-primary text-white p-2 rounded-lg"
            >
              Download
            </button>
            <button
              v-else-if="downloadButtonState === 'success'"
              class="w-full bg-primary text-white p-2 rounded-lg"
            >
              ✅ Success
            </button>
            <div
              v-else-if="downloadButtonState === 'loading'"
              class="w-full flex justify-center items-center"
            >
              <span class="loader"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure modal doesn't touch the edges on small screens */
@media (max-width: 768px) {
  .max-w-lg {
    max-width: 90%;
    margin: auto;
  }

  img {
    max-width: 180px;
    height: auto;
  }
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #5cff98;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.slider {
  @apply
  [&::-webkit-slider-runnable-track]:rounded-full 
  [&::-webkit-slider-thumb]:appearance-none 
  [&::-webkit-slider-thumb]:h-5 
  [&::-webkit-slider-thumb]:w-5 
  [&::-webkit-slider-thumb]:rounded-full 
  [&::-webkit-slider-thumb]:bg-primary;
}
</style>