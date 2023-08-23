<template>
  <div class="swiper-container swiper-ig">
    <div class="swiper-wrapper">
      <div 
          class="swiper-slide"
          v-for="(card, index) in ImageInsCard"
          :key="index"
      >
        <div class="card">
          <img :src="card.image" alt="" class="w-full">
          <div class="card__hover w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 650 650"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
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
    props: {
        ImageInsCard: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{}
    },
    mounted() {
      this.initializeSwiper();
    },
    methods: {
      initializeSwiper() {
        this.swiper = new Swiper('.swiper-container.swiper-ig', {
          slidesPerView: 5,
          spaceBetween: 0,
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
  .card{
    transition: .3s;
    position: relative;
    overflow: hidden;
  }
  .card img{
    transition: .5s;
  }
  .card:hover img{
    transform: scale(1.3);
    transition: .5s;
  }
  .card .card__hover{
    transition: .3s;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    opacity: 0;
  }
  .card:hover .card__hover{
    opacity: 1;
    transition: .3s;
  }
  svg{
    width: 50px;
    height: 50px;
    fill: #FFFFFF;
  }
</style>