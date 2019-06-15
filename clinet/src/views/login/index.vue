<template>
    <div class="wrap login">
        <div class="login-close"><span>×</span></div>
        <h3 class="login-title">欢迎来到星享俱乐部</h3>
        <p class="ipt">
            <label>手机号码</label><input type="text"  v-model="user"/>
        </p>
        <p class="ipt">
            <label>密码</label><input type="text" v-model="pwd"/><span>输入密码</span>
        </p>
        <div class="loginRes" @click=loginFn><input type="button" value="登录/注册"/></div>
        <div class="pwdLogin">使用账号密码登录</div>
        <div class="else">
            <div class="else-top">
                使用以下方式进行账户注册/登录
            </div>
            <div class="else-bottom">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560760410&di=701149b80c0aa27b45802b505d2b77d6&imgtype=jpg&er=1&src=http%3A%2F%2Fimgup04.iefans.net%2Fiefans%2F2019-03%2F07%2F10%2F15519247792484_0.png"/>
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=370460884,516661497&fm=26&gp=0.jpg"/>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../api/index"
export default {
    
    data(){
        return {
            user:"",
            pwd:"",
            userReg:/^1[3456789]\d{9}$/
        }
    },
    methods:{
        loginFn(){
            if(this.pwd.trim() !== "" && this.userReg.test(this.user)){
                api.getlogin({phone:this.user,password:this.pwd}).then(res=>{
                    let {code,message,token} = res;
                    if(code){
                        this.$alerts(message);
                        window.localStorage.setItem("token",token);
                        this.$router.back();
                    }
                }).catch(error=>{
                    this.$alerts(error)
                })
            }
            else{
                this.$alerts("输入错误")
            }
        }
    },
    
}
</script>
<style lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.login{
    background: #f8f8f6;
}
.login-close{
    width: 100%;
    height: pxTorem(35px);
    line-height: pxTorem(35px);
    background: #fff;
    text-indent: 5%;
    >span{
        font-size: pxTorem(35px);
        font-weight: 200;
    }
}
.login-title{
    width: 100%;
    height: pxTorem(50px);
    line-height: pxTorem(50px);
    background: #fff;
    text-indent: 5%;
    font-size: pxTorem(24px);
    font-weight: 600;;
    box-shadow: 0 pxTorem(5px) pxTorem(13px) 0 #eee;

}
.ipt{
    width: 90%;
    margin-left:5%;
    height: pxTorem(60px);
    display: flex;
    border-bottom:1px solid #ccc;
    >label,>span{
        width: pxTorem(70px);
        height: 80%;
        line-height:pxTorem(70px) ;
        font-size:pxTorem(12px);
        color:#999;
    }
    >label{
        font-size: pxTorem(14px);
    }
    >span{
        font-size: pxTorem(12px);
    }
    >input{
        flex:1;
    }
}
.loginRes{
    width: 90%;
    height: pxTorem(35px);
    background: #d4d4d4;
    margin-left:5%;
    margin-top:pxTorem(80px);
    border-radius: pxTorem(30px);
    text-align: center;
    line-height: pxTorem(35px);
    >input{
        color: #fff;
        font-size: pxTorem(14px)
    }
    
}
.pwdLogin{
    color:#4fc292;
    width: 100%;
    height: pxTorem(40px);
    text-align: center;
    line-height: pxTorem(40px);
    margin-top:pxTorem(30px);
    font-weight: 500;
}
.else{
    width: 100%;
    height: pxTorem(120px);
    position: fixed;
    bottom:0;
    left:0;
    display: flex;
    flex-direction: column;
    >.else-top{
        width: 100%;
        height: pxTorem(30px);
        text-align: center;
        margin-bottom:20px;
        color:#666;
    }
    >.else-bottom{
        flex:1;
        display: flex;
        justify-content: space-around;
        >img{
            width: pxTorem(40px);
            height: pxTorem(40px);
            border-radius: 50%;
        }
    }
}

</style>