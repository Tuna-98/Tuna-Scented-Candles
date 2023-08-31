<template>
  <div class="news-letter">
    <h1>Newsletter</h1>
      <div class="mt-4">
        <div class="email py-6">
          <input type="text" placeholder="Enter Your Email..." class="px-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
        </div>
        <div class="banner mt-4 w-full">
          <img src="../../../public/assets/images/shop-bn-1.jpg" alt="" class="w-full">
          <div class="banner__content w-full h-full flex flex-col justify-end p-6">
            <h1 class="banner__content__title">Ad Banner</h1>
            <p class="banner__content__sub mt-1">info@la-studioweb.com</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

</script>
<style scoped>
 h1{
    font-size: 30px;
    font-weight: 500;
    color: #222222;
    line-height: 1.2em;
    font-style: normal;
  }
  .email{
    position: relative;
    border: 1px solid #E8E8E8;
  }
  .email svg{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    fill: #DB572E;
    font-size: 20px;
  }
  input::placeholder{
    font-size: 18x;
  }
  .banner{
    position: relative;
  }
  .banner__content{
    position: absolute;
    top: 0;
    left: 0;
  }
  .banner__content__title{
    font-size: 26px;
    font-weight: bold;
    color: #fff;
  }
  .banner__content__sub{
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
  }
</style>