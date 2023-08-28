<template>
  <header>
    <div class="container mx-auto">
      <nav class="flex items-center justify-between py-1" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="logo w-auto" src="../../public/assets/images/logo.png" alt="">
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
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink to="/homepage" class="text-sm font-semibold leading-6 text-gray-900">Home</NuxtLink>
          <NuxtLink to="/about" class="text-sm font-semibold leading-6 text-gray-900">About</NuxtLink>
          <NuxtLink to="/shop" class="text-sm font-semibold leading-6 text-gray-900">Shop</NuxtLink>
          <NuxtLink to="/product" class="text-sm font-semibold leading-6 text-gray-900">Product</NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
  export default {
    props: {
      
    }
  }
</script>
<style scoped>
  .logo{
    width: 170px;
  }
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #ffffff;
  }
</style>