<template>
  <div class="shop-left py-20">
    <SearchProduct></SearchProduct>
    <div class="mt-10">
      <Category></Category>
    </div>
    <div class="mt-10">
      <ByPrice></ByPrice>
    </div>
    <div class="mt-10">
      <BestSeller></BestSeller>
    </div>
    <div class="mt-10">
      <Tag></Tag>
    </div>
    <div class="mt-10">
      <Newsletter></Newsletter>
    </div>
  </div>
</template>
<script>
import SearchProduct from "../shops/shop-filter/ProductSearch.vue"
import Category from "../shops/shop-filter/Category.vue"
import ByPrice from "../shops/shop-filter/ByPrice.vue"
import BestSeller from "../shops/shop-filter/BestSeller.vue"
import Tag from "../shops/shop-filter/Tag.vue"
import Newsletter from '../shops/shop-filter/Newsletter.vue'
export default {
  components: {
    SearchProduct,
    Category,
    ByPrice,
    BestSeller,
    Tag,
    Newsletter
  }
}
</script>
<style scoped>
  
</style>