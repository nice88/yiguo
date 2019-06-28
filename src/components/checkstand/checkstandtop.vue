<template>
    <div class="checkstandtop">
        <p class="titles">
            礼品卡支付
        </p>
        <p class="tit">
            卡包余额不足
        </p>
        <i class="icons">

        </i>
    </div>
</template>

<script>
    export default {
        name: "checkstandtop"
    }
</script>

<style scoped>
    .checkstandtop{
        position: relative;
        padding: .06rem .55rem .06rem .09rem;
        height: .275rem;
        background: #fff;
        margin-bottom: .09rem;
        box-sizing: content-box;

    }
    .titles{
        float: left;
        display:inline-block;
        font-size: .136rem;
        line-height: .275rem;
        color: #808080;

    }
    .tit{
        float: right;
        display:inline-block;
        font-size: .112rem;
        line-height: .275rem;
        padding-right: .088rem;
    }
    .icons{
        position: absolute;
        right: .088rem;
        top: 50%;
        margin-top: -.137rem;
        display: inline-block;
        width: .471rem;
        height: .3467rem;
        background: url(//img07.yiguoimg.com/d/web/180315/01312/145930/disable.png) no-repeat;
        background-size: 100%;
    }
</style>