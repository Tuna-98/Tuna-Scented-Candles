<template>
    <div 
        class="modal-video w-full flex items-center justify-center" 
        @click="closeModal"
        v-show="modalShow"
    >
        <div class="modal-video__content">
            <video 
                width="320"
                height="400"
                controls
                class="w-full"
            >
                <source :src="video" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        video: {
            type: String,
            default: ""
        }
    },
    data(){
        return{
            modalShow: false
        }
    },
    methods: {
        closeModal(){
            this.modalShow = false
        }
    }
}
</script>

<style scoped>
    .modal-video{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0, .3);
        z-index: 99;
    }
    .modal-video__content{
        width: 800px;
    }
</style>