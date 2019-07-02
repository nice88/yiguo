<template>
    <div class="big-eat">
        <!--header-->
        <!--<yg-eat-header></yg-eat-header>-->
        <Header></Header>
        <!--边框-->
        <div class="div">
        </div>
        <!--内容-->
        <div class="big-section" v-for="(item,index) in list">
            <div class="big-section-one">
                <div class="big-section-one-img">
                    <a href="#"><img :src="item.eat_img"/></a>
                </div>
                <p>{{item.eat_content}}</p>
                <!--//端午送礼|带上五芳斋粽子，分享幸福的滋味！-->
            </div>
            <div class="big-section-two">
                <div class="big-section-two-img">
                    <a href="#"><img src="../../../public/img/logo.png"/></a>
                </div>
                <span>易果君</span>
                <span>2019年05月24日</span>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from "./header"
    export default {
        name: "eat",
        data(){
            return{
                list:[
                    {
                        "eat_content": "端，分享幸福的滋味！",
                        "eat_img": "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png",
                        "eat_time": "2019年05月24日",
                        "id": 1
                    }
                    // {
                    //     "eat_content": "云南黑珍珠葡萄来了，一颗颗甜蜜炸弹敲开你的幸福夏天！",
                    //     "eat_img": "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png",
                    //     "eat_time": "2019年05月17日",
                    //     "id": 2
                    // },
                    // {
                    //     "eat_content": "萦绕唇齿的香甜诱惑，告诉你什么叫好吃的黑提！",
                    //     "eat_img": "http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png",
                    //     "eat_time": "2019年05月05日",
                    //     "id": 3
                    // }
                ]
            }
        },

        components:{
            // "yg-eat-header":header
            Header
        },
        created(){
            this.pageDate()
        },
        methods:{

            pageDate(){

                fetch('http://10.35.162.101:8003/home/eat/', {
                    method: 'get'
                }).then(response => response.json()).then(data => {
                    console.log(data);
                    this.car=data;
                    //    console.log(this.car)
                })

            }
        }


    }
</script>

<style scoped>
    /*header*/
    /*.header{*/
        /*width:100%;*/
        /*height:1.1rem;*/
        /*background:red;*/
        /*border-bottom:.1rem solid #*/
    /*}*/
    .header-one{
        width:2.8rem;
        height:1.2rem;
        /*background:yellow;*/
        margin-left:.3rem;
        display:flex;
        justify-content: center;
        align-items: center;

    }
    .header-one a{
        display:block;
    }
    .header-one-img{
        flex:1;
    }
    .header-one a img:nth-child(1){
        /*padding-right:.13rem;*/
        width:.41rem;
        height:.33rem;
        display:block;
    }
    /*.header-one a img:nth-child(2){*/
    /*width:.61rem;*/
    /*height:.55rem;*/
    /*display:block;*/
    /*}*/
    .header-one a span{
        font-size:.14rem;
        color:#878787;
        display:flex;
    }
    /*边框*/
    .div{
        width:100%;
        height:.1rem;
        background:#f8f8f8;
        border-top:1px solid #cccccc;
        border-bottom:1px solid #cccccc;
    }
    /*内容*/
    .big-section{
        width:100%;
        height:2.88rem;
        /*background:red;*/
        position:relative;
    }
    .big-section-one{
        width:3.55rem;
        height:1.49rem;
        /*background:yellow;*/
        align-items: center;
        margin:0 0.1rem;
        position:absolute;
        top:0.1rem;
        left:0;
    }
    /*.big-section-one-img{*/
    /*background:blue;*/
    /*}*/
    .big-section-one img{
        width:3.55rem;
        height:1.49rem;
        /*margin:0.1rem 0;*/


    }
    .big-section-one p{
        font-size:.18rem;
        color:#000000;
        position:absolute;
        top:1.6rem;
        left:0;
    }
    .big-section-two{
        width:100%;
        height:0.56rem;
        /*background:blue;*/
        position:absolute;
        top:2.3rem;
        left:0;
        display:flex;
        justify-content: space-between;
    }
    .big-section-two-img{
        width:0.325rem;
        height:0.275rem;
        /*background:white;*/
        margin:0.12rem 0.1rem;
    }
    .big-section-two-img img{
        width:0.325rem;
        height:0.275rem;
    }
    .big-section-two>span{
        font-size:.2rem;
        color:#8d8a8a;
        display:block;
        line-height:0.56rem;
    }

    /*边框*/
    .div{
        width:100%;
        height:.1rem;
        background:#f8f8f8;
        border-top:1px solid #cccccc;
        border-bottom:1px solid #cccccc;
    }

</style>