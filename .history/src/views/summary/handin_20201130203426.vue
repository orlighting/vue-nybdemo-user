<template>
  <div>

    <div class="card bbxx" style="width: 1000px">
      <div class="chartUser">

        <el-form :model="declareForm" status-icon label-width="30px" class="demo-ruleForm" style="padding-right: 30px" enctype='multipart/form-data'>
          <div class="helpinfo">
            <p><span class="wrtext">本申报适用于未加入展会计划的申报！已加入计划的请使用简易申报！</span></p>
            <p><font class="hptext">请认真填写展会活动登记表，所有选项均为必填，没有请填无，提交后未经审核无法修改</font></p>
          </div>


          <el-form-item style="margin-top: 20px">
            <label>参展国家和地区数量</label>
            <el-input type="text" ref="exponame" v-model="declareForm.exponame" auto-complete="off"
                      placeholder="博览会/展会/会议名"></el-input>
          </el-form-item>
          <el-form-item>
            <label>参展企业数量</label>
            <el-input type="text" ref="hostcomp" v-model="declareForm.hostcomp" auto-complete="off"
                      placeholder="公司/团体名"></el-input>
          </el-form-item>
          <el-form-item>
            <label>展出总面积</label>
            <el-input type="text" ref="fondcomp" v-model="declareForm.fondcomp" auto-complete="off"
                      placeholder="公司/团体名"></el-input>
          </el-form-item>



              <el-form-item>
                <label>采购商数量</label>
                <el-input type="text" ref="authnum" v-model="declareForm.authnum" auto-complete="off"
                          placeholder="例：N2020091234"></el-input>
              </el-form-item>
              <el-form-item>
                <label>宣传媒体数</label>
                <el-input type="text" ref="authnum" v-model="declareForm.authnum" auto-complete="off"
                          placeholder="例：N2020091234"></el-input>
              </el-form-item>
              <el-form-item>
                <label>成交额</label>
                <el-input type="text" ref="authnum" v-model="declareForm.authnum" auto-complete="off"
                          placeholder="例：N2020091234"></el-input>
              </el-form-item>
          <el-form-item>
            <label>下一步工作方向</label>
            <el-input type="text" ref="hostcomp" v-model="declareForm.hostcomp" auto-complete="off"
                      placeholder="公司/团体名"></el-input>
          </el-form-item>
          <el-form-item style="margin: 20px">
							<label>总结报告全文</label><br/>
							<input type="file" ref="inputFile2"  accept=".pdf" name="investmentPlanFile"></input>
          </el-form-item>

        </el-form>

      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "userfont",
		components:{

		},
  data(){
    return{
      declareForm: {
        exponame:"",
        hostcomp:"",
        fondcomp:"",
        authobj:"",
        authnum:"",
        hostpls:"",
        hosttime:null,
        hostcrlc:"",
        hostarea:"",
        expocont:"",
        expofrom1:"",
        expofrom2:"",
        viewfrom1:false,
        viewfrom2:false,
        finanfrom:"",
        finanfond:"",
        otherfrom:"",
        otherfond:"",
        leaderN:false,
        leaderF:false,
        content:"",
      },
    marks: {
        0: '0%',
        25: '25%',
        50: {
            style: {
                color: '#ff0000'
            },
            label: this.$createElement('strong', '50%')
        },
        75: '75%'
    }
    }
  },
  methods:{
    change(){
      let var1 = this.declareForm.expofrom1;
      this.declareForm.expofrom2 =  100 - var1;
      console.log(this.declareForm.expofrom1)
      console.log(this.declareForm.expofrom2)
    },

    // change2(){
    //   let var2 = document.getElementById("view2").value;
    //   document.getElementById("view1").value = 100 - var2;
    // },

    declareFormed(){
			    // if(!this.declareForm.exponame){
			    //   this.$message({
			    //     showClose: true,
			    //     message: "请填写展会名称！",
			    //     type: "error"
			    //   })
					// 	this.$refs.exponame.focus();
			    //   return false
			    // }
			    // if(!this.declareForm.hostcomp){
			    //   this.$message({
			    //     showClose: true,
			    //     message: "请填写展会主办单位！",
			    //     type: "error"
			    //   })
					// 	this.$refs.hostcomp.focus();
			    //   return false
			    // }
			    // if(!this.declareForm.fondcomp){
			    //   this.$message({
			    //     showClose: true,
			    //     message: "请填写承办单位！",
			    //     type: "error"
			    //   })
					// 	this.$refs.fondcomp.focus();
			    //   return false
			    // }
			    // if(!this.declareForm.authobj){
			    //   this.$message({
			    //     showClose: true,
			    //     message: "请填写批准单位！",
			    //     type: "error"
			    //   })
					// 	this.$refs.authobj.focus();
			    //   return false
			    // }
			    // if(!this.declareForm.authnum){
			    //   this.$message({
			    //     showClose: true,
			    //     message: "请填写批准文号！",
			    //     type: "error"
			    //   })
					// 	this.$refs.authnum.focus();
			    //   return false
			    // }
			    // if(!this.declareForm.hostpls){
			    //   this.$message({
			    //     showClose: true,
			    //       message: "举办地点！",
			    //     type: "error"
			    //   })
					// 	this.$refs.hostpls.focus();
			    //   return false
			    // }
					// if(!this.declareForm.hosttime){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写举办时间！",
					//     type: "error"
					//   })
					// 	this.$refs.hosttime.focus();
					//   return false
					// }
					// if(!this.declareForm.hostcrlc){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写举办周期！",
					//     type: "error"
					//   })
					// 	this.$refs.hostcrlc.focus();
					//   return false
					// }
					// if(!this.declareForm.hostarea){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写举办面积！",
					//     type: "error"
					//   })
					// 	this.$refs.hostarea.focus();
					//   return false
					// }
					// if(!this.declareForm.expocont){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写展会内容！",
					//     type: "error"
					//   })
					// 	this.$refs.expocont.focus();
					//   return false
					// }
					// if(!this.declareForm.expofrom1){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写国内参展商来源！",
					//     type: "error"
					//   })
					// 	this.$refs.expofrom1.focus();
					//   return false
					// }
					// if(!this.declareForm.expofrom2){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写国外参展商来源！",
					//     type: "error"
					//   })
					// 	this.$refs.expofrom2.focus();
					//   return false
					// }
					// if(!(this.declareForm.viewfrom1 || this.declareForm.viewfrom2)){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写观众构成！",
					//     type: "error"
					//   })
					// 	this.$refs.viewfrom1.focus();
					//   return false
					// }
					// if(!this.declareForm.finanfrom){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写拨款单位！",
					//     type: "error"
					//   })
					// 	this.$refs.finanfrom.focus();
					//   return false
					// }
					// if(!this.declareForm.finanfond){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写金额！",
					//     type: "error"
					//   })
					// 	this.$refs.finanfond.focus();
					//   return false
					// }
					// if(!this.declareForm.otherfrom){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写资金来源！",
					//     type: "error"
					//   })
					// 	this.$refs.otherfrom.focus();
					//   return false
					// }
					// if(!this.declareForm.otherfond){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写其他来源金额！",
					//     type: "error"
					//   })
					// 	this.$refs.otherfond.focus();
					//   return false
					// }

					// if(!this.declareForm.content){
					//   this.$message({
					//     showClose: true,
					//     message: "请填写内容简述！",
					//     type: "error"
					//   })
					// 	this.$refs.content.focus();
					//   return false
					// }
					let ip1 = this.$refs.inputFile1;
					let ip2 = this.$refs.inputFile2;
          var formdata = new FormData()
					if(!(ip1.files[0] && ip2.files[0])){
						this.$message({
						  showClose: true,
						  message: "请填写内容简述！",
						  type: "error"
						})
						this.$refs.inputFile1.focus();
						return false
          }
          formdata.append('userId',this.$store.getters.token);
          // 财政资金的拨款金额
          formdata.append('finanFund',this.declareForm.finanfond);
          // 其他来源的拨款金额
          formdata.append('otherFund',this.declareForm.otherfond);
          // 展会面积
          formdata.append('area',this.declareForm.hostarea);
          // 国内参展商所占比例（单位：%）
          formdata.append('domestic',this.declareForm.expofrom1);
          // 国外参展商所占比例（单位：%）
          formdata.append('foreign',this.declareForm.expofrom2);
          // 展会名称
          formdata.append('name',this.declareForm.exponame);
          // 主办单位
          formdata.append('hostComp',this.declareForm.hostcomp);
          // 承办单位
          formdata.append('fundComp',this.declareForm.fondcomp);
          // 批准单位
          formdata.append('authObj',this.declareForm.authobj);
          // 批准文案
          formdata.append('authNum',this.declareForm.authnum);
          // 举办地点
          formdata.append('place',this.declareForm.hostpls);
          // 举办周期
          formdata.append('cycle',this.declareForm.hostcrlc);
          // 展会内容
          formdata.append('content',this.declareForm.expocont);
          // 财政资金的拨款单位
          formdata.append('finanFrom',this.declareForm.finanfrom);
          formdata.append('otherFrom',this.declareForm.otherfrom);
          formdata.append('declare', this.declareForm.content);
			     formdata.append('preExpoFile',ip1.files[0]);
           formdata.append('investmentPlanFile',ip2.files[0]);
           formdata.append('time',this.declareForm.hosttime);
           formdata.append('view1',this.declareForm.viewfrom1);
           formdata.append('view2',this.declareForm.viewfrom2);
           formdata.append('leaderD',this.declareForm.leaderN);
           formdata.append('leaderF',this.declareForm.leaderF);
           console.log(formdata)
           console.log(formdata.get('finanFrom'))


          
			    // this.$axios
					// .post('/file', formdata).then(res => {
					// 					if (res.data.statusCode == 200) {
          //                   alert("修改成功！");
          //                   history.go(-1);
          //             } else {
          //                   alert("修改失败！");
          //              }

          // })
          var axios = require('axios')
					axios.post('http://192.168.1.102:8445/api/handin/detail', formdata)
			      .then(successResponse => {
			        if (successResponse.data.code === 0) {			
                this.$router.push('/').catch(()=>{})
			        }
			        else {
			          this.$message({
			            showClose: true,
			            message: "提交失败！",
			            type: "error"
			          })
			        }
			      })
			      .catch(failResponse => {
			      })
			
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
.inputFile1{
	float: left;
}
.inputFile2{
	float: right;
}


</style>

