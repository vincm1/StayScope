<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <header class="flex justify-center mt-5 mb-10">
    <nav class="fixed flex justify-between mx-5 px-4 py-2 rounded-full gap-20 shadow-md min-w-[95%] sm:min-w-[95%] md:min-w-[50%]"
    :class="{ 'bg-primary text-white lg:w-2/3 transition-all z-50 duration-300 ease-in-out': isScrolled, 'bg-white text-primary w-auto': !isScrolled }"
    >
      <NuxtLink to="/">
        <!-- <img 
          class="justify-start pt-1"
          :src="isScrolled ? '/images/logo-light.svg':'/images/logo.svg'"
          alt="logo" 
        /> -->
        <p class="justify-start text-2xl" id="navbrand">expentura</p>
      </NuxtLink>

      <div class="hidden sm:block nav-links space-x-6 align-center pt-1">
        <NuxtLink to="#howitworks" class="hover:underline">How it works</NuxtLink>
        <NuxtLink to="#about" class="hover:underline">About</NuxtLink>
        <NuxtLink to="/downloads/short_intro_de" class="hover:underline">Whitepaper</NuxtLink>
      </div>

      <NuxtLink
         to="#book-demo"
         class="hidden md:block"
        >
        <ButtonBaseButton
            :bgClass="isScrolled ? 'bg-secondary' : 'bg-primary'"
            :textClass="isScrolled ? 'text-primary' : 'text-secondary'"
            class="font-semibold"
          >Book Demo
        </ButtonBaseButton>
      </NuxtLink>
      
      <div class="md:hidden flex ml-10">
        <button 
          @click="toggleSidebar" class="p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"  
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>

      <aside
          :class="{
            'w-64 block': isSidebarOpen,
            'w-0 hidden': !isSidebarOpen,
          }"
          class="bg-primary fixed top-0 right-0 h-full z-50 transition-all ease-in-out duration-300 overflow-hidden"
        >
        <div>
          <button @click="toggleSidebar" class="p-2 text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"  
              fill="none" 
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="flex text-white flex-col items-center justify-center space-y-6 py-10 mx-5">
          <NuxtLink to="#howitworks" class="hover:underline" @click="toggleSidebar">How it Works</NuxtLink>
          <NuxtLink to="#about" class="hover:underline" @click="toggleSidebar">About</NuxtLink>
          <NuxtLink to="/downloads/short_intro_de" class="hover:underline">Whitepaper</NuxtLink>
          <NuxtLink to="#book-demo">
            <ButtonBaseButton
              bgClass="bg-secondary"
              textClass="text-primary"
            >Book Demo
            </ButtonBaseButton>
          </NuxtLink>
        </div>
          
      </aside>
    </nav>
  </header>

</template>

<style lang="scss" scoped>
#navbrand {
  font-family: 'Alegrya', sans-serif;
  font-weight: 600;
}
</style>

