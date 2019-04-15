<template>
  <div class="hello">
    <mu-appbar style="width: 100%;"  color="primary"  >
      <mu-button icon slot="left" @click="goBack"> <img class="logo" src="/static/img/ng.png"/> </mu-button>

    <div slot="default" class="hearderTitle">{{title}}</div>
      <!--<mu-button icon slot="left">-->
        <!--<img class="logo"  src="/static/img/ng.png"/>-->
      <!--</mu-button>-->
    <div slot="right"> <router-link to="/login"><span class="login-link">登录|注册</span></router-link></div>
    </mu-appbar>
  </div>
</template>

<script>

  export default {
    name: 'hello',
     data(){
      return{

      }
     },
    props:{
      title:String
    },
    methods:{
      goBack(){
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped>

  .hearderTitle{
    text-align: center;
  }
.logo{

width: 230%;

}
  .login-link{
  color: white;
    font-size: 16px;
}

</style>
