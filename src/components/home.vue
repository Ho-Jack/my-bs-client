<template>

  <div class="body">
    <hearder title="大美南国">

    </hearder>
    <mu-carousel transition="fade" class="swp" interval="10000">
      <mu-carousel-item>
        <img class="swp-img" src="/static/img/1.jpg">
      </mu-carousel-item>
      <mu-carousel-item>
        <img class="swp-img"  src="/static/img/2.jpg">
      </mu-carousel-item>
      <mu-carousel-item>
        <img class="swp-img" src="/static/img/3.jpg">
      </mu-carousel-item>
      <mu-carousel-item>
        <img  class="swp-img" src="/static/img/4.jpg">
      </mu-carousel-item>
    </mu-carousel> <!--轮播图-->
    <mu-container>
      <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
        <div slot="header">从学生到社会人的转变
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
        <div slot="header">最美南国</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
        <div slot="header">大四放假通知</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </mu-expansion-panel>
    </mu-container>
    <h3>活动报名</h3>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column label="活动名称" prop="sport"></el-table-column>
      <el-table-column label="报名截至日期" prop="date"></el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">报名</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>

</template>

<script>
  import  hearder from '../components/commom/hearder'

export default {
  name: 'home',
 components:{
   hearder,
 },
  data(){
    return{
      panel: '',
      tableData:[{
        sport:"志愿者服务",
        date:"2019-1-1",
      },
        {
          sport:"植树节植树",
          date:"2019-1-1",
        }
  ]
    }
  },
  methods:{
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
    },
    handleClick(row) {
      console.log(row);
      this.$router.push({ name: 'apply', params: {
        sport:row.sport,
          date:row.date
        }})
    }
  }
}
</script>

<style scoped>
  .body{
    height: 1000px;
  }
  .swp{
   position: relative;
    top: 0;
    left: 0;
    height: 12rem;
  }

  .swp-img{
    width: 100%;
    height: 100%;
  }
  .logo{
    width: 230%;

  }
  h3{
    border-left: 3px solid #409EFF;
    font-size: 18px;
    color: #409EFF;
    padding-left: 12px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
</style>
