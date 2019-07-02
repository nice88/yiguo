<template>
<div class="dialog">
      <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
      <div class="dialog-cover back" >
        <div class="dialog-content">
          <p>加入购物车成功</p>
        </div>
      </div>

  </div>


</template>

<script>

export default {
  created () {
    console.log()
  },
  methods: {
    cancel(){
      
    }
  },
}

</script>
<style  scoped>
.dialog {
    position: relative;
    color: #2e2c2d;

  }
   /* 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩 */
  .dialog-cover {
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 .6rem;
  }
  .dialog-content{
    position: absolute;
    top: 50%;
    left:30%;
    height: .43rem;
    width: 1.36rem;
    background: black;
    margin: auto;
    line-height: .43rem;
    border-radius: .05rem;
 }
  .dialog-content p{
    font-size:.14rem;
    color: white;
    text-align: center;
  }

</style>