<template>
  <div>
    <p>来自{{detaildata.name}}的培训信息</p>
    <van-cell-group>
      <van-cell title="姓名" :value="detaildata.name" title-class="kindclass" size="large"/>
      <van-cell title="性别" :value="detaildata.sex==0?'男':'女'" title-class="kindclass" size="large"/>
      <van-cell
        title="电话"
        :value="detaildata.phone"
        title-class="kindclass"
        size="large"
      ><a :href="'tel:' + detaildata.phone">{{detaildata.phone}}</a>
      </van-cell>
      <van-cell title="身份证号码" :value="detaildata.id_card" title-class="kindclass" size="large"/>
      <van-cell
        title="培训种类"
        :value="detaildata.major"
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
    <van-button type="info" to="/peixunlist">查看其他培训信息</van-button>
  </div>
</template>

<script>
import { getpeixundetail } from "@/api/dingdan";
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
      getpeixundetail(this.$route.query.id)
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
