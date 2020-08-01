<template>
	<div class="default-index">
		<el-row>
			<top-bar />
		</el-row>
		<el-row>
			<search-bar />
		</el-row>
	</div>
</template>

<script type="text/javascript">
	import searchBar from "./SearchBar.vue";
	import topBar from "./TopBar.vue";
	export default {
		components: {
			searchBar,
			topBar
		}
	}
</script>

<style type="text/css" lang="less">
	header.el-header {
		padding: 0;
	}
</style>