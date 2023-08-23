<template>
  <div>
    <div class="w-full">
      <SliderView></SliderView>
    </div>
    <div class="w-full">
      <ProductTypeView></ProductTypeView>
    </div>

    <div class="w-full">
      <VideoView></VideoView>
    </div>

    <div class="w-full">
      <Save></Save>
    </div>
    
    <div class="w-full">
      <Achievement></Achievement>
    </div>

    <div class="w-full">
      <NoteReason></NoteReason>
    </div>

    <div class="container mx-auto">
      <hr
        class="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
    </div>

    <div class="w-full">
      <RoomView></RoomView>
    </div>

    <div class="container mx-auto">
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
    </div>

    <div class="w-full">
      <TrendView></TrendView>
    </div>

    <div class="container mx-auto">
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
    </div>

    <div class="w-full">
      <ImageInsView></ImageInsView>
    </div>
  </div>
</template>

<script>
import SliderView from "../components/SliderView.vue";
import ProductTypeView from "../components/ProductTypeView.vue";
import VideoView from "../components/VideoView.vue";
import RoomView from "../components/RoomView.vue";
import TrendView from "../components/TrendView.vue";
import ImageInsView from "../components/ImageInsView.vue";
import Achievement from "../components/Achievement.vue";
import NoteReason from "../components/NoteReason.vue";
import Save from "../components/Save.vue"
export default {
  components: {
    SliderView,
    ProductTypeView,
    VideoView,
    RoomView,
    TrendView,
    ImageInsView,
    Achievement,
    NoteReason,
    Save
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>