<template>
  <div id="app">
    <router-view ></router-view>

      <BottomNavigation v-show="this.$route.meta.show"></BottomNavigation>


  </div>
</template>

<script>

  import BottomNavigation from './components/commom/BottomNavigation'
export default {
  name: 'App',
  components:{
    BottomNavigation

  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*display: flex;*/
    /*flex-direction: column;*/
  /*height: 100%;*/
  /*width: 100%;*/


}
h3{
  border-left: 3px solid #409EFF;
  margin-left: 10px;
  font-size: 18px;
  color: #409EFF;
  padding-left: 12px;
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>
