<script setup lang="ts">
import { ref } from 'vue';

// Define the structure of a tab
interface Tab {
  title: string;
  content: string;
  value: string;
  image?: string;
  icon?: string;
}
// Reactive state to handle the active button
const activeButton = ref<string>('Inhouse'); // Default is 'Inhouse'

// Function to dynamically change the active button
const changeActiveButton = (button: string) => {
  activeButton.value = button; // Set the active button
};

// Reactive variable to track the currently opened accordion tab
const activeTab = ref<string | "0">("0"); // Tracks the active tab by index

console.log(activeTab.value);

const inhouseTabs = {
  tabs: [
    {
      title: 'Spa & Wellness',
      content: 'Digitize your spa and fitness facilities, so you can stop relying on outdated PDF files and in-person scheduling.',
      value: '0',
      image: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e',
      icon: 'spa'
    },
    {
      title: 'Dining & Drinks',
      content: 'Connect your restaurant, bar, and culinary activities, so staff don’t have to call a dedicated desk for every booking.',
      value: '1',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      icon: 'utensils',
    },
    {
      title: 'Fitness',
      content: 'Connect your gym, spa, and fitness activities, so staff don’t need to rely on a central desk for every reservation or scheduling update.',
      value: '2',
      image: 'https://images.unsplash.com/photo-1579758629934-5171c3d77ad3',
      icon: 'heart',
    },
  ] as Tab[], // Explicitly type the tabs array
};

const externalTabs = {
  tabs: [
    {
      title: 'Beach Tours',
      content: 'Explore the coastline.',
      value: '0',
      image: 'https://images.unsplash.com/photo-1565370550977-e67b69b31f53',
      icon: 'umbrella-beach',
    },
    {
      title: 'City Walks',
      content: 'Discover urban gems.',
      value: '1',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      icon: 'city',
    },
    {
      title: 'Transfers',
      content: 'Transfers your guests either from or to the airport or every other destination.',
      value: '2',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
    {
      title: 'Mountain Adventures',
      content: 'Trek through the wilderness.',
      value: '3',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
  ] as Tab[], // Explicitly type the tabs array
};
</script>

<template>
    <section class="activities bg-white px-10 py-20">
      <h2 class="text-center text-1xl text-grey mb-5">Activities & Experiences</h2>
      <h1 class="text-4xl text-center text-primary font-bold">
        The central Hub for all your experiences
      </h1>
      <!-- Subheading -->
      <p class="text-center text-lg lg:text-xl text-primary my-3 leading-relaxed">
        List all your experience whether internal such as Spa and treatments or external activities from coportating OTAs and local partners.
      </p>  
      <div class="container mx-auto text-primary">
        <!-- Buttons to switch between tabs -->
        <div class="flex justify-center my-8 items-center gap-2">
          <ButtonBaseButton
            buttonText="Inhouse"
            :bgClass="activeButton === 'Inhouse' ? 'bg-primary' : 'bg-transparent'"
            :textClass="activeButton === 'Inhouse' ? 'text-white' : 'text-primary'"
            borderClass="border border-primary"
            :hoverEnabled="false"
            @click="changeActiveButton('Inhouse')"
          />
          <ButtonBaseButton
            buttonText="External"
            :bgClass="activeButton === 'External' ? 'bg-primary' : 'bg-transparent'"
            :textClass="activeButton === 'External' ? 'text-white' : 'text-primary'"
            borderClass="border border-primary"
            :hoverEnabled="false"
            @click="changeActiveButton('External')"
          />
        </div>
    
        <!-- Inhouse Tabs -->
        <div v-if="activeButton === 'Inhouse'">
          <div class="grid md:grid-cols-2 gap-8 px-6 border border-lightgrey rounded-lg shadow-lg mt-5 py-10">
            <!-- Accordion Section -->
            <div class="col-1 card">
              <Accordion
                :value="activeTab"
                unstyled
              >
                <AccordionPanel
                  v-for="(tab, index) in inhouseTabs.tabs"
                  :key="tab.title"
                  :value="index"
                  @click="activeTab = index"
                  unstyled
                  pt:root="text-md p-4 border-b border-primary py-10 mx-10"
                >
                  <AccordionHeader
                    icon="pi pi-arrow-down"
                    unstyled
                    class="flex gap-5 justify-center text-3xl items-center mb-8 pl-3"
                  >
                    <font-awesome :icon="['fas', tab.icon]" class="text-md" />
                    {{ tab.title }}
                  </AccordionHeader>
                  <AccordionContent 
                      unstyled
                      class="pl-5"
                  >
                    {{ tab.content }}
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </div>
    
            <!-- Image Section -->
            <div class="image-container">
              <NuxtImg
                v-if="inhouseTabs.tabs[activeTab]?.image"
                :src="inhouseTabs.tabs[activeTab]?.image"
                :alt="inhouseTabs.tabs[activeTab]?.title"
                class="rounded-lg shadow-md text-center align-center"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
    
        <!-- External Tabs -->
        <div v-else-if="activeButton === 'External'">
          <div class="grid md:grid-cols-2 gap-8 px-6 border border-grey rounded-lg shadow-md mt-5 py-10">
            <!-- Accordion Section -->
            <div class="col-1 card">
              <Accordion
                :value="activeTab"
                unstyled
              >
                <AccordionPanel
                  v-for="(tab, index) in externalTabs.tabs"
                  :key="tab.title"
                  :value="index"
                  @click="activeTab = index"
                  unstyled
                  class="my-5 pb-4 border-b border-primary"
                >
                  <AccordionHeader
                    @click="activeTab = tab.value"
                    unstyled
                    pt:icon="text-white text-xl"
                    class="flex gap-5 justify-center text-3xl items-center mb-8"
                    icon="pi pi-check"
                  >
                    <font-awesome :icon="['fas', tab.icon]" class="text-md" />
                    {{ tab.title }}
                  </AccordionHeader>
                  <AccordionContent 
                    unstyled
                    pt:icon="text-white text-xl"
                  >
                    {{ tab.content }}
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </div>
    
            <!-- Image Section -->
            <div class="image-container">
              <NuxtImg
                v-if="externalTabs.tabs[activeTab]?.image"
                :src="externalTabs.tabs[activeTab]?.image"
                :alt="externalTabs.tabs[activeTab]?.title"
                class="rounded-lg shadow-md"
                width="600"
                height="400"
              />
            </div>
          </div>
      </div>
      </div>
    </section>
</template>

<style scoped lang="scss">
.image-container {
  display: flex;
  justify-content: center; /* Align horizontally */
  align-items: center; /* Align vertically */
  height: 100%; /* Ensure the container takes full height */
}

.image-container img {
  max-height: 400px; /* Set the maximum height for images */
  width: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image scales properly without stretching */
  border-radius: 8px; /* Optional: Add rounded corners for aesthetics */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for style */
}

</style>