<template>
    <div class="registerSection">
        <span>
            <router-link
            tag="i"
            to="/mine">
            </router-link>
            会员登录
        </span>
        <ul>
            <li @click="cur=0" :class="{active:cur==0}">
            手机快捷登录
            </li>
            <li @click="cur=1" :class="{active:cur==1}">
                账号密码登录
            </li>
        </ul>
        <div class="inputt" >
                <div v-show="cur==0">
                    <div class="inputPhone">
                        <input type="text" maxlength="11" placeholder="请输入手机号码" v-model="user_phone">
                        <span @click="setBtn" :class="{setBtnAppear:rightPhone}"></span>
                    </div>
                    <div class="inputCode">
                        <input type="text" maxlength="6" placeholder="请输入验证码" v-model="user_code">
                        <span class="setBtn" @click="setCodeBtn"></span>
                        <span :class="{right_phone:rightPhone}" @click="handleCode()">获取验证码</span>
                    </div>
                    <p>未注册的手机将自动注册易果生鲜账户</p>
                    <button class="registerBotton" @click="handleRegister()">登录</button>
                </div>
                <div v-show="cur==1">
                    <div class="inputPhone">
                        <input type="text" placeholder="手机号/账号/邮箱" v-model="user_account">
                        <span @click="setBtn"></span>
                    </div>
                    <div class="inputPhone">
                        <input type="text" placeholder="请输入密码" v-model="user_pwd">
                        <span @click="setCodeBtn"></span>
                    </div>
                    <router-link class="forget"
                    tag='p'
                    to='forget'
                    >忘记密码？
                    </router-link>
                    <button class="registerBotton" @click="handelPwdRegister">登录</button> 
                </div>    
        </div>
    </div>
</template>

<script>
export default {
    name:"registerSection",
    data(){
        return{
            cur:0,
            user_phone:'',
            user_code:'',
            user_account:'',
            user_pwd:''
        }
    },
    computed: {
        rightPhone () {
            return /^1\d{10}$/.test(this.user_phone)
        },
    },
    methods:{
        handleCode(){
            this.$emit("sendPhone",this.user_phone)
        },
        handleRegister(){
            this.$emit("sendUserInfo",this.user_phone,this.user_code);
        },
        handelPwdRegister(){
            this.$emit("sendUserPwdInfo",this.user_account,this.user_pwd)
        },
        setBtn(){
            if(this.user_phone!=''||this.user_account!=''){
                console.log(123)
                this.user_phone='',
                this.user_account=''
            }
        },
        setCodeBtn(){
            if(this.user_code!=''||this.user_pwd!=''){
                console.log(89)
                this.user_code='',
                this.user_pwd=''
            }
        },

    }
        
}
</script>

<style scoped>
.inputPhone .setBtnAppear{
    opacity: 0;
}
.registerSection{
    width:100%;
}
.registerSection>span{
    color: black;
    font-size: 15px;
    text-align: center;
    font-weight: "黑体";
    display:block;
    line-height: .46rem;
    border-bottom:1px solid #d9d9d9;
    position: relative;
}
.registerSection>span i{
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
.registerSection ul li{
    display: block;
    box-sizing: border-box;
}
.registerSection ul li.active{
    color: skyblue;
    border-bottom: 1px solid #008842
}
.registerSection ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
}
.registerSection ul li{
    /* display: block; */
    font-size: 14px;
    color: #999999;
    width: 50%;
    text-align: center;
    line-height: .36rem;
    font-family: 'Avenir', 'PingFang SC'

}
.registerSection .inputt{
    padding:0 20px;
}
.registerSection .inputt .inputPhone, .registerSection .inputt .inputCode{
    position: relative;
}
.registerSection .inputt .inputPhone span{
    display: block;
    width: .2rem;
    height: .2rem;
    position: absolute;
    right:10px;
    top: .15rem;
    background: url(../../assets/img/mineimg/set.png);
    background-size: 100% 100%;
    z-index: 10;
}
.registerSection .inputt .inputCode .setBtn{
    display: block;
    width: .2rem;
    height: .2rem;
    position: absolute;
    right:.76rem;
    top: .15rem;
    background: url(../../assets/img/mineimg/set.png);
    background-size: 100% 100%;
    z-index: 10;
}
.registerSection .inputt .inputCode .right_phone{
    color:skyblue
}
.registerSection input{
    width: 100%;
    height: .53rem;
    border:0;
    font-size: 14px;
    position: relative;
    display: block;
    border-bottom:1px solid #d9d9d9; 
    outline: 0;
}
.registerSection .inputt .inputCode span{
    font-size: 13px;
    z-index: 10;
    display: block;
    position: absolute;
    right: 10px;
    top: .17rem;
    color: #999999
}
.registerSection .inputt p{
    font-size:12px;
    line-height: .64rem;
    float: left;
}
.registerSection .inputt .forget{
    font-size:12px;
    line-height: .64rem;
    float: right
}
.registerSection .inputt button{
    width: 100%;
    display: flex;
    height: 40px;
    justify-content: center;
    background: #008842;
    border: 0;
    border-radius:3px;
    color: white;
    margin-top: .77rem;
}
</style>
