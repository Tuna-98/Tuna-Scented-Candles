<template>
  <div class="tag">
    <h1>Tag</h1>
    <div class="flex flex-wrap">
      <div 
        v-for="(tag, index) in tagList" 
        :key="index"
        class="flex wrap mt-4 mr-5"
      >
        <a>{{ tag }}, </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tagList: [
        'Candle', 
        'Diffusers', 
        'Fragrances', 
        'Handmade', 
        'Perfume', 
        'Sets', 
        'Shave Soap', 
        'Soap',
        'Soap2', 
        'Soap3'
      ]
    }
  }
}
</script>
<style scoped>
  a{
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    color: #858585;
    cursor: pointer;
  }
  a:hover{
    color: #DB572E;
  }
  h1{
    font-size: 30px;
    font-weight: 500;
    color: #222222;
    line-height: 1.2em;
    font-style: normal;
  }
</style>