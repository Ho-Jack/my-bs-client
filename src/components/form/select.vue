<template>
  <div id="test">
    <span class="two_float">选择院系和专业：</span>
      <select v-on:change="indexSelect" v-model="yx">
          <option v-for="option1 in YX" :value="option1.text">{{option1.text}}</option>
         </select>
        <select v-model="zy">
           <option v-for="option2 in selection" :value="option2.text">{{option2.text}}</option>
        </select>
    <p>{{yx}}{{zy}}</p>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        YX:[
          {
            text:'信息学院',
            ZY:[
              {text:'软件工程'},
              {text:"网路工程"},
              {text:"数字媒体技术"},
              {text:'计算机科学与技术'},

            ]
          },
          {
            text:'英文学院',
            ZY:[
              {text:'英语'},
              {text:"翻译"},
              {text:'商务英语'},
            ]
          },
          {
            text:'经济学院',
            ZY:[
              {text:"金融学"},
              {text:"经济学"},
              {text:"投资学"},
              {text:"税收学"},
              {text:'电子商务'},
              {text:"国际商务"},
              {text:"商务经济学"},
              {text:"经济统计技术"},
              {text:'国际经济与贸易'},

            ]
          },
          {
            text:'东语学院',
            ZY:[
              {text:'日语'},
              {text:"泰语"},
              {text:"朝鲜语"},
              {text:'阿拉伯语'},
            ]
          },
          {
            text:'西语学院',
            ZY:[
              {text:'俄语'},
              {text:'德语'},
              {text:"法语"},
              {text:"西班牙语"},
              {text:"葡萄牙语"},
            ]
          },
          {
            text:'管理学院',
            ZY:[
              {text:'会计学'},
              {text:'财务管理'},
              {text:"市场营销"},
              {text:"物流管理"},
              {text:"旅游管理"},
              {text:"酒店管理"},
              {text:"会展经济与管理"},
              {text:"人力资源管理"},
            ]
          },
          {
            text:'中文学院',
            ZY:[
              {text:'汉语言文学'},
              {text:"应用语言学"},
              {text:'汉语国际教育'},
            ]
          },
        ],
        yx: '',
        zy: '',
        A: ''

      }
    },
methods:{
  indexSelect(){
    this.A = this.yx;
  },
},
    computed: {
      selection: function () {
        for (var i = 0; i < this.YX.length; i++) {
          if (this.YX[i].text == this.A) {
            return this.YX[i].ZY;
          }
        }
      },
    },
  }

</script>

<style scoped>

</style>
