<template>
  <div class="register">
      <section class="form_container">
          <div class="manage_tip">
              <el-form :model="registerUser" status-icon :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkpass">
                    <el-input type="password" v-model="registerUser.checkpass" placeholder="请确认密码"></el-input>
                </el-form-item>
                <el-form-item label="选择身份" prop="identity">
                    <el-select v-model="registerUser.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="用户" value="guest"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
                    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </div>
      </section>
  </div>
</template>
<script>
  export default {
    name: 'Register',
    components:{},
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.registerUser.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
      return {
          registerUser:{
              name: "",
              email: "",
              password: "",
              checkpass: "",
              identity: ""
          },
          rules:{
              name:[
                {
                    required: true,
                    message: "用户名不能为空",
                    trigger: 'blur'
                },{
                    min: 2,
                    max: 30,
                    message: "长度应在2-30字符之间",
                    trigger: 'blur'
                }],
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
              ],
              checkpass:[
                  {
                      required: true,
                      message: "请确认密码", 
                      trigger: 'blur'
                  },{
                    min: 6,
                    max: 30,
                    message: "长度应在6-30字符之间",
                    trigger: 'blur'
                  },{
                      validate: validatePass2,
                      trigger: 'blur'
                  }
              ]
          }
      }
    },
    methods:{
        submitForm(formName){
            debugger
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    debugger
                    this.$axios.post("/api/user/register", this.registerUser)
                    .then(res => {
                        // 注册成功
                        this.$message({
                            message: "账号注册成功",
                            type: 'success'
                        })
                    this.$router.push('./login');
                    })
                    .catch(err => {
                        this.$message({
                            message: err,
                            type: 'error'
                        })
                    })
                }
            });
        }
    }
  }
</script>
<style scoped>
    .register{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .form_container{
        width: 400px;
        height: 440px;
        position: absolute;
        top: 10%;
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
</style>
