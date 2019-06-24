<template>
    <div class="first-screen-news">
       <i class="title">
       </i>
       <div class="swiper-container-news swiper-container-vertical">
           <div class="swiper-wrapper">
               <div class="swiper-slide">营业资质公告，详情请点击查询</div>
               <div class="swiper-slide">货到付款功能下线公告</div>
               <div  class="swiper-slide">不良信息投诉与举报</div>
                <div  class="swiper-slide">货到付款功能下线公告</div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    name:"Bannernext",

}
</script>

<style scoped>
.first-screen-news{
box-sizing: border-box;
height: .33rem;
background: #fff;
padding-left:.05rem;
position: relative;
}
.first-screen-news .title {
position: absolute;
       width: .71rem;
    height: 0.15rem;
background: url(//img06.yiguoimg.com/e/web/161222/018522/134216/news.png) no-repeat;
background-size: 100% 100%;
left: 10px;
top: 9px;
}
.first-screen-news .swiper-container-news {
    width: 75%;
    height: .33rem;
    margin-left: .83rem;
    overflow: hidden;
}
.swiper-container-news{
    font-size:.14rem;
}
.swiper-container-news .swiper-wrapper .swiper-slide{
    line-height: .33rem; 
}
</style>
