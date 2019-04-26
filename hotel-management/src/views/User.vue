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
                  prop="type"
                  label="房型"
                  width="180">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="name"
                  label="旅客姓名">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="name"
                  label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
        </el-tabs>
        <!-- 分页 -->
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
<script>
export default {
    data() {
      return {
        roomManageData: [],
        tableData:[],
        activeName: "second",
        pageData: {
          cur_page: 1, // 当前页数
          total: 0, // 总数
          page_size: 5, // 当前页显示条数
          page_sizes: [5, 10, 15, 20], // 每页可显示条数
        }
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
          // 设置分页数据
          this.setPages()
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
      }
    }
}
</script>
<style scoped>
    .user{
        margin:20px;
        text-align: center;
    }
    .page-con{
      text-align: right;
      margin-top:10px; 
    }
</style>

