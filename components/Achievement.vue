<template>
  <div class="achievement">
    <div class="container">
        <div class="grid grid-cols-6 gap-4">
            <div 
                v-for="(achievement, index) in achievements"
                :key="index"
                class="col-span-3"
            >
                <h1 class="title">{{ achievement.number }}</h1>
                <div class="subtitle">{{ achievement.sub }}</div>
            </div>
        </div>
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

<style>
</style>