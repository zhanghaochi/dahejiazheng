<template>
  <el-container class="app-wrapper">
    <div class="side-container">
      <sidebar/>
    </div>
    <el-container class="main-container" direction="vertical">
      <div class="head-container">
        <headbar/>
      </div>
      <el-main style="padding:0">
        <appmain/>
      </el-main>
    </el-container>
  
</template>

<script>
import { sidebar, headbar, appmain } from "./components";
export default {
  components: {
    sidebar,
    headbar,
    appmain
  }
};
</script>

<style scoped>
.head-container{
  height: 50px;
  padding:0;
  background-color: #30B08F;
}
</style>



