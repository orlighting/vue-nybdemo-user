<template>
  <div>

    <div class="card bbxx" style="width: 1000px">
      <div class="chartUser">

        <el-form :model="declareForm" status-icon label-width="30px" class="demo-ruleForm" style="padding-right: 30px" enctype='multipart/form-data'>
          <div class="helpinfo">
            <p><font class="hptext">请省部级认真填写展会活动登记表，所有选项均为必填，没有请填无，提交后无法修改</font></p>
          </div>
          <el-form-item style="margin-top: 20px">
            <label>展会信息id</label>
            <el-input type="number" ref="detailId" v-model="declareForm.detailId" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <label>参展国家和地区数量</label>
            <el-input type="number" ref="countryNum" v-model="declareForm.countryNum" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <label>参展企业数量</label>
          <el-input type="number" ref="companyNum" v-model="declareForm.companyNum" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <label>展出总面积</label>
            <el-input type="number" ref="area" v-model="declareForm.area" auto-complete="off" placeholder="平方米"></el-input>
          </el-form-item>


              <el-form-item>
                <label>采购商数量</label>
    <el-input type="number" ref=" buyerNum" v-model="declareForm.buyerNum" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <label>宣传媒体数</label>
                <el-input type="text" ref="mediaNum" v-model="declareForm.mediaNum" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <label>成交额</label>
                <el-input type="number" ref="turnover" v-model="declareForm.turnover" auto-complete="off" placeholder="元"></el-input>
              </el-form-item>

          <el-form-item style="padding-bottom:30px; padding-right: 30px">
							<label>总结报告全文</label><br/>
							<input type="file" ref="summaryFile"  accept=".pdf" name="summaryFile"></input>
          </el-form-item>

          <el-form-item style="padding-bottom:30px; padding-right: 30px" enctype='multipart/form-data'>

            <el-button class="subBtn" type="primary" v-on:click="declareFormed">提交</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>


  </div>
</template>

<script>
import { warningOpen, errorOpen, successOpen } from "../../utils/message";
export default {
  name: "userfont",
  components: {},
  data() {
    return {
      declareForm: {
        detailId:"",
        countryNum: "",
        companyNum: "",
        area: "",
        buyerNum: "",
        mediaNum: "",
        turnover: "",
      },
    };
  },
  methods: {
    declareFormed() {
      if (!this.declareForm.detailId) {
        warningOpen("请填写展会ID");
        this.$refs.detailId.focus();
        return false;
      }
      if (!this.declareForm.countryNum) {
        warningOpen("请填写参展国家和地区数量");
        this.$refs.countryNum.focus();
        return false;
      }
      if (!this.declareForm.companyNum) {
        warningOpen("请填写参展企业数量");
        this.$refs.companyNum.focus();
        return false;
      }
      if (!this.declareForm.area) {
        warningOpen("请填写展出总面积");
        this.$refs.area.focus();
        return false;
      }
      if (!this.declareForm.buyerNum) {
        warningOpen("请填写采购商数量");
        this.$refs.buyerNum.focus();
        return false;
      }
      if (!this.declareForm.mediaNum) {
        warningOpen("请填写宣传媒体数");
        this.$refs.mediaNum.focus();
        return false;
      }
      if (!this.declareForm.turnover) {
        warningOpen("请填写成交额");
        this.$refs.turnover.focus();
        return false;
      }
      let ip = this.$refs.summaryFile;

      var formdata = new FormData();
      if (!ip.files[0]) {
        warningOpen("请提交总结报告全文");
        this.$refs.summaryFile.focus();
        return false;
      }

      formdata.append("userId", this.$store.getters.token);
      formdata.append("kind", this.$store.getters.userKind);
      formdata.append("detailId", this.declareForm.detailId);
      formdata.append("countryNum", this.declareForm.countryNum);
      // 财政资金的拨款金额
      formdata.append("companyNum", this.declareForm.companyNum);
      // 其他来源的拨款金额
      formdata.append("area", this.declareForm.area);
      // 展会面积
      formdata.append("buyerNum", this.declareForm.buyerNum);
      // 国内参展商所占比例（单位：%）
      formdata.append("mediaNum", this.declareForm.mediaNum);
      // 国外参展商所占比例（单位：%）
      formdata.append("turnover", this.declareForm.turnover);

      formdata.append("summaryFile", ip.files[0]);

      console.log(formdata);

      var axios = require("axios");
      axios
        .post("http://10.28.191.95:8445/api/handin/summary", formdata)
        .then((successResponse) => {
          if (successResponse.data.code === 0) {
            this.$router.push("/").catch(() => {});
          } else if(successResponse.data.code === 6001) {
							this.$message({
								showClose: true,
								message: "展会信息id有误！",
								type: "error"
							})
							this.$refs.detailId.focus();
						}
        })
        .catch((failResponse) => {});
    },
  },
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

$list: bluee pinkk yelloww grennn purplee lightBluee;
$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
%shadow {
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  .title {
    font-size: 14px;
    padding: 10px;
    i {
      margin-#{$right}: 5px;
    }
  }
}

@mixin flex($direction: row, $content: space-between) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}

.kindsfont {
  font-size: 20px;
  font-family: 华文细黑;
}

.helpinfo {
  background-color: rgba(70, 130, 180, 0.1);
  transform: translateY(24%);
  margin: 10px;
  padding: 10px;
  width: 556px;
}
.hptext {
  color: rgba(70, 130, 180, 0.9);
}

.wrtext {
  color: rgba(255, 38, 38, 0.9);
}

.card {
  color: #666;
  @extend %shadow;

  ul {
    @include flex;
    li {
      flex: 1;
      a {
        color: #666666;
        align-items: center;
        padding-#{$top}: 20px;
        padding-#{$bottom}: 20px;
        @include flex(column);
        span {
          height: 44px;
        }
        .num {
          line-height: 44px;
          font-size: 42px;
          color: $bluee;
          margin: 0px;
        }
      }
      .kjfs-bluee {
        color: $bluee;
      }
      .kjfs-pinkk {
        color: $pinkk;
      }
      .kjfs-yelloww {
        color: $yelloww;
      }
      .kjfs-grennn {
        color: $grennn;
      }
      .kjfs-purplee {
        color: $purplee;
      }
      .kjfs-lightBluee {
        color: $lightBluee;
      }
      &:hover {
        .kjfs-bluee {
          color: #ffffff;
          background: $bluee;
        }
        .kjfs-pinkk {
          color: #ffffff;
          background: $pinkk;
        }
        .kjfs-yelloww {
          color: #ffffff;
          background: $yelloww;
        }
        .kjfs-grennn {
          color: #ffffff;
          background: $grennn;
        }
        .kjfs-purplee {
          color: #ffffff;
          background: $purplee;
        }
        .kjfs-lightBluee {
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }
  .table {
    padding: 21px;
    p {
      height: 52px;
      line-height: 52px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-#{$top}: none;
      @include flex(null, start);
      &:first-child {
        border-#{$top}: 1px solid #cccccc;
      }
      span {
      }
      .tit {
        width: 180px;
        min-width: 180px;
        height: 100%;
        text-align: center;
        border-#{$right}: 1px solid #cccccc;
        margin-#{$right}: 18px;
      }
      span.gitbox {
        flex: 1;
        height: 100%;
        overflow: hidden;
        @include flex(row, start);
        a {
          &:first-child {
            margin-#{$right}: 30px;
          }
        }
      }
    }
  }
}
#lineEcharts {
  margin-#{$top}: 30px;
  padding-#{$top}: 30px;
  @extend %shadow;
}
#maintable {
  margin-#{$top}: 30px;
  padding-#{$top}: 10px;
  @extend %shadow;
}

.chartArea {
  margin-bottom: 15px;
}
.inputFile1 {
  float: left;
}
.inputFile2 {
  float: right;
}
</style>

