<template>
    <div class="acount">
        <ul>
            <li>总计:
                <span>￥<i class="zero">0</i></span>
                <span>历史记录<i class="bg"></i></span>
            </li>
        </ul>
        <Nocount></Nocount>
    </div>
</template>

<script>
import Nocount from'./nocount'
export default {
   name:'acount',
   components:{
       Nocount
   }

}
</script>

<style scoped>
.acount{
    width: 100%;
}
.acount ul{
    border-bottom:1px solid #d9d9d9
}
.acount ul li{
    width: 100%;
    height: .4rem;
    background: white;
    line-height: .4rem;
    font-size: 14px;
    padding-left: 10px;
    display: block;
}
.acount ul li span:nth-child(1){
    color: #ff6353;
}
.acount ul li span i:nth-child(1){
    font-style: normal
}
.acount ul li span:nth-child(2){
    display:block;
    float: right;
    color: green;
}
.acount ul li .bg{
    display: block;
    float:right;
    width: .5rem;
    height: .4rem;
    background: url(//img06.yiguoimg.com/d/web/181105/00595/111507/record-icon.png) 15px center no-repeat;
    background-size: auto 20px
}
</style>
