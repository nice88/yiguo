<template>
    <div class="order">
        <Orderbar></Orderbar>
        <div class="order-contnent">
            <Noneorder></Noneorder>
        </div>
    </div>
</template>

<script> 
   import Noneorder from"./noneorder"
   import Orderbar from"../common/orderbar"
export default {

    name:'orderPay',
    components:{
        Orderbar,
        Noneorder
    }
}
</script>

<style scoped>

</style>
