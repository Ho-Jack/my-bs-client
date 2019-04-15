<template>
  <div class="body">
    <hearder title="我要发帖"></hearder>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header title="Myron Avatar" sub-title="sub title">
        <mu-avatar slot="avatar">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title="Image Title" sub-title="Image Sub Title">
        <img src="../assets/sun.jpg">
      </mu-card-media>

      <mu-card-text style="font-size: 15px">
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
    </mu-card>
    <section>
      <el-table :data="listPart" :show-header="false" :row-class-name="tableRowClassName">
        <el-table-column prop="publisher" label="发评人" width="50"></el-table-column>
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
        beginRow: 1//开始行
      }
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
      //发布评论
      addList () {
        this.currentPage = 1//重置 当前页数值,回到首页
        let UserId = Math.random().toString().substring(2, 11)
        let commentText = this.postText.trim()
        let nowDate = new Date().toLocaleString()
        if (commentText) {
          this.listDate.unshift({
            publisher: '柚子',
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
