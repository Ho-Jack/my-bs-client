<template>
  <div>
    <mu-form ref="registeForm" :model="registeForm" class="mu-demo-form" label-position="left" label-width="45">
      <mu-form-item prop="stuNum" label="学号" :rules="usernameRules">
        <mu-text-field v-model="registeForm.username"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="name" label="姓名" :rules="nameRules">
        <mu-text-field v-model="registeForm.name"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="passWord" label="密码" :rules="usernameRules">
        <mu-text-field v-model="registeForm.password"></mu-text-field>
      </mu-form-item>
    <mu-form-item label="专业" >
      <mu-col span="6" sm="6"><mu-select  v-on:change="indexSelect" v-model="registeForm.yx">
          <mu-option v-for="option1 in YX" :value="option1.text" :key="option1.text" :label="option1.text">{{option1.text}}</mu-option>
          </mu-select > </mu-col>
        <mu-col span="6" sm="6"> <mu-select  v-model="registeForm.zy">
             <mu-option v-for="option2 in selection" :value="option2.text"  :key="option2.text" :label="option2.text">{{option2.text}}</mu-option>
          </mu-select> </mu-col>
    </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules" class="isAgree">
        <mu-checkbox label="同意用户协议" v-model="registeForm.isAgree"></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">注册</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>

  </div>

</template>

<script>

  export default {
    name: 'registeForm',
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
        ],//存放下拉菜单选项的二维数组
        registeForm: {
          username: '',
          name:'',
          password: '',
          yx: '',
          zy: '',
          A: '',
          isAgree: false
        },
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写学号'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        nameRules:[
          { validate: (val) => !!val, message: '必须填写姓名'},
          { validate: (val) => val.length >= 1&&val.length<=5, message: '姓名不能超过5'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      }
    },
    methods: {
      indexSelect(){
        this.registeForm.A = this.registeForm.yx;
      },//暂时存放院系的中间值
      submit () {
         this.$refs.registeForm.validate().then((result) => {
          console.log('form valid: ', result)
         });
      },
      clear () {
        this.$refs.registeForm.clear();    //为什么clear 方法不能实现  因为 ref 绑定的from 和登录那边绑定的一样
        this.registeForm = {
          username: '',
          name:'',
          password: '',
          isAgree: false
        };
      }
    }, computed: {
      selection: function () {
        for (var i = 0; i < this.YX.length; i++) {
          if (this.YX[i].text == this.registeForm.A) {
            return this.YX[i].ZY;
          }
        }
      },
    },
  }
</script>

<style scoped>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }

</style>
