<template>
  <div  v-loading="loading"
        element-loading-text="努力发帖中~~~~">
    <hearder title="我要发帖"></hearder>
    <el-form ref="form" :model="form" label-width="80px" width="80%" class="formStyle">
      <el-form-item label="标题" >
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="帖子内容">
        <el-input type="textarea" :rows="4"v-model="form.topicArticle"></el-input>
      </el-form-item>
      <el-form-item >
        <el-row type="flex" justify="center"> <el-button  @click="doSubmit" type="primary" round size="19px">发帖</el-button></el-row>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import hearder from '../components/commom/hearder'
    export default {
        name: "doPublic",
      components: {
        hearder,
      },
      data(){
          return{
            form:{
              title:'',
              topicArticle:''
            },
            loading:false
          }
      },
      methods:{
        doSubmit(){
          this.loading=true
         setTimeout(()=>{
           this.loading=false
           console.log(this.form)
           sessionStorage.setItem('isShow',true)
           this.$router.push('/publish')
           this.$toast.success('发帖成功');
           console.log(sessionStorage.getItem('isShow'))
         },2000)
        }
      }
    }
</script>

<style scoped>
  .formStyle{
    margin-top: 60px;
    width: 80%;
  }
</style>
