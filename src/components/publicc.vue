<template>
  <div class="body">
    <hearder title="我要发帖"></hearder>

    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header :title=this.form.userName  :sub-title=this.form.publishTime>
        <mu-avatar slot="avatar">
          <img :src="'../static/tx/'+this.form.userImage">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media :title='this.form.topicTitle' >
     <img :src="'/static/tp/'+this.form.topicId+'.jpg'">
      </mu-card-media>

      <mu-card-text style="font-size: 15px">
       {{this.form.topicArticle}}
      </mu-card-text>
    </mu-card>
    <section>
      <el-table :data="listPart" :show-header="false" :row-class-name="tableRowClassName">
        <el-table-column prop="publisher" label="发评人" width="80"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
      </el-table>

      <!--  分页 -->
      <div class="block" v-if="totalData>pageSize">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="totalData"
          :page-count="toalPages">
        </el-pagination>
      </div>

        <el-row class="footer">
          <el-col :span="18">
            <el-input placeholder="我是输入框，来评论吧" v-model="postText"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button class="btn" type="primary" icon="el-icon-edit" plain @click="addList">发布</el-button>
          </el-col>
        </el-row>

    </section>
  </div>
</template>

<script>
  import hearder from '../components/commom/hearder'
  import axios from 'axios'
  export default {
    name: 'publicc',
    components: {hearder},
    data () {
      return {
        title: '评论',
        postText: '',//输入评论内容
        listDate: [],//所有数据
        listPart: [],//每页数据
        totalData: 0, //默认数据总数
        currentPage: 1,//默认当前页码
        pageSize: 5,//默认每页数据量
        toalPages: 1,//最大总页数
        beginRow: 1,//开始行
        topicId:'',
        form:{},
        isShow:true

      }
    },
  mounted(){
    this.doList()
    this.topicId=this.$route.params.id
  },
    methods: {
      //隐藏溢出行的显示
      tableRowClassName ({row, rowIndex}) {
        if ((rowIndex + 1) > this.pageSize) {
          return 'rowShow'
        }
        else {
          return ''
        }
      },
//获取列表
      doList(){
        axios.get('/topicData')
          .then((res)=>{

  this.form=res.data.topic[this.topicId]
          })
      },

      //发布评论
      addList () {
        this.currentPage = 1//重置 当前页数值,回到首页
        let UserId = Math.random().toString().substring(2, 11)
        let commentText = this.postText.trim()
        let nowDate = new Date().toLocaleString()
        if (commentText) {
          this.listDate.unshift({
            publisher: '陈浩杰',
            content: commentText,
          })

          this.postText = ''
          this.totalData = this.listDate.length
          let listPart = this.listDate.slice(this.beginRow - 1)
          this.listPart = listPart

        }
      },
      //改变当前页时触发
      handleCurrentChange (val) {
        this.currentPage = val
        let beginRow = (this.pageSize * this.currentPage) - (this.pageSize - 1)
        let listPart = this.listDate.slice(beginRow - 1)
        this.listPart = listPart
      }
    }

  }
</script>

<style scoped>

  body{
    margin:0;padding:0;height:100%;width:100%;
  }
  footer{
    background:#F2F3F6;max-width: 750px;width: 100%;height: 1rem;
  }
</style>
