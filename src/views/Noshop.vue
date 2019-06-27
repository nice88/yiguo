<template>
  <div class="noshop">
    <div class="noshop1">
      <div class="noshop2">
        登录可同步购物车内商品
        <span>登录</span>
      </div>
    </div>
    <!-- <shopping></shopping> -->
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
  background: #fff;
}
.noshop2 {
  width: 100%;
  height: 0.4rem;
  font-size: 0.13rem;
  text-align: center;
  line-height: 0.4rem;
  color: #666;
}
.noshop2 span {
  background: #fff;
  outline: none;
  border: 1px solid #999;
  font-size: 14px;
  color: #999;
  padding: 5px 10px;
}
</style>
