<template>
  <div class="py-20">
    <div>
      <ProductFilterRow 
        :minQuantity="minQuantity"
        :maxQuantity="maxQuantity"
        :allQuantity="productList.length"
      />
    </div>
    <div class="mt-10">
      <ProductCard :products="productList"></ProductCard>
    </div>
  </div>
</template>
<script>
import ProductFilterRow from '../shop-product/ProductFilterRow.vue'
import ProductCard from '../../../ui/component/card/ProductCard.vue'
export default {
  components: {
    ProductFilterRow,
    ProductCard
  },
  data() {
    return {
      minQuantity: 0,
      maxQuantity: 0,
      allQuantity: 0,
      productList: [
        {
          id: 1,
          name: 'Eucalyptus Essential Oil',
          image: '/assets/images/products/sp1.jpg',
          current: '10.00',
          cost: '4.00',
          sale: 1,
          type: 'Cented',
        },
        {
          id: 2,
          name: 'Rapeseed Candle',
          image: '/assets/images/products/sp2.jpg',
          current: '22.50',
          cost: '',
          sale: 0,
          type: 'Cented',
        },
        {
          id: 3,
          name: 'Rapeseed Wax Candle',
          image: '/assets/images/products/sp3.jpg',
          current: 42.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
        {
          id: 4,
          name: 'Fresh Brew Limited Edition',
          image: '/assets/images/products/sp4.jpg',
          current: 24.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
        {
          id: 5,
          name: 'Terracotta Tealight Holder',
          image: '/assets/images/products/sp8.jpg',
          current: 20.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
        {
          id: 6,
          name: 'Discovery Set',
          image: '/assets/images/products/sp5.jpg',
          current: 44.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
        {
          id: 7,
          name: 'Rapeseed Candle Triple Wick',
          image: '/assets/images/products/sp6.jpg',
          current: 44.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
        {
          id: 8,
          name: 'Rapeseed Wax Candle',
          image: '/assets/images/products/sp7.jpg',
          current: 44.00,
          cost: 0,
          sale: 0,
          type: 'Cented',
        },
      ]
    }
  },
  mounted(){
  },
}
</script>
<style></style>