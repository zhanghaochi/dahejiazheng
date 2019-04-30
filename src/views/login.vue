<template>
  <div class="login-container" >
    <el-form :model="loginForm" :rules="rules" ref="myForm">
      <el-form-item prop="username">
        <el-input placeholder="账号" prefix-icon v-model="loginForm.username" clearable @keyup.native.enter="handlelogin">
          <template slot="prepend">
            <van-icon name="friends" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" prefix-icon v-model="loginForm.password" clearable show-password @keyup.native.enter="handlelogin" >
          <template slot="prepend">
            <van-icon name="lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item style="background: rgba(0, 0, 0, 0.1);">
        <el-button :loading="loading" type="primary" @click="handlelogin" >登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      },
      loading: false
    };
  },
  methods: {
    handlelogin() {
      this.$refs.myForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(response => {
              this.$router.push("/orderlist");
              this.loading = false;
            })
            .catch(err => {
              console.log(err);
              this.loading = false;
              Message.error(err);
            });
        } else {
          console.log("错误提交");
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$menuBg: #545c64;
$cursor: #fff;

.login-container {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  // background-color: $menuBg;
  // background: url("~@/assets/yiyuan.jpg") center 0 no-repeat;
  background-size: 100%,100%;
  background-position: bottom center;
  .el-form {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40%;
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      .el-input {
        input {
          color: #fff;
          background: transparent;
          border: 0;
          padding: 0;
        }
        div {
          background: transparent;
          border: 0;
          color: #eee;
        }
      }
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
