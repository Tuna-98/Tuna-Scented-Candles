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
  </div>
</template>
<script>
import SearchProduct from "../shops/shop-filter/ProductSearch.vue"
import Category from "../shops/shop-filter/Category.vue"
import ByPrice from "../shops/shop-filter/ByPrice.vue"
import BestSeller from "../shops/shop-filter/BestSeller.vue"
export default {
  components: {
    SearchProduct,
    Category,
    ByPrice,
    BestSeller
  }
}
</script>
<style scoped>
</style>