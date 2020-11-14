<template>
<div>
  <bea-table :data='this.msgList'></bea-table>
</div>


</template>

<script>
import beaTable from 'components/table.vue';
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
      

    })
  }
}
</script>

<style scoped>

</style>
