const state = {
    nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1,
    
      //this.$store.state.***
      car:[], //将购物车中的商品数据，用一个数组存储起来
      //{id:商品的id,count:要购买的数量，price:商品的价格，selected:false}
    num:0  
};

const actions = {
  
};
const mutations = {
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
    },
    addToCar(state , goodsinfo){
        //点击加入购物车将商品信息保存到store 中的car上
        //分析
        //1、如果购物车中有之前对应的商品，那么只需更新数据++
        //2、如果没有则直接把数据push 到car 中即可
        var flag=false   //假设没有找到对应的商品
        state.car.some(item=>{
          if(item.id=goodsinfo.id){
              item.count += Number(goodsinfo.count)
              flag=true
              return true
          }
              
        }) 
        //如果最后循环完毕得到的false则直接push
        if(!flag){
          state.car.push(goodsinfo)
        }
      },
      addNum(state,num){
       state.num= Number(num++)
      }
      
};
const getters={   //this.$store.getters.***
    //相当于计算属性 也相当于filter
   getAllCount(state){
        var c =0;
        state.car.forEach(item=>{
          c+=item.count
        })
        return c;
       
      }
};
export default {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}