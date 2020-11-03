<template>
<div class="exhiList">
    <!--<p class="exhtitle fa fa-th-large fa-lg">正在申请中的展会</p> -->
    <p class="exhtitle"><i class="fa fa-th-large fa-lg" style="margin-right: 5px "></i>正在申请中的展会</p>
    <div class="exht" style="text-align:center;"><span style="width:90px;">id</span><span style="width:100px;">展会名称</span><span style="width:90px;">审核状态</span></div>
    <exhi-list-item>我是林进</exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <exhi-list-item></exhi-list-item>
    <!-- <exhi-list-item v-for="(item,index) in exhiList" :exhiListItem="item"></exhi-list-item>  -->

</div>
</template>

<script>
// 导入了组件和方法
import exhiListItem from "./exhiLIistItem.vue"

import {
    getExhiState
} from "../../../network/exhiState.js"
// 将界面导出
export default {
    name: "exhiList",
    // data是指组件中的所有数据都在data中
    data() {
        return {
            exhiList: []
        }
    },

    // 组件注册
    components: {
        exhiListItem,
    },

    // 从后台获取数据，并且保存到exhiList
    created() {
        getExhiState().then(res => {
            this.exhiList = res
        })
    }
}
</script>

<style scoped>
.exhiList {

    width: 380px;
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
}

.exht {
    border-bottom: 1px solid #666;
}

.exht span {
    display: inline-block;
    padding: 10px;
}
</style>
