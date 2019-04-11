<template>
  <div class="app-container">
    <div class="box1">
      <img src="@/assets/peixun.jpg" width="100%">
      <div>
        <p class="header">技术培训</p>
      </div>
      <van-cell-group style="width:90%;margin-left:5%;background-color:rgba(0,0,0,0)">
        <van-field
          v-model="username"
          size="large"
          required
          clearable
          label="姓名:"
          placeholder="请输入姓名"
        />
        <van-field
          size="large"
          v-model="phone"
          type="tel"
          label="电话:"
          placeholder="请输入电话号码"
          clearable
          required
        />
        <van-field
          size="large"
          v-model="password"
          type="number"
          label="身份证:"
          placeholder="请输入身份"
          clearable
          required
        />
        <van-cell title="性别:" size="large" required title-class="sexclass">
          <van-radio-group v-model="radio">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </van-cell>
        <van-field
          size="large"
          v-model="password"
          type="number"
          label="培训专业:"
          placeholder="点击选择"
          clearable
          required
        />
      </van-cell-group>
      <van-button type="warning">我要加盟</van-button>
    </div>
    <p class="myad">"安阳悦享工作室"提供技术支持</p>
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
  background-color: rgba(255, 255, 255, 0.9);
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 30px;
}
.header {
  line-height: 0;
}
.sexclass {
  flex: 0.5;
}
.van-radio-group {
  width: 100%;
  float: left;
  display: flex;
}
.van-radio {
  flex: 1;
  text-align: left;
}

.van-button {
  width: 80%;
  font-size: 0.5em;
}
.myad {
  color: #fff;
  font-size: 0.3em;
}
</style>
