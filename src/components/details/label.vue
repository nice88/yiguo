<template>
     <div class="box">
        <p>{{data_wheel.name}}</p>
        <h5>{{data_wheel.detail_name}}</h5>
        <div class="box-center">
            <!--<ul>-->
                <!--<li>-->
                    <!--<div class="shpop-left">-->
                        <!--<span>￥58</span>-->
                    <!--</div>-->
                    <!--<div class="shpop-right">-->
                        <!--<span>产地：新西兰</span>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
            <span>￥{{data_wheel.price}}</span>
            <span>{{data_wheel.pro_addr}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Label",
        data() {
            return {
                data_wheel: []

            }

        },

        created() {
            this.pageDate();
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
                        this.data_wheel = data.data_wheel[0];
                    });
            },
        }
    }
</script>

<style scoped>
/*标签*/
    .box{
        width:100%;
        height:100%;
    }
    .box p{
        font-size:.12rem;
        color:#313231;
        padding-left:.1rem;
        height:.3rem;
        line-height:.3rem;
    }
    .box h5{
        font-size:.1rem;
        color:#696868;
        padding-left:.1rem;
        height:.2rem;
        line-height:.2rem;
    }
    .box-center{
        width:100%;
        height:.6rem;
        background:white;
        position:relative;
        border-bottom:0.02rem solid #f1f1f;
    }
    .box-center span:nth-child(1){
        font-size:.18rem;
        color:red;
        position:absolute;
        top:.16rem;
        left:.1rem;
    }
    .box-center span:nth-child(2){
        font-size:.14rem;
        color:#999;
        position:absolute;
        top:.18rem;
        left:2.6rem;
    }
    /*.box .box-center li{*/
        /*margin: 0 auto;*/
        /*width: 90%;*/
        /*display: flex;*/
        /*line-height: .3rem;*/
        /*justify-content: space-between;*/
    /*}*/

    /*.box-center .shpop-left span{*/
        /*color:red;*/
        /*font-size:.2rem;*/
        /**/
    /*}*/
    /*.box-center .shpop-right{*/
        /*padding-right:.15rem ;*/
    /*}*/
    /*.box-center .shpop-right  span{*/
        /*color:#999;*/
        /*font-size:.12rem;*/
    /*}*/


/*.box .box-center li{*/
    /*margin: 0 auto;*/
    /*width: 90%;*/
    /*display: flex;*/
    /*line-height: .225rem;*/
    /*justify-content: space-between;*/
/*}*/
/*.box-center .shpop-left span{*/
    /*color:red;*/
    /*font-size:.2rem;*/
/*}*/
/*.box-center .shpop-right{*/
    /*padding-right:.15rem ;*/
/*}*/
/*.box-center .shpop-right  span{*/
    /*color:#999;*/
    /*font-size:.12rem;*/
/*}*/
</style>