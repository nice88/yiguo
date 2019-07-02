<template>
    <div class="Classify">
        <category :mes="snding" @info="send"></category>
        <Commodity :goodsShow="snding" :navIndex="lalala"></Commodity>
    </div>
</template>
<script>
    import category from "./category"
    import Commodity from './Commodity'
    export default {
        name: "classification",
        components:{
            "category":category,
            "Commodity":Commodity
        },
        data(){
            return{
                lalala: 0,
                snding:[
                    {
                        font:'进口水果',
                        "list": [{
                            "img": "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg",
                            "imgName": "奇异果"
                        },
                            {
                                "img": "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg",
                                "imgName": "车厘子"
                            },
                            {
                                "img": "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg",
                                "imgName": "牛油果"
                            }
                        ]
                    },
                    {
                        font:'国产水果',
                        "list": [{
                            "img": "https://img14.yiguoimg.com/e/items/2017/170615/9288709128528591_220.jpg",
                            "imgName": "苹果"
                        },
                            {
                                "img": "https://img11.yiguoimg.com/e/items/2017/170615/9288709128495823_220.jpg",
                                "imgName": "梨"
                            },
                            {
                                "img": "https://img14.yiguoimg.com/e/items/2017/170615/9288709128331983_220.jpg",
                                "imgName": "樱桃"
                            }
                        ]
                    },
                    {
                        font:'精选肉类',
                        "list": [{
                            "img": "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg",
                            "imgName": "牛排"
                        },
                            {
                                "img": "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg",
                                "imgName": "进口牛肉"
                            },
                            {
                                "img": "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg",
                                "imgName": "国产牛肉"
                            }
                        ]
                    },
                    {
                        font:'禽类蛋品',
                        "list": [{
                            "img": "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg",
                            "imgName": "牛排"
                        },
                            {
                                "img": "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg",
                                "imgName": "进口牛肉"
                            },
                            {
                                "img": "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg",
                                "imgName": "国产牛肉"
                            }
                        ]
                    },
                    {
                        font:'海鲜水产',
                        "list": [{
                            "img": "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg",
                            "imgName": "牛排"
                        },
                            {
                                "img": "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg",
                                "imgName": "进口牛肉"
                            },
                            {
                                "img": "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg",
                                "imgName": "国产牛肉"
                            }
                        ]
                    },
                    {
                        font:'即烹美食',
                        "list": [{
                            "img": "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg",
                            "imgName": "牛排"
                        },
                            {
                                "img": "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg",
                                "imgName": "进口牛肉"
                            },
                            {
                                "img": "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg",
                                "imgName": "国产牛肉"
                            }
                        ]
                    },
                ]
            }
        },
        props:['goodsNav'],
        methods:{
            send(index){
                this.lalala= index
                console.log(index)
            }
        }
    }
</script>

<style scoped>
    .Classify{
        background: #fff;
        padding-top: .4rem;
    }
</style>