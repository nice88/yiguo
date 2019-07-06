<template>
    <div>
        <router-link class="header" v-for="item in list" 
        :to="inputName.nickname?'/Mine':'/register'"
        tag="div">
            <img :src="item.bgsrc" alt="">
            <div class="logo" style="z-index:1000">
                <img :src="item.logosrc" alt="" style="z-index:1001">
                <span class="btn">{{(inputName.nickname)||("登录/注册")}}</span>
            </div>
            <router-link  class="set"
            to='/sett'
            tag='span'>
                <img :src="item.btnsrc" alt="" >
            </router-link>
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
                    logosrc:"http://img3.duitang.com/uploads/item/201501/13/20150113210041_stAN4.jpeg",
                    btnsrc:"https://img07.yiguoimg.com/d/web/180508/01319/184003/setting.png",
                    // path:'/register'
                }
            ]
        }
    },
    props: ['inputName']
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
