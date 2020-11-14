<template>
<div class="haveRead">
  ahdoauishduah
  <!-- <p>{{this.msgList}}</p> -->
  <beaTable :data='this.msgList'></beaTable>
</div>


</template>

<script>
import beaTable from "../../components/table/table"
import { getLooked } from 'network/message.js';
export default {
  name: "haveread",
  components:{
    beaTable
  },
  data(){
    return{
      msgList: [],
                     columns: [
                    {
                        title: '消息标题',
                        key: 'title'
                    },
                                        {
                        title: '消息内容',
                        key: 'content'
                    },
                    {
                        title: '消息发送时间',
                        key: 'createTime'
                    },
                ],
    }
  },
  created(){
    getLooked(this.$store.getters.token).then(res => {
      console.log(res)
      this.msgList = res.data
      console.log(this.msgList)
      

    })
  }
}
</script>

<style scoped>
.haveRead{
  background-color: red;
}
bea-table{
  width: 100%;
  height: 100px;
}
</style>
