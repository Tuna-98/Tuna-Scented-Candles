<script> 
import Carousel from '../../ui/component/carousel/Carousel.vue';
export default {
    components: {
        Carousel,
    },
    data(){
        return{
            slides: [
                {
                    image: '/assets/images/slider/slider1.jpg',
                    title: 'Bring the natural aroma',
                    subtitle: 'The product is made from',
                    routerLink: '/',
                },
                {
                    image: '/assets/images/slider/slider2.jpg',
                    title: 'Light Good Live Good',
                    subtitle: 'The product is made from',
                    routerLink: '/',
                }
            ]
        }
    },
}
</script>

<template>
    <div>
        <Carousel :slides="slides.slice(0, 4)"/>
    </div>
</template>

<style>

</style>