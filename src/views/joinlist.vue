<template>
  <div class="list-container">
    <van-list
      :immediate-check="false"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in listdata"
        :key="item.join_id"
        :title="item.name"
        :value="item.item"
        size="large"
        :label="item.phone"
        :to="{ name: 'joindetail', query: { id:item.join_id}}"
      />
      <!-- <van-cell v-for="item in listdata" :key="item" :title="item"/> -->
    </van-list>
  </div>
</template>

<script>
import { getjoinlist } from "@/api/dingdan";
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
      getjoinlist(this.listquery)
        .then(response => {
          this.maxnum = response.data.maxnum;
          this.listdata = this.listdata.concat(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLoad() {
      this.listquery.page++;
      getjoinlist(this.listquery)
        .then(response => {
          this.listdata = this.listdata.concat(response.data.data);
          this.loading = false;
        })
        .catch(err => {});
      if (this.listdata.length >= this.maxnum) {
        this.finished = true;
      }
    }
  }
};
</script>

<style scoped>
.van-cell {
  margin-bottom: 20px;
}
</style>
