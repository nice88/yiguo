<template>
    <div class="order">
        <Orderbar></Orderbar>
        <div class="order-content">
            <Noneorder></Noneorder>
            <!-- <Havediscount></Havediscount> -->
        </div>
    </div>
</template>

<script> 
   import Noneorder from"./noneorder"
   import Orderbar from"../common/orderbar"
//    import Havediscount from"../discount/havediscount"
export default {

    name:'orderAll',
    components:{
        Orderbar,
        Noneorder,
        // Havediscount
    } 
}
</script>

<style scoped>

</style>
