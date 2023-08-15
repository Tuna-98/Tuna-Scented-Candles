<template>
    <div class="w-full h-full">
         <h1 class="title text-center">Candels which will take away all your worries</h1>
            <div class="flex items-center justify-center">
                <ul>
                    <li><button class=""></button></li>
                </ul>
            </div>
           <Slider :sliders="sliderList"></Slider>
    </div>
</template>

<script>
import Slider from '../components/slider/Slider.vue';
export default {
    components: {
        Slider
    },  
    data(){
        return{
            sliderList: [
                {
                    image: '../assets/images/slider/slider1.jpg',
                    title: 'Bring the <br>natural aroma',
                    subtitle: 'The product is made from',
                    link: ''
                },
                {
                    image: '../assets/images/slider/slider2.jpg',
                    title: 'Light Good <br>Live Good',
                    subtitle: 'The product is made from',
                    link: ''
                },
            ]
        }
    }
}
</script>

<style>

</style>