<template>
  <div class="w-full">
    <h1 class="title text-center">Client Feedback</h1>
    <div class="w-full mt-10">
      <div class="swiper-container swiper-feedback">
        <div class="swiper-wrapper">
          <div class="swiper-slide feedback" v-for="(feedback, index) in feedbacks" :key="index">
            <div class="feedback__top">
              <svg class="star-rating" width="30" height="30" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.203 16c2.034 0 3.594-1.7 3.594-3.752 0-2.124-1.356-3.61-3.255-3.61-.339 0-.813.07-.881.07C3.864 6.442 5.831 3.611 8 2.124L5.492 0C2.372 2.336 0 6.3 0 10.62 0 14.087 1.966 16 4.203 16zm11 0c2.034 0 3.661-1.7 3.661-3.752 0-2.124-1.423-3.61-3.322-3.61-.339 0-.813.07-.881.07.271-2.266 2.17-5.097 4.339-6.584L16.492 0C13.372 2.336 11 6.3 11 10.62c0 3.468 1.966 5.38 4.203 5.38z" fill="currentColor" fill-rule="nonzero"></path></svg>
              <h1 class="mt-2">{{ feedback.title }}</h1>
              <p class="mt-2">{{ feedback.subtitle }}</p>
            </div>
            <div class="feedback__bottom px-3 py-2">
                <div class="flex items-center">
                  <img :src="feedback.avatar" alt="" class="avatar">
                  <p class="pl-4">{{ feedback.name }}<span>/</span><span>Client</span></p>
                </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import '/swiper/css/swiper.min.css';
export default {
  props: {
    feedbacks: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.initializeSwiper();
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper('.swiper-container.swiper-feedback', {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // autoplay: true,
        // keyboard: {
        //   enabled: true,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
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
  .feedback{
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;
  }
  .feedback__top{
    padding: 30px;
  }
  
  .feedback__bottom{
    background-color: #F9F9F9;
    padding: 20px 30px;
  }
  .feedback__bottom p{
    font-size: 20px;
    font-weight: 600;
    color: #222222;
  }
  .feedback__bottom p span{
    font-weight: 400;
    color: #DB572E;
  }
  .feedback__bottom p span:nth-child(2){
    font-style: italic;
  }
  .avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .star-rating path{
    fill: #FEE0D7;
  }
  h1{
    font-size: 22px;
    font-weight: 600;
    color: #222222;
  }
  p{
    font-size: 16px;
    line-height: 22px;
    color: #B5B5B5;
  }
  h1.title{
    font-style: italic;
    font-size: 60px;
    color: #222222;
    line-height: 1.1em;
    font-weight: 400;
  }
</style>