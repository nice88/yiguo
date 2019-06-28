<template>
    <div class="discountbar">
        <ul class="discountbar-content">
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
   name:"discountbar",
   data(){
       return{
           list:[
               {
                   path:'/discountAll',
                   tit:'未使用'
               },
                {
                   path:'/discountUse',
                   tit:'已使用'
               },
                {
                   path:'/discountOverdue',
                   tit:'已过期'
               }
           ]
       }
   }
}
</script>

<style>

.discountbar{
    width: 100%;
    background: #ffffff;
    height: .4rem;
}
.discountbar .discountbar-content{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.discountbar .discountbar-content li{
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
.discountbar .discountbar-content li i{
   font-style: normal;
   display: block;
}
.discountbar li .active{
   color:#11B57C;
   border-bottom: 2px solid #11B57C;
   box-sizing: border-box;
}
.discountbar li.router-link-active{
   color:#11B57C;
   border-bottom: 2px solid #11B57C;
   box-sizing: border-box;
}
</style>
