<template>
    <div>
        <Orderbar></Orderbar>
        <Noneorder></Noneorder>
    </div>
</template>

<script>
    import Orderbar from"../common/orderbar" 
    import Noneorder from"./noneorder"
export default {

    name:'orderSay',
    components:{
        Orderbar,
        Noneorder
    }
}
</script>

<style>

</style>
