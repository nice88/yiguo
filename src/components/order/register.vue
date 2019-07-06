<template>
    <div class="registerView">
        <div class="register">
            <form @submit.prevent="register" >
                <div class="register-input">
                    <div class="phone" >
                        <input type="text" placeholder="请输入您的电话" v-model="phone">
                        <span class="codeSpan">获取验证码</span>
                    </div>
                    <div class="code" >
                        <input type="text" placeholder="请输入验证码" v-model="code">
                    </div>
                    <div class="password" >
                        <input type="text" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="rePwd">
                        <input type="text" placeholder="请再次输入密码" v-model="repwd">
                    </div>
                </div>
            </form>
        </div>
        <div class="agree">
            <input type="checkbox" id="checkboxBtn">
            <p>我已阅读<i>《易果服务协议》</i><i>《隐私协议》</i>并同意</p>
        </div>
        <div class="btn">
            <button class="registerBtn" @click="checkOut" >注册</button>
        </div>
        <WornTips :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></WornTips>
    </div>
</template>

<script>
import WornTips from"../alertTip/AlertTip"
export default {
    name:'register',
    components:{
        WornTips,
    },
    data(){
        return{
            //初始化接口
            phone:''  , 
            password:'',
            repwd:'',
            code:'',
            alertText: '123', // 提示文本
            alertShow: false   // 是否显示警告框
        }
    },
computed: {
    rightPhone() {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phone)
    }   
},
methods:{
    checkOut(){
        let regPhone=/^1\d{10}$/;
        let obj = document.getElementById("checkboxBtn");
        if(!regPhone.test(this.phone)){
            this.showAlert("手机号不正确");
            console.log(this.phone+"这个电话号码格式错误");
        }else if(this.code==''){
            console.log(this.phone+"这个电话号码格式正确");
            this.showAlert("请输入验证码");
        }else if(this.password==''){
            this.showAlert("请输入密码");
        }else if(this.password!==this.repwd){
            this.showAlert("两次密码不一致");
        }else if(obj.checked==false){
            console.log("咋不勾选呢小老弟")
            this.showAlert("请勾选'已阅读'");
        }        
    },
      showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
        // 关闭警告框
    closeTip () {
      this.alertShow = false;
      this.alertText = ''
    },
  }

    
}

</script>

<style scoped>
.register{
    background: #ffffff;
    padding-top: .1rem;
}
.register .register-input{
    margin-top: 30px;
    padding-left: 20px;
    background: white;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
}
.register .register-input input{
    width: 100%;
    height: .53rem;
    border:0;
    font-size: 16px;
    position: relative;
    display: block
}
.register .register-input .phone{
    position: relative;
    border-bottom:1px solid #d9d9d9;
}
.register .register-input .phone .codeSpan{
    position: absolute;
    right: 15px;
    top: 15px;
    display: block;
    width: 80px;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    background: #008842;
    font-size: 12px;
}
.right_phone{
      color: red;  
}
.register .register-input .code{
    position: relative;
    border-bottom:1px solid #d9d9d9;
}
.register .register-input .password{
    position: relative;
    border-bottom:1px solid #d9d9d9;
}
/* 同意部分 */
.registerView .agree{
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 12px;
}
.registerView .agree p{
    font-size: 14px;
    text-align: center;
    color: #8d8a8a;
}
.registerView .agree p i{
    font-style: normal;
    color:#008842;
    font-family: 'Avenir', 'PingFang SC'
}
/* 按钮 部分 */
.registerView .btn{
    width: 100%;
    display: flex;
    justify-content: center;
}
.registerView .btn .registerBtn {
    display: inline-block;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    width: 50%;
    color: #fff;
    background: #008842;
    margin-top: 30px;
}
</style>
