<template>
<bea-table :data='this.msgList'></bea-table>

</template>

<script>
import beaTable from 'components/table.vue';
import { getNotLook } from 'network/message.js';
export default {
  name: "notread",
  components:{
    beaTable
  },
  data(){
    return{
      msgList: []
    }
  },
  created(){
    getNotLook().then(res => {
      this.msgList = res.data

    })
  }
}
</script>

<style scoped>

</style>
