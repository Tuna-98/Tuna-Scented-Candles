<template>
    <div class="video-modal w-full h-full">
        <div class="flex items-center justify-center">
            <video :src="videoLink"></video>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        videoLink: {
            typeo: String,
            default: ""
        }
    }
}
</script>

<style scoped>
    .video-modal{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background: rgba(0, 0, 0, .3);
    }
</style>