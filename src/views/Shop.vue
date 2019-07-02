<template>
  <div class="Shop">
    <div class="Sfirst">
      全场满100元包邮,还差
      <span>100</span>元包邮
    </div>
    <div class="shopp">
      <div class="Ssecond" v-for="(item,index) in shop">
        <div class="roadio">
          <input
            type="checkbox"
            class="checkItem"
            :id="'check'+index"
            name="checkbox"
            v-model="checkeds[index]"
          >
        </div>
        <img :src="item.png">
        <div class="Ssecond1">
          <h2>{{item.span}}</h2>
          <p>
            ￥
            <b>{{item.qian}}</b>
          </p>
        </div>
        <div class="rightBox">
          <div class="del">
            <i class="iconfont" @click="del(index)">&#xe644;</i>
          </div>
          <div class="num">
            <span @click="minius(index)">-</span>
            <input type="text" :value="item.increases">
            <span @click="add(index)">+</span>
          </div>
        </div>
      </div>
    </div>
    <shopping></shopping>
    <div class="shop-right">
      <div class="shop-rigth1">
        <input type="checkbox" @click="checkAll($event)" id="quan">
        <span>全选</span>
      </div>
      <div class="shop-right2">
        <p>
          合计(不含运费)：
          <b>{{sum}}</b>
        </p>
        <span>已优惠: ￥0.00</span>
      </div>
      <div class="shop-rigth3">
        <a href="#" @click.prevent="dianji">{{"去结算("+number+")"}}</a>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import shopping from "../components/shop/shopping";
import Footer from "../components/common/footer";

export default {
  name: "Shop",
  components: {
    shopping,
    Footer
  },
  data() {
    return {
      shop: [
        {
          png:
            "https://img11.yiguoimg.com/d/items/2019/190424/9288737842669208_300.jpg",
          span: "云南精品夏黑葡萄1kg",
          qian: "49.90",
          increases: "1"
        },
        {
          png:
            "https://img11.yiguoimg.com/d/items/2019/190424/9288737842669208_300.jpg",
          span: "云南精品",
          qian: "1000",
          increases: "1"
        }
      ],
      checkeds: [],
      //    created(){
      //     this.pageDate()
      // },
      // methods:{

      //     pageDate(){

      //     fetch('http://121.199.63.71:8004/mine/', {
      //           method: 'get'
      //         }).then(response => response.json()).then(data => {
      //            console.log(data);
      //            this.car=data;
      //         //    console.log(this.car)
      //         })

      //     }
      // },
    };
  },
  methods: {
    dianji() {
      this.$router.push({ path: "/shopaddress" });
      this.Observer.$emit("handle", this.number, this.sum);
    },
    // 删除,
    del(index) {
      this.shop.splice(index, 1); //只需要从数组中移除对应项.
    },
    // 增加
    add(index) {
      this.shop[index].increases++;
    },
    // 减少
    minius(index) {
      if (this.shop[index].increases > 1) {
        //这里添加一个限制，最少要有一个商品
        this.shop[index].increases--;
      }
    },
    checkAll(e) {
      // 点击全选事件函数
      var checkObj = document.querySelectorAll(".checkItem"); // 获取所有checkbox项
      if (e.target.checked) {
        // 判定全选checkbox的勾选状态
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            // 将未勾选的checkbox选项push到绑定数组中
            this.checkeds.push(checkObj[i].value);
          }
        }
      } else {
        // 如果是去掉全选则清空checkbox选项绑定数组
        this.checkeds = [];
      }
    }
  },
  computed: {
    sum: function() {
      let sum = 0;
      for (let i in this.shop) {
        if (this.checkeds[i]) {
          sum += this.shop[i].qian * this.shop[i].increases;
        }
      }
      return sum;
    },

    number: function() {
      let number = 0;
      for (let i in this.shop) {
        if (this.checkeds[i]) {
          number += parseInt(this.shop[i].increases);
        }
      }
      return number;
    }
  }
};
</script>
<style scoped>
.Shop {
  background: #f4f4f4;
}
.rightBox {
  float: right;
  width: 1rem;
  height: 1rem;
}
.Sfirst {
  width: 100%;
  height: 0.4rem;
  font-size: 0.12rem;
  background: #fff9eb;
  line-height: 0.4rem;
  color: #d3b162;
  padding-left: 0.1rem;
  border-top: 1px solid #d3b162;
  border-bottom: 1px solid #d3b162;
  z-index: 1;
  position: fixed;
  top: 0;
}
.Sfirst span {
  color: red;
}
.shopp {
  margin-top: 0.49rem;
}
.Ssecond {
  width: 100%;
  height: 1rem;
  position: relative;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  background: white;
  margin-bottom: 0.09rem;
}
.Ssecond .roadio input {
  position: absolute;
  top: 0.42rem;
  left: 0.09rem;
  width: 15px;
  height: 15px;
}
.Ssecond img {
  width: 0.9rem;
  height: 0.8rem;
  display: block;
  margin-left: 0.4rem;
  margin-top: 0.13rem;
  float: left;
}
.Ssecond .Ssecond1 {
  float: left;
  margin-top: 0.13rem;
}
.Ssecond .Ssecond1 h2 {
  font-size: 0.13rem;
  font-weight: normal;
}
.Ssecond .Ssecond1 p {
  font-size: 0.15rem;
  color: #fb3d3d;
  padding-top: 0.35rem;
  padding-bottom: 0.12rem;
}
.Ssecond .Ssecond1 p b {
  font-weight: 500;
}
.Ssecond .del {
  position: absolute;
  right: 0.15rem;
  top: 0.22rem;
}
.Ssecond .del i {
  font-size: 0.15rem;
  color: #666;
  display: block;
}
.Ssecond .num {
  width: 0.79rem;
  height: 0.21rem;
  margin-top: 0.6rem;
  font-size: 20px;
}
.Ssecond .num span {
  border: 1px solid #ddd;
  width: 0.2rem;
  height: 0.23rem;
  display: inline-block;
  font-size: 15px;
  text-align: center;
  float: left;
}
.Ssecond .num span:nth-child(1) {
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.Ssecond .num span:nth-child(3) {
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.Ssecond .num input {
  width: 0.36rem;
  height: 0.23rem;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ddd;
  float: left;
  outline: none;
}
.shop-right {
  width: 100%;
  height: 0.46rem;
  position: fixed;
  bottom: 0.45rem;
  background: #fff;
  z-index: 100;
}
.shop-rigth1 {
  width: 20%;
  height: 100%;
  padding: 15px 0 15px 15px;
  float: left;
}
.shop-right .shop-rigth1 input {
  display: block;
  float: left;
}
.shop-right .shop-rigth1 span {
  font-size: 0.12rem;
  float: left;
  display: inline-block;
}
.shop-right2 {
  float: left;
  width: 50%;
  height: 100%;
  font-size: 0.11rem;
  text-align: right;
  padding-top: 5px;
}
.shop-right2 p b {
  color: #fb3d3d;
}
.shop-right2 span {
  color: #999;
}
.shop-rigth3 {
  float: left;
  width: 25%;
  height: 100%;

  text-align: center;
  background: #fb3d3d;

  margin-left: 15px;
}
.shop-rigth3 a {
  color: #fff;
  font-size: 0.15rem;
  display: inherit;
  margin-top: 12px;
}
</style>