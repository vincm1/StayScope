<script lang="ts" setup>
</script>

<template>
  <section class="bg-primary px-20 py-20">
    <!-- Heading with Decorative Lines -->
    <div class="relative text-center mb-8">
      <div class="core-text text-4xl text-white font-semibold inline-block relative">
        <span>Bootstrapped by a <span class="text-secondary">small team with a big passion</span> <br> for SaaS hospitality businesses</span>
        <!-- Left Line -->
        <span class="absolute left-0 top-1/2 w-10 h-0.5 bg-secondary transform -translate-y-1/2"></span>
        <!-- Right Line -->
        <span class="absolute right-0 top-1/2 w-10 h-0.5 bg-secondary transform -translate-y-1/2"></span>
      </div>
    </div>

    <!-- Body Text -->
    <div class="text-lg text-white max-w-3xl mx-auto leading-relaxed mb-8">
        Today’s guests want more than a place to stay—they demand experiences that leave lasting memories. 
        But for many hotels, disconnected systems and scattered data make it nearly impossible to deliver. 
        <br><br>
        Without a seamless way to personalize stays and curate unique moments, opportunities to delight guests and drive revenue slip away. 
        It’s time to break free from these limitations and transform every stay into an unforgettable experience.
        <br><br>
        With StayScope, you keep more of what you earn. 
        We succeed only when you do, focusing on your growth first. 
        It’s time to stop paying for ineffective tools.
    </div>

    <!-- Author Section -->
    <div class="flex items-center justify-center py-3">
      <img
        class="w-12 h-12 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Author Image"
      />
      <div class="ml-4 text-white">
        <h2 class="text-lg font-semibold">Lance Co Ting Keh</h2>
        <p class="text-sm">Co-Founder & CEO</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.leading-relaxed {
  line-height: 1.75; /* Improve readability */
}
.core-text {
  position: relative;
  display: inline-block;
  text-align: center;
}
.core-text::before,
.core-text::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 80px; /* Length of the line */
  height: 1px; /* Thickness of the line */
  background: #23d18c; /* Line color */
  transform: translateY(-50%);
}
.core-text::before {
  left: -100px; /* Adjust spacing from text */
}
.core-text::after {
  right: -100px; /* Adjust spacing from text */
}
</style>
