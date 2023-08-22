<template>
  <div>
    <SliderView></SliderView>
    <ProductTypeView></ProductTypeView>
    <RoomView></RoomView>
    <TrendView></TrendView>
    <ImageInsView></ImageInsView>
    
  </div>
</template>

<script>
import SliderView from '../components/SliderView.vue';
import ProductTypeView from '../components/ProductTypeView.vue';
import RoomView from '../components/RoomView.vue';
import TrendView from '../components/TrendView.vue';
import ImageInsView from '../components/ImageInsView.vue';
export default {
  components: {
    SliderView,
    ProductTypeView,
    RoomView,
    TrendView,
    ImageInsView
  },
  data(){
    return{
      
    }
  }
};
</script>
<style scoped>
</style>