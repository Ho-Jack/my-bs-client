<template>
  <mu-paper class="bottom_nav">
    <mu-bottom-nav :value="bottomNav">
      <mu-bottom-nav-item to="/home" title="首页" value="home" icon="home"/>
      <mu-bottom-nav-item to="/publish" title="帖子" value="publish" icon="add_circle"/>
      <mu-bottom-nav-item to="/tucao" title="吐槽" value="tucao" icon="location_on"/>
      <mu-bottom-nav-item to="/personal" title="个人中心" value="personal" icon="person"/>
    </mu-bottom-nav>
  </mu-paper>
</template>
<script>
  export default {
    name: 'BottomNavigation',
    data () {
      return {
        bottomNav: 'home'
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        if (this.$route.path === '/home') {
          this.bottomNav = 'home'
        }
        if (this.$route.path === '/publish') {
          this.bottomNav = 'publish'
        }
        if (this.$route.path === '/tucao') {
          this.bottomNav = 'tucao'
        }
        if (this.$route.path === '/personal') {
          this.bottomNav = 'personal'
        }
      }
    }
  }
</script>

<style scoped>


  .bottom_nav {
    height: 4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
   z-index: 1000;
    border-top: 1px solid #f5f5f5;
  }
</style>
