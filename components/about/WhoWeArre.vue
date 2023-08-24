<template>
  <div class="w-full">
    <div class="container mx-auto">
      <el-row>
        <el-col :sm="24" :lg="12">
          <div class="w-full px-4">
            <img src="../../public/assets/images/about-img-5.jpg" alt="" class="w-full">
          </div>
        </el-col>
        <el-col :sm="24" :lg="12">
          <div class="w-full h-full flex flex-col justify-center px-4">
            <h1>Who we are?</h1>
            <p class="mt-4">
              In arcu cursus euismod quis viverra. Morbi tempus iaculis urna id volutpat lacus laoreet non. Diam maecenas
              sed enim ut sem viverra aliquet eget. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque nec
              nam aliquam sem et tortor consequat id porta. Felis imperdiet proin fermentum leo vel orci.
              <br><br>
              Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Blandit cursus risus at ultrices. Varius
              morbi enim nunc faucibus a. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.
            </p>
            <img src="../../public/assets/images/about-bg-0.png" alt="" class="signature mt-4">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'WhoWeAre'
  }
</script>
<style scoped>
  h1 {
    font-size: 80px;
    color: #222222;
    font-style: italic;
  }
  p{
    font-size: 16px;
    line-height: 28px;
    font-weight: normal;
    color: #B5B5B5;
  }
  .signature{
    width: 300px;
  }
</style>