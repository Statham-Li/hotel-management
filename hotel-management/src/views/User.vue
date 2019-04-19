<template>
    <div class="user">
        <el-tabs v-model="activeName" type="card" id="tab">
            <el-tab-pane label="消息提醒" name="first">消息提醒</el-tab-pane>
            <el-tab-pane label="我的信息" name="second">我的信息</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
    }
}
</script>
<style scoped>
    .user{
        margin:20px;
        text-align: center;
    }
</style>

