<template>
  <div>
    <div style="text-align: center;margin-left: 500px">
      <el-form style="width: 40%" ref='loginForm' :rules="rule" :model="loginForm">
        <el-form-item label="用户名" label-width="100px" prop="username">
          <el-input v-model="loginForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px"  prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
  </div>
</template>

<script>
  import Qs from 'qs'
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        pictUrl: '',
        rule: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        },
      }
    },
    created () {
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let param = {
              username: this.loginForm.username,
              password: this.loginForm.password,
            }
            this.$axios.post('/login', param).then((response) => {
              if(response.data.code ==0){
                this.$message.success(response.data.msg)
                sessionStorage.setItem("Authorization",response.data.data.tokenHead+" "+response.data.data.token);
                this.$router.push({path:"/index"}).catch(error=>{});
              }else{
              }
            })
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add-el-form-item {
    width: 47%;
    display: inline-block;
    margin-right: 1rem;
  }
</style>
