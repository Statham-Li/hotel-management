<template>
    <el-breadcrumb separator=" " class="login-href">
    <el-breadcrumb-item v-if="!this.$store.state.user.id"><a href="/login">登录</a></el-breadcrumb-item>
    <el-breadcrumb-item v-if="!this.$store.state.user.id"><a href="/Register">注册</a></el-breadcrumb-item>
    <el-breadcrumb-item v-if="this.$store.state.user.id">欢迎您，{{$store.state.user.name}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="this.$store.state.user.id"><img :src="this.$store.state.user.avatar" alt="" style="display:inline-block;width:30px;height:30px;margin:0;border-radius:50%"></el-breadcrumb-item>
    <el-breadcrumb-item v-if="this.$store.state.user.id"><router-link to="/User">个人中心</router-link></el-breadcrumb-item>
    <el-breadcrumb-item v-if="this.$store.state.user.id"><span @click="logout()" class="logout">退出</span></el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    data(){
        return{
            login:true
        }
    },
    methods:{
        logout(){
            // 清除token
            localStorage.removeItem('eleToken')
            // 设置vuex store
            this.$store.dispatch('clearCurrentState')
            // 跳转
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
    .login-href{
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding-left: 78%;
        padding-top:3px; 
        line-height: 40px;
        vertical-align: middle;
        background: #ffd04b;
        border-radius: 2px;
    }
    .logout:hover{
        cursor: pointer;
    }
</style>

