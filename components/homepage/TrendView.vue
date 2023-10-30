<template>
    <div class="trend-view py-10">
        <div class="container mx-auto">
            <h1>Trend This Year</h1>
            <div class="mt-10"> 
                <TrendCard :trendList="trendList"></TrendCard>
            </div>
        </div>
    </div>
</template>

<script>
import TrendCard from '../../ui/component/card/TrendCard.vue';
export default {
    components: {
        TrendCard
    },
    data(){
        return{
            trendList: [
                { 
                    name: 'Eucalyptus Essential Oil',
                    image: '/assets/images/products/sp1.jpg',
                    current: '10.00'
                },
                { 
                    id: 2, 
                    name: 'Rapeseed Candle',
                    image: '/assets/images/products/sp2.jpg',
                    current: '22.50',
                },
                { 
                    id: 3, 
                    name: 'Rapeseed Wax Candle',
                    image: '/assets/images/products/sp3.jpg',
                    current: 42.00,
                },
                { 
                    id: 4, 
                    name: 'Fresh Brew Limited Edition',
                    image: '/assets/images/products/sp4.jpg',
                    current: 24.00,
                },
                { 
                    id: 5, 
                    name: 'Discovery Set',
                    image: '/assets/images/products/sp5.jpg',
                    current: 44.00,
                },
                { 
                    id: 6, 
                    name: 'Rapeseed Candle Triple Wick',
                    image: '/assets/images/products/sp6.jpg',
                    current: 44.00,
                },
            ]
        }
    }
}
</script>

<style scoped>
.trend-view h1{
    text-align: center;
    font-size: 30px;
    line-height: 1.1em;
    font-weight: 600;
}
</style>