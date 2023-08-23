<template>
  <div class="video-intro flex items-center justify-center py-10">
    <div class="container py-10">
      <el-row>
        <el-col :xs="24" :sm="19" class="grid-content">
          <h1>
            Amet nisl purus in mollis nunc. Sed viverra tellus in hac habitasse
            platea dictumst vestibulum rhoncus. Velit laoreet id donec
          </h1>
          <p class="mt-8">Wade Warren • CEO Veres Shop</p>
        </el-col>
        <el-col :xs="24" :sm="5" class="grid-content">
          <div class="w-full h-full flex items-center justify-end">
            <div class="play flex items-center justify-center" @click="showModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                />
              </svg>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <VideoModal 
      ref="videoModal"
      :video="video"
    >
    </VideoModal>
  </div>
</template>
<script>
import VideoModal from "../ui/component/modal/VideoModal.vue";
export default {
  components: {
    VideoModal,
  },
  data(){
    return{
      modalShow: false,
      video:  'https://www.youtube.com/watch?v=qtYzk44_ew0',
    }
  },
  methods: {
    showModal(){
      this.$refs.videoModal.modalShow = true
    }
  }
};
</script>

<style scoped>
.video-intro {
  background-image: url(../public/assets/images/video/m3-bg-1.jpg);
}
h1 {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5em;
  color: #ffffff;
}
p {
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  color: #db572e;
}
.play {
  width: 90px;
  height: 90px;
  background-color: #ffffff24;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}
.play:hover {
  transform: scale(1.3);
  transition: 0.3s;
}
svg {
  width: 30px;
  height: 30px;
  fill: #ffffff;
}
</style>