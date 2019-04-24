<template>
    <div class="block">
        <div style="width:500px;float:left;">
          <el-form :model="orderForm" :rules="rules" ref="orderForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="住客姓名" prop="name">
            <el-input v-model="orderForm.name"></el-input>
          </el-form-item>
          <el-form-item label="证件号码" prop="idCard">
            <el-input v-model="orderForm.idCard"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="orderForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="房间类型" prop="type">
            <el-select v-model="orderForm.type" placeholder="请选择房间类型">
              <!-- <el-option label="大床房" value="dachuang"></el-option>
              <el-option label="标准间" value="biaozhun"></el-option> -->
              <el-option v-for="item in type_list" :key="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入住时间" required prop="date">
            <el-date-picker
              v-model="orderForm.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="餐饮服务" prop="FAB">
            <el-switch v-model="orderForm.FAB" active-color="#ffd04b"></el-switch>
          </el-form-item>
          <el-form-item label="备注" prop="remarks">
            <el-input type="textarea" v-model="orderForm.remarks"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="submitForm('orderForm')">立即创建</el-button>
            <el-button @click="resetForm('orderForm')">重置</el-button>
          </el-form-item>
        </el-form>
        </div>
        <div class="show-room" v-if="orderForm.type==='标准间'">
          <div class="img-con">
            <img src="../../assets/biaozhun.jpg" alt="">
          </div>
          <div class="room-detail">
            <label>标准间</label>
            <ul>
              <li>有窗</li>
              <li>空调</li>
              <li>免费wifi</li>
              <li>独立卫浴</li>
              <li>电视</li>
            </ul>
          </div>
        </div>
        <div class="show-room" v-if="orderForm.type==='大床房'">
          <div class="img-con">
            <img src="../../assets/dachuang.jpg" alt="">
          </div>
          <div class="room-detail">
            <label>大床房</label>
            <ul>
              <li>有窗</li>
              <li>空调</li>
              <li>免费wifi</li>
              <li>独立卫浴</li>
              <li>电视</li>
            </ul>
          </div>
        </div>
    </div>
</template>
<style scoped>
ul{
  list-style: none;
}
.block{
  margin-left: 100px;
  margin-top: 30px;
  text-align: left;
}
.show-room{
  float: right;
  margin-right: 30px;
  width: 300px;
  height: 100%;
}
.show-room .img-con img{
  width: 100%;
  height:200px;
}
.show-room .room-detail{
  width: 100%;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
}
.show-room .room-detail li{
  color:rgb(11, 90, 45);
  text-align: center;
  margin-left: 110px;
  max-width: 80px;
  border-radius: 4px;
  margin-bottom: 10px;
  background: rgb(85,185,127,.5);
}
</style>
<script>
  export default {
    data() {
      return {
        orderForm: {
          name: '',
          type: '',
          date: [],
          FAB: false,
          idCard: '',
          remarks: ''
        },
          type_list: [
            "大床房",
            "标准间"
          ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          idCard: [
            { required: true, message: '请输入证件号码', trigger: 'blur' },
            { min: 18, max: 18, message: '请正确输入证件号', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请正确输入手机号', trigger: 'blur' }
          ],
          date: [
            { type: 'array', required: true, message: '请选择日期', trigger: 'change' }
          ],
          // date2: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
          type: [
            { type: 'string', required: true, message: '请至少选择一种房型', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          remarks: [
            { required: false, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/profile/add', this.orderForm)
            .then(res => {
              // 添加成功
              this.$message({
                message: '数据添加成功',
                type: 'success '
              })
              this.$router.push('/User')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
