<template>
  <div>
    <p>来自{{detaildata.name}}的加盟</p>
    <van-cell-group>
      <van-cell title="公司名称" :value="detaildata.name" title-class="kindclass" size="large"/>
      <van-cell
        title="公司电话"
        :value="detaildata.phone"
        title-class="kindclass"
        size="large"
      ><a :href="'tel:' + detaildata.phone">{{detaildata.phone}}</a>
      </van-cell>
      <van-cell title="营业执照" :value="detaildata.company_card" title-class="kindclass" size="large"/>
      <van-cell
        title="加盟种类"
        :value="detaildata.item"
        title-class="kindclass"
        size="large"
      />
      <van-cell
        title="提交时间"
        :value="detaildata.time_stamp"
        title-class="kindclass"
        size="large"
      />
    </van-cell-group>
    <van-button type="info" to="/joinlist">查看其他加盟信息</van-button>
  </div>
</template>

<script>
import { getjoindetail } from "@/api/dingdan";
export default {
  data() {
    return {
      detaildata: {},
    };
  },
  mounted() {
    this.ddd();
  },
  methods: {
    ddd() {
      // console.log(this.$route.query.id);
      getjoindetail(this.$route.query.id)
        .then(response => {
          this.detaildata = response.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  font-size: 0.6em;
  font-weight:bold;
}
.kindclass {
  text-align: left;
}
</style>
