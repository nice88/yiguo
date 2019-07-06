<template>
  <div>
    <div class="group-floor" v-for="item in data_chosen" :key="item.id">
      <a href="#" class="floor-img">
        <img :src="item.img" alt />
      </a>
      <div class="slip">
        <div class="product-list clear noFloorImg" v-for="items in (item.listimg)" :key="items.id" >
          <div class="product-list-in">
            <div class="proitem">
              <div class="pic">
                <a href="#" @click="handleToDetail(items.id)">
                  <img :src="items.goods_img" alt />
                </a>
                <div class="saletip">
                  <span>原价{{items.marketprice}}</span>
                </div>
              </div>
              <div class="info">
                <p class="name">
                  <a href>{{items.name}}</a>
                </p>
                <div class="price">
                  <strong>￥{{items.price}}</strong>
                  <i class="price-addcart" @click="addToShopCar(items.id,items.price)"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link class="more" to="./More">
          <p class="hot">
            查看更多
            <i></i>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
        
<script>
import Bus from "../../../../Bus";
export default {
  name: "Group",
  data() {
    return {
      data_chosen: [],

     
      goodsinfo:{},
      selectedCount: 1 //保存用户选中的数量
    };
  },

  methods: {
    addToShopCar(id,price) {
      //{id:商品的id,count:要购买的数量，price:商品的价格}
      //拼接出一个要保存到store 中car数组中 商品信息对象
      var goodsinfo = {
        id: id,
        count: this.selectedCount,
        price: price
      };
      console.log(goodsinfo)
      //调用store中的mutations来将商品加入购物车中
      this.$store.commit("city/addToCar", goodsinfo);

      //aqwe
        //获取商品store中的id,然后拼接出一个用逗号分隔的字符串
      var idArr=[];
      console.log(this.$store.state.city.car)
      this.$store.state.city.car.forEach(item=>idArr.push(item.id))
      console.log(idArr)
      // //如果没有商品，则直接返回，不需要请求数据
      if(idArr.length<0){
        return;
      }



        var myToken= window.localStorage.getItem("token");
        this.axios({
          method: "post",
          url: "http://121.199.63.71:8003/cart/add/"+idArr.join(",")+"/?token="+myToken,
        });




    },

    handleToDetail(id){
      this.$router.push({
        path:"/details",
        query:{
          id:id
        }
      })
    }
  },
  mounted() {
    this.axios.get("http://121.199.63.71:8003/home/index/").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.data_chosen = res.data.data_chosen;
        
      }
    });
  },

};
</script>

<style scoped>
.group-floor {
  width: 100%;
}
.group-floor .floor-img,
.group-floor .floor-img img {
  width: 100%;
  height: 2.5rem;
}
.group-floor .product-list {
  height: 182px;
  width: 100%;
}
.group-floor .product-list:last-of-type {
  margin-right: 0.2rem;
  width: 100%;
}
.slip {
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 0.04rem;
  white-space: nowrap;
  display: flex;
}
.group-floor .product-list-in {
  padding-left: 0.1rem;
}
.group-floor .proitem {
  display: inline-block;
  background: #fff;
  margin-right: 0.01rem;
  border-radius: 0.04rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.group-floor .proitem .pic {
  position: relative;
  height: 1.24rem;
}
.group-floor .proitem .pic a {
  display: inline-block;
}
.group-floor .proitem .pic a img {
  width: 1.24rem;
  height: 1.24rem;
  border-radius: 0.2rem 0.2rem 0 0;
}
.group-floor .proitem .saletip span {
  border: none;
  background: #fb3d3d;
  color: #fff;
  font-weight: 700;
  font-size: 0.1rem;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  border-radius: 14px;
  width: 0.51rem;
  height: 0.18rem;
  line-height: 0.18rem;
  text-align: center;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 14px;
}
.group-floor .proitem .info {
  box-sizing: border-box;
  width: 1.24rem;
  text-align: left;
  padding-left: 0;
}
.proitem .name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 0.22rem;
  display: flex;
  margin-top: 4px;
}
.group-floor .proitem .price {
  height: 0.33rem;
  font-size: 11px;
  color: #8d8a8a;
}
.proitem .price strong {
  font-size: 0.14rem;
  font-weight: bold;
  color: #fb3d3d;
}
.info .price .price-addcart {
  width: 0.19rem;
  height: 0.19rem;
  background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png)
    no-repeat;
  background-size: 100% 100%;
  float: right;
  border-radius: 50%;
  background-color: #01b27a;
}
.proitem .name a {
  color: #333;
  font-size: 11px;
  display: inline-block;
  margin-left: 9px;
}
.group-floor .more .hot {
  position: absolute;
  top: 50%;
  width: 0.14rem;
  margin-top: 1px;
  white-space: normal;
  font-size: 0.1rem;
  color: #8d8a8a;
}
.group-floor .more {
  position: relative;
  top: 0;
  left: -14px;
  display: inline-block;
  width: 0.4rem;
  height: 1.47rem;
}
.group-floor .more .hot i {
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEy0lEQVRYw9WZX2iXVRjHP3uLldjcdtUuFkEJYknsJsNiKo5WrVyURH8RLIg5TUdHHoOiKIrmY2e6ws2I1EKYF0W1wbRswzUqsos0WhJkN/PCrqbbygpkXZzn3e/db1vs976/OTo353fO+77f5/M773mf85znlJCheNXrgbVALXALsAy4DlgCjALjwC/Az8AgMOBEzqe1V5ICcDHQBNwH1KWw2QccAzqdyB+FPBgVCNoG/Ai8ZaAjwMfAc9auBiqcSAlQYe06u/6R3V8H7AbGvWpn0UfWqz4OCFBjXZ8D+4GjTuTvAv7sNcC9wGag3uyfAtSJdGWG9aoHgE3W/BbY7kS+L2REZtG9HWgHVlnXQSfydCpYr1oOHAYeAP4CHGGeTWQFTdgoIYyyB64FeoEnnMjFOcN61QrgE8KXPgw0OpFTxYKcwV4N8ClwI3ACeMiJXMi/b7YP7EMDPQPcNZ+gAKZfa/bWmv1pZRqszdH1wDmg3okMzydoAniY8NGdA9Z71YP590yZBl71MaCLMEdXzfeIzlRsSnwDLCLM30kvkT+yO63esRCgMDkldlhTktcmYc1B1xDcU8dCgCZKp3HUeFUfd5YY6GLCOj4B3FGoH/Wqewi++E0nsqsYtF51JfAd8CtwmxO5FI9sk9VfpHT4m4FyoNWr7kzx/LTiRE4Cx4GlQDPkpkGD1ftTar+f+N3qVVuKAUxuOjYARF61ClhHCDJ6U4puA44k2m1edUsRYHuNa51XrYqA1Xahz4n8k0bRiVwGniJEVhC+hXe86jNZSI2nz5qrI8LKAfBVRuHLwJNAdwL4Xa+6MYtugqs2AlZY46eMovFIPAIcta6rgANe9dEMsjHXiojwtUFwEZmLAW8AvkwAH/aqD6eUPGv1TRHB5QBcTCk2E/Al4EFyr/BqoMurNqSQu2B1ZQSUmYHRYsGa3p/A/YR1HqCUqS5urjoxV1kEjAF41SXFhDVD48DJRNfvhWokuMYicq+/vFChORh6FWix5gTQmkKmwuqRiNyHtTSF0H+Bvgi8nOhqcSJHUkjdbPVvEQnXUERQB7ye6HJO5O2UcrdaPRQRMiWQW8mygm4j5BXi8pITacsgucbqwYice6nzqqUZQZ8F9ia6XnMib2TQKyWX9RmILPfUD1SSi77SCG8iRG3xVmmXE3kly583nkqg34mcj0PEONpqSqPoVTcA7yVA9zqRFzKCgsWxMV8MG8ex9ZYpKbRsJyyrEGLQ57NS2k7hboK36piEtWxe/ArbLVNSSPmA4K/bga1ZszZmf481u235nrYV/4GwadzqRPZlHZ0MsM3APuC0E6mJ+/O34vFmb7ft3xcCtIac65uy+ZwCayvMIUKCocerVl9h0Gqgx+wfyk+DzpaY6yakkM4A91yJFJJXvYGQ910O9DiRxvx7ZkvMbSRk85YDX8/3lDD9QbN3wuxPK////GyeYH7mu8USEFlBVxLc053WlT7znSecf6ZwnOBajhV4plBKOOVpJqQ3AU4TlubsZwp5xjzQSC72HSHs6weAIcKZ17gTGfWqZYQt0zJCmLeGEJRU2rNngc+ciJur/TTnYIuALYRTlzTnYP2ErXqH7dPmXAqGzQOvshGrtdGLTxjLCFnJMcJoD1GEE8Z/AbWUqQa1uD13AAAAAElFTkSuQmCC)
    no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 2px;
  top: 0.55rem;
}
</style>
