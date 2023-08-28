<template>
  <div class="category">
    <!-- <button 
      v-for="(category, index) in categorys" 
      :key="index" 
      @click="activeTab.id" 
      :class="{
        'tabActive': activeTab === tab.id,
        'tab': tab === tab.id
      }"
    >
    </button> -->
    <h1>Category</h1>
    <div class="mt-4">
      <ul>
        <li class="flex justify-between w-full py-1"><span>Bar Soap</span><span>({{barsoad}})</span></li>
        <li class="flex justify-between w-full py-1"><span>Bath Bomb</span><span>({{barsoad}})</span></li>
        <li class="flex justify-between w-full py-1"><span>Handmade Soap</span><span>({{barsoad}})</span></li>
        <li class="flex justify-between w-full py-1"><span>Perfume</span><span>({{barsoad}})</span></li>
        <li class="flex justify-between w-full py-1"><span>Scented Candles</span><span>({{barsoad}})</span></li>
        <li class="flex justify-between w-full py-1"><span>Shave Soap</span><span>({{barsoad}})</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      barsoad: 0
    }
  },
  computed: {
    tab(){
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
h1{
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 1.2em;
  font-style: normal;
}
.tab {
  color: #858585;
  transition: .3s;
}
.tabActive {
  color: #DB572E;
  transition: .3s;
}
ul li {
  color: #858585;
}
</style>