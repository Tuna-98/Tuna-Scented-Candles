<template>
  <div class="h-screen w-full overflow-hidden bg-white fixed top-0 left-0 index-[9999]">
    <el-row class="h-full">
      <el-col
        :sm="24"
        :lg="12"
      >
        <div class="py-20">
          <div>
            <div class="container mx-auto py-20">
              <ul class="flex justify-between px-10">
                <li>
                  <button
                    @click="currentTab(1)"
                    class="inline-block"
                    :class="{'tabActive': tab === 1}"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    @click="currentTab(2)"
                    class="inline-block"
                    :class="{'tabActive': tab === 2}"
                  >
                    Register
                  </button>
                </li>
              </ul>
              <div class="p-3 mt-6 bg-white px-10">
                <div v-if="tab === 1">
                  <LoginForm></LoginForm>
                </div>
                <div v-if="tab === 2">
                  <RegisterForm></RegisterForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        :sm="24"
        :lg="12"
      >
        <div class="login__right w-full h-screen relative">
          <img 
            src="../../public/assets/images/my-account-bg.jpg" 
            alt="" 
            class="w-full h-full object-cover"
          >
          <div class="w-full h-full relative top-0 left-0">
            <div class="evaluate w-full p-10 absolute bottom-0 left-0">
              <div class="swiper-container swiper-evaluate">
                <div class="swiper-wrapper">
                  <div 
                    class="swiper-slide" 
                    v-for="(evaluate, index) in evaluates"
                    :key="index"
                  >
                    <div class="w-full p-8 bg-[#FFFFFF50] rounded-lg">
                      <p class="text-white">“{{ evaluate }}”</p>
                      <div class="star flex items-center justify-start mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from 'swiper';
import '/swiper/css/swiper.min.css';
import LoginForm from '../../components/login/LoginForm.vue'
import RegisterForm from '../../components/login/RegisterForm.vue'
export default {
  name: 'login',
  components:{
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      evaluates: [
        "Amazing design and easy building! Prompt support response. Several people in the Customer Support and all are helpful and cheerful",
        "Amazing design and easy building! Prompt support response. Several people in the Customer Support and all are helpful and cheerful",
      ],
      tab: 1,
    }
  },
  mounted() {
    this.initializeSwiper();
  },
  methods: {
    currentTab: function (tabNumber) {
      this.tab = tabNumber;
    },
    initializeSwiper() {
      this.swiper = new Swiper('.swiper-container.swiper-evaluate', {
        slidesPerView: 1,
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
  .evaluate p{
    @apply text-[22px] font-normal leading-7;
  }
  svg{
    @apply fill-white mr-4;
  }
  button{
    @apply text-[30px] font-normal bg-transparent	text-[#B5B5B5];
  }
  .tabActive{
    @apply text-[#222222];
  }
</style>