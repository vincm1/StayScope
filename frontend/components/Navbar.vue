<script setup lang="ts">
</script>

<template>
  <header class="container-md font-inter flex items-center justify-center mt-5 mb-10 mx-5">
    <nav class="flex items-center justify-between bg-white w-full max-w-4xl px-4 py-2 rounded-full shadow-md">
      <!-- Logo Section -->
      <div class="nav-logo flex items-center">
        <NuxtLink to="/" class="text-xl font-bold text-primary">
          <img src="/images/logo.svg" alt="logo" class="dark:hidden w-[50px]" />
          <img
            src="/images/logo-light.svg"
            alt="logo dark version"
            class="hidden dark:inline-block w-[50px]"
          />
        </NuxtLink>
      </div>

      <!-- Links Section -->
      <div class="nav-links flex space-x-6">
        <NuxtLink to="/listings" class="text-primary hover:underline">Listings</NuxtLink>
        <NuxtLink to="/about" class="text-primary hover:underline">About</NuxtLink>
        <NuxtLink to="/contact" class="text-primary hover:underline">Contact</NuxtLink>
      </div>

      <!-- Button Section -->
      <div class="nav-buttons flex space-x-4">
        <NuxtLink to="/register">
          <ButtonPrimary>Book Demo</ButtonPrimary>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>
