<template>
  <div>
      <el-form ref="Form" label-width="80px" style="margin-top: 15px;" :model="search_data">
      <el-form-item label="日期" style="display:inline-block;">
          <el-date-picker
          type="daterange"
          size="mini"
          v-model="search_data.timeRange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
          </el-date-picker>
      </el-form-item>
      <el-form-item style="width:16%;display:inline-block;z-index:1;"  id="btn">
          <el-button type="info" size="mini" @click="handleSearch">筛选</el-button>
          <el-button size="mini">重置</el-button>
      </el-form-item>
  </el-form>
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
      <!-- <el-table-column
        align="center"
        prop="room"
        label="房间"
        width="180">
      </el-table-column> -->
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
    <el-row>
      <el-col :span="24">
        <div class="page-con">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageData.cur_page"
            :page-sizes="pageData.page_sizes"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageData.total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .page-con{
      text-align: right;
      margin-top:10px; 
    }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 3 || rowIndex === 0) {
          return 'warning-row';
        }
        return '';
      }
    },
    created(){
      this.getRoomManageData()
    },
    data() {
      return {
        roomManageData: [],
        tableData: [],
        pageData: {
          cur_page: 1, // 当前页数
          total: 0, // 总数
          page_size: 5, // 当前页显示条数
          page_sizes: [5, 10, 15, 20], // 每页可显示条数
        },
        search_data: {
          timeRange: []
        },
        filterRoomManageData: []
      }
    },
    methods:{
      getRoomManageData(){
        this.$axios.get('/api/profile').then(res => {
          console.log(res)
          this.roomManageData = res.data
          this.filterRoomManageData = res.data
          this.setPages();
        })
        .catch(err => {
          
        })
      },
      setPages(){
        // 分页属性设置
        this.pageData.total = this.roomManageData.length;
        this.pageData.cur_page = 1;
        this.pageData.page_size = 5;
        // 设置默认分页数据
        this.tableData = this.roomManageData.filter((item, index) => {
          return index < this.pageData.page_size;
        })
      },
      handleDelete(index, row){
        debugger
        this.$axios.delete(`api/profile/delete/${row._id}`)
        .then(res=>{
          this.$message({
            message:'删除成功',
            type: 'success'
          })
          this.getRoomManageData()
        })
      },
      handleSizeChange(page_size){
        // 切换页码
        this.pageData.cur_page = 1;
        this.pageData .page_size = page_size;
        this.tableData = this.roomManageData.filter((item, index) => {
          return index < page_size;
        })
      },
      handleCurrentChange(page){
        // 获取当前页
        let index = this.pageData.page_size * (page - 1);
        // 数据总数
        let nums = this.pageData.page_size * page;
        // 容器
        let tables = [];
        for(let i = index; i<nums; i++){
          if(this.roomManageData[i]){
            tables.push(this.roomManageData[i]);
          }
          this.tableData = tables;
        }
      },
      handleSearch(){
        // 筛选
        if(this.search_data.timeRange.length === 0){
          this.$message({
            type: 'warning',
            message: '请选择时间范围'
          })
          this.getRoomManageData()
          return;
        }
        const startTime = this.search_data.timeRange[0].getTime()
        const endTime = this.search_data.timeRange[1].getTime()

        this.roomManageData = this.filterRoomManageData.filter(item => {
          let sDate = new Date(item.date[0]);
          let time = sDate.getTime();
          return time >=startTime && time <endTime
        });
        // 分页数据
        this.setPages();
      }
    }
  }
</script>

