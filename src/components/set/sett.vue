<template>
    <div class="set">
        <ul class="online">
            <li>在线客服<span>400-163-1236</span><i></i></li>
        </ul>
        <ul>
            <li v-for="item in list" style="padding-left:10px">{{item.message}}<i></i></li>
        </ul>
        <div class="over">
            <span @click="handelOut()">退出登录</span>
        </div> 
    </div>
</template>

<script>
export default { 
 name:'sett',
    data(){
        return {
            list:[
                {
                   message:'关于我们' 
                },
                {
                   message:'营业资质' 
                },
                {
                   message:'协议服务' 
                },
                {
                   message:'隐私条款' 
                },
                {
                   message:'配送说明' 
                },
                {
                   message:'退换货说明' 
                }
            ]
        }
    },
    methods:{
        handelOut(){
            
        localStorage.removeItem('token');
        this.$router.push({path:'/register'});
    }
    }
}
</script>

<style scoped >
.set{
    width: 100%;
}
.set .online{
    margin-bottom: .1rem;
}
.set ul li{
    display: block;
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    background: #ffffff;
    box-sizing: border-box;
    border-bottom:1px solid #d9d9d9;
    text-indent: 10px;
    position: relative;
    color: #333;
    font-size: 12px;
}
.set ul li i{
    display: block;
    width: 7.5px;
    height: 13.5px;
    position: absolute;
    right: .12rem;
    top: .13rem;
    display: inline-block;
    background: url(//img05.yiguoimg.com/d/web/180313/01318/155922/gopage2.png) no-repeat;
    background-size: 100% 100%;
}
.set ul li span{
    float:right;
    padding-right: .28rem;
    color: #11b57c;
}
.over span{
    width: 35%;
    height: .35rem;
    display: block;
    text-align: center;
    line-height: .35rem;
    font-size: 15px;
    color:  #11b57c;
    border-radius: 3px;
    border: 1px solid #11b57c;
    margin: 0 auto;
    margin-top: 1.42rem;
}
</style>
