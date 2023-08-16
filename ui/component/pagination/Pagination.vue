<template>
    <nav class="flex items-center justify-center mt-4">
      <ul class="flex space-x-2">
        <li>
          <button
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            class="px-2 py-1 text-gray-600 hover:text-gray-800"
          >
            Previous
          </button>
        </li>
        <li v-for="page in totalPages" :key="page">
          <button
            @click="changePage(page)"
            :class="page === currentPage ? 'px-3 py-1 bg-blue-500 text-white' : 'px-3 py-1 text-gray-600 hover:text-gray-800'"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            class="px-2 py-1 text-gray-600 hover:text-gray-800"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(newPage) {
        this.$emit('page-change', newPage);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling specific to the pagination component */
  </style>
  