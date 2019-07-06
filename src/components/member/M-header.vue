<template>
    <!--header-->
    <div class="M-header">
        <!--top-->
        <div class="top">
            <p>北京</p>
        </div>
        <!--banner-->
        <div class="banner">
            <a href="#"><img src="img/banner1.jpg"/></a>
        </div>
        <div class="box">

        </div>
        <!--规则-->
        <div class="rule">
            <p>规则说明</p>
            <div class="ru">
                <div class="ru-one">
                    <span>银卡</span><span>会员</span>
                </div>
                <div class="ru-one ru-two">
                    <span>金卡</span><span>会员</span>
                </div>
                <div class="ru-one ru-three">
                    <span>白金卡</span><span>会员</span>
                </div>
            </div>
        </div>
        <div class="rule-one">
            <p>每个礼包仅能放入购物车一次，且收货城市需和当前城市一致~</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "M-header"
    }
</script>

<style scoped>
    /*top*/
    .top{
        width:100%;
        height:0.35rem;
        background:#fff9ec;
        position:relative;
    }
    .top p{
        font-size:.12rem;
        color:#000000;
        position:absolute;
        top:.1rem;
        left:1.7rem;
    }
    /*banner*/
    .banner{
        width:100%;
        height:2.175rem;
        /*background:blue;*/
    }
    .banner img{
        width:100%;
        height:2.175rem;
    }
    .box{
        width:100%;
        height:0.09rem;
        background:white;
    }
    .rule{
        width:100%;
        height:1.475rem;
        background:#fee2c9;
    }
    .rule p{
        font-size:14px;
        color:#808080;
        padding-left:3.02rem;
        padding-top:.1rem;
    }
    .rule-one{
        width:100%;
        height:.405rem;
        background:#fff9ec;
        /*align-items: center;*/
    }
    .rule-one p{
        font-size:12px;
        color:#858585;
        text-align:center;
        line-height:.405rem;
        /*align-items: center;*/
    }
    .ru{
        width:100%;
        height:1.27rem;
        /*background:red;*/
        position:relative
    }
    .ru-one{
        width:.50rem;
        height:.50rem;
        background:#fc6924;
        border-radius:.50rem;
        border:5px solid #ee5c50;
        position:absolute;
        top:.29rem;
        left:.28rem;
        display:flex;
        flex-direction:column;
        justity-content:content;
        align-items:center;
    }

    .ru-one  span{
        font-size:.1rem;
        color:white;
        display:block;
        float:left;
        text-align:center;
        flex:1;
        display:flex;
        justity-content:content;
        align-items:center;
    }
    .ru-two{
        width:0.875rem;
        height:0.875rem;
        top:.1rem;
        left: 1.4rem;
    }
    .ru-two span{
        font-size:16px;
    }
    .ru-three{
        top:.29rem;
        left: 2.8rem;
    }
</style>