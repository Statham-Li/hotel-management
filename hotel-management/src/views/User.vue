<template>
    <div class="user">
        <el-tabs v-model="activeName" type="card" id="tab">
            <el-tab-pane label="消息提醒" name="first">消息提醒</el-tab-pane>
            <el-tab-pane label="我的信息" name="second">
                <el-table
    header-align="center"
    :data="roomManageData"
    style="width: 100%">
    <el-table-column
      align="center"
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="room"
      label="房间"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="type"
      label="房型"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="name"
      label="旅客姓名">
    </el-table-column>
  </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
      return {
        roomManageData: [],
        activeName: "second"
      }
    },
    created(){
      this.getRoomManageData()
    },
    methods:{
      getRoomManageData(){
        this.$axios.get('/api/profile').then(res => {
          console.log(res)
          this.roomManageData = res.data
        })
        .catch(err => {
          
        })
      }
    }
}
</script>
<style scoped>
    .user{
        margin:20px;
        text-align: center;
    }
</style>

