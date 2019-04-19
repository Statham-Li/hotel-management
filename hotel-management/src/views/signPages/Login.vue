<template>
  <div class="login">
      <section class="form_container">
          <div class="manage_tip">
              <el-form :model="loginUser" status-icon :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <div class="tiparea">
                    <p>还没有账号？<router-link to="/Register">去注册</router-link></p>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </div>
      </section>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';
  export default {
    name: 'Register',
    components:{},
    data() {
      return {
          loginUser:{
              email: "",
              password: ""
          },
          rules:{
              email:[
                  {
                        type: 'email',
                        required: true,
                        message: "邮箱格式不正确",
                        trigger: 'blur'
                  }
              ],
              password:[
                  {
                      required: true,
                      message: "密码不能为空", 
                      trigger: 'blur'
                  },{
                    min: 6,
                    max: 30,
                    message: "长度应在6-30字符之间",
                    trigger: 'blur'
                  }
              ]
          }
      }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post("/api/user/login", this.loginUser)
                    .then(res => {
                        //  登录成功
                        const { token } = res.data;
                        // 存储到ls
                        localStorage.setItem("eleToken", token);
                        // 解析token
                        const decoded = jwt_decode(token);
                        // console.log(decoded);

                        // 存储token到vuex
                        this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded))
                        this.$store.dispatch("setUser", decoded)
                        if(this.$store.state.user.identity === "guest")
                            this.$router.push('./Bookroom');
                        else if(this.$store.state.user.identity === "manager")
                            this.$router.push('./RoomHandle');
                    })
                }
            });
        },
        isEmpty(value){
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length===0) ||
                (typeof value === "String" && value.trim().length === 0)
            );
        }
    }
  }
</script>
<style scoped>
    .login{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .form_container{
        width: 400px;
        height: 240px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        padding: 25px;
        border: 1px solid #999;
        border-radius: 5px;
        text-align: center;
    }
    .form_container .manage_tip .title{
        font-family: 'Microsoft Yahei';
        font-weight: bolder;
        font-size: 26px;
        color: #999;
    }
    .tiparea{
        text-align: right;
        font-size: 12px;
        color: #333;
    }
    .tiparea p a{
        color: #409eff;
    } 
</style>
