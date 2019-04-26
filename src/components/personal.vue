<template>
<div>
  <hearder title="个人中心"></hearder>
  <div class="bg"></div>
  <div class="haha-img" @click='goLogin' v-if="!token"></div>
  <div class="user-img"  v-if="token"></div>
  <div class="user-name" v-if="!token">你还未登录，请先登录！</div>
  <div class="user-name" v-if="token">欢迎你！陈浩杰</div>
  <div >
    <ul>
      <li class="list-icon"><mu-icon size="36" value="check_box" color="green"></mu-icon>
        <div class="text">我发表的帖子</div><mu-icon class="icon-right" size="36" value="keyboard_arrow_right" color="#ccc" right></mu-icon></li>
      <li class="list-icon"><mu-icon size="36" value="mail_outline" color="red"></mu-icon>
        <div class="text">我的消息</div><mu-icon class="icon-right" size="36" value="keyboard_arrow_right" color="#ccc" right></mu-icon></li>
      <li class="list-icon"><mu-icon size="36" value="insert_emoticon" color="amber"></mu-icon>
        <div class="text">关于</div><mu-icon class="icon-right" size="36" value="keyboard_arrow_right" color="#ccc" right></mu-icon></li>
      <li class="list-icon"><mu-icon size="36" value="report_problem" ></mu-icon>
        <div class="text" @click="outLogin">退出登录</div><mu-icon class="icon-right" size="36" value="keyboard_arrow_right" color="#ccc" right></mu-icon></li>
    </ul>
  </div>

</div>
</template>

<script>
  import  hearder from '../components/commom/hearder'
  export default {
    name: 'personal',
    components:{
      hearder,
    },
    data(){
      return{
        token:false
      }
    },
    mounted(){
      this.token=sessionStorage.getItem('token')
    },
    methods:{
      outLogin(){
        sessionStorage.clear()
        this.$toast.success('退出登录成功！！！');
        this.$router.push('/login')
      },
      goLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>
<style scoped>
  .bg {
    position: relative;
    height: 180px;
    background-image: url('/static/img/bg.png');
    background-size: cover;
    background-position: center center;
  }
.user-img{
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 200px;
  height: 80px;
  width: 80px;
  background-image: url('/static/img/tx.jpg');
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: 1px solid #ddd;
}
  .haha-img{
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    height: 80px;
    width: 80px;
    background-image: url('/static/img/hs.jpg');
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .user-name{
    padding: 40px 0 50px;
    line-height: 32px;
    text-align: center;
  }
  .list-icon{
    display: flex;
    /**/
    border-top:1px solid #ccc;
    background:#fbfbfb;
    line-height:50px;
    height: 50px;
  }
  li:last-child{
    border-bottom:1px solid  #ccc ;
  }
  i{
    position: absolute;
    margin-left: 10px;
    line-height:50px;
  }

  .icon-right{
    position: absolute;
    right: 0;
  }
  .text{
    position: absolute;
    left: 70px;
    font-size: 16px;
  }
</style>
