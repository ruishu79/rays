<template>
	<rs-tag>标签一</rs-tag>
	<rs-tag type="primary">标签二</rs-tag>
	<rs-tag type="success">标签三</rs-tag>
	<rs-tag type="warning">标签四</rs-tag>
	<rs-tag type="error" icon="times-circle">标签五</rs-tag>
</template>
<script>
	import RsTag from '../common/RsTag.vue'
	export default{
		components:{
			RsTag
		}
	}
</script>