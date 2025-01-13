<template>
    <footer class="bg-primary text-gray-300 py-10 px-10 border-t">
      <div class="container space-between grid grid-cols-1 md:grid-cols-4">
        <!-- Column 1: Company Info -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">exptenura</h3>
          <p class="text-sm leading-relaxed">
            The all-in-one platform designed to help hotels seamlessly manage and promote in-destination
            activities and experiences, delivering the ultimate in personalized guest experiences.
          </p>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div class="">
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li><a href="#" class="hover:underline">Services</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <!-- Column 3: Social Media / Contact -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <font-awesome :icon="['fas', 'map-marker-alt']" class="mr-2 text-primary" />
              <span>Musterstraße 4, Munich, Germany</span>
            </li>
            <li class="flex items-center">
              <font-awesome :icon="['fas', 'phone']" class="mr-2 text-primary" />
              <a href="tel:+123456789" class="hover:underline">+1 (234) 567-890</a>
            </li>
            <li class="flex items-center">
              <font-awesome :icon="['fas', 'envelope']" class="mr-2 text-white" />
              <a href="mailto:info@expentura.com" class="hover:underline">info@expentura.com</a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Subscribe our Newsletter</h3>
          <form class="inline space-x-2 flex-col">
            <input type="email" placeholder="Your Email" class="bg-white text-gray-300 py-2 px-3 rounded-xl mb-2" />
            <button type="submit" class="bg-secondary text-primary text-bold py-2 rounded-xl"><font-awesome :icon="['fas', 'envelope']" class="mx-4 text-primary" /></button>  
          </form>
        </div>

      </div>
      <div class="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {{ new Date().getFullYear() }} expentura - PyMinds UG (haftungsbeschränkt). All rights reserved.
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  