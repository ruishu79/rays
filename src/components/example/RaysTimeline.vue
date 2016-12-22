<template>
	<div class="example_body">
		<h2>Timeline时间线</h2>
		<div><p>对需要时间表示的事件进行排序</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTimeline} from 'rays'
			export default{
				components:{
					rsTimeline
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">时间线展示</h4>
		<div class="row">
			<div class="col-sm-4">
				<p style="margin-top: 20px;">
					<rs-timeline :data="timeData"></rs-timeline>
				</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						timeData:[{
							data:"2016-12-01 12:00",
							text:"确认订单",
							state:"success",
							icon:"check-circle"
						},
						{
							data:"2016-12-01 15:00",
							text:"产品出库 ",
							state:"success",
							icon:"check-circle"
						},
						{
							data:"2016-12-02 08:00",
							text:"清关处理",
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
					rsTimeline
				}
			}
		</script>
		<template>
			<rs-timeline :data="timeData"></rs-timeline>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>data</h4>
		<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
</template>
<script>
	import {rsTimeline} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
				apiOption01:{
					align:'left'
				},
				apiData01:{
					columns:[{
						key: 'attr',
						value: '属性',
					},{
						key: 'instruction',
						value: '说明'
					},{
						key: 'type',
						value: '类型',
					},{
						key: 'default',
						value: '默认',
					}],
					tdDate:[
						{
							attr: 'date',
							instruction: '用于该段设置时间线的时间文本',
							type: 'String',
							default: '空',
						},
						{
							attr: 'text',
							instruction: '设置该段时间线的文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'state',
							instruction: '设置该段时间线的状态,有<em>primary / success / warning / error / none</em>五种状态',
							type: 'String',
							default: '空 / none',
						},
						{
							attr: 'icon',
							instruction: '设置该段时间线的图标显示,具体图请参看图标组件',
							type: 'String',
							default: '空',
						},
						{
							attr: 'line',
							instruction: '用于设置该段时间线的样式,有虚线<em>(dot)</em>/实线<em>(空)</em>两种',
							type: 'String',
							default: '空',
						}
					]
				},
				apiOption:{
					align:'left'
				},
				apiData:{
					columns:[{
						key: 'attr',
						value: '属性',
					},{
						key: 'instruction',
						value: '说明'
					},{
						key: 'type',
						value: '类型',
					},{
						key: 'default',
						value: '默认',
					}],
					tdDate:[
						{
							attr: 'data',
							instruction: '时间线数据数组,每个数组元素包含有一条信息的属性配置及文本信息',
							type: 'Array',
							default: '空',
						}
					]
				},
				timeData:[{
					date:"2016-12-01 12:00",
					text:"确认订单",
					state:"success",
					icon:"check-circle"
				},
				{
					date:"2016-12-01 15:00",
					text:"产品出库 ",
					state:"success",
					icon:"check-circle"
				},
				{
					date:"2016-12-02 08:00",
					text:"清关处理",
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
			Mark,
      		rsTable,
			rsTimeline
		}
	}
</script>