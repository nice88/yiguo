<template>
    <div class="two-image clear">
        <div class="link-img1" v-for="item in list">
            <a href="#">
                <img :src="item.Img" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Clear",
    data(){
        return{
            list:[
                {
                    Img:"https://img13.yiguoimg.com/d/items/2019/190329/9288737670473341_658x819.jpg?w=658&h=819",

                },
                 {
                    Img:"https://img12.yiguoimg.com/d/items/2019/190304/9288737491986020_658x819.jpg?w=658&h=819",             
                }
                
            ]
        }
    }
}
</script>

<style scoped>
.two-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.two-image .link-img1{
    display: inline-block;
    float: left;
    box-sizing: border-box;
    width: 50%;  
}
.two-image .link-img1 a {
    display: block;
    width: 100%;
    background: #d6d6d7 url(//img02.yiguo.com/e/web/150930/00982/163525/placeholder_140x140.png) no-repeat 50%;
}
.two-image .link-img1 img {
    width: 100%;
    vertical-align: middle;
    border: 0;
}
</style>
