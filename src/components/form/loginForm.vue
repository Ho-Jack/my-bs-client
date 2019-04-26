<template>
  <div v-loading="loading"
       element-loading-text="登录中~~~~">
    <mu-form ref="form" :model="loginForm" class="mu-demo-form" label-position="left">
      <mu-form-item label="用户名" prop="username" :rules="usernameRules">
        <mu-text-field v-model="loginForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码  :" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="loginForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox label="同意用户协议" v-model="loginForm.isAgree"></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>

<script>
  export default {
    name: 'loginForm',
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        loginForm: {
          username: '',
          password: '',
          isAgree: false
        },
        loading: false
      }
    },
    methods: {
      submit() {
        this.loading = true

        this.$refs.form.validate().then((result) => {
          console.log('验证', result)
          if (!result) {
            setTimeout(()=>{
              this.loading = false
              this.$toast.error('请认真填写');
            },1000)
          } else {
            setTimeout(() => {

              this.loading = false
              this.$toast.success('登录成功');
              this.$router.push('/personal')
              sessionStorage.setItem('token', true)

            }, 1000)

          }

        });
      },
      clear() {
        this.$refs.form.clear();
        this.loginForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  }
</script>

<style scoped>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>
