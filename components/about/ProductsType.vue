<template>
    <div class="container mx-auto py-20"> 
      <div class="pb-20">
        <el-row>
          <el-col
            :ms="24"
            :lg="8"
          >
            <div class="h-full flex flex-col items-start justify-center">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                @click="activeTab = tab.id"
                class="my-2 pl-4"
                :class="{
                  'tabActive' : activeTab === tab.id, 
                  'tab': activeTab !== tab.id 
                }"
              >
                {{ tab.label }}
                <div class="line"></div>
              </button>
            </div>
          </el-col>
          <el-col
            :sm="24"
            :lg="16"
          >
            <div v-if="currentTab">
              <div 
                v-for="product in currentTab.products"
                :key="product.id"
                class="w-full"
              >
                <img :src="product.image" alt="" class="w-full">
              </div>
            </div>
          </el-col>
        </el-row>
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
.tab{
  font-size: 26px;
  line-height: 40px;
  font-weight: 400;
  font-style: italic;
  color: #B5B5B5;
  transition: .3s;
}
.tab .line{
  width: 0;
  transition: .3s;
}
.tabActive{
  font-size: 36px;
  line-height: 40px;
  font-weight: 400;
  font-style: italic;
  color: #222222;
  transition: .3s;
  position: relative;
}
.tabActive .line{
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 15px;
  width: 80%;
  background-color: #FCF0EC;
  z-index: -1;
  transition: .4s;
}
img{
  transition: .4s;
}
</style>