<template>
    <div class="first-screen-menu clear">
        <a class="one" v-for="item in data_nav" :key="item.trackid" @click="handleToProduct(item.trackid)">
            <i>
                <img :src="item.img" alt="">
            </i>
            <p class="one-title">{{item.name}}</p>
        </a>
        <router-link class="one" to='/free'>
            <i>
                <img src="https://img10.yiguoimg.com/d/items/2019/190621/9570213294450389_144.png?w=144&h=144" alt="">
            </i>
            <p class="one-title">免费兑奖</p>
        </router-link>
        <router-link class="one" to='/member'>
            <i>
                <img src="https://img09.yiguoimg.com/d/items/2019/190621/9570213294483157_144.png?w=144&h=144" alt="">
            </i>
            <p class="one-title">会员福利</p>
        </router-link>
        <a class="one" >
            <i>
                <img src="https://img09.yiguoimg.com/d/items/2019/190621/9570213294548693_144.png?w=144&h=144" alt="">
            </i>
            <p class="one-title">银行活动</p>
        </a>
        <a class="one">
            <i>
                <img src="https://img11.yiguoimg.com/d/items/2019/190621/9570213294581461_144.png?w=144&h=144" alt="">
            </i>
            <p class="one-title">即烹美食</p>
        </a>
    </div>
</template>

<script>

export default {
    name:"Menu",
    data(){
        return{
      
            data_nav:[]
        }
    },
    mounted(){
     this.axios.get("http://121.199.63.71:8003/home/index/").then((res)=>{
            var msg = res.data.msg;
            if(msg==="ok"){
                this.data_nav = res.data.data_nav;
               
            }
        });
    },
    methods:{
        handleToProduct(id){
              this.$router.push({
                path:"/product",
                query:{
                    id:id
                }
            })
        }
      
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
