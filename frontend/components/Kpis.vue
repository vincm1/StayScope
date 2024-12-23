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
    <section class="bg-white py-20">
      <h2 class="text-center text-1xl text-grey text-playfair">Numbers</h2>
      <h1 class="text-4xl text-center text-primary font-bold mt-3">
        Our results say it all
      </h1>
      <!-- Subheading -->
      <p class="text-center text-lg lg:text-xl text-primary leading-relaxed my-5">
        Proven performance, to take the guesswork out of your experience offer.
      </p>
      <!-- KPI Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-20 px-20">
        <div
          v-for="(kpi, index) in kpis"
          :key="index"
          class="text-center " 
        >
            <div class="kpicard bg-primary rounded-lg shadow-lg py-10 px-4 hover:border-secondary hover:border-4 hover:shadow-2xl hover:cursor-auto duration-100" >
                <font-awesome
                    :icon="['fas', kpi.icon ]"
                    class="text-4xl text-secondary pb-3"
                />
                <h3 class="text-4xl font-bold text-secondary pb-2">{{ kpi.value }}</h3>
                <p class="text-lg font-medium text-white">{{ kpi.label }}</p>
                <p class="text-sm text-white mt-2">{{ kpi.description }}</p>
            </div>
        </div>
      </div>
      <div class="flex justify-center gap-4">
        <NuxtLink
        to="#book-demo"
        class="items-center justify-center flex py-20"
        >
            <ButtonHero
            bgClass="bg-primary"
            />
        </NuxtLink>
        <NuxtLink
            to="/downloads/whitepaper"
            class="items-center justify-center flex py-20"
        >
            <ButtonBaseButton
                sizeClass="lg"
                bgClass="bg-none"
                textClass="text-primary"
                borderClass="border border-primary"
            >
                Whitepaper
            </ButtonBaseButton>
        </NuxtLink>
      </div>
    </section>
  </template>
  

<style scoped lang="scss">

</style>
