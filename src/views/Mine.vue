<template>
    <div class="mine">
      <Minetop></Minetop>
      <Money></Money>
      <Payment></Payment>
      <Help></help>
<<<<<<< HEAD
      <Footer></Footer>
=======
      <Footer/>
>>>>>>> 03ce1c4789de67a25aaeb4a612be86a64d409de3
    </div>
</template>

<script>
import Minetop from'../components/mine/mineTop.vue'
import Money from'../components/mine/money.vue'
import Payment from'../components/mine/payment.vue'
import Help from'../components/mine/help.vue'
<<<<<<< HEAD
import Footer from'../components/common/footer'
=======
import Footer from '../components/common/footer'
>>>>>>> 03ce1c4789de67a25aaeb4a612be86a64d409de3
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
