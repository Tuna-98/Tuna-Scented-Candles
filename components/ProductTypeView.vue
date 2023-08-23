<template>
    <div class="product-type py-10">
        <div class="container mx-auto py-10">
            <h1 class="title tex-center">Candles which will take away all your worries</h1>
            <div class="tabs mt-10 w-full flex items-center justify-center">
                <TabList :products="products.slice(0, 9)" :initialTab="products[0]?.type" />
            </div>
            <div class="mt-5 flex items-center justify-center">
                <button>Go to shop</button>
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
                            image: '/assets/images/products/sp1.jpg',
                            current: '10.00',
                            cost: '4.00',
                            sale: 1,
                            type: 'Cented',
                        },
                        { 
                            id: 2, 
                            name: 'Rapeseed Candle',
                            image: '/assets/images/products/sp2.jpg',
                            current: '22.50',
                            cost: '',
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 3, 
                            name: 'Rapeseed Wax Candle',
                            image: '/assets/images/products/sp3.jpg',
                            current: 42.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 4, 
                            name: 'Fresh Brew Limited Edition',
                            image: '/assets/images/products/sp4.jpg',
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
                            image: '/assets/images/products/sp5.jpg',
                            current: 44.00,
                            cost: 0,
                            sale: 0,
                            type: 'Cented',
                        },
                        { 
                            id: 2, 
                            name: 'Rapeseed Candle Triple Wick',
                            image: '/assets/images/products/sp6.jpg',
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
                            image: '/assets/images/products/sp7.jpg',
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
                            image: '/assets/images/products/sp8.jpg',
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

    button{
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        text-transform: uppercase;
        padding: 15px 25px;
        color: #222222;
        border: 1px solid #222222;
        background-color: transparent;
        transition: .3s;
    }
    button:hover{
        border: 1px solid #DB572E;
        color: #FFFFFF;
        background-color: #DB572E;
        transition: .3s;
    }
</style>