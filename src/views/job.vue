<template>
  <div class="app-container">
    <div class="box1">
      <img src="@/assets/zhaopin.jpg" width="100%">
      <div>
        <p class="header">招聘</p>
      </div>
      <van-cell-group style="width:90%;margin-left:5%;background-color:rgba(0,0,0,0)">
        <van-field
          v-model="mydata.name"
          size="large"
          required
          clearable
          label="姓名:"
          placeholder="请输入姓名"
        />
        <van-field
          size="large"
          v-model="mydata.phone"
          type="tel"
          label="电话:"
          placeholder="请输入电话号码"
          clearable
          required
        />
        <van-field
          v-model="mydata.idcard"
          size="large"
          type="number"
          label="身份证:"
          placeholder="请输入身份号码"
          clearable
          required
        />
        <van-cell title="性别:" size="large" required class="sex-cell" title-class="sexclass">
          <van-radio-group v-model="mydata.sex" class="sex-radio-group">
            <van-radio class="sex-radio" checked-color="#07c160" name="男">男</van-radio>
            <van-radio class="sex-radio" checked-color="#07c160" name="女">女</van-radio>
          </van-radio-group>
        </van-cell>
        <van-cell title="应聘类型:" size="large" required title-class="kindclass"></van-cell>
        <van-radio-group v-model="mydata.jobscopes" class="job-radio-group">
          <van-cell clickable @click="mydata.jobscopes = '家电清洗'">
            <van-radio checked-color="#07c160" name="家电清洗">家电清洗</van-radio>
          </van-cell>
          <van-cell clickable @click="mydata.jobscopes = '家电维修'">
            <van-radio checked-color="#07c160" name="家电维修">家电维修</van-radio>
          </van-cell>
          <van-cell clickable @click="mydata.jobscopes = '保洁服务'">
            <van-radio checked-color="#07c160" name="保洁服务">保洁服务</van-radio>
          </van-cell>
          <van-cell clickable @click="mydata.jobscopes = '保姆护工'">
            <van-radio checked-color="#07c160" name="保姆护工">保姆护工</van-radio>
          </van-cell>
          <van-cell clickable @click="mydata.jobscopes = '水电维修'">
            <van-radio checked-color="#07c160" name="水电维修">水电维修</van-radio>
          </van-cell>
          <van-cell clickable @click="mydata.jobscopes = '家居环保'">
            <van-radio checked-color="#07c160" name="家居环保">家居环保</van-radio>
          </van-cell>
        </van-radio-group>
      </van-cell-group>
      <van-button type="warning" @click="submit">我要应聘</van-button>
    </div>
    <!-- <p class="myad">"安阳悦享工作室"提供技术支持</p> -->
  </div>
</template>

<script>
import { sendjob } from "@/api/send";

export default {
  data() {
    return {
      mydata: {
        name: undefined,
        phone: undefined,
        idcard: undefined,
        sex: undefined,
        jobscopes: undefined
      }
    };
  },
  methods: {
    submit() {
      if (
        !this.mydata.name ||
        !this.mydata.phone ||
        !this.mydata.idcard ||
        !this.mydata.sex ||
        !this.mydata.jobscopes
      ) {
        this.$dialog
          .alert({
            message: "请填写完整！"
          })
          .then(() => {
            // on close
          });
      } else {
        sendjob(this.mydata)
          .then(response => {
            if (response.data.code == 200) {
              this.$dialog
                .alert({
                  message: "提交成功"
                })
                .then(() => {
                  this.$router.push("/");
                });
            } else {
              this.$dialog.alert({
                message: "提交失败"
              });
            }
          })
          .catch(err => {
            this.$dialog.alert({
              message: err
            });
          });
      }
    },
  }
};
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
.van-field {
  margin-bottom: 10px;
}
.header {
  line-height: 0;
}
.sexclass {
  flex: 0.5;
}
.sex-cell {
  margin-bottom: 10px;
}
.sex-radio-group {
  width: 100%;
  float: left;
  display: flex;
}
.sex-radio {
  flex: 1;
  text-align: left;
}
.van-button {
  margin-top: 20px;
  width: 80%;
  font-size: 0.5em;
}
.kindclass {
  text-align: left;
  padding-left: 5%;
}
.myad {
  color: #fff;
  font-size: 0.3em;
}
.job-radio-group > .van-cell {
  padding-left: 40px;
}
</style>
