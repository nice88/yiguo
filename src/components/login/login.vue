<template>
    <div class="loginView">
        <div class="login">
            <div class="login-input">
                <div class="phone">
                    <span></span>
                    <input type="text" placeholder="请输入手机号" v-model="phone">
                    <i></i>
                </div>
                <div class="password">
                    <span></span>
                    <input type="text" placeholder="请输入密码" v-model="password">
                    <i></i>
                </div>
                <div class="code" v-for="item in list">
                    <input type="text" placeholder="请输入验证码" v-model="code">
                    <img :src="item.src" alt="">
                </div>
            </div>
        </div>
        <div class="forget">
            <p>忘记密码？</p>
        </div>
        <div class="btn">
            <span class="loginBtn" tag="span"  @click="checkOut">登录</span>
            <router-link class="registerBtn" to="/register" tag="span"> 注册</router-link>
        </div>
        <WornTips :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></WornTips>
    </div>
</template>

<script>
import WornTips from"../alertTip/AlertTip"
export default {

    name:'login',
    data(){
        return{
            list:[
                {
                    src:"data:image/gif;base64,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"
                }
            ],
            //初始化接口
            phone:''  , 
            password:'',
            code:'',
            alertText: '123', // 提示文本
            alertShow: false   // 是否显示警告框
        }
    },
    components:{
        WornTips,
    },
    methods:{
    checkOut(){
        let regPhone=/^1\d{10}$/;
        if(!regPhone.test(this.phone)){
            this.showAlert("手机号不正确");
        }else if(this.password==''){
            this.showAlert("请输入密码");
        }else if(this.code==''){
            this.showAlert("请输入验证码");
        }
        // console.log("可以跳转了");
        // this.$router.push({path: '/', query:{stage: stage}});
        
    },
      showAlert(alertText) {
      this.alertShow = true
      this.alertText = alertText
      console.log(this.phone)
    },
        // 关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
  }

    
}

</script>

<style scoped>
.login{
    background: #ffffff;
    padding-top: .1rem;
}
.login .login-input{
    margin-top: .3rem;
    padding-left: .2rem;
    background: white;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
}
.login .login-input input{
    width: 100%;
    height: .53rem;
    border:0;
    text-indent: .3rem;
    font-size: 16px;
    position: relative;
    display: block;
}
.login .login-input span{
    width: .18rem;
    height: .2rem;
    display: block;
    z-index: 100
}
.login .login-input .phone{
    position: relative;
}
.login .login-input .phone span{
    background: url(https://img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png) no-repeat 0 0;
    background-size: 100% 100%;
    position: absolute;
    top: .16rem;
    left: 0;
}
.login .login-input .phone input{
    border-bottom:1px solid #d9d9d9;
}
.login .login-input .password{
    position: relative;
}
.login .login-input .password span{
    background: url(https://img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png) no-repeat 0 0;
    background-size: 100% 100%;
    position: absolute;
    top: .16rem;
    left: 0;
}
.login .login-input .password input{
    border-bottom:1px solid #d9d9d9;
}
.login .login-input .code{
    position: relative;
}
.login .login-input .code img{
    width: .68rem;
    height: .3rem;
    position: absolute;
    right: .35rem;
    top:14px;
}
/* 忘记密码 */
.loginView .forget{
    width: 100%;
}
.loginView .forget p{
    font-size: .15rem;
    color: #008842;
    padding-left: .2rem;
    line-height: .60rem;
}
/* 登录注册按钮部分 */
.loginView .btn{
    width: 100%;
    display: flex;
    justify-content:space-around;
    margin-top: 5px;
}
.loginView .btn span{
    display: inline-block;
    height: .4rem;
    border: none;
    border-radius: 4px;
    font-size: .16rem;
    text-align: center;
    line-height: .4rem;
    width: 34%;
}
.loginView .btn .loginBtn{
    color: #fff;
    background: #008842;
}
.loginView .btn .registerBtn{
    color:  green;
    background: white;
    border: 1px solid #008842;
    box-sizing: border-box;
}
</style>
