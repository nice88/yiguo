<template>
    <!--content-->
    <div class="M-content">
        <!--present-->
        <div class="present">
            <div class="present-one">
                <div class="present-one-one">
                    <img src="img/present.png"/>
                    <img src="img/beef.jpg"/>
                    <p>玺宴澳洲肥牛卷350g</p>
                    <span class="mr1-icon-red">0</span><span class="mr1-icon-small">.00</span><del class="dell">49.00</del><span class="count1">x2</span>
                    <a href="#"><button class="button1">加入物购车</button></a>

                </div>
            </div>
            <div class="present-two">
                <div class="present-two-two">
                    <img src="img/present.png"/>
                    <img src="img/beef.jpg"/>
                    <p>玺宴澳洲肥牛卷350g</p>
                    <span class="mr-icon-red">0</span><span class="mr-icon-small">.00</span><del class="del">49.00</del><span class="count">x2</span>
                    <a href="#"><button class="button">加入购物车</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "M-content"
    }
</script>

<style scoped>
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