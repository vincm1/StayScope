<script lang="ts" setup>
    const kpis = [
    { value: "95%", label: "Guest Satisfaction", description: "Our services consistently deliver outstanding results.", icon: 'spa' },
    { value: "200+", label: "Partners Worldwide", description: "Trusted by hotels globally to enhance guest experiences.", icon: 'spa' },
    { value: "3x", label: "Revenue Growth", description: "Drive significant revenue increases with our platform.", icon: 'spa' },
    { value: "7 days", label: "Setup Time", description: "Get started and see results in less than a week.", icon: 'spa'},
    { value: "7 days", label: "Setup Time", description: "Get started and see results in less than a week.", icon: 'spa' },
    ];
</script>

<template>
  <section class="bg-white px-6 py-16 mx-auto">
    <!-- Heading -->
    <div class="text-center mb-16">
      <h1 class="text-3xl font-semibold text-gray-800">
        We work with all businesses
      </h1>
      <p class="text-lg text-gray-600 mt-4">
        Switch to OpenPay for fewer headaches, more payments, increased revenue,
        reduced costs, and simplified tools. Users reported better business
        control and more time for growth.
      </p>
      <NuxtLink
        href="#"
        class="inline-block mt-6 text-primary relative font-medium text-lg group"
      >
        Try expentura for Free →
        <span
          class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
        ></span>
      </NuxtLink>
    </div>

    <!-- KPI Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-aos="fade-right">
      <div
        v-for="(kpi, index) in kpis"
        :key="index"
        class="flex flex-col items-center bg-primary text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <font-awesome
          :icon="['fas', kpi.icon]"
          class="text-4xl text-secondary opacity-80 mb-4"
        />
        <p >{{ kpi.value }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: #004e3f; /* Matches the button's text color from the image */
}
.bg-primary {
  background-color: #011e1b; /* Matches the dark green from the image */
}
</style>

