<template>
  <div>

    <div class="card bbxx" style="width: 1000px">
      <div class="chartUser">

        <el-form :model="declareForm" status-icon label-width="30px" class="demo-ruleForm" style="padding-right: 30px">
          <div class="helpinfo">
            <p><span class="wrtext">本申报适用于未加入展会计划的申报！已加入计划的请使用简易申报！</span></p>
            <p><font class="hptext">请认真填写展会活动登记表，所有选项均为必填，没有请填无，提交后未经审核无法修改</font></p>
          </div>

          <div style="padding: 18px; transform: translateY(20%)">
            <label class="kindsfont">一、基础信息</label>
          </div>
          <el-form-item style="margin-top: 20px">
            <label>展会名称</label>
            <el-input type="text" v-model="declareForm.exponame" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <label>主办单位</label>
            <el-input type="text" v-model="declareForm.hostcomp" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <label>承办单位</label>
            <el-input type="text" v-model="declareForm.fondcomp" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>

          <div style="padding: 18px">
            <label class="kindsfont">二、办展依据</label>
          </div>

          <el-row gutter=0>
            <el-col span=12>
              <el-form-item>
                <label>批准单位</label>
                <el-input type="text" v-model="declareForm.authobj" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col span=12>
              <el-form-item>
                <label>批准文号</label>
                <el-input type="text" v-model="declareForm.authnum" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <div style="padding: 18px">
            <label class="kindsfont">三、举办情况</label>
          </div>

          <el-row gutter=0>
            <el-col span=17>
              <el-form-item>
                <label>举办地点</label>
                <el-input type="text" v-model="declareForm.hostpls" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col span=7>
              <el-form-item>
                <label>举办时间</label>
                <el-input type="date" v-model="declareForm.hosttime" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col span=12>
              <el-form-item>
                <label>举办周期</label>
                <el-input type="text" v-model="declareForm.hostcrlc" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
            <el-col span=12>
              <el-form-item>
                <label>举办面积</label>
                <el-input type="text" v-model="declareForm.hostarea" auto-complete="off"
                          placeholder=""></el-input>
              </el-form-item>
            </el-col>
          </el-row>



          <el-form-item>
            <label>展会内容</label>
            <el-input type="textarea" v-model="declareForm.expocont" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>

          <el-row gutter=0>
            <el-col span=12>
              <el-form-item>
                <p><label>参展商来源</label></p>
                <el-col span=12>
                  <p>
                    <span>国内：</span>
                    <input id="view1" style="width: 40px" type="number" min="0" max="100" v-model="declareForm.expofrom1" auto-complete="off"
                              placeholder="" @change="change1" oninput="if(value>100)value=100; if(value<0)value=0"></input>
                    <span>%</span>
                  </p>
                </el-col>
                <el-col span=12>
                  <p>
                    <span>海外：</span>
                    <input id="view2" style="width: 40px" type="number" min="0" max="100"  v-model="declareForm.expofrom2" auto-complete="off"
                              placeholder="" @change="change2" oninput="if(value>100)value=100; if(value<0)value=0"></input>
                    <span>%</span>
                  </p>
                </el-col>

              </el-form-item>
            </el-col>
            <el-col span=12>
              <el-form-item>
                <p><label>观众构成</label></p>
                <el-row gutter=0>
                  <el-col span=2>
                    <div><br></div>
                  </el-col>
                  <el-col span=12>
                    <p style="font-size: 10px">
                      <label style="vertical-align:middle;">是否有采购商参加</label>
                      <input style="vertical-align:middle;" type="checkbox" v-model="declareForm.viewfrom1" name="views" auto-complete="off"
                             placeholder=""></input>
                    </p>
                  </el-col>
                  <el-col span=8>
                    <p style="font-size: 10px">
                      <label style="vertical-align:middle;">是否有消费者参加</label>
                      <input style="vertical-align:middle;" type="checkbox" v-model="declareForm.viewfrom2" name="views" auto-complete="off"
                             placeholder=""></input>
                    </p>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>

          <div style="padding: 18px">
            <label class="kindsfont">四、经费来源</label>
          </div>

          <div style="padding: 18px">
            <label class="kindsfont" style="font-family: 宋体">财政资金</label>
          </div>

          <el-form-item>
            <label>拨款单位</label>
            <el-input type="text" v-model="declareForm.finanfrom" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <label>金额</label>
            <el-input type="text" v-model="declareForm.finanfond" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>

          <div style="padding: 18px">
            <label class="kindsfont" style="font-family: 宋体">其他资金</label>
          </div>

          <el-form-item>
            <label>资金来源</label>
            <el-input type="text" v-model="declareForm.otherfrom" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <label>金额</label>
            <el-input type="text" v-model="declareForm.otherfond" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>

          <div style="padding: 18px">
            <label class="kindsfont">五、其他信息</label>
          </div>

          <el-form-item>
            <p><label>领导出席情况</label></p>
            <el-col span=12>
              <p style="font-size: 10px">
                <label style="vertical-align:middle;">是否邀请党和国家领导人出席</label>
                <input style="vertical-align:middle;" type="checkbox" v-model="declareForm.leaderN" name="leaders" auto-complete="off"
                       placeholder=""></input>
              </p>
            </el-col>
            <el-col span=12>
              <p style="font-size: 10px">
                <label style="vertical-align:middle;">是否邀请境外部级以上政要出席</label>
                <input style="vertical-align:middle;" type="checkbox" v-model="declareForm.leaderF" name="leaders" auto-complete="off"
                       placeholder=""></input>
              </p>
            </el-col>
          </el-form-item>
          <el-form-item>
            <label>内容简述</label>
            <el-input type="textarea" v-model="declareForm.content" auto-complete="off"
                      placeholder=""></el-input>
          </el-form-item>

          <el-form-item style="padding-bottom:30px; padding-right: 30px">
            <el-button class="subBtn" type="primary" v-on:click="declareFormed">提交</el-button>
          </el-form-item>

        </el-form>

      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "userfont",

  data(){
    return{
      declareForm: {
        exponame:"",
        hostcomp:"",
        fondcomp:"",
        authobj:"",
        authnum:"",
        hostpls:"",
        hosttime:"",
        hostcrlc:"",
        hostarea:"",
        expocont:"",
        expofrom1:"",
        expofrom2:"",
        viewfrom1:"",
        viewfrom2:"",
        finanfrom:"",
        finanfond:"",
        otherfrom:"",
        otherfond:"",
        leaderN:"",
        leaderF:"",
        content:"",
      }
    }
  },
  methods:{
    change1(){
      let var1 = document.getElementById("view1").value;
      document.getElementById("view2").value = 100 - var1;
    },

    change2(){
      let var2 = document.getElementById("view2").value;
      document.getElementById("view1").value = 100 - var2;
    },

    declareFormed(){
      console.log(this.declareForm.leaderF);
    }
  }

}


</script>

<style lang="scss">
$top:top;
$bottom:bottom;
$left:left;
$right:right;
$leftright: ($left, $right);
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

$list: bluee pinkk yelloww grennn purplee lightBluee;
$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
%shadow{
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  .title{
    font-size: 14px;
    padding: 10px;
    i{
      margin-#{$right}: 5px;
    }
  }
}

@mixin flex($direction:row,$content:space-between){
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}

.kindsfont{
  font-size: 20px;
  font-family: 华文细黑;
}

.helpinfo{
  background-color:rgba(70,130,180,0.1);
  transform: translateY(24%);
  margin: 10px;
  padding: 10px;
  width: 556px;
}
.hptext{
  color: rgba(70,130,180,0.9);
}

.wrtext{
  color: rgba(255,38,38,0.9);
}


.card{
  color: #666;
  @extend %shadow;

  ul{
    @include flex;
    li{
      flex: 1;
      a{
        color: #666666;
        align-items:center;
        padding-#{$top}: 20px;
        padding-#{$bottom}: 20px;
        @include flex(column);
        span{
          height: 44px;
        }
        .num{
          line-height: 44px;
          font-size: 42px;
          color: $bluee;
          margin: 0px;
        }
      }
      .kjfs-bluee{
        color: $bluee;
      }
      .kjfs-pinkk{
        color: $pinkk;
      }
      .kjfs-yelloww{
        color: $yelloww;
      }
      .kjfs-grennn{
        color: $grennn;
      }
      .kjfs-purplee{
        color: $purplee;
      }
      .kjfs-lightBluee{
        color: $lightBluee;
      }
      &:hover{
        .kjfs-bluee{
          color: #ffffff;
          background: $bluee;
        }
        .kjfs-pinkk{
          color: #ffffff;
          background: $pinkk;
        }
        .kjfs-yelloww{
          color: #ffffff;
          background: $yelloww;
        }
        .kjfs-grennn{
          color: #ffffff;
          background: $grennn;
        }
        .kjfs-purplee{
          color: #ffffff;
          background: $purplee;
        }
        .kjfs-lightBluee{
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }
  .table{
    padding: 21px;
    p{
      height: 52px;
      line-height: 52px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-#{$top}: none;
      @include flex( null,start);
      &:first-child{
        border-#{$top}: 1px solid #cccccc;
      }
      span{
      }
      .tit{
        width: 180px;
        min-width: 180px;
        height: 100%;
        text-align: center;
        border-#{$right}: 1px solid #cccccc;
        margin-#{$right}: 18px;
      }
      span.gitbox{
        flex: 1;
        height: 100%;
        overflow: hidden;
        @include flex(row,start);
        a{
          &:first-child{
            margin-#{$right}: 30px;
          }
        }
      }
    }
  }
}
#lineEcharts{
  margin-#{$top}: 30px;
  padding-#{$top}: 30px;
  @extend %shadow;
}
#maintable{
  margin-#{$top}: 30px;
  padding-#{$top}: 10px;
  @extend %shadow;
}

.chartArea{
  margin-bottom: 15px;
}


</style>

