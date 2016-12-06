<template>
	<rs-timeline :rs-data="timeData"></rs-timeline>
</template>
<script>
	import RsTimeline from '../common/RsTimeline.vue'
	export default{
		data(){
			return{
				timeData:[{
					text:"确认订单 2016-12-01 12:00",
					state:"success",
					icon:"check-circle"
				},
				{
					text:"产品出库 2016-12-01 15:00",
					state:"success",
					icon:"check-circle"
				},
				{
					text:"清关处理 2016-12-02 08:00",
					state:"warning",
					icon:"exclamation-circle",
					line:"dot"
				},
				{
					text:"清关完成",
					state:"none",
					line:"dot"
				},
				{
					text:"快递派送",
					state:"none",
					line:"dot"
				},
				{
					text:"完成订单",
					state:"none",
				}]
			}
		},
		components:{
			RsTimeline
		}
	}
</script>