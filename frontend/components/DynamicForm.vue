<script setup lang="ts">
import { formSchema } from '@/composables/formSchema';
import { ref, reactive } from 'vue';
import InputText from 'primevue/inputtext';

// Dynamic component map
const componentMap = {
  InputText,
};

// Reactive form data model
const formData = reactive(
  Object.keys(formSchema).reduce((acc, key) => {
    acc[key] = '';
    return acc;
  }, {} as Record<string, any>)
);

// Handle form submission
const submitForm = () => {
  console.log('Form Data:', formData);
  alert('Form submitted!');
};
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4 bg-lightgrey">
    <!-- Loop through schema -->
    <div v-for="(field, key) in formSchema" :key="key" class="mb-4">
      <label :for="key" class="block mb-2 font-semibold">{{ field.label }}</label>
      <component
        :is="componentMap[field.as]"
        v-model="formData[key]"
        :placeholder="field.placeholder"
        :id="key"
        unstyled
        class="w-full border-2 border-primary rounded-lg p-2"
      />
      
    </div>
    <ButtonBaseButton
        type="submit"
        bgClass="bg-primary" 
        textClass="text-white"
        sizeClass="md"
    > Download 
    </ButtonBaseButton>
  </form>
</template>

<style scoped>
/* Add any custom styles */
</style>
