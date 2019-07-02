<template>
    <div class="discountOverdue">
        <Discountbar></Discountbar>
        <div class="discountOverdue-content">
            <Nodiscount></Nodiscount>
        </div>
    </div>
</template>

<script>
import Discountbar from"../common/discountbar"
import Nodiscount from"./nodiscount"
export default {
    name:'discountOverdue',
    components:{
        Discountbar,
        Nodiscount
    }
}
</script>

<style scoped>
.discountOverdue{
    height: 100%;
    display: flex;
    flex-direction: column; 
}
.discountOverdue-content{
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    width: 100%
}
</style>
