<template>
  <div>
    <el-row class="tac" v-if="this.$store.state.user.identity == 'guest'">
      <el-col>
        <!-- 用户 -->
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title"><router-link to="./BookRoom" tag="span">预定房间</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"><router-link to="./Service" tag="span">附加服务</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="./OrderDetail" tag="span">订单详情</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title"><router-link to="./Complaint" tag="span">投诉举报</router-link></span>
        </el-menu-item>
      </el-menu>
      </el-col>
  </el-row>
  <el-row class="tac" v-if="this.$store.state.user.identity == 'manager'">
      <el-col>
      <!-- 管理员 -->
      <el-menu
        v-if="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title"><router-link to="./RoomHandle" tag="span">客房管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"><router-link to="./ServiceHandle" tag="span">服务处理</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="./UserIDHandle" tag="span">住客验证</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</div>
  
</template>
<script>
  export default {
    // data(){
    //   return{
    //     user:false,
    //     manager:true
    //   }
    // },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
