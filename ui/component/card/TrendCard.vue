<template>
  <div class="swiper-container swiper-trend">
    <div class="swiper-wrapper">
      <div 
        class="swiper-slide"
        v-for="(card, index) in trendList"
        :key="index"
      >
        <div class="card w-full">
          <img :src="card.image" alt="" class="w-full h-full">
          <div class="card__content flex flex-column items-center justify-end w-full py-6">
            <div class="card__content__child text-center w-full">
              <h1>{{ card.name }}</h1>
              <h2 class="mt-4">${{ card.current }}</h2>
              <div class="card__content__child__action flex items-center justify-center">
                <ul class="flex items-center justify-center">
                  <li class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  </li>
                  <li class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                  </li>
                  <li class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"/></svg>
                  </li>
                </ul>
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
export default {
    props: {
        trendList:{
            type: Array,
            default: () => []
        }
    },
    data(){
          return{
              
          }
    },
    mounted() {
      this.initializeSwiper();
    },
    methods: {
      initializeSwiper() {
        this.swiper = new Swiper('.swiper-container.swiper-trend', {
          slidesPerView: 4,
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

<style lang="css" scoped>
    .card {
        position: relative;
    }
    .card:hover .card__content {
        background: linear-gradient(180deg, #ffffff00 0%, #3a3a3ab3 100%);
        bottom: 0;
        transition: .3s;
    }
    .card__content {
        transition: .3s;
        position: absolute;
        bottom: -100%;
        left: 0;
        padding: 15px 0;
    }
    .card__content__child__action{
      margin-top: 10px;
    }
    .card__content__child__action ul li {
        width: 32.5px;
        height: 32.5px;
        border-radius: 50%;
        background-color: transparent;
        margin: 12;
    }
    .card__content__child__action ul li:hover {
        background-color: #DB572E;
        transition: .3s;
    }
    .card__content__child__action ul li svg {
        fill: #FFFFFF;
    }
    h1 {
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      color: #FFFFFF;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      color: #FFFFFF;
      margin-top: 5px;
    }
</style>