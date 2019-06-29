import Vue from 'vue'

 //注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{//this.$store.state.***
    car:[] //将购物车中的商品数据，用一个数组存储起来
    //{id:商品的id,count:要购买的数量，price:商品的价格，selected:false}
  },
  mutations:{//this.$store.commit.***(方法名称，按需传递唯一的参数)
    addToCar(state,goodsinfo){
      //点击加入购物车将商品信息保存到store 中的car上
      //分析
      //1、如果购物车中有之前对应的商品，那么只需更新数据++
      //2、如果没有则直接把数据push 到car 中即可
      var flag=false   //假设没有找到对应的商品
      state.car.some(item=>{
        if(item.id=goodsinfo.id){
            item.count += parseInt(goodsinfo.count)
            flag=true
            return true
        }
      
      
      }) 
      //如果最后循环完毕得到的false则直接push
      if(!flag){
        state.car.push(goodsinfo)
      }
    }
  },
  getters:{//this.$store.getters.***
  }

})
