<template>
    <div class="registerFooter">
        <img src="https://img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt="">
        <div class="read">
            <input type="checkbox">
            <span>我已阅读<i>《易果服务协议》</i>和<i>《隐私策略</i>》</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'registerFooter'
}
</script>

<style>
.registerFooter{
    width: 100%;
    height: 34px;
    margin: 0 auto;
    position: absolute;
    bottom:1.41rem;
    text-align: center
}
.registerFooter img{
    width: 104px;
    margin: 0 auto;
    display: block;
    margin-bottom: .36rem;    
}
.registerFooter .read{
    display: flex;
    justify-content: center;
}
.registerFooter .read input{
    display: block;
}
.registerFooter .read span{
    font-size: 12px;
    display: block;
}
.registerFooter .read span i{
    color: #008842;
    font-style: normal;
}
</style>
