<template>
    <div class="product-type">
        <div class="container">
            <h1 class="title tex-center">Candles which will take away all your worries</h1>
            <div class="tabs">
                <tab-list :products="products" :initialTab="products[0]?.type" />
            </div>
        </div> 
    </div>
</template>

<script>
import CardProduct from '../components/card/ProductCard.vue';
import TabList from '../components/tab/TabList.vue';
export default {
    components: {
        CardProduct,
        TabList,
    },
    data(){
        return {
            products: [
                {
                    type: 'Cented',
                    products: [
                        { 
                            id: 1, 
                            name: 'Eucalyptus Essential Oil',
                            image: '../assets/images/sp1.png',
                            current: '$10.00',
                            cost: '$4.00',
                            sale: 1
                        },
                        { 
                            id: 2, 
                            name: 'Rapeseed Candle',
                            image: '../assets/images/sp2.png',
                            current: '$22.50',
                            cost: '',
                            sale: 0
                        },
                        { 
                            id: 3, 
                            name: 'Rapeseed Wax Candle',
                            image: '../assets/images/sp3.png',
                            current: 42.00,
                            cost: 0,
                            sale: 0
                        },
                        { 
                            id: 4, 
                            name: 'Fresh Brew Limited Edition',
                            image: '../assets/images/sp2.png',
                            current: 24.00,
                            cost: 0,
                            sale: 0
                        },
                        { 
                            id: 5, 
                            title: 'Discovery Set',
                            image: '../assets/images/sp2.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0
                        },
                        { 
                            id: 6, 
                            name: 'Rapeseed Candle Triple Wick',
                            image: '../assets/images/sp2.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0
                        },{ 
                            id: 7, 
                            name: 'Rapeseed Wax Candle',
                            image: '../assets/images/sp2.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0
                        },
                        { 
                            id: 8, 
                            name: 'Terracotta Tealight Holder',
                            image: '../assets/images/sp2.png',
                            current: 20.00,
                            cost: 0,
                            sale: 0
                        },

                    ]
                },
                {
                    type: 'Jars',
                    products: []
                },
                {
                    type: 'Holders',
                    products: []
                },
                {
                    type: 'CareKit',
                    products: []
                },
            ],
            slider: [
                {
                    image: '../assets/images/sp1.png',
                    title: 'Eucalyptus Essential Oil',
                    current: '$10.00',
                    cost: '$4.00'
                },
                {
                    image: '../assets/images/sp2.png',
                    title: 'Eucalyptus Essential Oil',
                    current: '$10.00',
                    cost: '$4.00'
                },
                {
                    image: '../assets/images/sp3.png',
                    title: 'Eucalyptus Essential Oil',
                    current: '$10.00',
                    cost: '$4.00'
                },
                {
                    image: '../assets/images/sp4.png',
                    title: 'Eucalyptus Essential Oil',
                    current: '$10.00',
                    cost: '$4.00'
                },
            
            ] 
        }
    }
}
</script>

<style>

</style>