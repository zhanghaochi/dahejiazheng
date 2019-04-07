<template>
  <div class="app-container">
    <van-row>
      <van-col span="24">
        <van-button size="large" type="primary" to="/job">加入我们</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-button size="large" type="danger" to="/join">加盟我们</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container{
  padding-top: 20%;
  width: 100%;
  line-height: 180px;
}
.van-button{
  width: 80%;
  height: 100px;
  font-size: 50px
}
</style>
