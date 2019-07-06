<template>
    <div>
        <yg-member-M-header/>
        <yg-member-M-content/>
        <yg-member-M-footer/>
    </div>

</template>

<script>
    import memberheader from "./M-header"
    import membercontent from "./M-content"
    import memberfooter from "./M-footer"

    export default {
        name: "member",
        components:{
            "yg-member-M-header":memberheader,
            "yg-member-M-content":membercontent,
            "yg-member-M-footer":memberfooter,
        }
    }
</script>
<style>
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
    }
    .ru-one a{
        display:block;
    }
    /*.ru-one a span{*/
        /*font-size:.1rem;*/
        /*color:white;*/
        /*display:block;*/
        /*width:.2rem;*/
        /*height:.3rem;*/
        /*float:left;*/
        /*text-align:center;*/
        /*line-height:.3rem;*/

    /*}*/
    .ru-two{
        width:0.875rem;
        height:0.875rem;
        background:#fc6924;
        border-radius:.50rem;
        border:5px solid #ee5c50;
        position:absolute;
        top:.15rem;
        left:1.3rem;
    }
    .ru-two a{
        display:block;
    }
    .ru-two a span{
        font-size:.1rem;
        color:white;
        display:block;
        float:left;
        width:.2rem;
        height:.2rem;
        text-align:center;
        line-height:.2rem;
        padding-top:.2rem;
        padding-left:.33rem;
    }
    .ru-three{
        width:.50rem;
        height:.50rem;
        background:#fc6924;
        border-radius:.50rem;
        border:5px solid #ee5c50;
        position:absolute;
        top:.29rem;
        left:2.8rem;
    }
    .ru-three a{
        display:block;
    }
    .ru-three a span{
        font-size:.1rem;
        color:white;
        display:block;
        width:.3rem;
        height:.3rem;
        float:left;
        text-align:center;
        line-height:.3rem;
    }

    .present{
        width:100%;
        height:5.0rem;
        background:#f1f2f6;
        padding-top:.1rem;
    }
    .present-one{
        width:3.58rem;
        height:2.40rem;
        background:white;
        margin:0 auto;
    }
    .present-one-one{
        width:3.56rem;
        height:.36rem;
        background:blue;
        position:relative;
        top:0rem;
        left:.02rem;
    }
    .present-one-one img{
        width:3.56rem;
        height:.36rem;
    }
    .present-one-one img:nth-child(2){
        width:1.5rem;
        height:1.5rem;
    }
    .present-one-one p{
        font-size:14px;
        color:#818181;
        display:block;
        position:absolute;
        top:.55rem;
        left:1.6rem;
    }
    .mr1-icon-red{
        font-size:.2rem;
        color:#fc6458;
        position:absolute;
        top:1.11rem;
        left:1.6rem;
    }
    .mr1-icon-small{
        font-size:.1rem;
        color:#fc6458;
        position:absolute;
        top:1.19rem;
        left:1.8rem;
    }
    .dell{
        font-size:.14rem;
        color:#cfcfcf;
        position:absolute;
        top:1.18rem;
        left:2.3rem;
    }
    .count1{
        font-size:.2rem;
        color:#878787;
        position:absolute;
        top:1.1rem;
        left:3.3rem;
    }
    .button1{
        width:3.275rem;
        height:.335rem;
        background:red;
        position:absolute;
        top:1.96rem;
        left:.2rem;
        border:none;
        border-radius:.1rem;
        font-size:.2rem;
        color:white;

    }
    .present-two{
        width:3.58rem;
        height:2.2rem;
        background:white;
        margin:0 auto;
        margin-top:.2rem;
        position:relative;
    }
    .present-two-two{
        width:3.56rem;
        height:.36rem;
        background:blue;
        position:relative;
        top:0rem;
        left:.02rem;
    }
    .present-two-two img{
        width:3.56rem;
        height:.36rem;
    }
    .present-two-two img:nth-child(2){
        width:1.5rem;
        height:1.5rem;
    }
    .present-two-two p{
        font-size:14px;
        color:#818181;
        display:block;
        position:absolute;
        top:.55rem;
        left:1.6rem;
    }
    .mr-icon-red{
        font-size:.2rem;
        color:#fc6458;
        position:absolute;
        top:1.11rem;
        left:1.6rem;
    }
    .mr-icon-small{
        font-size:.1rem;
        color:#fc6458;
        position:absolute;
        top:1.19rem;
        left:1.8rem;
    }
    .del{
        font-size:.14rem;
        color:#cfcfcf;
        position:absolute;
        top:1.18rem;
        left:2.3rem;
    }
    .count{
        font-size:.2rem;
        color:#878787;
        position:absolute;
        top:1.1rem;
        left:3.3rem;
    }
    .button{
        width:3.275rem;
        height:.335rem;
        background:red;
        position:absolute;
        top:1.75rem;
        left:.2rem;
        border:none;
        border-radius:.1rem;
        font-size:.2rem;
        color:white;

    }

</style>

