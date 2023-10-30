<script setup lang="ts">
  // import { useNav } from "../../composables/useNav"

  const route = useRoute();

  const { navigation, routeNav } = useNav(); 
</script>
<template>
  <header class="bg-white">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between py-1" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="logo w-[170px]" src="../../public/assets/images/logo.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="nav">
          <ul class="hidden lg:flex lg:gap-x-12">
            <NuxtLink
              class="text-sm font-semibold leading-6 text-gray-900"
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :aria-current="item.current ? 'page' : undefined"
              @click="routeNav(item.href)"
            >
              {{  item.name }}
            </NuxtLink>
          </ul>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
</style>