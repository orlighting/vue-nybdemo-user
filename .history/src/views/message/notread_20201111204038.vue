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
    getNotLook(this.$store.getters.token).then(res => {
      this.msgList = res.data
      console.log(res)

    })
  }
}
</script>

<style scoped>

</style>
