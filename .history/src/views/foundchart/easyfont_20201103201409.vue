<template>
	<div>

		<div class="card bbxx" style="width: 1000px">
			<div class="chartUser">
				<!-- //EasyForm? -->
				<el-form :model="easyForm" status-icon label-width="30px" class="demo-ruleForm" style="padding-right: 30px">
					<div class="helpinfo">
						<p><span class="wrtext">本申报适用于已加入展会计划的申报！未加入计划的请使用细节申报！</span></p>
						<p>
							<font class="hptext">请认真填写展会活动信息，所有选项均为必填，没有请填无，提交后未经审核无法修改</font>
						</p>
					</div>


					<el-form-item style="margin-top: 20px">
						<label>展会名称</label>
						<el-input type="text" 
						ref = "name"
						v-model="easyForm.name" 
						auto-complete="off" 
						placeholder="博览会/展会/会议名"></el-input>
					</el-form-item>

					<el-form-item style="margin-top: 20px">
						<label>展会对应计划id</label>
						<el-input type="number" 
						ref = "dmeetid"
						v-model="easyForm.dmeetid" 
						auto-complete="off" 
						placeholder="例：2020091234"></el-input>
					</el-form-item>

					<el-form-item>
						<label>主办单位</label>
						<el-input type="text" 
						ref = "host"
						v-model="easyForm.host" 
						auto-complete="off" 
						placeholder="公司/团体名"></el-input>
					</el-form-item>


					<el-form-item style="width: 300px">
						<label>举办时间</label>
						<el-input type="date" 
						ref = "time"
						v-model="easyForm.time" 
						auto-complete="off" 
						placeholder=""></el-input>
					</el-form-item>

					<el-form-item>
						<label>举办地点</label>
						<el-input type="text" 
						ref = "place"
						v-model="easyForm.place" 
						auto-complete="off" 
						placeholder="xx省 xx市 xx区 xx路xxx号"></el-input>
					</el-form-item>

					<el-form-item style="padding-bottom: 30px">
						<label>备注</label>
						<el-input type="textarea" 
						ref = "ps"
						v-model="easyForm.ps" 
						auto-complete="off" 
						placeholder=""></el-input>
					</el-form-item>

					<el-form-item style="padding-bottom:30px; padding-right: 30px">
						<el-button class="subBtn" type="primary" v-on:click="easyFormed">提交</el-button>
					</el-form-item>

				</el-form>

			</div>
		</div>


	</div>
</template>

<script scope>

import  {warningOpen, errorOpen, successOpen} from '../../utils/message';
	export default {
		name: "easyfont",
		data() {
			return {
				easyForm: {
					name: "",
					dmeetid: null,
					host: "",
					time: "",
					place: "",
					ps: "",
				}
			}
		},

		methods: {
			easyFormed() {
				if (!this.easyForm.name) {
					warningOpen("请填写展会名称！")
					this.$refs.name.focus();
					return false
				}
				if (!this.easyForm.dmeetid) {
					warningOpen("请填写展会对应计划id！")
					this.$refs.dmeetid.focus();
					return false
				}
				if (!this.easyForm.host) {
					this.$message({
						showClose: true,
						message: "请填写主办单位！",
						type: "error"
					})
					this.$refs.host.focus();
					return false
				}
				if (!this.easyForm.time) {
					this.$message({
						showClose: true,
						message: "请填写举办时间！",
						type: "error"
					})
					this.$refs.time.focus();
					return false
				}
				if (!this.easyForm.place) {
					this.$message({
						showClose: true,
						message: "请填写举办地点！",
						type: "error"
					})
					return false
				}
				if (!this.easyForm.ps) {
					this.$message({
						showClose: true,
						message: "请填写备注！",
						type: "error"
					})
					this.$refs.ps.focus();
					return false
				}

				this.$axios
					.post('/handin/easy', {
						dmeetId: this.easyForm.dmeetid,
						userId: this.$store.getters.token, 
						name: this.easyForm.name,
						host: this.easyForm.host,
						place: this.easyForm.place,
						ps: this.easyForm.ps,		
						time: this.easyForm.time,				

					})
					.then(successResponse => {
						if (successResponse.data.code === 0) {
							successOpen();
	
							this.$router.push('/').catch(()=>{})					

						} else {
							this.$message({
								showClose: true,
								message: "提交失败！",
								type: "error"
							})
						}
					})
					.catch(failResponse => {})
				

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

	@mixin flex($direction:row, $content:space-between) {
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

		/* 谷歌 */
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			appearance: none;
			margin: 0;
		}

		/* 火狐 */
		input {
			-moz-appearance: textfield;
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

				span {}

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
</style>
