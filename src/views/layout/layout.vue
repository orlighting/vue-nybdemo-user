<template>
  <div id="loyout">
    <el-container>
      <layoutAside></layoutAside>
      <el-container>
        <layoutHeader></layoutHeader>
        <el-main id="elmain">
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>
          <Bottom></Bottom>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from "./aside/aside"
import layoutHeader from "./header/header"
import Bottom from "./Footer/bottom"
import langSelect from "../../components/lang/langSelect"
import Cookies from "js-cookie"
import {getDetail} from "../../network/getForm"

export default {
  name: "layout",
  components: {
    layoutHeader,
    Bottom,
    langSelect,
    layoutAside
  },

  created () {
    Cookies.remove("checkState");
    // getDetail(this.$store.getters.token).then(res => {
    //   if(res.data){
    //     this.$store.dispatch('setState', res.data.checkState)
    //   }else{
    //     this.$store.dispatch('setState', 0)
    //   }
    //   console.log(this.$store.getters.checkState);
    // });
    // console.log(this.$store.getters.checkState);

    let that = this

    that.$axios
      .post("/search/detail", {
        meetAddr: that.$store.getters.token,
      })
      .then((res) => {
        if(res.data){
          that.$store.dispatch('setState', res.data.data.checkState)
        }else{
          that.$store.dispatch('setState', 0)
        }
        console.log(that.$store.getters.checkState);
      })
      .catch((failResponse) => {});
    // var sleep = function(time) {
    //   var startTime = new Date().getTime() + parseInt(time, 10);
    //   while(new Date().getTime() < startTime) {}
    // };
    // sleep(1000); // 延时函数，单位ms
    console.log(that.$store.getters.checkState);

  }

}
</script>

<style>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }
  .main-enter-active {
    transition: all 0.2s;
  }
  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }
</style>
<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: #f2f2f2;
    font-size: 14px;
    color: #333333;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  $leftright: ($left, $right);
  %w100 {
    width: 100%;
  }

  %h100 {
    height: 100%;
  }

  %cursor {
    cursor: pointer;
  }

  html, body, #loyout, .el-container, #asideNav, ul.el-menu {
    @extend %h100;
    @extend %w100;
  }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #elmain {
    background-color: #f0f2f5;
    width: 100%;


  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9 !important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
