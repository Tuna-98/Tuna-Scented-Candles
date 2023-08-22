<template>
    <div class="make-candles">
        <div class="el-row">
            <el-col
                :sm="24"
                :lg="9"
            >   
                <Title :title='title'></Title>
                <ul 
                    v-for="(note, index) in notes"
                    :key="index"
                >
                    <li><img src="" alt="">{{ note }}</li>
                </ul>
            </el-col>
        </div>
    </div>
</template>

<script>
import Title from '../ui/component/title/Title.vue';
export default {
    components: {
        Title
    },  
    data(){
        return{
            notes:[
                'Amet nisl purus in mollis nunc sed viverra',
                'Amet nisl purus in mollis nunc',
                'Amet nisl purus in mollis nunc sed'
            ],
            title: "We try to make the best candles"
        }
    }
}
</script>

<style>

</style>