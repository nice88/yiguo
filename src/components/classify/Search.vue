<template>
    <div class="search">
        <form action="." class="search-left">
            <i></i>
            <input type="search" placeholder="请输入商品名称">
        </form>
        <span></span>
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
        box-sizing: border-box;
        z-index: 102;
        padding: .08rem  .1rem;
    }
    .search-left{
        position: relative;
        height: .9rem;
        width: 6.84rem;
        background: #f4f4f4;
        border-radius: 20px;
        padding: 0 .7rem 0 1.05rem;
        box-sizing: border-box;
    }
</style>