<template>
     <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#"><img src="https://img14.yiguoimg.com/d/items/2019/190524/9288738094655160_1125x652.jpg?w=1125&h=652" /></a></div>
                <div class="swiper-slide"><a href="#"><img src="https://img14.yiguoimg.com/d/items/2019/190524/9288738094655160_1125x652.jpg?w=1125&h=652" /></a></div>
                <div class="swiper-slide"><a href="#"><img src="https://img12.yiguoimg.com/d/items/2019/190620/9288738306664148_1125x652.jpg?w=1125&h=652" alt=""></a></div>
                <div class="swiper-slide"><a href="#"><img src="https://img10.yiguoimg.com/d/items/2019/190522/9288738071291574_1125x652.jpg?w=1125&h=652" alt=""></a></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Banner",

}
</script>

<style scoped>
.banner {
        width: 100%;
        height: 2.3rem;
        }

        .swiper-container {
            width: 100%;
            height: 2.3rem;
        }

        .swiper-container a img {
            width: 100%;
            height: 100%;

        }
        img{
            vertical-align: middle;
            border:0;
        }
</style>
