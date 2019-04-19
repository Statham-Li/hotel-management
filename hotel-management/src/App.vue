<template>
  <div id="app">
    <Breadcrumb></Breadcrumb>
    <div id="pos">
      <img src="./assets/logo.svg" class="image">
      <span class="til">优住后台管理</span>
    </div>
    <div class="contain">
      <Nav></Nav>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './views/Nav.vue'
import Breadcrumb from './views/Breadcrumb.vue'
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';
  export default {
    name: 'app',
    components: {
    Nav,
    Breadcrumb
  },
  created(){
    if(localStorage.eleToken){
      const decoded = jwt_decode(localStorage.eleToken);
      this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded))
      this.$store.dispatch("setUser", decoded)
    }
  },
    methods:{
        isEmpty(value){
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length===0) ||
                (typeof value === "String" && value.trim().length === 0)
            );
        }
    }
  }



</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /* margin-top: 100px; */
}
.contain{
  position: relative;
  display: flex;
  /* box-shadow:0 0 3px #2c3e50; */
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100%;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .tac{
    position: absolute;
    width: 240px;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .image{
    display: block;
    float: left;
    width: 100px;
    height: 100px;
    margin-left: 200px;
    margin-right:350px; 
    margin-bottom: 20px;
  }
  .til{
    font-weight: bolder;
    display: block;
    height: 120px;
    font-size: 40px;
    line-height: 120px;
    vertical-align: middle;
    text-align: justify;
    color: #666;
  }
    .el-carousel__container{
        height: 500px;
    }
    .view{
      flex: 1;
      box-shadow: 0 -2px 2px -1px #2c3e50;
    }
    #pos{
      display: flex;
      width:100%;
    }
</style>
