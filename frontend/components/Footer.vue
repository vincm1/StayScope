<template>
  <footer class="bg-primary text-gray-300 pt-10 px-10 border-t border-secondary">
    <div class="flex flex-col items-start lg:items-center justify-start lg:justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        <!-- Column 1: Company Info -->
        <div class="text-center lg:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">exptenura</h3>
          <p class="text-sm leading-relaxed">
            The all-in-one platform designed to help hotels seamlessly manage and promote in-destination
            activities and experiences, delivering the ultimate in personalized guest experiences.
          </p>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div class="text-center lg:text-left lg:ml-5">
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li><a href="#" class="hover:underline">Services</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <!-- Column 3: Social Media / Contact -->
        <div class="text-center lg:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul class="space-y-2">
            <li class="flex items-center justify-center lg:justify-start">
              <font-awesome :icon="['fas', 'map-marker-alt']" class="mr-2 text-primary" />
              <span>Auerfeldstr. 2, Munich, Germany</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start">
              <font-awesome :icon="['fas', 'envelope']" class="mr-2 text-white" />
              <a href="mailto:vincent@expentura.com" class="hover:underline">vincent@expentura.com</a>
            </li>
          </ul>
        </div>
        
        <!-- Column 4: Newsletter Signup -->
        <div class="text-center lg:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p class="text-sm leading-relaxed mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form class="space-x-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              class="bg-white text-gray-700 focus:text-primary focus:font-semibold 
                    mr-1 py-2 px-4 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2
                  focus:ring-secondary focus:outline-none transition duration-300" 
            />
            <button type="submit" class="bg-secondary text-white py-2 px-4 hover:bg-secondary-dark rounded-lg">
              <font-awesome :icon="['fas', 'paper-plane']" class="pt-1 text-primary" />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="border-t border-grey pt-5 pb-2 mt-5">
      <div class="flex flex-col items-center justify-center">
        <p class="text-xs text-center">
          &copy; {{ new Date().getFullYear() }} expentura a PyMinds UG (haftungsbeschraenkt)
        </p>
        <p class="text-xs text-center">All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>