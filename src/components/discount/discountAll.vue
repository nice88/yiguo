<template>
    <div class="discountAll">
        <Discountbar></Discountbar>
        <div class="discountAll-content">
             <Havediscount></Havediscount>
        </div>
    </div>
</template>

<script>
import Discountbar from"../common/discountbar"
import Havediscount from"./havediscount"
export default {
    name:'discountAll',
    components:{
        Discountbar,
        Havediscount
    }
}
</script>

<style scoped>
.discountAll{
    height: 100%;
    display: flex;
    flex-direction: column; 
}
.discountAll-content{
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    width: 100%
}
</style>
