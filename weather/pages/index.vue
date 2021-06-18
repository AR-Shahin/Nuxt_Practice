<template>
  <div class="container mx-auto">
    <h1 class="text-center my-5 text-3xl font-semibold">Search Your Area</h1>
    <!-- Search Form -->
    <section class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
      <div class="flex">
        <div class="relative">
          <!-- form -->
          <div class="d-flex">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <input
              v-model="city"
              type="text"
              class="
                w-full
                py-3
                pl-10
                pr-4
                text-gray-700
                bg-white
                border border-gray-300
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
              placeholder="Search Your Area"
              @keyup="searchWeather"
            />
          </div>

          <!-- form -->
        </div>

        <button
          class="
            flex
            items-center
            px-2
            py-2
            font-medium
            tracking-wide
            text-white
            capitalize
            transition-colors
            duration-200
            transform
            bg-blue-600
            dark:bg-gray-800
            hover:bg-blue-500
            dark:hover:bg-gray-700
            focus:outline-none focus:bg-blue-500
            dark:focus:bg-gray-700
          "
          @click.prevent="searchWeather"
        >
          <svg
            class="w-5 h-5 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="mx-1">Search</span>
        </button>
      </div>
    </section>
    <!-- Result  -->
    <div
      v-if="cityData"
      class="
        mt-2
        max-w-3xl
        px-8
        py-4
        mx-auto
        bg-red-100
        rounded-lg
        shadow-md
        dark:bg-gray-800
      "
    >
      <div class="flex items-center justify-between">
        <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{
          formatTime(now)
        }}</span>
      </div>

      <div class="mt-2">
        <section class="">
          <div class="container px-6 py-8 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <span class="font-bold text-lg">Temperature of </span>
                <span class="text-red-600">{{ cityData.name }}</span>
                <img :src="icon" alt="" />
              </div>
              <div>
                <span class="font-normal text-2xl text-purple-800"
                  >Sky : {{ cityData.weather[0].main }}</span
                >
                <br />
                <span class="font-normal text-2xl text-indigo-800"
                  >Description : {{ cityData.weather[0].description }}</span
                >
                <br />
                <span class="font-normal text-2xl text-purple-800"
                  >Wind : {{ cityData.wind.speed }} kmh</span
                >
                <br />
                <span class="font-normal text-2xl text-purple-800"
                  >Country Code : {{ cityData.sys.country }}</span
                >
                <br />
                <span class="font-normal text-2xl text-purple-800"
                  >Wind : {{ cityData.wind.speed }} kmh</span
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isData: true,
      city: 'Dhaka',
    }
  },
  computed: {
    now() {
      return new Date()
    },
    cityData() {
      return this.$store.getters.getCityData
    },
    errorCity() {
      return this.$store.getters.error
    },
    icon() {
      return `http://openweathermap.org/img/wn/${this.cityData.weather[0].icon}@2x.png`
    },
  },
  created() {
    this.getWeather()
  },
  methods: {
    formatTime(time, format = 'DD MMM YYYY , hh:mm A') {
      return this.$dayjs(time).format(format)
    },
    getWeather() {
      this.$store.dispatch('getWeather', 'Dhaka')
    },
    searchWeather() {
      this.$store.commit('CLEAR_STORE')
      this.$store.dispatch('getWeather', this.city)
    },
  },
}
</script>

<style></style>
