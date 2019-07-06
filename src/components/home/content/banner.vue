<template>
     <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in data_wheel" :key="item.id"><a href="#"><img :src="item.img" /></a></div>
               
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>

export default {
    name:"Banner",
    data(){
        return{
            data_wheel:[]
        }
    },
  mounted(){
     this.axios.get("http://121.199.63.71:8003/home/index/").then((res)=>{
            var msg = res.data.msg;
            if(msg==="ok"){
                this.data_wheel = res.data.data_wheel;
            }
        });
    }
}
</script>

<style scoped>
.banner {
        width: 100%;
        height: 2.3rem;
        margin-top:.38rem;
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
