<script setup lang="ts">
const preloadImages = async (srcArray: string[]) => {
  const promises = srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = () => reject(src);
    });
  });

  try {
    await Promise.all(promises);
    console.log("All images preloaded successfully");
  } catch (err) {
    console.error("Error preloading images:", err);
  }
};
onMounted(async () => {
  await preloadImages([
    '/images/productprev/futura_landing_(desktop).svg',
    '/images/productprev/expentura_experience_checkout_(desktop).svg',
  ]);
});
</script>

<template>
  <div class="relative flex justify-center items-center w-full h-auto shadow-lg my-5 mx-auto">
    <img 
      src="/images/productprev/futura_landing_(desktop).svg" 
      class="rounded-lg w-1/2 relative z-0 -mr-6" 
      alt="eventura Product Preview" 
    />
    <img 
      src="/images/productprev/expentura_experience_checkout_(desktop).svg" 
      class="rounded-lg w-1/2 relative z-1 -ml-6" 
      alt="eventura Checkout Preview" 
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
