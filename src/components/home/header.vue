<template>
    <div class="header">
        <div class="first-screen-search">
            <a href="javascript:;" class="btn"></a>
            <span class="btn-search">请输入商品名称</span>
        </div>
        <router-link class="first-screen-adress" to="./City">
           {{$store.state.city.nm}}
            <i class="arrow"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Header",
}
</script>

<style scoped>
.header{
    z-index:30;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: .38rem;
    background: -webkit-gradient(linear,left top, right top,from(#39da85),to(#01b27a));
    background: linear-gradient(90deg,#39da85,#01b27a);
    padding-top: 4px;
    position: fixed;
    left:0;
    top:0;   
}
.first-screen-search {
   position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 80%;
    background: #fff;
    height: .3rem;
    border-radius: .3rem;
    left: .66rem;
}
.first-screen-search .btn {
        position: absolute;
    background: url(//img07.yiguoimg.com/d/web/190515/00191/152133/home-search.png) no-repeat;
    background-size: 100% 100%;
    width: .2rem;
    height: .2rem;
    top: 4px;
    left: 4px;
}
.first-screen-search .btn-search {
       position: absolute;
    color: #999;
    font-size: .14rem;
    top: 4px;
    left: .24rem;
}
.first-screen-adress {
       position: absolute;
    color: #fff;
    font-size: .14rem;
    top: 8px;
    left: 10px;
}
.first-screen-adress .arrow {
   display: inline-block;
    background: url(//img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png) no-repeat;
    background-size: 100% 100%;
    width: .12rem;
    height: .07rem;
    margin-left: 3px;
}
</style>
