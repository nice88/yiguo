<template>
    <div>
        <checkstandtop></checkstandtop>
        <mobilePayment></mobilePayment>
    </div>
</template>

<script>
    import checkstandtop from '../components/checkstand/checkstandtop'
    import mobilePayment from '../components/checkstand/mobilePayment'
    export default {
        name: "Lcheckstand",
        components:{
            checkstandtop:checkstandtop,
            mobilePayment:mobilePayment,
        }
    }
</script>

<style scoped>

</style>