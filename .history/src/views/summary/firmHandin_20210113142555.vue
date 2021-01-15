<template>
  <div>

    <div class="card bbxx" style="width: 1000px">
      <div class="chartUser">

        <el-form :model="declareForm" status-icon label-width="30px" class="demo-ruleForm" style="padding-right: 30px" enctype='multipart/form-data'>
          <div class="helpinfo">
            <p><font class="hptext">请企事业单位认真填写展会活动登记表，所有选项均为必填，没有请填无，提交后无法修改</font></p>
          </div>
          <el-form-item style="margin-top: 20px">
            <label>本总结对应展会申报的id</label>
            <el-input type="text" ref="meetId" v-model="declareForm.meetId" 
            auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <label>展会名称</label>
            <el-input type="text" ref="detailId" v-model="declareForm.detailId" 
            auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <label>参展国家和地区数量</label>
            <el-input type="number" ref="countryNum" v-model="declareForm.countryNum" auto-complete="off" placeholder="个"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <span class="demonstration">参展省市自治区情况</span>
              <el-dropdown trigger="click" :hide-on-click='false'>
                <span class="el-dropdown-linkk">
                  选择参与地区<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >
                      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                  </el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
        </el-col>
          </el-form-item>

          <el-form-item>
            <label>参展企业数量</label>
          <el-input type="number" ref="companyNum" v-model="declareForm.companyNum" auto-complete="off" placeholder="个"></el-input>
          </el-form-item>
          <el-form-item>
            <label>展览面积</label>
            <el-input type="number" ref="area" v-model="declareForm.area" auto-complete="off" placeholder="平方米"></el-input>
          </el-form-item>
          <el-form-item>
            <label>同期活动数量</label>
            <el-input type="number" ref="activityNum" v-model="declareForm.activityNum" auto-complete="off" placeholder="个"></el-input>
          </el-form-item>

          <el-form-item>
                <label>采购商数量</label>
    <el-input type="number" ref=" buyerNum" v-model="declareForm.buyerNum" auto-complete="off" placeholder="个"></el-input>
              </el-form-item>
          <el-form-item>
                <label>参展产品</label>
    <el-input type="number" ref=" displayObj" v-model="declareForm.displayObj" auto-complete="off"></el-input>
              </el-form-item>              
              <el-form-item>
                <label>宣传媒体数</label>
                <el-input type="text" ref="mediaNum" v-model="declareForm.mediaNum" auto-complete="off" placeholder="家"></el-input>
              </el-form-item>
              <el-form-item>
                <label>观展总人数</label>
                <el-input type="number" ref="viewerNum" v-model="declareForm.viewerNum" auto-complete="off" placeholder="个"></el-input>
              </el-form-item>
              <el-form-item>
                <label>成交额（含意向）</label>
                <el-input type="number" ref="turnover" v-model="declareForm.turnover" auto-complete="off" placeholder="元"></el-input>
              </el-form-item>
          <el-form-item>
            <label>展会亮点(200字以内)</label>
            <el-input type="textarea" ref="nextWorkPlan" :maxlength="200" v-model="declareForm.nextWorkPlan" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <label>下一步工作计划(200字以内)</label>
            <el-input type="textarea" ref="meetHighlight" :maxlength="200" v-model="declareForm.meetHighlight" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item> 

          <el-form-item>
            <label class="xrequired">填报单位</label>
            <el-input type="text" ref="writeObject" v-model="declareForm.writeObject" auto-complete="off"></el-input>
            <label class="xrequired">责任处室</label>
            <el-input type="text" ref="department" v-model="declareForm.department" auto-complete="off"></el-input>
            <label class="xrequired">处室负责人</label>
            <el-input type="text" ref="charger" v-model="declareForm.charger" auto-complete="off"></el-input>
            <label class="xrequired">负责人手机号</label>
            <el-input type="number" ref="teleNum" v-model="declareForm.teleNum" auto-complete="off"
            oninput="if(value.length > 11) value = value.slice(0,11)"></el-input>
          </el-form-item>

          <el-form-item style="padding-bottom:30px; padding-right: 30px">
            <div style="float:left">
							<label>总结报告全文</label><br/>
							<input type="file" ref="summaryFile"  accept=".pdf" name="summaryFile"></input>
            </div>
            <div style="float:right">
							<label>单位主要负责同志签发页</label><br/>
							<input type="file" ref="hosterSignFile"  accept=".pdf" name="hosterSignFile"></input>
            </div>



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

const cityOptions = ["北京市", "河北省", "山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾省","香港特别行政区","澳门特别行政区"];
export default {
  name: "userfont",
  components: {},
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      declareForm: {
        meetId: "",
        detailId: "",
        meetHighlight:'',
        nextWorkPlan:'',
        countryNum: "",
        activityNum: "",
        viewerNum:'',
        displayObj: "",
        companyNum: "",
        area: "",
        buyerNum: "",
        mediaNum: "",
        visitorNum: "",
        turnover: "",
        lightSpot: "",
      },
    };
  },
  computed:{

  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    declareFormed() {
      // if (!this.declareForm.detailId) {
      //   warningOpen("请填写展会ID");
      //   this.$refs.detailId.focus();
      //   return false;
      // }
      // if (!this.declareForm.countryNum) {
      //   warningOpen("请填写参展国家和地区数量");
      //   this.$refs.countryNum.focus();
      //   return false;
      // }
      // if (!this.declareForm.companyNum) {
      //   warningOpen("请填写参展企业数量");
      //   this.$refs.companyNum.focus();
      //   return false;
      // }
      // if (!this.declareForm.area) {
      //   warningOpen("请填写展出总面积");
      //   this.$refs.area.focus();
      //   return false;
      // }
      // if (!this.declareForm.buyerNum) {
      //   warningOpen("请填写采购商数量");
      //   this.$refs.buyerNum.focus();
      //   return false;
      // }
      // if (!this.declareForm.mediaNum) {
      //   warningOpen("请填写宣传媒体数");
      //   this.$refs.mediaNum.focus();
      //   return false;
      // }
      // if (!this.declareForm.turnover) {
      //   warningOpen("请填写成交额");
      //   this.$refs.turnover.focus();
      //   return false;
      // }
      let ip1 = this.$refs.summaryFile;
      let ip2 = this.$refs.hosterSignFile;
      

      var formdata = new FormData();
      if (!ip1.files[0]) {
        warningOpen("请提交总结报告全文");
        this.$refs.summaryFile.focus();
        return false;
      }
      if (!ip2.files[0]) {
        warningOpen("请提交总结报告全文");
        this.$refs.hosterSignFile.focus();
        return false;
      }
      formdata.append("meetId", this.declareForm.meetId);
      //总结类型（事业单位提交[0]，省部级提交[1]，涉外展会负责单位提交[2]）
      formdata.append("kind", this.$store.getters.userKind);
      formdata.append("detailId", this.declareForm.detailId);

      // 参展国家数量
      formdata.append("countryNum", this.declareForm.companyNum);
      // 参展省市自治区情况
      formdata.append("provinceState", this.checkedCities);
      // 参展商数量
      formdata.append("companyNum", this.declareForm.companyNum);
      // 展会面积
      formdata.append("area", this.declareForm.area);
      // 参展产品
      formdata.append("displayObj", this.declareForm.displayObj);
      //展会商数量
      formdata.append("buyerNum", this.declareForm.buyerNum);
      // 参展媒体数
      formdata.append("mediaNum", this.declareForm.mediaNum);
      // 最终成交额（含意向）
      formdata.append("turnover", this.declareForm.turnover);
      // 观展总人数
      formdata.append("viewerNum", this.declareForm.viewerNum);
      // 同期活动数量
      formdata.append("activityNum", this.declareForm.activityNum);
      //展会亮点
      formdata.append("meetHighlight", this.declareForm.meetHighlight);
      //下一步工作计划
      formdata.append("nextWorkPlan", this.declareForm.nextWorkPlan);
      //总结报告
      formdata.append("summaryFile", ip1.files[0]);
      //单位主要负责同志签发页
      formdata.append("hosterSignFile", ip2.files[0]);

      console.log(this.checkedCities);

      var axios = require("axios");
      axios
        .post("http://10.28.160.250:8445/api/handin/summary", formdata)
        .then((successResponse) => {
          if (successResponse.data.code === 0) {
            this.$router.push("/").catch(() => {});
          } else if (successResponse.data.code === 6001) {
            this.$message({
              showClose: true,
              message: "展会信息id有误！",
              type: "error",
            });
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
.el-dropdown-linkk {
  cursor: pointer;
  color: #409eff;
  padding: 6px;
  background-color: rgb(247, 243, 243);
  border-radius: 7px;
  margin-left: 20px;
}
label.xrequired:after {
content: "*";
color: red;
font-size: 25px;
position: relative;
top: 8px;
margin-left: 3px;

}
</style>

