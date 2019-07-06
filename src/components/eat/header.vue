<template>
    <div class="header">
        <div class="header-one">

            <div class="header-one-img" v-for="item in list ">
                <a href="#"><img :src="item.eat_img"/><span>{{item.eat_content}}</span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "header"
        name: "Header",
        data(){
            return{
                list:[
                    {
                        "eat_content": "做美食",
                        "eat_img": "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png",

                    },
                    {
                        "eat_content": "涨知识",
                        "eat_img": "http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png"

                    },
                    {
                        "eat_content": "生活家",
                        "eat_img": "http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png"

                    },
                    {
                        "eat_content": "爱试吃",
                        "eat_img": "http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png"

                    }

                ]
            }

        }

    }
</script>

<style scoped>
    /*header*/
    .header{
        width:100%;
        height:1.1rem;
    
    }
    .header-one{
        width:2.8rem;
        height:1.2rem;
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
        width:.41rem;
        height:.33rem;
        display:block;
    }
    .header-one a span{
        font-size:.14rem;
        color:#878787;
        display:flex;
    }
</style>