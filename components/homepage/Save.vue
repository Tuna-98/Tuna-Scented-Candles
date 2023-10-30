<template>
  <div class="save mt-20">
    <el-row>
        <el-col :sm="24" :lg="12">
          <div class="w-full">
            <img
              src="../public/assets/images/m3-bg-2.jpg"
              alt=""
              class="w-full"
            />
          </div>
        </el-col>
        <el-col :sm="24" :lg="12" class="px-12">
          <div class="w-full h-full flex flex-col justify-center pr-20">
            <div>
              <h1 class="">Candles to make you save more</h1>
              <p class="mt-8 pr-20">
                Purus gravida quis blandit turpis cursus. Gravida in fermentum et
                sollicitudin ac orci. Sit amet dictum sit amet justo. Semper
                auctor neque vitae tempus quam pellentesque.
              </p>
              <button class="mt-8">SHOP MORE</button>
            </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import ButtonLink from "../../ui/component/button/Button.vue";
export default {
  components: {
    ButtonLink,
  },
  data() {
    return {
      btnTitle: "SHOP MORE",
    };
  },
};
</script>

<style scoped>
  h1{
    font-size: 32px;
    line-height: 1.1em;
    font-weight: 600;
  }
  p{
    font-size: 18px;
    line-height: 20px;
    color: #858585;
  }
  button{
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 15px 25px;
    color: #222222;
    border: 1px solid #222222;
    background-color: transparent;
    transition: .3s;
  }
  button:hover{
    border: 1px solid #DB572E;
    color: #FFFFFF;
    background-color: #DB572E;
    transition: .3s;
  }
</style>