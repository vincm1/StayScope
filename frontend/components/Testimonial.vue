<script setup lang="ts">
import { ref } from 'vue';

// Reactive state for the content
const selectedCompany = ref({
    header: 'Built for ambitious hoteliers',
    text: `"As a hotel owner, I need solutions that help me stand out, drive revenue, and deliver exceptional guest experiences. 
            This platform is built for hoteliers like me—offering the tools to streamline operations, connect with guests, 
            and unlock new revenue opportunities effortlessly. It’s exactly what I need to stay ahead in today’s competitive market."`,
    ceo: 'William Turner',
    position: 'Director at Radisson Scandics',
    picture: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
});

// Function to update the content dynamically
const updateTestimonialContent = (company: string) => {
  if (company === 'infinity') {
    selectedCompany.value = {
        header: 'Built for ambitious hoteliers',
        text: `"As a hotel owner, I need solutions that help me stand out, drive revenue, and deliver exceptional guest experiences. 
            This platform is built for hoteliers like me—offering the tools to streamline operations, connect with guests, 
            and unlock new revenue opportunities effortlessly. It’s exactly what I need to stay ahead in today’s competitive market."`,
        ceo: 'William Turner',
        position: 'Director at Radisson Scandics',
        picture: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
  } else if (company === 'mfinity') {
    selectedCompany.value = {
        header: 'Revenue Growth Through Our Game-Changing Experiences',
        text: `"With our activity marketplace, we’ve transformed the guest experience and unlocked new revenue streams.
         From spa bookings to adventure tours, our platform makes it easy to offer curated experiences that guests love—all while boosting revenue and simplifying operations. 
         It’s more than a tool; it’s a game-changer for ambitious hotels looking to stand out and grow."`,
        ceo: 'Michael Green',
        position: 'CRO at Mfinity',
        picture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };
  } else if (company === 'caudile') {
    selectedCompany.value = {
        header: 'Empowering Hoteliers to Thrive in a Competitive Market',
        text: `"As a hotel owner, my goal is to provide unforgettable guest experiences while maximizing revenue. This platform gives me the tools to achieve both - seamlessly 
            connecting my property with local activities, enhancing guest satisfaction, and unlocking new income streams. 
            It’s the smart, scalable solution every ambitious hotelier needs to succeed.As a hotel owner, 
            my goal is to provide unforgettable guest experiences while maximizing revenue. 
            This platform gives me the tools to achieve both—seamlessly connecting my property with local activities, enhancing guest satisfaction, and unlocking new income streams. 
            It’s the smart, scalable solution every ambitious hotelier needs to succeed."`,
        ceo: 'Sophia Clarke',
        position: 'Founder of Caudile',
        picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
  }
};

</script>

<template>
    <section class="bg-white">
      <div class="container mx-auto py-20">
        <div class="card mx-20 bg-beige p-10 rounded-lg shadow-lg">
          <h1 class="text-4xl text-primary font-bold ml-20">
            {{selectedCompany.header}}
          </h1>
          <div class="relative my-10 ml-20">
            <p class="text-lg text-primary flex items-start pr-10">
              {{ selectedCompany.text }}
              <font-awesome 
                :icon="['fas', 'quote-left']" 
                class="text-5xl text-primary bg-secondary p-5 rounded-full" 
              />
            </p>
          </div>
          <div class="flex mt-20 ml-20 items-center">
            <img
              class="w-12 h-12 rounded-full ring-2 ring-primary"
              :src="selectedCompany.picture"
              alt="Author Image"
            />
            <div class="ml-5 text-primary">
              <h2 class="text-lg font-semibold">{{ selectedCompany.ceo }}</h2>
              <p class="text-sm">{{ selectedCompany.position }}</p>
            </div>
            <!-- Move UL to the end of the flex container -->
            <ul class="flex gap-12 mr-20 ml-auto text-lg">
              <li><NuxtImg src="/images/clients/infinity.svg" @click="updateTestimonialContent('infinity')" class="h-5 cursor-pointer"></NuxtImg></li>
              <li><NuxtImg src="/images/clients/mfinity.svg" @click="updateTestimonialContent('mfinity')" class="h-5 cursor-pointer"></NuxtImg></li>
              <li><NuxtImg src="/images/clients/caudile.svg" @click="updateTestimonialContent('caudile')" class="h-5 cursor-pointer"></NuxtImg></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>

<style scoped lang="scss">
</style>