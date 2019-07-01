<template>
    <div>
        <Orderbar></Orderbar>
        <Noneorder></Noneorder>
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

<style>

</style>
