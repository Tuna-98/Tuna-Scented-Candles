<template>
    <div class="tabs">
        <div class="flex items-center justify-center wrap space-x-4">
            <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = tab.id"
            :class="{ 'tabActive': activeTab === tab.id, 'bg-gray-100': activeTab !== tab.id }"
            >
                {{ tab.label }}
            </button>
        </div>
        <div class="mt-10">
            <div v-if="currentTab">
                <!-- <div class="flex items-center justify-center">
                    <h3>
                        {{ currentTab.type }}
                    </h3>
                </div> -->
                <ul>
                    <li 
                        class="col-span-1"
                        v-for="product in currentTab.products" :key="product.id"
                    >
                        <!-- {{ product.name }} -->
                        <!-- <ProductCard :cardList="listCard"></ProductCard> -->
                        <div class="w-100">
                            <div class="relative">
                                <img :src="product.image" alt="" class="w-full h-full object-cover ">
                                <!-- <div class="w-full h-full absolute left-0 top-0">
                                    <div class="w-full h-full flex flex-column items-end justify-center">   
                                        <div class="title">{{ product.title }}</div>
                                        <ul class="flex items-center justify-center mt-3">
                                            <li>
                                                <NextLink :to="product.routerLink"></NextLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                            <div class="absolute top-0 left-0 px-2 py-1">Sale!</div>
                            <div class="mt-4">
                                <div class="title">{{ product.name }}</div>
                                <div class="flex mt-2">
                                    <div class="current">{{ product.current }}</div>
                                    <div class="cost">{{ product.cost }}</div>
                                </div>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from '../card/ProductCard.vue';
export default {
    name: 'Tabs',
    components: {
        ProductCard
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        initialTab: {
            type: String,
            default: ''
        }
    },
    data() 
    {
        return {
            activeTab: this.initialTab,
            // currentTab:[
            //     {
            //         type: 'Cented',
            //     },
            //     {
            //         type: 'Jars',
            //     },
            //     {
            //         type: 'Holders',
            //     },
            //     {
            //         type: 'CareKit',
            //     }
            // ]
        };
    },
    computed: {
        tabs() {
            return this.products.map(product => ({
                id: product.type,
                label: product.type
            }));
        },
        currentTab() {
            return this.products.find(
                product => product.type === this.activeTab
            );
        }
    },
    // mounted(){
    //     this
    // }
};
</script>
<style scoped>
    button{
        border: 1px solid #D0D0D0;
        /* padding: 8px 16px; */
        margin: 0 15px;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        color: #D0D0D0;
        width: 154px;
        height: 49px;
    }
    button:hover{
        border: 1px solid #DB572E;    
        color: #FFFFFF;
        background-color: #DB572E;
        transition: .4s;
    }
    .tabActive{
        border: 1px solid #DB572E;    
        color: #FFFFFF;
        background-color: #DB572E;
    }
    ul{
        width: 100%;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }
    ul li{
        margin-bottom: 30px;
    }
</style>
  