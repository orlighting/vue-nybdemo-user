<template>
	<div class="exhi_list_item">
		<div class="item">
			<span class="iid">{{exhiListItem.iid}}</span>
			<span class="name">{{exhiListItem.name}}</span>
			<span class="state">{{exhiListItem.state}}</span>
		</div>
	</div>
</template>

<script>
	
	export default{
		name: "exhiListItem",
		props:{
			exhiListItem:{
				type: Object,
				default(){
					return {};
				}
			}
		},
		data: {
			
			
		},

	}
</script>

<style scoped>
	
</style>
