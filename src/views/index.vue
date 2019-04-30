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
    <van-row>
      <p class="myad">联系电话：400-158-1981</p>
      <p class="myad">公司地址：安阳市北关区解放路大道180号</p>
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
  margin-bottom: 20px;
}
.myad{
  font-size: 0.5em;
  font-weight: bold;
}
</style>
