<template>
    <div>
        <div class="mobile">
            <p>
                在线支付
            </p>
            <div class="payment-in">
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
            </div>
        </div>
        <div class="mobile">
            <p>
                在线支付
            </p>
            <div class="payment-in">
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
                <div class="list list1 line-bottom">
                    <img src="https://img02.yiguo.com/e/web/130101/app/payment/pay02.png" alt="">
                    <p>
                        支付宝网页支付
                    </p>
                    <i class="icon1 active"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    //移动支付
    export default {
        name: "mobilePayment"
    }
</script>

<style scoped>
    .mobile{
        margin-bottom: .088rem;
        background: #fff;
    }
    .mobile>p{
        position: relative;
        font-size: .112rem;
        color: #808080;
        line-height: .385rem;
        padding: 0 .103rem;
    }
    .payment-in{
        margin-left: .088rem;
    }
    .list{
        position: relative;
        height: .474rem;
        padding: .103rem 0 .103rem .474rem;
        box-sizing: border-box;
    }
    .list>img{
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -.162rem;
        display: inline-block;
        width: .355rem;
        height: .325rem;
        background-size: 100%;
    }
    .list>p{
        line-height: .266rem;
        font-size: .136rem;
        color: #333;
    }
    .active{
        display: block;
        position: absolute;
        right: .118rem;
        top: 50%;
        margin-top: -0.08rem;
        width: .16rem;
        height: .16rem;
        background: url(//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png) no-repeat;
        background-size: 100%;
    }
</style>