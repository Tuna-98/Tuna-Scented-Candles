<template>
  <div class="shop py-20">
    <div class="container mx-auto">
      <el-row>
        <el-col :sm="24" :lg="6">
          <div class="w-full pl-4 pr-8">
            <ShopLeft></ShopLeft>
          </div>
        </el-col>
        <el-col :sm="24" :lg="18">
          <ProductList></ProductList>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ProductList from '../../components/shops/shop-product/ProductList.vue';
import ShopLeft from '../../components/shops/ShopLeft.vue';
export default {
  components: {
    ProductList,
    ShopLeft
  },
  data() {
    return {
      
    }
  }
}
</script>
<style></style>