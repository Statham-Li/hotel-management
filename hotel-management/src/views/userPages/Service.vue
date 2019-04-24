<template>
    <div class="block">
        <div class="orderItem">
            <p class="title">基本信息</p>
            <div class="row"><span class="con">用户名：</span>{{this.$store.state.user.name}}</div>
            <div class="row"><span class="con">订单号：</span>1234567</div>
            <div class="row"><span class="con">入住时间：</span>2019/04/02</div>
            <div class="row"><span class="con">用户验证：</span>已通过</div>
        </div>
        <div class="service">
          <p class="title">服务类型</p>
          <el-switch
            v-model="value3"
            style="margin:15px;"
            active-color="#ffd04b"
            active-text="客房叫早">
          </el-switch>
          <el-date-picker
            type="datetimerange"
            style="margin:15px;"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-switch
            v-model="value4"
            style="margin:15px;"
            active-color="#ffd04b"
            active-text="卫生清洁">
          </el-switch>
          <el-date-picker
            type="datetimerange"
            style="margin:15px;"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-switch
            v-model="value5"
            style="margin:15px;"
            active-color="#ffd04b"
            active-text="自助点餐">
          </el-switch>
          <el-date-picker
            type="datetimerange"
            style="margin:15px;"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-switch
            v-model="value6"
            style="margin:15px;"
            active-color="#ffd04b"
            active-text="洗漱用品">
          </el-switch>
          <el-date-picker
            type="datetimerange"
            style="margin:15px;"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
    </div>
</template>
<style scoped>
.block{
  width: 65%;
  margin-left: 100px;
  margin-top: 30px;
  text-align: left;
  display: flex;
}
.orderItem{
  flex-basis: 200px;
  margin-right: 20px;
  font-size: 14px;
  font-family: 'microsoft-yahei';
}
.orderItem p{
  padding-left:20px;
  box-sizing: border-box; 
}
.title{
  font-weight: bold;
  margin-bottom: 30px;
  /* text-align: center; */
}
.row{
  margin: 10px;
}
.service{
  flex: 1;
  text-align: center;
}
</style>
<script>
  export default {
      data() {
      return {
        value3: true,
        value4: false,
        value5: false,
        value6: false
      }
    }
  }
</script>
