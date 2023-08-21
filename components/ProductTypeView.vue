<template>
    <div class="product-type py-10">
        <div class="container mx-auto">
            <h1 class="title tex-center">Candles which will take away all your worries</h1>
            <div class="tabs mt-10 w-full flex items-center justify-center">
                <TabList :products="products" :initialTab="products[0]?.type" />
            </div>
        </div> 
    </div>
</template>
<script>
import TabList from '../ui/component/tab/Tab.vue';
export default {
    components: {
        TabList,
    },
    data(){
        return {
            products: [
                {
                    id: 1,
                    type: 'All Cented',
                    products: [
                        { 
                            name: 'Eucalyptus Essential Oil',
                            image: '/assets/images/products/sp1.png',
                            current: '10.00',
                            cost: '4.00',
                            sale: 1,
                            type: 'Cented',
                        },
                        { 
                            id: 2, 
                            name: 'Rapeseed Candle',
                            image: '/assets/images/products/sp2.png',
                            current: '22.50',
                            cost: '',
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 3, 
                            name: 'Rapeseed Wax Candle',
                            image: '/assets/images/products/sp3.png',
                            current: 42.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 4, 
                            name: 'Fresh Brew Limited Edition',
                            image: '/assets/images/products/sp4.png',
                            current: 24.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                    ]
                },
                {
                    id: 2,
                    type: 'Scented Candles',
                    products: [
                    { 
                            id: 1, 
                            name: 'Discovery Set',
                            image: '/assets/images/products/sp5.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 2, 
                            name: 'Rapeseed Candle Triple Wick',
                            image: '/assets/images/products/sp6.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                    ]
                },
                {
                    id: 2,
                    type: 'Candle Jars',
                    products: [
                        { 
                            id: 1, 
                            name: 'Rapeseed Wax Candle',
                            image: '/assets/images/products/sp7.png',
                            current: 44.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                    ]
                },
                {
                    id: 3,
                    type: 'Candle Holders',
                    products: [
                        { 
                            id: 1, 
                            name: 'Terracotta Tealight Holder',
                            image: '/assets/images/products/sp8.png',
                            current: 20.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                    ]
                },
                {
                    id: 4,
                    type: 'Candle Care Kit',
                    products: []
                },
            ],
            // listProduct: []
        }
    },
    computed() {
        
    }
}
</script>

<style scoped>
    .title{
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        line-height: 48px;
        color: #000000;
    }


</style>