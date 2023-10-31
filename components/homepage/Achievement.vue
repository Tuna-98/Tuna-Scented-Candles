<template>
  <div class="achievement py-10 mb-20">
    <div class="container mx-auto py-10">
        <el-row>
            <el-col
                class=" flex items-center justify-center"
                v-for="(achievement, index) in achievements"
                :key="index"
                :xs="24"
                :md="12"
                :lg="6"
            >
                <div class="w-full text-center py-6">
                    <h1 class="title">{{ achievement.number }}</h1>
                    <p class="subtitle mt-2">{{ achievement.sub }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
  </div> 
</template>
<script>
export default {
    data(){
        return{
            achievements: [
                {
                    number: "10",
                    sub: "YEARS"
                },
                {
                    number: "200+",
                    sub: "YEARS"
                },
                {
                    number: "16+",
                    sub: "STORES"
                },
                {
                    number: "140+",
                    sub: "CANDLES"
                },
            ]
        }
    }
}
</script>

<style scoped>
    .achievement{
        background-image: url(../../public/assets/images/m3-bg-3.jpg);
    }
    h1{
        font-size: 86px;
        line-height: 1em;
        font-weight: normal;
        color: #FFFFFF;
    }
    p{
        font-size: 32px;
        line-height: 1em;
        font-weight: normal;
        text-transform: uppercase;
        color: #FFFFFF;
    }
</style>