<template>
    <div>
        <Orderbar></Orderbar>
        <Noneorder></Noneorder>
    </div>
</template>

<script>
import Noneorder from'../components/order/noneorder'
import Orderbar from'../components/common/orderbar'
export default {
    name:'order',
    components:{
        Orderbar,
        Noneorder,
    }
}
</script>

<style>

</style>
