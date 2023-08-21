<template>
    <div class="notice position top-0 left-0 mt-6 px-4 py-2">
        {{ title }}
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>

</style>