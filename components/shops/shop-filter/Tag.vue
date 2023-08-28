<template>
  <div class="tag">
    <div 
      v-for="(tag, index) in tagList" 
      :key="index"
    >
      <a><span>{{ tag }},</span></a>
    </div>
  </div>
</template>
<script>
export default {
  tagList: ['Candle', 'Diffusers', 'Fragrances', 'Handmade', 'Perfume', 'Sets', 'Shave Soap', 'Soap','Soap2', 'Soap3']
}
</script>
<style scoped>
  a{
    font-size: 22px;
    font-weight: 400;
  }
</style>