<template>
	<div id="home">
		<div id="navbar" style="width: 100%; height:60px; background-color:#378ae6;">

		</div>
		<div id="home-main" style="width: 100%; height: calc(100vh - 60px); background-color: #ccc; overflow: hidden;">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			
			}
		},
		mounted: function() {
			
		},
		methods: {
			
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>