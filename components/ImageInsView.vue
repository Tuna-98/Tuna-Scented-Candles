<template>
    <div>
        <ImageInsCard :ImageInsCard="ImageInsCard"></ImageInsCard>
    </div>    
</template>

<script>
import ImageInsCard from '../ui/component/card/ImageInsCard.vue';
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

<style>

</style>