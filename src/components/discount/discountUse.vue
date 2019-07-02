<template>
    <div class="discountUse">
        <Discountbar></Discountbar>
        <div class="discount-content">
            <Nodiscount></Nodiscount>
        </div>
    </div>
</template>

<script>
import Discountbar from"../common/discountbar"
import Nodiscount from"./nodiscount"
export default {
    name:'discountUse',
    components:{
        Discountbar,
        Nodiscount
    }
}
</script>

<style scoped>
.discountUse{
    height: 100%;
    display: flex;
    flex-direction: column; 
}
.discountUse-content{
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    width: 100%
}
</style>
