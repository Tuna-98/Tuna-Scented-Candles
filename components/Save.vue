<template>
    <div class="save">
        <div class="container">
            <div class="row">
                <div class="col-span-6">
                    <div class="w-full">
                        <img src="" alt="" class="w-full">
                    </div>
                </div>
                <div class="col-span-6">
                    <h1 class="">Candles to make you save more</h1>
                    <p class="mt-3">
                        Purus gravida quis blandit turpis cursus. Gravida in fermentum et sollicitudin ac orci. Sit amet dictum sit amet justo. Semper auctor neque vitae tempus quam pellentesque.
                    </p>
                    <div class="mt-3">
                        <ButtonLink :routerLink="routerLink" :title='btnTitle'></ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import ButtonLink from '../ui/component/button/Button.vue'
export default {
    components: {
        ButtonLink
    },
    data(){
        return{
            btnTitle: 'SHOP MORE'
        }
    }
}
</script>

<style>

</style>