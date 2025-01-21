<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Access runtime config
const config = useRuntimeConfig();

// Base URL for API calls
const apiBaseUrl = config.public.BASE_URL;

// Scroll and modal management
const scrollThreshold = 1000; // Pixel scroll threshold
const showModal = ref(false); // Modal visibility state
const hasClosedModal = ref(false); // Track if modal was closed
const sliderValue = ref(10); // Slider value

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
    const response = await $fetch(`${apiBaseUrl}/api/contact`, {
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
</script>

<template>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="border-2 border-primary bg-beige rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white bg-primary hover:text-secondary rounded-full w-8 h-8 flex items-center justify-center"
      >
        X
      </button>

      <!-- Modal Header -->
      <div class="text-center mb-7">
        <h1 class="text-grey text-sm">Download our Report</h1>
        <h2 class="text-primary text-2xl mt-1">
          Get the latest insights about the <br /> Experience Economy
        </h2>
      </div>

      <!-- Modal Body -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Image -->
        <div>
          <img
            src="/images/kite_whitepaper.jpg"
            alt="Kite Whitepaper"
            class="rounded h-full w-auto"
          />
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="col-span-1">
          <!-- First Name -->
          <div class="form-group mb-4">
            <label for="firstname">Firstname*</label>
            <input
              id="firstname"
              v-model="formData.firstname"
              type="text"
              placeholder="Max"
              class="w-full border rounded-lg p-2"
              required
            />
            <p
              v-if="errorMessages.includes('First name must be at least 2 characters long.')"
              class="text-red-500 text-sm"
            >
              First name must be at least 2 characters long.
            </p>
          </div>

          <!-- Last Name -->
          <div class="form-group mb-4">
            <label for="lastname">Lastname*</label>
            <input
              id="lastname"
              v-model="formData.lastname"
              type="text"
              placeholder="Mustermann"
              class="w-full border rounded-lg p-2"
              required
            />
            <p
              v-if="errorMessages.includes('Last name must be at least 2 characters long.')"
              class="text-red-500 text-sm"
            >
              Last name must be at least 2 characters long.
            </p>
          </div>

          <!-- Hotel Name -->
          <div class="form-group mb-4">
            <label for="hotelname">Hotel- / Company Name</label>
            <input
              id="hotelname"
              v-model="formData.hotelname"
              type="text"
              placeholder="Alpenglück"
              class="w-full border rounded-lg p-2"
            />
          </div>

          <!-- Slider -->
          <div class="form-group mb-4">
            <label for="numhotels">Number of Hotels</label>
            <input
              id="numhotels"
              type="range"
              v-model="syncSliderValue"
              min="1"
              max="100"
              class="w-full"
            />
            <p>{{ sliderValue }}</p>
          </div>

          <!-- Email -->
          <div class="form-group mb-4">
            <label for="email">Email*</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="E-Mail"
              class="w-full border rounded-lg p-2"
              required
            />
            <p
              v-if="errorMessages.includes('Please enter a valid email address.')"
              class="text-red-500 text-sm"
            >
              Please enter a valid email address.
            </p>
          </div>

          <!-- Buttons -->
          <div>
            <button
              v-if="downloadButtonState === 'default'"
              class="w-full bg-primary text-white p-2 rounded-lg hover:text-md hover:text-secondary"
            >
              Download
            </button>
            <button
              v-else-if="downloadButtonState === 'success'"
              class="w-full bg-primary text-white p-2 rounded-lg"
            >
              <font-awesome :icon="['fas', 'circle-check']" />
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

<style scoped lang="scss">
input[type="range"] {
  -webkit-appearance: none; /* Remove default styles for WebKit browsers */
  width: 100%;
  height: 8px; /* Match the track height */
  background: rgba(92, 255, 152, 0.4); /* Track secondary color */
  border-radius: 4px; /* Rounded track edges */
  outline: none; /* Remove focus outline */

  /* Track styles */
  &::-webkit-slider-runnable-track {
    background: rgba(92, 255, 152, 0.4); /* Track color */
    height: 8px; /* Same as track height */
    border-radius: 4px;
  }

  /* Thumb styles */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Remove default thumb styles */
    appearance: none;
    width: 16px; /* Thumb size */
    height: 16px; /* Thumb size */
    background: #5cff98; /* Solid secondary color */
    border-radius: 50%; /* Circular thumb */
    cursor: pointer;
    margin-top: -4px; /* Align thumb center with track center */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }

  /* Focused Thumb */
  &::-webkit-slider-thumb:focus {
    outline: 2px solid #3498db; /* Primary color for focus */
    outline-offset: 2px;
  }

  /* Firefox Track and Thumb */
  &::-moz-range-track {
    background: rgba(92, 255, 152, 0.4); /* Track color */
    height: 8px;
    border-radius: 4px;
  }

  &::-moz-range-thumb {
    width: 16px; /* Thumb size */
    height: 16px; /* Thumb size */
    background: #5cff98; /* Thumb color */
    border-radius: 50%; /* Circular thumb */
    cursor: pointer;
    margin-top: 0; /* Firefox does not need alignment correction */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1); /* Light gray */
  border-top: 4px solid #5cff98; /* Blue */
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


</style>
