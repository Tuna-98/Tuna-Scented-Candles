<template>
  <div class="w-full">
    <h1 class="text-center">Our Partners</h1>
    <div class="mt-10">
      <div class="swiper-container swiper-partner">
        <div class="swiper-wrapper">
          <div 
            class="swiper-slide"
            v-for="(partner, index) in partners" 
            :key="index"
          >
            <div class="partner w-full">
              <img :src="partner" alt="" class="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import '/swiper/css/swiper.min.css';
  export default {
    name:'partner',
    props: {
      partners: {
        type: Array,
        default: []
      }
    },
    mounted() {
      this.initializeSwiper();
    },
    methods: {
      initializeSwiper() {
        this.swiper = new Swiper('.swiper-container.swiper-partner', {
          slidesPerView: 5,
          spaceBetween: 15,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
        });
      },
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    },
  }
</script>
<style scoped>
   img{
    width: 200px;
  }
  svg g{
    color: #222222 !important;
  }
  .swiper-slide{
    transition: .3s;
  }
  .swiper-slide:hover{
    transform: scale(1.1);
    transition: .3s;
    z-index: 99;
  }
  h1{
    font-style: italic;
    font-size: 60px;
    color: #222222;
    line-height: 1.1em;
  } 
</style>