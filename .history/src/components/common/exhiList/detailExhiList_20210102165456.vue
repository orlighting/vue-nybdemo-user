<template>
  <div class="exhiList">
    <!--<p class="exhtitle fa fa-th-large fa-lg">正在申请中的展会</p> -->
    <p class="exhtitle">
      <i class="fa fa-th-large fa-lg" style="margin-right: 5px"></i>展会申报状态
    </p>
    <div class="exht" style="text-align: center; width: 320px">
      <span style="width: 100px">申报ID</span>
      <span style="width: 90px">申报时间</span>
      <span style="width: 100px">审核状态</span>
    </div>
    <exhi-list-item
      v-for="(item, index) in exhiList"
      :exhiListItem="item"
      :key="index"
    ></exhi-list-item>
  </div>
</template>

<script>
import store from "../vuex"
// 导入了组件和方法
import exhiListItem from "./detailExhiLIistItem.vue";

import {
  getDetailExhiState,
  getEasyExhiState,
} from "../../../network/exhiState.js";
// 将界面导出
export default {
  name: "exhiList",
  // data是指组件中的所有数据都在data中
  data() {
    return {
      exhiList: [],
      isPassed: []
    };
  },

  // 组件注册
  components: {
    exhiListItem,
  },

  // 从后台获取数据，并且保存到exhiList
  created() {
    getDetailExhiState(this.$store.getters.token).then((res) => {
      this.exhiList = this.exhiList.concat(res.data);
      console.log(res.data[0])
      for(let item of res.data){
        this.isPassed.push(item.checkState)

      }
      if(this.isPassed){
        this.$store.dispatch('setState', this.isPassed)
        console.log(store.getters.checkState.indexOf(2) != -1)
      }
      
      // console.log( this.exhiList)
      getEasyExhiState(this.$store.getters.token).then((res) => {
        this.exhiList = this.exhiList.concat(res.data);
        console.log(this.exhiList);
      });
    });
  },
};
</script>

<style scoped>
.exhiList {
  width: 340px;
  height: 294px;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  display: inline-block;
  float: left;
  margin-left: 20px;
  overflow-y: auto;
}

.exhiList .exhtitle {
  width: 320px;
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid #969696;
  color: #666;
  /* margin-left: 8px; */
}

.exht {
  border-bottom: 1px solid #666;
  /* margin-left: 8px; */
}

.exht span {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
