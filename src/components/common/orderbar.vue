<template>
    <div class="order">
        <ul class="order-Content">
            <router-link v-for="(item,index) in list"
            tag="li"
            :to="item.path">
            <i v-html="item.tit"></i>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'order',
    data(){
        return{
            list:[
                {
                    tit:"全部",
                    path:'/orderAll'
                },
                {
                    tit:"待支付",
                    path:'/orderPay'
                },
                {
                    tit:"待收货",
                    path:'/orderGet'
                },
                {
                    tit:"待评价",
                    path:'/orderSay'
                }
            ]
        }
    }
}
</script>

<style scoped>
.order{
    width: 100%;
    background: #ffffff;
    height: .4rem
}
.order .order-Content{
    display: flex;
    justify-Content: space-around;
    align-items: center;
}
.order .order-Content li{
    display: block;
    flex: 1;
    text-align: center;
    font-size: 13px;
    color: #808080;
    overflow: hidden;
    box-sizing: border-box;
    font-family: '黑体';
    line-height: .4rem;
    overflow: hidden;
}
.order .order-Content li i{
   font-style: normal;
   display: block;
}
.order li .active{
   color:#11B57C;
   border-bottom: 2px solid #11B57C;
   box-sizing: border-box;
}
.order li.router-link-active{
   color:#11B57C;
   border-bottom: 2px solid #11B57C;
   box-sizing: border-box;
}
</style>
