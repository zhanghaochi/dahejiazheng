<template>
  <div class="app-container">
    <div class="box1">
      <img src="@/assets/zhaopin.jpg" width="100%">
      <van-cell-group style="width:90%;margin-left:5%;background-color:rgba(0,0,0,0)">
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field style="margin-top:50px;" v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  width: 100%;
}
.app-container:before {
  content: "";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("~@/assets/back.jpg") center 0 no-repeat;
  /* background-size: cover; */
}
.box1 {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-right: auto;
  margin-left: auto;
}
</style>
