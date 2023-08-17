<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide relative w-full" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="Slide Image" class="w-full h-full"/>
        <div class="w-full h-full absolute top-0 left-0 flex justify-center">
          <div class="container">
            <div class="w-full h-full flex justify-center">
              <h1 class="title text-white">{{ slide.title }}</h1>
              <p class="subtitle text-white mt-3">{{ slide.subtitle }}</p>
              <a :href="slide.link" class="mt-3 p-3 border border-white uppercase"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
  
<script>
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';

export default {
  name: 'SwiperComponent',
  props: {
    slides: Array,
  },
  mounted() {
    this.initializeSwiper();
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
      },
        pagination: {
          el: '.swiper-pagination',
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
};
</script>

<style scoped>
</style>
  