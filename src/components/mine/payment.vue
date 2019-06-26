<template>
    <div class="payment">
        <ul class="paymentList-one">
            <li class="payment-content" v-for="(item,index) in list">
                <i>
                    <img class="icon" :src="item.icon" >
                 </i>
                <p>{{item.tit}}</p>
            </li>
            <span class="bg"></span>
        </ul>
    </div>
</template>

<script>
export default {
    name:"payment",
    data(){
        return{
            list:[
                {
                    icon:"https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png",
                    tit:"待支付"
                },
                 {
                    icon:"https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png",
                    tit:"待收货"
                },
                 {
                    icon:"https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png",
                    tit:"评价送悠币"
                },
                 {
                    icon:"https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png",
                    tit:"在线退换货"
                },
                 {
                    icon:"https://img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png",
                    tit:"全部订单"
                }
            ],
        }
    }
}
</script>

<style scoped>
.payment{
    width: 100%;
    height:.72rem;
    background: #ffffff;
    margin: 12px auto
}
.payment .paymentList-one{
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
}
.payment .paymentList-one .payment-content i{
    width:.22rem;
    display: block;
    text-align: center;
    margin: 0 auto;
}
.payment .paymentList-one .payment-content img{
    width:100%;
    height: 100%;
    margin: 12px auto;
    display: block;
}
.payment .paymentList-one .payment-content {
    font-size: 12px;
    font-family: "微软雅黑";
    text-align: center;
    width: 20%;
}
.bg{
    display: block;
    height: .72rem;
    width: 5px;
    background: url("https://img07.yiguoimg.com/d/web/180313/01318/155922/xian.png") no-repeat 0 0;
    position: absolute;
    right: .68rem;
    top:0;
    background-size: 100% 100%;
}
</style>
