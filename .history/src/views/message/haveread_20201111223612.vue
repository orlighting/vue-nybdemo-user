<template>
<div class="haveRead">

  <my-table style="height:100px;width:1000px;background-color: blue;"></my-table>
  <!-- {{this.msgList}} -->
</div>


</template>

<script>

import { getLooked } from 'network/message.js';
import myTable from "../../components/table/table";
export default {
  name: "haveread",
  components:{
    myTable
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
myTable{
  background-color: red;
}
</style>
