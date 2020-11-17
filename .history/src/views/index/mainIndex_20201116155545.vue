<template>
<div>
    <el-row :gutter="20">

        <el-col :span="12">

        <div style="width: 340px; display: inline-block; margin-left:20px; float:left;">
            <div class="card kjfs">
                <p class="title"><i class="fa fa-th-large fa-lg"></i>快捷方式</p>

                <ul>
                    <li>
                        <router-link to="/detafond" class="kjfs kjfs-grennn"><span><i class="fa fa-wpforms fa-2x"></i></span><span>细节申报</span></router-link>
                    </li>
                    <li>
                        <router-link to="/easyfond" class="kjfs kjfs-pinkk"><span><i class="fa fa-leanpub fa-2x"></i></span><span>简易申报</span></router-link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <router-link to="/update" class="kjfs kjfs-purplee"><span><i class="fa fa-question-circle-o fa-2x"></i></span><span>用户信息修改</span></router-link>
                    </li>
                    <li v-on:click="logout">
                        <router-link to="/" class="kjfs kjfs-lightBluee"><span><i class="fa fa-sign-out fa-2x"></i></span><span>退出系统</span></router-link>
                    </li>
                </ul>
            </div>

        </div>
    </el-col>
    <el-col :span='12'>
        <detail-exhi-list></detail-exhi-list>
    </el-col>
    <el-col>
        <easy-exhi-list></easy-exhi-list>
    </el-col>
    <el-co :span='12'l>
        <div @click="msgLook" class="msg" >
            <img src="~assets/message.svg" :class="{'active' : this.msgCount}"/>
            <span class="count">+{{this.msgCount}}</span>

        </div>
    </el-col>
    </el-row>

</div>
</template>

<script>
import Cookies from "js-cookie";
import detailExhiList from "../../components/common/exhiList/detailExhiList";
import easyExhiList from "../../components/common/exhiList/easyExhiList";

import { getNotLookCount } from 'network/message.js';

export default {
  name: "mainIndex",
  mounted () {
    this.selfAdaption()
  },
  data () {
    return {
      msgCount: 1,
    }
  },
  components:{
      detailExhiList,
      easyExhiList
      
  },

  created(){
            // this.$axios
			// 		.post('/message/notLookCount', {
			// 			userId: this.$store.getters.token, 			

			// 		})
			// 		.then(successResponse => {
            //             console.log(successResponse)
            //         })

      getNotLookCount(this.$store.getters.token).then(res => {
        //   console.log(res)
        this.msgCount = res.data
      })
    
    },

    destroyed() {

    },

    methods: {

        logout() {
            Cookies.remove("token")
            Cookies.remove("face")
            location.reload()
        },
        // echart自适应
        selfAdaption() {
            let that = this
            setTimeout(() => {
                window.onresize = function () {
                    if (that.$refs.echarts) {
                        that.$refs.echarts.chart.resize()
                    }
                }
            }, 10)
        },
        msgLook(){
            this.$router.push('/notread').catch(()=>{})

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

.photo {
    height: 200px;
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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

            // span {}

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

.msg:hover{
    cursor: pointer;
}

.count{
    position: relative;
    top: -16px;
    left: 44px;

    font-size: 22px;
    
    color: red;
}
.active{
    background-color: #eec2d3;

}

.msg>img{
    width: 50px;
    height: 50px;
    float: right;
    margin-right: 20px;
    


}
</style>
