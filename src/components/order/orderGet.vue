<template>
    <div class="order">
        <orderbar></orderbar>
        <div class="order-content">
            <!-- <Noneorder></Noneorder> -->
            <Noneorder></Noneorder>
        </div>
    </div>
</template>

<script>
//    import Havediscount from"../discount/havediscount"
   import Orderbar from"../common/orderbar" 
   import Noneorder from"./noneorder"
export default {

    name:'orderGet',
    components:{
        Orderbar,
        Noneorder,
        // Havediscount
    }
}
</script>

<style scoped>

</style>
