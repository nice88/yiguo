Administrator 17:32:52
<template>
    <div class="mine">
      <Minetop :inputName="aa"></Minetop>
      <Money></Money>
      <Payment></Payment>
      <Help></help>
      <Footer/>
    </div>
</template>

<script>
import Minetop from'../components/mine/mineTop.vue'
import Money from'../components/mine/money.vue'
import Payment from'../components/mine/payment.vue'
import Help from'../components/mine/help.vue'
import Footer from '../components/common/footer'
      export default {
        name:'mine',
        components:{
          Minetop,
          Money,
          Payment,
          Help,
          Footer
     },
     data(){
       return{
         aa:''
       }
     },
     created(){
      let token =  window.localStorage.getItem('token');
      fetch('http://121.199.63.71:8003/details/', {
      // fetch('http://10.35.162.101:8003/details/', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify({token:token})
         }).then(response => response.json()).then(data => {  
               console.log(data)
               this.aa=data
               console.log(this.aa)
          })
     },    
}
</script>

<style scoped>
.mine{
  background:#f4f4f4;
}
</style>
