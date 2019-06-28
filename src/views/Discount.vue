<template>
    <div class="discount">
        <discountbar></discountbar>
    </div>
</template>

<script>
import discountbar from"../components/common/discountbar"
export default {
    name:"discount",
    components:{
        discountbar
    }
}
</script>

<style>
.discount{
    width: 100%
}
</style>
