<template>
  <div class="list-query">
      <!-- 搜索 -->
      <el-form ref="Form" label-width="80px" style="margin-top: 15px;">
        <el-form-item label="订单号" style="width:20%;display:inline-block;">
          <el-input prefix-icon="el-icon-search" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="旅客姓名" style="width:20%;display:inline-block;">
          <el-input prefix-icon="el-icon-search" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="日期" style="display:inline-block;">
          <el-date-picker
            type="daterange"
            size="mini"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="width:16%;display:inline-block;z-index:1;">
            <el-button type="info" size="mini">筛选</el-button>
            <el-button size="mini">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table
        header-align="center"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="地址">
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
<style>
.list-query{
  padding-left: -50px;
}
</style>

