<template>
	<div class="exhiList" >
		<exhi-list-item v-for="item in exhiList" :exhiListItem="item" class="exhi-list-item"/>
	</div>
</template>

<script>
import exhiListItem from "./exhiLIistItem.vue"

import {getExhiState} from "../../../network/exhiState.js"
export default{
  name: "exhiList",
  data () {
    return {
      exhiList: []


    }
  },
  components: {
    exhiListItem
  },
  created () {
    getExhiState().then(res => {
      this.exhiListItem = res.result
    })
  }
}
</script>

<style scoped>
</style>
