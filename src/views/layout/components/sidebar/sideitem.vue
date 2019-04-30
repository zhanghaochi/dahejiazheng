<template>
  <div v-if="item.children">
    <el-menu-item v-if="haschildren(item)" :index="item.path">
      <span slot="title">{{item.children[0].meta.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <el-menu-item
        v-for="(i,k) in item.children"
        :key="k"
        :index="item.path+'/'+i.path"
      >{{i.meta.title}}</el-menu-item>
    </el-submenu>
  </div>
</template>

<script scoped>
export default {
  name: "sideitem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    haschildren(item) {
      if (item.children.length === 1) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style scoped>
.svg-icon {
  margin-right: 10px;
  margin-bottom: -4px;
  width: 1.5em !important;
  height: 1.5em !important;
}
</style>
