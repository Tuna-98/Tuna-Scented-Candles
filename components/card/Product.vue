<template>
    <div 
        class="col-12 col-md-6 col-lg-3"
        v-for="(card, index) in cardList"
        :key="index"
    >
        <div class="w-100">
            <div class="relative">
                <img :src="card.image" alt="" class="w-full h-full object-cover ">
                <div class="w-full h-full absolute left-0 top-0"></div>
            </div>
            <div class="absolute top-0 left-0 px-2 py-1">Sale!</div>
                <div class="mt-4">
                    <div class="title">{{ card.name }}</div>
                    <div class="flex mt-2">
                        <div class="current">{{ card.current }}</div>
                        <div class="cost">{{ card.cost }}</div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'productCard', 
        props: {
            cardList: Array,
        },
        mounted(){   
        },
        watch: {
            cardList(newVal, oldVal){
                if(newVal){
                    this.cardList = newVal
                }
            }
        }
    }
</script>
<style>
</style>