<script setup lang="ts">
</script>

<template>
  <section class="mx-auto">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 py-10">
      <!-- Left side: Picture and Text -->
      <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <img src="" alt="Description of image" class="mb-4 w-full max-w-sm md:max-w-md">
        <h2 class="text-2xl font-bold mb-2">Your Title Here</h2>
        <p class="text-lg">Your descriptive text goes here. Provide some information about the whitepaper or any other relevant details.</p>
      </div>
      
      <!-- Right side: Download Form -->
      <div class="flex justify-center items-center">
        <DynamicForm />
      </div>
    </div>
    <Cta />
  </section>
</template>

<style scoped lang="scss">
/* Add your scoped styles here */
</style>
