<template>
  <div>
    <p>这是招聘页面</p>
    <div class="box1"></div>
    <van-button @click="gotofield" square type="primary">立即报名</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    gotofield() {
      this.$router.push('/field')
    }
  }
};
</script>

<style>
p {
  font-size: 20px;
}
.box1 {
  width: 100px;
  height: 100px;
  background-color: orange;
}
</style>
