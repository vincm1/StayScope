<template>
  <button class="btn-hero flex items-center justify-center bg-secondary text-primary text-md px-5 py-2 rounded-full shadow-sm hover:bg-primary hover:border-2 hover:text-secondary hover:border-secondary transition-all duration-300 relative overflow-hidden">
    <span class="text transition-transform duration-300"><slot>{{buttonText}}</slot></span>
    <font-awesome
      class="arrow-icon bg-primary text-secondary ml-2 p-3 rounded-full transition-transform duration-300"
      :icon="['fas', 'arrow-right']"
    />
  </button>
</template>

<style lang="scss" scoped>
/* Button container */
.btn-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and text */
  font-weight: 600; /* Make text bold */
  position: relative; /* Allow relative positioning for animations */
  overflow: hidden; /* Prevent content from overflowing */
  transition: all 0.3s ease; /* Smooth hover effects */
}

/* Slide the button's text */
.btn-hero:hover .text {
  transform: translateX(30px); /* Slide the text to the right */
}

/* Arrow icon slide */
.btn-hero:hover .arrow-icon {
  transform: translateX(-120px); /* Slide the icon to the left */
}

/* Default transition styles */
.text,
.arrow-icon {
  transition: transform 0.3s ease; /* Smooth animations for both icon and text */
}
</style>
