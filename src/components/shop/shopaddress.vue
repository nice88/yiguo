<template>
  <div class="shopaddress">
    <div class="address" @click.prevent="nihao">
      <div class="address1">
        <img src="../../assets/img/shopimg/add4.png" alt />
        <p>添加收货地址</p>
        <span></span>
      </div>
    </div>
    <div class="address2">
      <p class="num">
        共
        <span>123</span>件商品
      </p>
      <div class="img">
        <a href="#" v-for="(item,index) in img" :key="index">
          <img :src="(item.png)" />
        </a>
      </div>
    </div>
    <div class="address3">
      <div class="address-top">
        <span>配送日期</span>
        <p>
          即可下单,即刻发货
          <span class="span"></span>
        </p>
      </div>
      <div class="address-bottom">
        <span>发票信息</span>
        <p>
          不需要发票
          <span class="span"></span>
        </p>
      </div>
      <div class="addressmd">
        <span class="word">留言：</span>
        <input type="text" placeholder="如有特殊要求，请在此留言" />
      </div>
    </div>
    <div class="address4">
      <span>优惠券</span>
      <p></p>
    </div>
    <div class="address5">
      <div class="div">
        <div class="address51">
          <span>商品合计</span>
          <p>￥123</p>
        </div>
        <div class="address51">
          <span>运费</span>
          <img src="../../assets/img/shopimg/mianyou.png" alt />
          <p>￥0.00</p>
        </div>
      </div>
      <div class="address51 top">
        <span>应付金额</span>
        <p>￥1000</p>
      </div>
    </div>
    <div class="address4">
      <span>U币抵现</span>
      <span class="span">
        可用100U币抵￥100
        <i>￥0</i>
      </span>
      <div class="right">
        <mt-switch v-model="value"></mt-switch>
      </div>
    </div>
    <div class="address4 bottom">
      <span>现金券</span>
      <p></p>
    </div>
    <div class="address6">
      <p class="price">
        应付金额：
        <span class="red">¥414.00</span>
      </p>
      <a href="javascript" @click.prevent="kang">结算</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopaddress",
  data() {
    return {
      img: [
        {
          png:
            "https://img13.yiguoimg.com/d/items/2017/171009/9288713737184073_300.jpg"
        },
        {
          png:
            "https://img13.yiguoimg.com/d/items/2017/171009/9288713737184073_300.jpg"
        },
        {
          png:
            "https://img13.yiguoimg.com/d/items/2017/171009/9288713737184073_300.jpg"
        }
      ],
      value: false
    };
  },
  created() {
    this.pageDate();
  },
  methods: {
    nihao() {
      this.$router.push({ path: "/region" });
    },
    kang() {
      this.$router.push({ path: "/Lcheckstand" });
    },
    pageDate() {
      fetch(
        "http://121.199.63.71:8003/cart/show/?token=54da18428f7e4aaabbb3632c245b07dd",
        {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          method: "post"
        }
      )
        .then(response => response.json())
        .then(data => {
          this.cart_datas = data;
          console.log(this.cart_datas)
        });
    }
  }
};
</script>
<style scoped>
.shopaddress {
  background: #f4f4f4;
}
.address {
  overflow: hidden;
}
.address1 {
  width: 100%;
  height: 0.8rem;
  padding-left: 0.25rem;
  line-height: 0.8rem;
  float: left;
  background-image: url(../../assets/img/shopimg/dot.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 100%;
  background: #fff;
  margin-bottom: 10px;
}
.address1 img {
  width: 0.17rem;
  height: 0.2rem;
  display: block;
  float: left;
  margin-top: 0.3rem;
}
.address1 p {
  font-size: 0.13rem;
  padding-left: 0.15rem;
  display: inline-block;
  float: left;
}
.address1 span {
  float: right;
  display: inline-block;
  transform: translateY(50%) rotate(45deg);
  width: 0.14rem;
  height: 0.14rem;
  border-top: 2px solid #d4d4d4;
  border-right: 2px solid #d4d4d4;
  cursor: pointer;
  margin: 25px;
}
.address2 {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  margin-bottom: 10px;
}
.address2 .num {
  height: 0.37rem;
  font-size: 0.12rem;
  padding-left: 0.1rem;
  line-height: 0.37rem;
  border-bottom: 1px solid #999;
}
.address2 .num span {
  color: #ff6353;
  font-size: 14px;
  padding: 0 4px;
}
.address2 .img {
  width: 100%;
  height: 0.8rem;
  padding: 10px 20px;
}
.address2 .img img {
  width: 0.6rem;
  height: 0.6rem;
  float: left;
}
.address3 {
  width: 100%;
  height: 1.45rem;
  background: #fff;
  margin-bottom: 10px;
}
.address-top {
  width: 100%;
  height: 0.66rem;
  line-height: 0.66rem;
  position: relative;
  border-bottom: 1px solid #999;
}
.address-top span {
  font-size: 0.14rem;
  color: #333333;
  float: left;
  margin-left: 0.1rem;
}
.address-top p {
  float: right;
  font-size: 0.13rem;
  color: #000000;
  margin-right: 30px;
}
.address-top .span {
  transform: translateY(50%) rotate(45deg);
  width: 0.11rem;
  height: 0.11rem;
  border-top: 2px solid #d4d4d4;
  border-right: 2px solid #d4d4d4;
  cursor: pointer;
  position: absolute;
  top: 23px;
  right: 11px;
}
.address-bottom {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
  border-bottom: 1px solid #999;
}
.address-bottom span {
  font-size: 0.14rem;
  color: #333333;
  float: left;
  margin-left: 0.1rem;
}
.address-bottom p {
  float: right;
  font-size: 0.13rem;
  color: #000000;
  margin-right: 30px;
}
.address-bottom .span {
  transform: translateY(50%) rotate(45deg);
  width: 0.11rem;
  height: 0.11rem;
  border-top: 2px solid #d4d4d4;
  border-right: 2px solid #d4d4d4;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 11px;
}
.addressmd {
  width: 100%;
  height: 0.39rem;
  line-height: 0.39rem;
}
.addressmd .word {
  font-size: 0.14rem;
  float: left;
  margin-left: 0.1rem;
}
.addressmd input {
  display: block;
  border: 0;
  height: 100%;
  outline: none;
  margin-left: 0.7rem;
  width: 80%;
}
.address4 {
  width: 100%;
  height: 0.41rem;
  background: #fff;
  line-height: 0.41rem;
  position: relative;
  margin-bottom: 10px;
}
.address4 span {
  font-size: 0.14rem;
  color: #333333;
  float: left;
  margin-left: 0.1rem;
}
.address4 p {
  transform: translateY(50%) rotate(45deg);
  width: 0.11rem;
  height: 0.11rem;
  border-top: 2px solid #d4d4d4;
  border-right: 2px solid #d4d4d4;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 11px;
}
.address5 {
  width: 100%;
  background: #fff;
  margin-bottom: 0.09rem;
}
.div {
  padding-top: 20px;
  border-bottom: 1px solid #999;
  height: 1rem;
}
.address51 {
  font-size: 0.12rem;
  padding-left: 0.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
}
.address51 span {
  color: #808080;
  float: left;
}
.address51 img {
  position: absolute;
  top: 10px;
  width: 70px;
  height: 20px;
  right: 70px;
}
.address51 p {
  color: #333333;
  float: right;
  margin-right: 30px;
}
.top span {
  color: #333;
}
.top p {
  color: #333;
}
.address4 .span {
  font-size: 0.11rem;
  color: #333;
  float: right;
  margin-right: 0.7rem;
}
.address4 .span i {
  color: #ff6353;
  font-style: normal;
  vertical-align: baseline;
}
.address4 .right {
  position: absolute;
  right: 10px;
  top: 6px;
}
.address6 {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #fff;
  font-size: 15px;
}
.address6 .price {
  float: left;
  margin-left: 1.22rem;
}
.address6 .price span {
  color: #fb3d3d;
}
.address6 a {
  float: right;
  display: inline-block;
  width: 30%;
  text-align: center;
  line-height: 0.5rem;
  background: #fb3d3d;
  border: 0;
  color: #fff;
}
.bottom {
  margin-bottom: 0.6rem;
}
</style>
