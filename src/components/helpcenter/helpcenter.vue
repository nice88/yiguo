<template>
    <div>
        <div class="wrap">
            <ul class="qalist">
                <li v-for="item in list">
                    <p class="question">
                        <span> {{item.question}}</span>
                        <em class="icon icon_arrow"></em>
                    </p>
                    <div class="answer">
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Question",
    data(){
        return{
            list:[
                {
                  question:" 配送运费如何收取，多少钱包邮？",
                 
                },
                {
                  question:"  配送区域及送达时间？",
                },
                {
                  question:"  下单后何时可以送达？",
                },
                {
                  question:"  可以选择哪些方式付款？",
                },
                {
                  question:"  下错单了，该如何修改？ ",
                },
                {
                  question:"  我的历史订单为什么不见了？ ",
                },
                {
                  question:"  如何申请注销易果账户？ ",
                },
                {
                  question:"  退款何时可以到账？ ",
                },
                {
                  question:"  如何申请退换货？ ",
                },
                {
                  question:"  哪些情况只受理当场投诉？ ",
                },
                {
                  question:"  哪些情况不受理退换货？ ",
                },
                {
                  question:"  哪些情况不属于质量问题? ",
                },
                 {
                  question:"  退货可以退运费吗？",
                },
                 {
                  question:"   退货时，订单中的赠品如何处理？  ",
                },
                 {
                  question:"   退货时，发票需要一起退回吗？  ",
                },
                 {
                  question:"  一张订单可以多次退换货吗？ ",
                },
                 {
                  question:"  我的钱退到哪了？  ",
                },
                 {
                  question:"   什么是易果VIP等级制度？  ",
                },
                   {
                  question:"    订单还没配送到？  ",
                },
                {
                  question:"   什么是易果VIP等级制度？  ",
                },
                {
                  question:"    长时间没有发货怎么办？   ",
                },
                {
                  question:"    邀请码是什么？   ",
                },
                {
                  question:"   现金券如何使用？   ",
                },
                 {
                  question:"    礼品卡（储值卡）如何使用？    ",
                },
                 {
                  question:"   如何将账户余额（预存款）转换为卡包余额礼品（电子礼品卡）？   ",
                },
                 {
                  question:"   配送单如何不显示价格(货到付款除外）？    ",
                },
                 {
                  question:"   如何设置支付密码？    ",
                },
                 {
                  question:"   易果生鲜单用途商业预付卡章程    ",
                },
                
            ]
        }
    }

}
</script>

<style scoped>
.qalist li {
    border-bottom: solid 1px #e1e1df;
    background-color: #fff;
      font-size: 14px;
}
.qalist li .question {
    position: relative;
    padding-right: 26px;
    display: flex;
}
.qalist li .question{
    padding: 12px;
    margin: 0;
    padding-right: 26px;
}
.qalist li .answer{
    padding-top: 0;
}
.question .icon_arrow {
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 10px;
}
.icon_arrow {
    background-image: url(https://img02.yiguo.com/e/web/150722/00982/172232/arrow_right.png);
    width: 8px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
}    
</style>