<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar" class="hamburger-container"></hamburger>
    <div class="right-menu">
      <span class="wenhou">{{name}}</span>
      <el-dropdown class="avatar-container right-menu-item" trigger="click"> 
        <div class="avatar-wrapper">
          <img src="@/assets/touxiang.png" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/orderlist">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import hamburger from "@/components/hamburger"

export default {
  name: "headbar",
  components: {
    hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", 'name'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("togglesidebar");
    },
    logout(){
        this.$store.dispatch('LoginOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
}
.hamburger-container {
  margin-left: 8px;
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
}
.hamburger-container{
  float: left;
}
.right-menu {
  float: right;
  height: 100%;
}
.wenhou{
  display: block;
  font: 0.5em sans-serif;
  float: left;
  height: 50px;
  line-height: 50px;
}
.right-menu :focus{
  outline: none;
}
.right-menu-item {
  display: inline-block;
  margin: 0 8px;
}
.avatar-container{
  height: 50px;
  margin-right: 30px;
} 
.avatar-wrapper {
  margin-top: 5px;
  position: relative;
}
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.el-icon-caret-bottom {
  cursor: pointer;
  position: absolute;
  right: -20px;
  top: 25px;
  font-size: 12px;
}
</style>