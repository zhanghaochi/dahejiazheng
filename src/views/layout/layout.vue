<template>
  <el-container class="app-wrapper">
    <el-header style="height:50px;padding:0;background-color: #30B08F;">
      <headbar/>
    </el-header>
    <el-container>
      <div class="side-container">
        <sidebar/>
      </div>
      <el-main style="padding:0">
        <appmain/>
      </el-main>
    </el-container>
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