<template>
  <div class="relative inline-block text-left">
    <button @click="isOpen = !isOpen" class="bg-gray-300 px-4 py-2 rounded-lg">
      Toggle Dropdown
    </button>
    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-10"></div>
    <div v-if="isOpen" class="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
