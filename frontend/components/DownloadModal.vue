<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const showModal = ref(false);
const email = ref('');
const hotelName = ref('');
const errorMessages = ref<string[]>([]);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const validateForm = (): boolean => {
  errorMessages.value = [];
  if (email.value.trim() === '') {
    errorMessages.value.push('Email is required.');
  }
  if (hotelName.value.trim() === '') {
    errorMessages.value.push('Hotel name is required.');
  }
  return errorMessages.value.length === 0;
};

const handleSubmit = () => {
  if (validateForm()) {
    // Trigger the download
    const link = document.createElement('a');
    link.href = '/downloads/expentura_short_de.pdf';
    link.download = 'expentura_short_de.pdf';
    link.click();
    closeModal();
  }
};

defineExpose({ openModal });
</script>

<template>
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-xl font-bold mb-4">Download Whitepaper</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div class="mb-4">
          <label for="hotelName" class="block text-sm font-medium text-gray-700">Hotel Name</label>
          <input
            id="hotelName"
            v-model="hotelName"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div v-if="errorMessages.length" class="mb-4 text-red-500">
          <ul>
            <li v-for="error in errorMessages" :key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="flex justify-end">
          <button type="button" @click="closeModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">Cancel</button>
          <button type="submit" class="bg-primary text-white px-4 py-2 rounded-md">Download</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>