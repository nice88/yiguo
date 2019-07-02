<template>
    <div class="order">
        <Orderbar></Orderbar>
        <div class="order-contnent">
            <Noneorder></Noneorder>
        </div>
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
.order{
    height: 100%;
    display: flex;
    flex-direction: column; 
}
.order-content{
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    width: 100%
}
</style>
