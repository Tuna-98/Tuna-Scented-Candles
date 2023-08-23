<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide relative w-full" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="Slide Image" class="w-full h-full"/>
        <div class="swiper-slide__content w-full h-full absolute top-0 left-0 flex justify-center">
          <div class="container">
            <div class="flex items-center w-full h-full">
              <div class="w-full">
                <h1 class="title text-5xl text-white">{{ slide.title }}</h1>
                <p class="subtitle text-white mt-3">{{ slide.subtitle }}</p>
                <Button :routerLink="slide.routerLink" class="button text-white mt-8 border px-3 py-2.5">SHOP MORE</Button>
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
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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
  .swiper-slide__content{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #FFFFFF;
  }
  h1{
    font-size: 52px;
    font-weight: 600;
  }
  p{
    font-size: 24px;
  }
  button{
    border: 2px solid #FFFFFF;
    padding: 12px 24px;
    margin-top: 16px;
    transition: .3s;
    border-radius: 2px;
    font-size: 22px;
  }
  button:hover{
    border: 2px solid #DB572E;
    background: #DB572E;
    color: #FFFFFF;
    transition: .3s;
  }
</style>
  