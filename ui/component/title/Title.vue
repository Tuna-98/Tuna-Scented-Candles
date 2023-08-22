<template>
    <div class="title">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default:"",
        }
    }
}
</script>

<style scoped>
    h1{
        font-size: 36px;
        line-height: 1.1 rem;
        font-weight: 600;
        color: #222222;
    }    
</style>