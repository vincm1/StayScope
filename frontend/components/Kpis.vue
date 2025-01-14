<script lang="ts" setup>
    const kpis = [
    { value: "12%", label: "Guest Satisfaction", description: "Hotels using expentura experience an boost in guest satisfaction and positive reviews", icon: 'arrow-up' },
    { value: "21%", label: "Daily Spend", description: "Our customers report a 20% boost in daily guest spending when activities are booked.", icon: 'arrow-up' },
    { value: "5x", label: "Return on Investment", description: "Achieve over 20x return on your initial investment with expentura", icon: 'arrow-up' },
    { value: "30%", label: "Stay duration", description: "Guests are extending their stays when having personalized experiences", icon: 'arrow-up'},
    { value: "9%", label: "Total Revpar", description: "Boost your Total Revenue per Available Room by 8% with higher guest spending, extended stays, and improved satisfaction.", icon: 'arrow-up' },
    ];
</script>

<template>
  <section class="kpis bg-white px-4 py-10">
    <!-- Heading -->
    <div class="container-sm text-center mx-auto py-5" data-aos="fade-up">
      <h1 class="text-1xl text-grey text-playfair mb-5">OUR NUMBERS</h1>
      <div>
        <p class="text-primary text-2xl md:text-4xl font-bold my-3">
          Ready to unlock your hotel’s potential?
        </p>
        <p class="text-lg text-gray-600 mt-8 mx-10">
          expentura drives hotel growth with higher RevPAR, guest satisfaction, and direct bookings for lasting success.
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
    </div>

    <!-- KPI Cards -->
    <div class="mx-4 my-4 hover:text-primary">

      <!-- First Row -->
      <div class="grid grid-cols-1 lg:grid-cols-8 gap-2 my-3" data-aos="fade-right">
        <!-- Card 1: 80% Width -->
        <div class="lg:col-span-5 card-hover border-2 border-secondary bg-primary text-white p-6 rounded-xl shadow-lg transition-shadow">
          <!-- KPI Label -->
          <h1 class="text-md text-secondary text-playfair mb-5">
            {{ kpis[0].label.toUpperCase() }}
          </h1>

          <!-- Icon and KPI Value Container -->
          <div class="flex items-center space-x-4">
            <!-- Icon with Fully Rounded Background -->
            <div class="flex items-center justify-center bg-secondary w-16 h-16 rounded-full">
              <font-awesome
                :icon="['fas', kpis[0].icon]"
                class="text-4xl text-primary"
              />
            </div>
            <div>
              <h3 class="text-4xl font-bold">{{ kpis[0].value }}</h3>
            </div>
          </div>
          <p class="text-lg text-beige pt-8">
            {{ kpis[0].description }}
          </p>
        </div>

        <!-- Card 2: 20% Width -->
        <div class="lg:col-span-3 card-hover border-2 border-secondary bg-primary text-white p-6 rounded-xl shadow-lg transition-shadow">
          <!-- KPI Label -->
          <h1 class="text-md text-secondary text-playfair mb-5">
            {{ kpis[1].label.toUpperCase() }}
          </h1>

          <!-- Icon and KPI Value Container -->
          <div class="flex items-center space-x-4">
            <!-- Icon with Fully Rounded Background -->
            <div class="flex items-center justify-center bg-secondary w-16 h-16 rounded-full">
              <font-awesome
                :icon="['fas', kpis[1].icon]"
                class="text-4xl text-primary"
              />
            </div>
            <div>
              <h3 class="text-4xl font-bold">{{ kpis[1].value }}</h3>
            </div>
          </div>
          <p class="text-lg text-beige pt-8">
            {{ kpis[1].description }}
          </p>
        </div>
      </div>

      <!-- Second Row -->
      <div class="grid grid-cols-1 lg:grid-cols-10 gap-6" data-aos="fade-right">
        <!-- Card 3 -->
        <div class="card-hover lg:col-span-3 border-2 border-secondary bg-primary text-white p-6 rounded-lg shadow-lg transition-shadow">
          <!-- KPI Label -->
          <h1 class="text-md text-secondary text-playfair mb-5">
            {{ kpis[2].label.toUpperCase() }}
          </h1>

          <!-- Icon and KPI Value Container -->
          <div class="flex items-center space-x-4">
            <!-- Icon with Fully Rounded Background -->
            <div class="flex items-center justify-center bg-secondary w-16 h-16 rounded-full">
              <font-awesome
                :icon="['fas', kpis[2].icon]"
                class="text-4xl text-primary"
              />
            </div>
            <div>
              <h3 class="text-4xl font-bold">{{ kpis[2].value }}</h3>
            </div>
          </div>
          <p class="text-lg text-beige pt-8">
            {{ kpis[2].description }}
          </p>
        </div>
        <!-- Card 4 -->
        <div class="card-hover lg:col-span-3 border-2 border-secondary bg-primary text-white p-6 rounded-lg shadow-lg transition-shadow">
          <!-- KPI Label -->
          <h1 class="text-md text-secondary text-playfair mb-5">
            {{ kpis[3].label.toUpperCase() }}
          </h1>

          <!-- Icon and KPI Value Container -->
          <div class="flex items-center space-x-4">
            <!-- Icon with Fully Rounded Background -->
            <div class="flex items-center justify-center bg-secondary w-16 h-16 rounded-full">
              <font-awesome
                :icon="['fas', kpis[3].icon]"
                class="text-4xl text-primary"
              />
            </div>
            <div>
              <h3 class="text-4xl font-bold">{{ kpis[3].value }}</h3>
            </div>
          </div>
          <p class="text-lg text-beige pt-8">
            {{ kpis[3].description }}
          </p>
        </div>
        <!-- Card 5 -->
        <div class="card-hover lg:col-span-4 border-2 border-secondary bg-primary text-white p-6 rounded-lg shadow-lg transition-shadow">
          <!-- KPI Label -->
          <h1 class="text-md text-secondary text-playfair mb-5">
            {{ kpis[4].label.toUpperCase() }}
          </h1>

          <!-- Icon and KPI Value Container -->
          <div class="flex items-center space-x-4">
            <!-- Icon with Fully Rounded Background -->
            <div class="flex items-center justify-center bg-secondary w-16 h-16 rounded-full">
              <font-awesome
                :icon="['fas', kpis[4].icon]"
                class="text-4xl text-primary"
              />
            </div>
            <div>
              <h3 class="text-4xl font-bold">{{ kpis[4].value }}</h3>
            </div>
          </div>
          <p class="text-lg text-beige pt-8">
            {{ kpis[4].description }}
          </p>
        </div>
      </div>

      </div>
  </section>
</template>

<style lang="scss" scoped>
.card-hover {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

    /* Text color change */
    h3,
    .text-secondary,
    p {
      color: #102d21; /* Darker text color */
      font-weight: bold;;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(90deg, rgba(92, 255, 152, 1), rgba(16, 45, 33, 1));
    z-index: -1;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1);
  }
}

.border-secondary {
  background-image: linear-gradient(round, #5cff98, #102d21);
}

</style>

