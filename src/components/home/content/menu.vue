<template>
    <div class="first-screen-menu clear">
        <router-link class="one" v-for="item in data_nav" :key="item.trackid" to='/product'>
            <i>
                <img :src="item.img" alt="">
            </i>
            <p class="one-title">{{item.name}}</p>
        </router-link>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"Menu",
    data(){
        return{
<<<<<<< HEAD
            // list:[
            //     {   
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //         path:'/product'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/product'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/product'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/product'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/free'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/free'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/free'
            //     },
            //      {
            //         listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
            //         listText:"精品水果",
            //          path:'/free'
            //     }
            // ]
    //          {
    //     "id": 1,
    //     "img": "http://img4.imgtn.bdimg.com/it/u=3942294674,3981205740&fm=26&gp=0.jpg",
    //     "name": "方便速食 ",
    //     "trackid": 1001
    //   },
            data_nav:[]
=======
            list:[
                {   
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                    path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                },
                 {
                    listImg:"https://img09.yiguoimg.com/d/items/2019/190621/9570213294319317_144.png?w=144&h=144",
                    listText:"精品水果",
                     path:''
                }
            ]
>>>>>>> 1aa1bfb95d2f85fa91202fa8d5e1ee3a66649bb1
        }
    },
    mounted(){
     axios.get("http://localhost:3000/api/data").then((res)=>{
            var msg = res.data.msg;
            if(msg==="ok"){
                this.data_nav = res.data.data_nav;
            }
        });
    }
}
</script>

<style scoped>
.first-screen-menu{
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
    width: .61rem;
    height:.61rem;
    margin-left: 11px;
}
.first-screen-menu a p{
    font-size: .14rem;
    color: rgb(51, 51, 51);
}
</style>
