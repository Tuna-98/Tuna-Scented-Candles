<template>
  <div class="intro py-20">
    <div class="container mx-auto py-20">
      <el-row>
        <el-col :sm="24" :lg="12">
          <div class="flex flex-col justify-center pr-20 h-full">
            <h1>About Us</h1>
            <p class="mt-4">
              Varius morbi enim nunc faucibus a. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Dignissim enim
              sit amet venenatis urna cursus eget nunc scelerisque. Condimentum lacinia quis vel eros donec ac. Ut etiam sit
              amet nisl purus in mollis. Accumsan tortor posuere ac.<br><br>
              Maecenas volutpat blandit aliquam etiam erat velit scelerisque. A erat nam at lectus urna duis convallis
              convallis tellus. Magna ac placerat vestibulum lectus mauris ultrices.
            </p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="12" class="intro__right">
          <el-row>
            <el-col :sm="24" :lg="12">
              <div class="flex flex-col items-end mr-4">
                <div class="image-large">
                  <img src="../../public/assets/images/about-img-2.jpg" alt="" class="w-full"> 
                </div>
                <div class="image-small mt-10 mr-10">
                  <img src="../../public/assets/images/about-img-3.jpg" alt="" class="w-full">
                </div>
              </div>
            </el-col>
            <el-col :sm="24" :lg="12">
              <div class="flex flex-col pl-4 mt-5">
                <div class="image-small mb-10 ml-10">
                  <img src="../../public/assets/images/about-img-1.jpg" alt="" class="w-full">
                </div>
                <div class="image-large">
                  <img src="../../public/assets/images/about-img-4.jpg" alt="" class="w-full">
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'intro',
  }
</script>
<style scoped>
  .intro{
    background-image: url(/public/assets/images/about-bg-1.jpg);
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
  }
  h1{
    font-style: italic;
    font-size: 80px;
    color: #222222;
  }
  p{
    font-size: 16px;
    line-height: 28px;
    font-weight: normal;
    color: #B5B5B5;
  }
  .intro__right div img{

  }
  .image-small{
    width: 85px;
  }
</style>