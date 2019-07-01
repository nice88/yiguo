<template>
    <div class="havediscount">
        <ul>
            <li v-for="item in list">
                <div class="lef">
                    <p class="num-p"><span>{{item.number}}</span>元</p>
                    <p>{{item.condition}}</p>
                </div>
                <div class="rig">
                    <p class="type">{{item.type}}</p>
                    <span class="usearea">{{item.usearea}}</span>
                    <span class="time">{{item.time}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"havediscount",
    data(){
        return{
            list:[
                {
                   number:'10' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'20' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'30' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'40' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'50' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'60' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'70' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'50' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'50' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                },
                {
                   number:'50' ,
                   condition:'满99元可用',
                   type:'新人好礼：全网满99减30元券(特殊商品及卡券除外）',
                   usearea:'全场商品可用',
                   time:'2019.06.21 17:19:16-2019.06.28 23:59:59'
                }
            ]
        }
    }
}
</script>

<style scoped>
.havediscount{
    width: 100%;
    overflow: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
}
.havediscount li{
    width: 100%;
    height: .99rem;
    display: block;
    position: relative;
    background: url(//img05.yiguoimg.com/d/web/180509/01319/144911/coupon2.png);
    background-size: 100% 100%;
    margin-bottom: 10px;
}
.havediscount li .lef{
    position: absolute;
    left: 0;
    top: 10px;
    color:#11b57c;
    z-index: 100
}
.havediscount li .lef p{
    text-align: center;
    width: 120px;
    font-size: 12px;
}
.havediscount li .lef p:nth-child(1) span{
    font-size: 44px;
    font-weight: 900;
}
.havediscount li .rig{
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 10px;
    position: absolute;
    right: 0;
    width: 2.35rem;
    text-overflow: ellipsis
}
.havediscount li .rig .type{
    color: #000;
    padding-right: 10px;
    font-size: .15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'Avenir', 'PingFang SC', "\5FAE\8F6F\96C5\9ED1";
}
.havediscount li .rig .usearea{
    padding-top: 5px;
    padding-bottom: 8px;
}
.havediscount li .rig .time ,.usearea{
    display: block;
    font-size: .1rem;
    color: #808080;
    font-family: 'Avenir', 'PingFang SC', "\5FAE\8F6F\96C5\9ED1";
}
</style>
