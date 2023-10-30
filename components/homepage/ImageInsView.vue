<template>
    <div class="image-ig-view py-10">
        <ImageInsCard :ImageInsCard="ImageInsCard"></ImageInsCard>
        <div class="image-ig-view__box">
            <div class="image-ig-view__box__content">
                <h1 class="title">Our Instagram</h1>
                <p>@vereshandmade</p>
            </div>
        </div>
    </div>    
</template>

<script>
import ImageInsCard from '../../ui/component/card/ImageInsCard.vue';
export default {
    components: {
        ImageInsCard
    },
    data(){
        return{
            ImageInsCard: [
                {
                    id: 1,
                    image: "/assets/images/ig/ig1.jpg"
                },
                {
                    id: 2,
                    image: "/assets/images/ig/ig2.jpg"
                },
                {
                    id: 3,
                    image: "/assets/images/ig/ig3.jpg"
                },
                {
                    id: 4,
                    image: "/assets/images/ig/ig4.jpg"
                },
                {
                    id: 5,
                    image: "/assets/images/ig/ig5.jpg"
                },
                {
                    id: 6,
                    image: "/assets/images/ig/ig6.jpg"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .image-ig-view{
        position: relative
    }
    .image-ig-view__box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        background-color: #ffffff;
        padding: 30px;
    }
    .image-ig-view__box__content{
        text-align: center;
        border: 2px solid #222222;
        padding: 20px;
    }
    .image-ig-view__box__content h1{
        font-size: 32px;
        font-weight: normal;
        line-height: 0.94em;
        margin-bottom: 10px;
    }
    .image-ig-view__box__content p{
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 20px;
        letter-spacing: 0.625em;
        color: #DB572E;
    }
</style>