<template>
    <div class="noneorder">
        <img src="https://img07.yiguoimg.com/d/web/180319/00361/102247/order-icon@2x.png" alt="">
        <p>您还没有相关订单</p>
        <a href="#">去逛逛</a>
    </div>
</template>

<script>
export default {
    name:"noneorder"
}
</script>

<style>
.noneorder{
    padding-top: .9rem;
    position: relative;
    text-align: center;
}
.noneorder img{
    width: 1.08rem;
    height: 1.08rem;
    display: block;
    margin: 0 auto;
}
.noneorder p{
    font-size: 15px;
    color: #808080;
    text-align: center;
    padding-top: 15px;
    line-height: 13px;
}
.noneorder a{
    display: block;
    width: 1.1rem;
    height: .26rem;
    text-align: center;
    border: 1px solid #11b57c;
    color: #11b57c;
    border-radius: 3px;
    font-size: 14px;
    line-height: .26rem;
    margin: 0 auto;
    background: #fff;
    margin-top:.28rem;
}
</style>
