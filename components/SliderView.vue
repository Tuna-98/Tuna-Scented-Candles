<template>
    <div>
      <Carousel :slides="slides"/>
    </div>
</template>

<script>
import Carousel from '../ui/component/carousel/Carousel.vue';
export default {
    components: {
        Carousel,
    },  
    data(){
        return{
            slides: [
                {
                    image: '/assets/images/slider/slider1.jpg',
                    title: 'Bring the <br>natural aroma',
                    subtitle: 'The product is made from',
                    link: '',
                },
                {
                    image: '/assets/images/slider/slider2.jpg',
                    title: 'Light Good <br>Live Good',
                    subtitle: 'The product is made from',
                    link: '',
                }
            ]
        }
    },
}
</script>

<style>

</style>