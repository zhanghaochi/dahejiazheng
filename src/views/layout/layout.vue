<template>
  <div class="app-wrapper">
    <div class="head-container">
      <headbar/>
    </div>
    <el-container class="main-container">
      <div class="side-container">
        <sidebar/>
      </div>
      <el-main style="padding:0">
        <appmain/>
      </el-main>
    </el-container>
  </div>
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
.app-wrapper {
  height: 100%;
}
.head-container {
  height: 50px;
  padding: 0;
  background-color: #30b08f;
}
.main-container{
  height: 100%;
}
.side-container {
  height: 100%;
  overflow: hidden;
  background-color: #1f2d3d;
}
</style>
