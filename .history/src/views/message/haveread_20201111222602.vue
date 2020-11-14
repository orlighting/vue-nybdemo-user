<template>
<div class="haveRead">
  ahdoauishduah
  <!-- <p>{{this.msgList}}</p> -->
  <my-table></my-table>
  {{this.msgList}}
</div>


</template>

<script>
import myTable from "../../components/table/table"
import { getLooked } from 'network/message.js';
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

</style>
