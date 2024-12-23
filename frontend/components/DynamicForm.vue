<script setup lang="ts">
import { formSchema } from '@/composables/formSchema';
import { ref, reactive, computed } from 'vue';
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

// Dynamic styling based on formSchema
const dynamicStyles = computed(() =>
  Object.keys(formSchema).reduce((styles, key) => {
    styles[key] = {
      borderColor: formData[key] ? 'green' : 'red', // Green if field is filled, red if empty
      backgroundColor: formSchema[key].required && !formData[key] ? '#fff6f6' : 'white', // Highlight required fields if empty
    };
    return styles;
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
        :style="dynamicStyles[key]"
        class="w-full border-2 border-primary rounded-lg p-2"
      />
    </div>
    <ButtonBaseButton
      type="submit"
      bgClass="bg-primary" 
      textClass="text-white"
      sizeClass="md"
    > 
      Download 
    </ButtonBaseButton>
  </form>
</template>

<style scoped>
/* Add any custom styles */
.border-primary {
  border-color: #007bff; /* Example primary color */
}

.bg-lightgrey {
  background-color: #f7f7f7; /* Example light grey background */
}
</style>

