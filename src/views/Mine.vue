<template>
    <div class="mine">
      <Minetop></Minetop>
      <Money></Money>
      <Payment></Payment>
      <Help></help>
      <Footer></Footer>
    </div>
</template>

<script>
import Minetop from'../components/mine/mineTop.vue'
import Money from'../components/mine/money.vue'
import Payment from'../components/mine/payment.vue'
import Help from'../components/mine/help.vue'
import Footer from'../components/common/footer'
      export default {
        name:'mine',
        components:{
          Minetop,
          Money,
          Payment,
          Help,
          Footer
     }
}
</script>

<style scoped>
.mine{
  background:#f4f4f4;
}
</style>
