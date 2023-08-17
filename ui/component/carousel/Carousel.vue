<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide relative w-full" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="Slide Image" class="w-full h-full"/>
        <div class="w-full h-full absolute top-0 left-0 flex justify-center">
          <div class="container">
            <div class="flex flex-col items-center w-full h-full">
              <div>
                <div class="title text-5xl text-white">{{ slide.title }}</div>
                <p class="subtitle text-white mt-3">{{ slide.subtitle }}</p>
                <Button :routerLink="slide.routerLink" class="text-white mt-3 border px-3 py-2.5">SHOP MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import '/swiper/css/swiper.min.css';
import Button from '../button/Button.vue';
export default {
  props: {
    Button
  },
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
};
</script>
<style scoped>

</style>
  