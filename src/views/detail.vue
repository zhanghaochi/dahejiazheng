<template>
  <div>
    <p>来自{{detaildata.user.wx_nickName}}新订单</p>
    <van-cell-group>
      <van-cell title="订单号" :value="detaildata.order_id" title-class="kindclass" size="large"/>
      <van-cell title="下单时间" :value="detaildata.order_time" title-class="kindclass" size="large"/>
      <van-cell title="地址" :value="detaildata.address" title-class="kindclass" size="large"/>
      <van-cell title="姓名" :value="detaildata.addressee" title-class="kindclass" size="large"/>
      <van-cell
        title="电话"
        :value="detaildata.addressee_phone"
        title-class="kindclass"
        size="large"
      ><a :href="'tel:' + detaildata.addressee_phone">{{detaildata.addressee_phone}}</a>
      </van-cell>
      <van-cell
        title="服务种类"
        :value="detaildata.kind.kind_name"
        title-class="kindclass"
        size="large"
      />
      <van-cell
        title="预约时间"
        :value="detaildata.appointment_time"
        title-class="kindclass"
        size="large"
      />
      <van-cell title="实付金额" :value="detaildata.real_price" title-class="kindclass" size="large"/>
    </van-cell-group>
    <van-button type="info" to="/orderlist">查看其他订单</van-button>
  </div>
</template>

<script>
import { getdetail } from "@/api/dingdan";
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
      getdetail(this.$route.query.id)
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
