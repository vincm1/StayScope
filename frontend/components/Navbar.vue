<script setup lang="ts">
const threshhold = 100
const {x, y, isScrolled} = useScroll(threshhold)
</script>

<template>
  <header class="container-md font-inter flex items-center justify-center my-10 mx-5">
    <nav 
      :class="['fixed flex items-center justify-between rounded-full shadow-md transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-primary w-full max-w-5xl text-white px-4 py-2 transition' : 'bg-white w-full max-w-4xl px-4 py-2']">
      <!-- Logo Section -->
      <div class="nav-logo flex items-center">
        <NuxtLink to="/">
          <img 
            :src="isScrolled ? '/images/logo-light.svg' : '/images/logo.svg'" 
            alt="logo" 
          />
        </NuxtLink>
      </div>

      <!-- Links Section -->
      <div class="nav-links flex space-x-6">
        <NuxtLink to="/listings" class="hover:underline">Listings</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </div>

      <!-- Button Section --> 
      <div class="nav-buttons flex space-x-4">
        <ButtonBaseButton
          :bgClass="isScrolled ? 'bg-secondary' : 'bg-primary'"
          :textClass="isScrolled ? 'text-primary' : 'text-secondary'"
          sizeClass="md"
        >Book Demo
        </ButtonBaseButton>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>
