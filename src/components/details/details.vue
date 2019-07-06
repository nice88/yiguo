<template>
    <div class="D-details">
        <!--轮播图-->
        <yg-details-wheel :banner="dataInfo.detail_img_url"/>
        <!--标签-->
        <yg-details-label/>
        <!--退货-->
        <yg-details-Returngoods/>
        <!--规格-->
       <yg-details-specification/>
        <!--数量-->
       <yg-details-quantity/>
        <!--位置-->
		<yg-details-place/>
        <!--评价-->

        <yg-details-evaluate />
        <!--查看-->
        <div class="look">
            <a href="https://h5common.yiguo.com/imagesTextDetails.html?commodityId=fe6783f0-e1aa-4655-9986-8a899d8f9e3b&appName=3000025">
                <button>查看图文详情</button>
            </a>
        </div>
        <!--footer-->
        <yg-details-footer></yg-details-footer>
    </div>
</template>

<script>footer
    import Wheel from "./wheel"
	import label from "./label"
	import specification from "./specification"
	import quantity from "./quantity"
	import Returngoods from "./Returngoods"
	import place from "./place"
	import evaluate from "./evaluate"
	import footer from "./footer"
    export default {
        name: "details.vue",
        data(){
            return{
                dataInfo:""
            }
        },
        components:{
            "yg-details-wheel":Wheel,
			"yg-details-label":label,
			"yg-details-specification":specification,
			"yg-details-quantity":quantity,
			"yg-details-Returngoods":Returngoods,
			"yg-details-place":place,
			"yg-details-evaluate":evaluate,
			"yg-details-footer":footer,
        },
        // created(){
        //     this.$axios({
        //         mothed:"get",
        //         url:"http://10.35.162.101:8003/detail/1/"
        //     }).then((retruned)=>{
        //         this.dataInfo = retruned.data.data.data_wheel
        //         console.log(retruned)
        //     })
        // }
    }

</script>

<style scoped>

    /*轮播图*/
    .lubo{
        position:relative;
    }
    .swiper-container{
        height:.3rem;
    }
    .swiper-container img{
        width:100%;
        height:.3rem;
    }
    /*自定义豆豆*/
    .swiper-container .swiper-pagination-bullet{
        width:0.16rem;
        height:0.16rem;
        display:inline-block;
        border-radius:100%;
        background:#000;
        opacity:.2;
    }
    .swiper-container .swiper-pagination-bullet-active{
        opacity:1;
        width:.32rem;
        height:.16rem;
        border-radius:.2rem;
        background:white;
    }

    /*查看*/
    .look{
        width:100%;
        height:1.2rem;
        /*background:red;*/
        position:relative;
    }
    .look a button{
        width:1.5rem;
        height:.3rem;
        margin:auto;
        margin-top:.15rem;
        display:block;
        /*position:absolute;*/
        /*top:.1rem;*/
        /*left:.6rem;*/
        font-size:.15rem;
        color:#99999a;
        border:0.04px solid #acaaab;
        background:white;
    }
   
</style>