<template>
  <div class="login">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="$router.back()">
        <mu-icon value="keyboard_arrow_left" size="40"></mu-icon>
      </mu-button>
      <div slot="default" class="hearderTitle">登录中心</div>
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar> <!--标题栏-->
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo" v-if="loginWay">用户登录</h2>
          <h2 class="login_logo" v-else>用户注册</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">登录</a>
            <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">注册</a>
          </div>
        </div>
        <div class="login_content">
        <div :class="{on: loginWay}"> <login-form @submit.prevent="login"></login-form></div>
        <div :class="{on: !loginWay}"> <register-form ></register-form></div>
          </div>
        <!--利用$router.back()返回上一级路由 -->
      </div>
    </section>
  </div>

</template>

<script>
  import loginForm from  './form/loginForm'
  import registerForm from  './form/registeForm'
  export default {
    name: 'login',
    data(){
      return{
        loginWay:true
      }
    },
    components:{
      loginForm,
      registerForm
    },
    methods:{

    }
  }
</script>

<style scoped>

  .hearderTitle{
    text-align: center;
  }
  .loginContainer{
    width:100%;
    height: 100%;
    background: #fff;
  }
  .loginInner{
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
  }

  .login_logo{
    font-size: 40px;
    font-weight: bold;
    color: #2196f3;
    text-align: center;
  }
  .login_header_title{
    padding-top: 40px;
    text-align: center;
  }
  .login_header_title  a{
    color :#333;
    font-size: 20px;
    padding-bottom: 4px;
  }
  .login_header_title .on{
    color: #2196f3;
    font-weight :700;
    border-bottom :2px solid #2196f3;
  }
  /* 隐藏掉div*/
  .login_content>div{
    display: none;
  }
  /*//如果有on这个class选择器就显示*/
  div.on{
    display: block;
  }
  .login_content{

  }
</style>
