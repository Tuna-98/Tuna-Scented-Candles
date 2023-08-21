<template>
    <div 
        class="product-card col-12 col-md-6 col-lg-3"
        v-for="(card, index) in cardList"
        :key="index"
    >
        <div class="w-100">
            <div class="relative">
                <img :src="card.image" alt="" class="w-full h-full object-cover ">
                <div class="w-full h-full absolute left-0 top-0">
                    <div class="w-full h-full flex flex-column items-end justify-center">   
                        <div class="title">{{ card.title }}</div>
                        <ul class="flex items-center justify-center mt-3">
                            <li>
                                <NextLink :to="card.routerLink"></NextLink>
                            </li>
                        </ul>
                    </div>
                </div>
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
        name:'productCard', 
        props: {
            cardList: Array,
            default: () => []
        },
        data(){
            return{
                cardList:{
                    image: "",
                    title: "",
                    routerLink: "",
                    name: "",
                    current: 0,
                    cost: 0,
                }
            }
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