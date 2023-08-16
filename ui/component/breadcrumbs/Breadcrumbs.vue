<template>
    <nav class="flex items-center space-x-2 text-gray-500">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.url"
        class="hover:text-gray-700"
      >
        {{ item.label }}
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling specific to the breadcrumbs component */
  </style>
  