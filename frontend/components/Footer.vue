<template>
    <footer class="bg-primary text-gray-300 py-10 px-10 border-t">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1: Company Info -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">StayScope</h3>
          <p class="text-sm leading-relaxed">
            With our StayScope, 
            you’re not just providing rooms – you’re creating a gateway to exploration, relaxation, 
            and unforgettable moments. Partner with us to redefine hospitality and unlock the potential of 
            the Experience Economy.
          </p>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div class="ml-4">
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
              <font-awesome :icon="['fas', 'envelope']" class="mr-2 text-primary" />
              <a href="mailto:info@stayscope.com" class="hover:underline">info@stayscope.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  