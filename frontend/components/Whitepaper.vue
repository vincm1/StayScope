<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollThreshold = 1000; // Define the scroll level in pixels
const showModal = ref(false); // Control modal visibility
const hasClosedModal = ref(false); // Track if the modal was closed

const sliderValue = ref(10);

const pwemail = process.env.EMAIL_PASSWORD;
console.log(pwemail);

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

const syncSliderValue = computed({
  get: () => sliderValue.value,
  set: (val) => {
    sliderValue.value = val;
    formData.value.numhotels = val; // Sync the form data
  },
});

// Set up and clean up the scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const formData = ref({
  firstname: '',
  lastname: '',
  hotelname: '',
  numhotels: sliderValue.value, // Ensure sliderValue is defined or passed correctly
  email: '',
});

const errors = ref(false);
const success = ref(false); // Corrected typo in "success"
const waiting = ref(false);

async function handleSubmit() {
  waiting.value = true;

  try {
    await $fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      body: formData.value,
    });
    errors.value = false;
    success.value = true;
    waiting.value = false;

    // Reset the form
    formData.value = {
      firstname: '',
      lastname: '',
      hotelname: '',
      numhotels: sliderValue.value,
      email: '',
    };
  } catch (error) {
    errors.value = true;
    success.value = false;
    waiting.value = false;

    console.error('Submission error:', error);
  }
}
</script>

<template>
  <!-- Modal -->
  <div
  v-if="showModal"
  class="fixed inset-0 border border-primary bg-black bg-opacity-50 flex items-center justify-center z-50"
>
  <div
    class="bg-beige border-2 border-primary rounded-xl shadow-lg max-h-[90vh] max-w-2xl w-full p-6 relative overflow-y-auto"
  >
    <!-- Modal Content -->
    <button
      @click="closeModal"
      class="absolute top-4 right-4 text-white bg-primary hover:text-secondary hover:cursor-auto rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
    >
      X
    </button>

    <div class="text-center mb-7">
      <h1 class="text-grey">Download our Report</h1>
      <h2 class="text-primary text-2xl mt-2">
        Get the latest insights about the <br /> Experience Economy
      </h2>
    </div>

    <!-- Modal Body -->
    <div class="grid grid-cols-2 gap-6">
      <div class="flex col-span-1">
        <img
          src="/images/kite_whitepaper.jpg"
          alt="Kite Whitepaper"
          class="rounded h-auto w-auto items-center justify-center"
        />
      </div>
      <div class="col-span-1">
        <!-- Form goes here -->
        <form @submit.prevent="handleSubmit" action="POST" class="">
                <label for="firstname" class="mt-2">Firstname</label>
                <InputText unstyled="true" placeholder="Max" 
                    class="w-full py-2 pl-2 mb-3 border-2 border-primary rounded-lg focus:border focus:border-secondary cursor-pointer" 
                    v-model="formData.firstname"
                    required
                />
                <label for="lastname">Lastname</label>
                <InputText unstyled="true" placeholder="Mustermann" 
                    class="w-full py-2 pl-2 mb-3 border-2 border-primary rounded-lg cursor-pointer" 
                    v-model="formData.lastname"
                    required
                />
                <label for="hotelname">Hotel- / Company name</label>
                <InputText unstyled="true" placeholder="Alpenglück" 
                    class="w-full py-2 pl-2 mb-3 border-2 border-primary rounded-lg cursor-pointer" 
                    v-model="formData.hotelname"    
                />

                <label for="default-range" class="text-primary">Number of hotels in group</label>
                <p class="mb-2 font-semibold text-xl">{{  sliderValue }}</p>
                <input 
                  id="default-range" 
                  type="range" 
                  min="1"
                  max="100"
                  step="1"
                  v-model="sliderValue"
                  class="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer mb-3"
                />

                <label for="email">Email</label>
                <InputText unstyled="true" placeholder="E-Mail" 
                    class="w-full p-2 mb-4 border-2 border-primary rounded-lg cursor-pointer" 
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
                    @="handleSubmit"
                >
                    Download
                </ButtonBaseButton>
        </form>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
input[type="range"]::-webkit-slider-thumb {
  @apply appearance-none w-5 h-5 bg-secondary rounded-full shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary;
}

input[type="range"]::-moz-range-thumb {
  @apply appearance-none w-5 h-5 bg-secondary rounded-full shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary;
}
</style>
