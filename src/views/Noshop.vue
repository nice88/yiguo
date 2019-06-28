<template>
  <div class="noshop">
    <div class="noshop1">
      <div class="noshop2">
        登录可同步购物车内商品
        <span>登录</span>
      </div>
      <div class="Sfirst">
        全场满100元包邮,还差
        <span>100</span>元包邮
      </div>
    </div>
    <div class="nogoods">
      <div class="iconfont">&#xe606;</div>
      <p>购物车空空的，快去逛逛吧！</p>
      <div class="btn">
        <a>去逛逛</a>
      </div>
    </div>
    <shopping></shopping>
    <div class="shop-right">
      <div class="shop-rigth1">
        <input type="checkbox">
        <span>全选</span>
      </div>
      <div class="shop-right2">
        <p>
          合计(不含运费)：
          <b class="red">￥59.70</b>
        </p>
        <span>已优惠: ￥0.00</span>
      </div>
      <div class="shop-rigth3">
        <a href="#" @click.prevent="dianji">去结算(1)</a>
      </div>
    </div>
  </div>
</template>
<script>
import shopping from "../components/shop/shopping";
export default {
  name: "noshop",
  components: {
    shopping
  }
};
</script>

<style scoped>
.noshop {
  background: #f4f4f4;
}
.noshop1 {
  margin-bottom: 10px;
}
.noshop2 {
  width: 100%;
  height: 0.4rem;
  font-size: 0.13rem;
  text-align: center;
  line-height: 0.4rem;
  color: #666;
  background: #fff;
}
.noshop2 span {
  background: #fff;
  outline: none;
  border: 1px solid #999;
  font-size: 14px;
  color: #999;
  padding: 2px 10px;
  margin-left: 10px;
  border-radius: 6px;
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
}
.Sfirst span {
  color: red;
}
.nogoods {
  font-size: 15px;
  background: #fff;
  padding: 0.6rem 0;
  border-bottom: 4px solid #f4f4f4;
}
.nogoods .iconfont {
  font-size: 0.8rem;
  text-align: center;
}
.nogoods p {
  color: #808080;
  text-align: center;
  padding-bottom: 15px;
}
.btn a {
  text-align: center;
  display: inline-block;
  width: 1.38rem;
  height: 0.39rem;
  border: 1px solid #11b57c;
  border-radius: 6px;
  line-height: 0.39rem;
  font-size: 15px;
  color: #11b57c;
  margin-left: 1.15rem;
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
