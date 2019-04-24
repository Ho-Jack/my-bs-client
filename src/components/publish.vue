<template>
  <div>
    <hearder title="我要发帖"></hearder>
    <mu-list textline="three-line">
      <li v-for="(p,index) in topicList" :key="index">
        <mu-list-item avatar :ripple="true" button @click="goPublicc(p.topicId)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="'../static/tx/'+p.userImage">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{p.topicTitle}}</mu-list-item-title>
            <mu-list-item-sub-title>
              <span style="color: rgba(0, 0, 0, .87)">{{p.userName}}</span>
              {{p.topicArticle}}
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <!--分割线-->
        <mu-divider></mu-divider>
      </li>
    </mu-list>
  </div>
</template>

<script>
  import hearder from '../components/commom/hearder'
  import axios from 'axios'

  export default {
    name: 'public',
    components: {
      hearder,

    },
    data () {
      return {
        topicList: []
      }
    },
    mounted: function () {
      this.getTopicList()
    },
    methods: {
      getTopicList () {
        axios.get('/topicData')
          .then((result) => {
            let res = result.data
            this.topicList = res.topic

          })
      },
      goPublicc (id) {
        this.$router.push('/publicc/' + id)
      }

    },

  }
</script>

<style scoped>
  .bottom {
    margin-bottom: 0px;
  }

  .demo-list-wrap {
    width: 100%;
    max-width: 360px;
    overflow: hidden;
  }
</style>
