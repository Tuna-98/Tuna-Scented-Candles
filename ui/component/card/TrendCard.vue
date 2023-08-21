<template>
    <div class="card w-full">
        <img :src="trendList.image" alt="" class="w-full h-full">
        <div class="card__content flex flex-column items-center justify-end">
            <div class="card__content__child">
                <h1>{{ trendList.name }}</h1>
                <h3>${{ trendList.current }}</h3>
                <div class="card__content__child__action">
                    <div class="flex items-center justify-center">
                        <ul>
                            <li>
                                <a href="" >
                                    
                                </a>
                            </li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trendList:{
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            trendList:{
                image: "",
                name: "",
                current: "",
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .card__content{
    }
</style>