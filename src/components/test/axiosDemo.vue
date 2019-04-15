<template>
    <p>demo1111</p>
</template>

<script>
  export default {
    name: 'axiosDemo',
    mounted(){
      this.$http.get('/mock')
        .then(res=>{
          console.log(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
  }
</script>

<style scoped>

</style>
