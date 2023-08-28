<template>
  <div class="best-seller">
    <h1>Best Seller</h1>
    <div class="mt-8">
        <div 
          v-for="(product, index) in products"
          :key="index"
          class="card flex"
        >
          <div class="card__image">
            <img :src="product.image" alt="" class="w-full">
          </div>
          <div class="grow pl-2">
            <h1 class="card__name">{{ product.name }}</h1>
            <p class="card__price">{{ product.price }}</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        products:[
          {
            id: 1,
            name:'LA RIVE MR. SHARP',
            image: '/assets/images/m5-prod-1.jpg',
            price: '14.00',
          },
          {
            id: 2,
            name:'Merry Christmas! x',
            image: '/assets/images/m5-prod-2.jpg',
            price: '14.00'
          },
          {
            id: 3,
            name: 'Aqua allegoria nettare di sole',
            image: '/assets/images/m5-prod-3.jpg',
            price: '14.00'
          },
          {
            id: 4,
            name: 'Minu Perfume Roller',
            image: '/assets/images/m5-prod-4.jpg',
            price: '14.00'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .card__image{
    width: 85px;
    height: 85px;
  }
  h1{
    font-size: 30px;
    font-weight: 500;
    color: #222222;
    line-height: 1.2em;
    font-style: normal;
  }
  .card__name{
    font-size: 16px ;
    font-weight: 500;
    color: #222222;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    color: #858585;
  }

</style>