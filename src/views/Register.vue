<template>
<div class="registerPage">
    <RegisterSection @sendPhone="receivePhone" @sendUserInfo="receiveSendUserInfo"
      @sendUserPwdInfo="receiveSendUserPwdInfo"
    ></RegisterSection>
    <RegisterFooter></RegisterFooter>
</div> 
</template>

<script>
import RegisterSection from"../components/register/register"
import RegisterFooter from"../components/register/registerFooter"
export default {
    name:"register",
    components:{
        RegisterSection,
        RegisterFooter
    },
    methods:{
        receivePhone(user_phone){
            console.log(user_phone)
              fetch('http://121.199.63.71:8003/msgcode/', {
                // fetch('http://10.35.162.101:8003/msgcode/', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify({u_phone:user_phone})
         }).then(response => response.json()).then(data => {  
           
            
          })
        },
        receiveSendUserInfo(user_phone,user_code){
            console.log(user_phone)
              fetch('http://121.199.63.71:8003/msglogin/', {
                // fetch('http://10.35.162.101:8003/msglogin/', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify({u_phone:user_phone,msg_code:user_code})
         }).then(response => response.json()).then(data => {  
              console.log(data)
              if(data.code===200){    
                // alert(data.info);
                window.localStorage.setItem("token",data.token);
                this.$router.push({path:"/yiguo"});
             }else{
                // alert(data.info);
             }
            
          })
        },
        receiveSendUserPwdInfo(user_account,user_pwd){
            console.log(user_account,user_pwd)
              fetch('http://121.199.63.71:8003/loginpwd/', {
                // fetch('http://10.35.162.101:8003/msglogin/', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify({u_phone:user_account,u_auth_string:user_pwd})
         }).then(response => response.json()).then(data => {  
               console.log(data)
          })
        },
 // 让用户重新登录。
                // fetch('http://localhost:8089/api/Login?username='+this.username+"&password="+this.password,{
                //     method: 'get'
                // }).then(response => response.json()).then(data => {
                //     // this.category = data.data;
                //     console.log(data)
                // // 接收token的信息的
                //     if (data.code===0) {
                //         //vuex存储token
                //         this.$store.commit("settoken",data.token);
                //         //本地存储token
                //         window.localStorage.setItem("token",data.token);
                //         //判断路由是否带参，带参就去重定向参数地址，否则就去首页
                //         if(this.$route.query.redirect){
                //             this.$router.replace({path:this.$route.query.redirect});
                //         }else{
                //             this.$router.push("../index");
                //         }
                //     }else {
                //         alert(data.message)
                //     }
                // })
      }
  }
   

</script>
<style scoped>

</style>
<style>

</style>
