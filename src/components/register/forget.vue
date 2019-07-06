<template>
    <div class="forget">
        <span>
            <i @click="handelBack">
            </i>
            找回密码
        </span>
        <div class="forgetSection">
            <input type="text" class="phone" placeholder="请输入手机号码">
            <div class="code">
                <input type="text" class="code" placeholder="请输入手机验证码">
                <span>获取验证码</span>
            </div>
            <input type="text" class="" placeholder="请输入新密码">
            <input type="text" class="" placeholder="确认新密码">
        </div>
        <p>确认</p>
    </div>
</template>

<script>
export default {
    name:'forget',
    methods:{
    handelBack(){
            this.$router.back();
        }
    }
}
</script>

<style>
.forget{
    width:100%;
}
.forget>span{
    color: black;
    font-size: 15px;
    text-align: center;
    font-weight: "黑体";
    display:block;
    line-height: .46rem;
    border-bottom:1px solid #d9d9d9;
    position: relative;
}
.forget>span i{
    position: absolute;
    left: 10px;
    top: 10px;
    display: block;
    width: 12px;
    height: .22rem;
    background: url(../../assets/img/mineimg/back.png);
    background-size: 100% 100%;
    z-index: 10
}
.forget .forgetSection input{
    width: 100%;
    display: block;     
    border: 0 ;
    outline:0;
    border-bottom:1px solid #d9d9d9;
    height: .53rem;
    text-indent: .24rem;
}
.forget .forgetSection .code{
    position: relative;
}
.forget .forgetSection .code span{
    font-size: 12px;
    display: block;
    position: absolute;
    right: .22rem;
    top: .18rem;
    z-index: 10;
    color: #008842;
    border: 1px solid #008842;
    border-radius: 2px;
    padding: 2px;
}
.forget p{
    display: block;
    background: #008842;
    height: .45rem;
    width: 45%;
    margin:  0 auto;
    font-size:18px;
    text-align: center;
    line-height: .45rem;
    color: white;
    border-radius: 3px;
    margin-top:.8rem;
}
</style>
