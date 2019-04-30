<template>
  <div>
    <p>来自{{detaildata.name}}的应聘</p>
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
        title="应聘种类"
        :value="detaildata.job_scopes"
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
    <van-button type="info" to="/joblist">查看其他应聘信息</van-button>
  </div>
</template>

<script>
import { getjobdetail } from "@/api/dingdan";
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
      getjobdetail(this.$route.query.id)
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
