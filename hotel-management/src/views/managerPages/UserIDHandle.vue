<template>
<div>
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
    <el-form-item style="width:16%;display:inline-block;z-index:1;" id="btn">
        <el-button type="info" size="mini">筛选</el-button>
        <el-button size="mini">重置</el-button>
    </el-form-item>
</el-form>
  <el-table
    header-align="center"
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      align="center"
      prop="date"
      label="订单号"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="name"
      label="旅客姓名"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="room"
      label="房间号">
    </el-table-column>
    <el-table-column
      align="center"
      prop="address"
      label="验证结果">
    </el-table-column>
  </el-table>
</div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 2) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          room: '1-1',
          address: '已通过'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          room: '1-2',
          address: '未通过'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          room: '1-3',
          address: '待验证',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          room: '1-4',
          address: '已通过'
        }]
      }
    }
  }
</script>
<style>
#btn .el-form-item__content{
  margin-left: 10px !important;
}
</style>

