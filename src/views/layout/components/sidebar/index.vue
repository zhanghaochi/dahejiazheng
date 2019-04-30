<template>
  <el-scrollbar>
    <el-menu v-if="sidebar" unique-opened background-color="#545c64" text-color="#fff" router>
    <sideitem v-for="(router,k) in permission_routers" :key="k" :item="router"/>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项1</el-menu-item>
        <el-menu-item index="4-4">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项1</el-menu-item>
        <el-menu-item index="5-4">选项2</el-menu-item>
      </el-submenu>-->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import sideitem from "./sideitem";

export default {
  data() {
    return {};
  },
  components: {
    sideitem
  },
  computed: {
    ...mapGetters(["permission_routers", "sidebar"])
  }
};
</script>

<style scoped>
</style>
