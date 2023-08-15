<template>
    <div class="tabs">
      <div class="flex space-x-4">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab.id"
          :class="{ 'bg-blue-500 text-white': activeTab === tab.id, 'bg-gray-100': activeTab !== tab.id }"
          class="px-4 py-2 rounded"
        >
            {{ tab.label }}
        </button>
      </div>

      <div class="mt-4">
        <div v-if="currentTab">
            <h3>{{ currentTab.type }}</h3>
            <ul>
                <li v-for="product in currentTab.products" :key="product.id">
                {{ product.name }}
                </li>
            </ul>
        </div>
      </div>
    </div>
</template>
  
<script>
    export default {
        props: {
            products: {
                type: Array,
                default: () => []
            },
            initialTab: {
                type: String,
                default: ''
            }
            },
            data() {
                return {
                    activeTab: this.initialTab
                };
            },
            computed: {
                tabs() {
                    return this.products.map(product => ({
                    id: product.type,
                    label: product.type
                    }));
                },
            currentTab() {
                return this.products.find(product => product.type === this.activeTab);
            }
        }
    };
</script>
  