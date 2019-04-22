<template>
 <div>
  <hearder title="报名">
  </hearder>
   <h3>{{this.sports.sport}} </h3>

   <el-row type="flex" justify="center">
     <el-col :span="20"><el-steps  :active="1" finish-status="success">
       <el-step title="报名中"></el-step>
       <el-step title="已报名"></el-step>
       <el-step title="活动结束"></el-step>
     </el-steps></el-col></el-row>
   <span>截至报名时间{{this.sports.date}}</span>
   <el-row type="flex" justify="center" class="form"><el-form :model="applyForm"  >
     <el-form-item label="姓名" label-width="70px">
       <el-input v-model="applyForm.name"></el-input>
     </el-form-item>
     <el-form-item label="联系电话" label-width="70px">
       <el-input v-model="applyForm.phone"></el-input>
     </el-form-item>
   </el-form>
    </el-row>
   <el-row type="flex" justify="center"><el-button type="primary"plain  @click="doApply">报名</el-button></el-row>
   <mu-dialog title="成功！" width="360" :open.sync="openSimple">
恭喜您报名成功，请点击确认按钮回到首页！     <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确认</mu-button>
   </mu-dialog>
 </div>
</template>

<script>
  import  hearder from '../components/commom/hearder'
  export default {
    name: 'apply',
    components:{
      hearder,

    },
    data(){
      return{
        applyForm:{
          name:'',
          phone:'',
        },
        sports:{},
        openSimple: false

      }
    },
    mounted(){
     this.sports=this.$route.params
    },
    methods:{
      doApply(){
        this.openSimple = true;
      },
      closeSimpleDialog(){
        this.$router.push({name:'home'})
        this.openSimple = false;
      }
    }
  }
</script>

<style scoped>
.form{
  margin-top: 30px;
  margin-left: -40px;
}
</style>
