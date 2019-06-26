<template>
    <div>
        <router-link class="header" v-for="item in list" 
        :to="item.path"
        tag="div">
            <img :src="item.bgsrc" alt="">
            <div class="logo">
                <img :src="item.logosrc" alt="">
                <span class="btn">登录/注册</span>
            </div>
            <span class="set">
                <img :src="item.btnsrc" alt="" >
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'mineTop',
    data(){
        return{
            list:[
                {
                    bgsrc:"https://img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg",
                    logosrc:"https://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg",
                    btnsrc:"https://img07.yiguoimg.com/d/web/180508/01319/184003/setting.png",
                    path:'/login'
                }
            ]
        }
    }
}
</script>

<style scoped>
.header{
    height: 1.42rem;
    width:100%;
    position: relative;
}
.header>img{
    width: 100%;
    height: 1.42rem;
}
.header .logo{
    position: absolute;
    left: .15rem;
    top:.30rem;
}
.header .logo img{
    width:.75rem;
    height:.75rem;
    display: block;
    border-radius: 50%;
    float:left;
}
.header .logo .btn{
    font-family: "微软雅黑";
    font-size: 18px;
    line-height: .75rem;
    float: left;
    color: aliceblue;
    margin-left: .15rem;
}
.header .set{
    position: absolute;
    top: .11rem;
    right: .17rem;
    width: .18rem;
    height: .18rem;
    display: block;
}
.header .set img{
    display: block;
    width: .18rem;
    height: .18rem;
}
</style>
