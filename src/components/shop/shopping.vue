<template>
  <div class="shopping">
    <h2>猜你喜欢</h2>
    <div class="shop-bottom" v-for="(item,index) in into">
      <div class="shop-img">
        <img :src="item.img">
      </div>
      <div class="text">
        <h2>{{item.h2}}</h2>
        <p>
          ￥
          <b>{{item.qian}}</b>
        </p>
      </div>
      <div class="btn">
        <img src="../../assets/img/shopimg/add.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopping",
  data() {
    return {
      into: [
        {
          img:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          h2: "原膳南美白虾仁（中）250g gwqertyuiouytredsdfghj",
          qian: "32.90"
        },
        {
          img:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          h2: "原膳南美白虾仁（中）250g",
          qian: "32.90"
        },
        {
          img:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          h2: "原膳南美白虾仁（中）250",
          qian: "32.90"
        },
        {
          img:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          h2: "原膳南美白虾仁（中）250g",
          qian: "32.90"
        }
      ]
    };
  }
};
</script>
<style>
.shopping {
  background: #fff;
  overflow: hidden;
  margin-bottom: 1rem;
}
.shopping h2 {
  font-size: 0.12rem;
  text-align: center;
  font-weight: 300;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #000;
  text-align: center;
}
.shop-bottom {
  width: 50%;
  height: 2.08rem;
  background: #fff;
  float: left;
}
/* .shop-bottom1 {
  width: 1.5rem;
  height: 2.08rem;
  margin-left: 0.22rem;
} */
.shop-img img {
  width: 1.5rem;
  height: 1.4rem;
  margin: 0 auto;
}
.text h2 {
  font-size: 0.11rem;
  padding-top: 5px;
  text-align: center;
}
.text p {
  color: #808080;
  font-size: 0.09rem;
  color: #fb3d3d;
  padding: 6px 0;
  float: left;
  margin-left: 17px;
}
.btn {
  float: right;
  padding: 6px 0;
}
.btn img {
  width: 15px;
  height: 15px;
  margin-right: 0.1rem;
}
</style>