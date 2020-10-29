<template>
	<div class="exhiList" v-for="(item, index) in exhiList">
		<exhi-list-item :exhiListItem="item"></exhi-list-item>
		
	</div>
</template>

<script>
	import exhiListItem from "./exhiLIistItem.vue"
	
	import {getExhiState} from "../../../network/exhiState.js"
	export default{
		name: "exhiList",
		data:{
			exhiList = []
			
		},
		components:{
			getExhiState
		},
		created() {
			getExhiState().then(res => {
				this.exhiListItem = res.result
			})
		}
	}
</script>

<style scoped>
</style>
