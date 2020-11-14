<template>
<div class="msgRead">
    {{message}}
</div>

</template>

<script>
export default {
  name: "msgRead",
  data(){
      return{
          message: {}
      }
  },
  created(){
      this.message =this.$route.query.item;
    }
}
</script>

<style scoped>

</style>
