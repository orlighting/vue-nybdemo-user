<template>
<div class="haveRead">
  ahdoauishduah
  <bea-table :data="this.msgList" ></bea-table>
</div>


</template>

<script>
import beaTable from 'components/beaTable.vue';
import { getLooked } from 'network/message.js';
export default {
  name: "haveread",
  components:{
    beaTable
  },
  data(){
    return{
      msgList: []
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
</style>
