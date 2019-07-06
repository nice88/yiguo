<template>
    <div class="lubo">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in wheelList"><a href="#"><img :src="item" alt=""></a></div>

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

                wheelList:[]
            }
        },
        created(){
            this.pageDate()
        },
        methods: {
            pageDate() {
                fetch(
                    "http://121.199.63.71:8003/detail/"+this.$route.query.id+"/",
                    {
                        method: "get"
                    }
                )
                    .then(response => response.json())
                    .then(data => {

                        var data_wheel = data.data_wheel[0];
                        var wheel = data_wheel.goods_wheel_img
                        this.wheelList = wheel.split("#")
                    });
            },

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