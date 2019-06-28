<template>
    <div class="first-screen-menu clear">
        <router-link class="one" v-for="item in list" :to="item.path">
            <i>
                <img :src="item.listImg" alt="">
            </i>
            <p class="one-title">{{item.listText}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Menu",
    data(){
        return{
            list:[
                {   
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                    path:'/product'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/product'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/product'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/product'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/free'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/free'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/free'
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:'/free'
                }
            ]
        }
    }
}
</script>

<style scoped>
.first-screen-menu{
     background-image: url(http://img09.yiguoimg.com/d/items/2019/190614/9288738255218382_1125x480.jpg?w=1125&h=480);
     background-size: 100% 100%;
     padding: 10px 15px;
     overflow: hidden;
    }
.first-screen-menu{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}
.first-screen-menu a{
    display: inline-block;
    width: 25%;
    text-align: center;
}
.first-screen-menu a img{
    width:100%;
}
.first-screen-menu a p{
    font-size: .14rem;
    color: rgb(51, 51, 51);
}
</style>
