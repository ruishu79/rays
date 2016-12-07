<template>
	<rs-breadcrumb :rs-data="rsData" separator=">"></rs-breadcrumb>
</template>
<script>
	import RsBreadcrumb from '../global/RsBreadcrumb.vue'
	export default{
		data(){
			return{
				rsData:[{
					text:"首页",
					icon:"home",
					path:"rose-table"
				},
				{
					text:"产品管理",
					path:"rose-button"
				},
				{
					text:"产品入库",
					path:"rose-tree"
				}]
			}
		},
		components:{
			RsBreadcrumb
		}
	}
</script>