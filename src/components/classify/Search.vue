<template>
    <div class="search">
        <form action="." class="search-left">
            <i class="iconss"></i>
            <input class="searchs" type="search" placeholder="请输入商品名称">
        </form>
        <span>搜索</span>
    </div>

</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .search{
        position: fixed;
        width: 100%;
        height: .35rem;
        background: #fff;
        z-index: 102;
        padding: .07rem  .09rem;
    }
    .search-left{
        position: relative;
        height: .27rem;
        width: 3.1rem;
        background: #f4f4f4;
        border-radius: 40px;
        padding: 0 .2rem 0 .35rem;
        box-sizing: border-box;
    }
    .iconss{
        position: absolute;
        left: .112rem;
        top: 50%;
        margin-top: -.063rem;
        display: inline-block;
        width: .127rem;
        height: .127rem;
        background: url(//img05.yiguoimg.com/d/web/170830/00913/153914/search.png);
        background-size: 100% 100%;
    }
    .searchs{
        width: 2.37rem;
        height: 100%;
        background: #f4f4f4;
        border: none;
        border-radius: 40px;
        font-size: .118rem;
        line-height: .118rem;
        padding-top: .0148rem;
        display: block;
        outline: none;
        -webkit-appearance: none;
    }
    .search>span{
        position: absolute;
        right: 0;
        top: 0;
        padding-right: .1rem;
        display: block;
        height: .4rem;
        width: .5rem;
        text-align: center;
        line-height: .4rem;
        color: #11B57C;
        font-size: .14rem;
    }
    .boxBg{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.4);
        z-index: 101;
    }
</style>