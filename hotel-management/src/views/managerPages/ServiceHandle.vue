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
        <el-form-item style="width:16%;display:inline-block;z-index:1;"  id="btn">
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
          prop="house"
          label="房间"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="service"
          align="center"
          label="服务">
        </el-table-column>
        、<el-table-column
          prop="time"
          align="center"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="finish"
          align="center"
          label="完成情况">
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
            house: '1-1',
            time:'2019-04-05~2019-04-06 18:00-21:00',
            service: '叫早',
            finish: '已完成'
          }, {
            date: '2016-05-04',
            house: '1-2',
            time:'2019-04-05~2019-04-06 18:00-21:00',
            service: '清洁',
            finish: '已完成'
          }, {
            date: '2016-05-01',
            house: '1-3',
            time:'2019-04-05~2019-04-06 18:00-21:00',
            service: '订餐',
            finish: '已完成'
          }, {
            date: '2016-05-03',
            house: '1-4',
            time:'2019-04-05~2019-04-06 18:00-21:00',
            service: '清洁用品',
            finish: '已完成'
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


