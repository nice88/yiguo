<template>
    <div class="lubo">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list"><a href="#"><img :src="item.img" alt=""></a></div>

            </div>
            <!--如果需要分页器-->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Wheel",
        data(){
            return{
                list:[
                    {
                        id:"2",
                        img:"img/D-appen.jpg"
                    },
                    {
                        id:"3",
                        img:"img/D-appen2.jpg"
                    },
                    {
                        id:"24",
                        img:"img/D-appen3.jpg"
                    },
                    {
                        id:"26",
                        img:"img/D-appen2.jpg"
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    .lubo{
        height:375px;
        position:relative;
    }
    img{
        width:100%;
    }
    /*.swiper-container{*/
        /*height:6.5rem;*/
    /*}*/
    /*.swiper-container img{*/
        /*width:100%;*/
        /*height:6.5rem;*/
    /*}*/
</style>