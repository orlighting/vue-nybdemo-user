<template>
<div class="notRead">
  <bea-table></bea-table>
  {{this.msgList}}
</div>


</template>

<script>
import beaTable from "../../components/table/table"
import { getNotLook } from 'network/message.js';
export default {
  name: "notread",
  components:{
    beaTable
  },
  data() {
  //这里存放数据
  return {
      // isshow: true,
      msgList: [],

  };
  },
  created(){

    getNotLook(this.$store.getters.token).then(res => {
      this.msgList = res.data

    })

  }
}
</script>

<style scoped>

</style>
