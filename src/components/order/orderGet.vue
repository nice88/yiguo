<template>
    <div>
        <orderbar></orderbar>
        <Noneorder></Noneorder>
    </div>
</template>

<script>
   import Orderbar from"../common/orderbar" 
   import Noneorder from"./noneorder"
export default {

    name:'orderGet',
    components:{
        Orderbar,
        Noneorder
    }
}
</script>

<style>

</style>
