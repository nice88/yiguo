<template>
  <div class="shopaddress">
    <div class="address">
      <div class="address1">
        <img src="../../assets/img/shopimg/add4.png" alt>
        <p>添加收货地址</p>
        <span></span>
      </div>
    </div>
    <div class="address2">
      <p class="num">
        共
        <span>2</span>件商品
      </p>
      <div class="img">
        <img :src="(item.png)" alt v-for="(item,index) in img">
      </div>
    </div>
    <div class="address3">
      <div class="address-top">
        <span>配送日期</span>
        <p>
          收货地址不支持配送
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
        <input type="text" placeholder="如有特殊要求，请在此留言">
      </div>
    </div>
    <div class="address4">
      <span>优惠券</span>
      <p></p>
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
      ]
    };
  }
};
</script>
<style>
body {
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
</style>
