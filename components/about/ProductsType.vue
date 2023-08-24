<template>
    <div class="container">
      <el-row>
        <el-col
        
        :ms="24"
          :lg="8"
        >
          <button
            v-for="(table, index) in tabs"
            :key="index"
            @click="activeTab = tab.id"
            :class="{'tabActive' : activeTab === table.id, 'bg-gray-100': activeTab !== tab.id }"
          >
          </button>
        </el-col>
        <el-col
          :sm="24"
          :lg="16"
        >
          <div v-if="currentTab">
            <div 
              v-for="productType in currentTab.productType"
              :key="productType.id"
              class="w-full"
            >
              <img :src="productType.image" alt="" class="w-full">
            </div>
          </div>
        </el-col>
      </el-row>
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
  data(){
    return{
      activeTab: this.initialTab,
    }
  },
  computed: {
    tabs(){
      return this.products.map(product => ({
        id: product.type,
        label: product.type
      }));
      
    },
    currentTab(){
      return this.products.find(
        product => product.type === this.activeTab
      );
    }
  }
}
</script>
<style scoped>

</style>