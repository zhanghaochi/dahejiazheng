<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    class="scroll-container"
    @wheel.native.prevent="handleScroll"
  >
    <slot/>
  </el-scrollbar>
</template>

<script>
export default {};
</script>

<style scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.el-icon-close {
  width: 16px;
  height: 16px;
  vertical-align: 2px;
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: 100% 50%;
}
.el-icon-close:before {
  transform: scale(0.6);
  display: inline-block;
  vertical-align: -3px;
}
.el-icon-close:hover {
  background-color: #b4bccc;
  color: #fff;
}
</style>
