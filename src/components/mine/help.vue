<template>
    <div class="help">
        <ul>
            <li v-for="(item,index) in list">
                <i>
                    <img :src="item.icon" alt="">
                </i>
                <p>{{item.tit}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"help",
    data(){
        return{
            list:[
                {
                    icon:"https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png",
                    tit:"优惠券"
                },
                 {
                    icon:"https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png",
                    tit:"充值卡"
                },
                 {
                    icon:"https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png",
                    tit:"礼品兑换券"
                },
                 {
                    icon:"https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png",
                    tit:"帮助中心"
                },
                 {
                    icon:"https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png",
                    tit:"收货地址"
                },
                 {
                    icon:"https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png",
                    tit:"我的团购"
                },
                 {
                    icon:"https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png",
                    tit:"账户余额"
                },
                 {
                    icon:"https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png",
                    tit:"在线客服"
                }
            ]
        }
    }
}
</script>

<style scoped>
.help{
    background: white;
    width: 100%;
}
.help ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position:relative;
}
.help ul li{
    padding-top:12px;
    padding-bottom:12px;
    border-bottom: 1px solid #f4f4f4;
}
.help ul li i{
    width:.32rem;
    display: block;
    text-align: center;
    margin: 0 auto;
}
.help ul li img{
    width:100%;
    height: 100%;
    margin: 4px auto;
    display: block;
}
.help ul li {
    font-size: 12px;
    font-family: "微软雅黑";
    text-align: center;
    width: 25%;
}
</style>
