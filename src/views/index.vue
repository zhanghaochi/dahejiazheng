<template>
  <div class="app-container">
    <van-row>
      <van-col span="24" class="titlebar">
        <img src="@/assets/banner.jpg" width="100%">
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-button size="large" type="danger" to="/job">我要应聘</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-button size="large" type="warning" to="/peixun">我要培训</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-button size="large" type="primary" to="/join">我要加盟</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  width: 100%;
}
.van-button {
  width: 80%;
  height: 100px;
  font-size: 50px;
}
.titlebar {
  font-size: 0;
}
</style>
