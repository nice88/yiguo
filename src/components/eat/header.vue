<template>
    <div class="header">
        <div class="header-one">

            <div class="header-one-img">
                <a href="#"><img src="img/guo.png"/><span>做美食</span></a>
            </div>
            <div class="header-one-img">
                <a href="#"><img src="img/book.png"/><span>做美食</span></a>
            </div>
            <div class="header-one-img">
                <a href="#"><img src="img/chahu.png"/><span>生活家</span></a>
            </div>
            <div class="header-one-img">
                <a href="#"><img src="img/daocha.png"/><span>爱试吃</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "header"
        name: "Header"

    }
</script>

<style scoped>
    /*header*/
    .header{
        width:100%;
        height:1.1rem;
        /*background:red;*/
        /*border-bottom:.1rem solid #*/
    }
    .header-one{
        width:2.8rem;
        height:1.2rem;
        /*background:yellow;*/
        margin-left:.3rem;
        display:flex;
        justify-content: center;
        align-items: center;

    }
    .header-one a{
        display:block;
    }
    .header-one-img{
        flex:1;
    }
    .header-one a img:nth-child(1){
        /*padding-right:.13rem;*/
        width:.41rem;
        height:.33rem;
        display:block;
    }
    /*.header-one a img:nth-child(2){*/
    /*width:.61rem;*/
    /*height:.55rem;*/
    /*display:block;*/
    /*}*/
    .header-one a span{
        font-size:.14rem;
        color:#878787;
        display:flex;
    }
</style>