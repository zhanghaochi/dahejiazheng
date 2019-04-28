<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in listdata"
        :key="item"
        :title="item.user.wx_nickName+'的订单'"
        :value="item.kind.kind_name"
        size="large"
        :label="item.address"
        clickable
        @click="www.baidu.com"
      />
    </van-list>
  </div>
</template>

<script>
import { getlist } from "@/api/dingdan";
export default {
  data() {
    return {
      listdata: [],
      listquery: {
        page: 1,
        item: 10
      },
      maxnum: 0,
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.getorderlist();
  },
  methods: {
    getorderlist() {
      getlist(this.listquery)
        .then(response => {
          this.maxnum = response.data.maxNum;
          this.listdata = response.data.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.listquery = this.listquery + 1;
        // 加载状态结束
        this.loading = false;
        this.getorderlist();
        // 数据全部加载完成
        if (this.listdata.length >= this.maxnum) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.van-cell {
  margin-bottom: 20px;
}
</style>
