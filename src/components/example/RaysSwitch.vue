<template>
	<div class="example_body">
		<h2>Switch开关</h2>
		<div><p>用来输入数值的输入框,带增减按钮进行数值的增减</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsSwitch} from 'rays'
			export default{
				components:{
					rsSwitch
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.默认开关</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-switch></rs-switch></p>
				<p class="ps">无设置,默认开关为关闭状态</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-switch></rs-switch>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.开关</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-switch type="primary" :state="true"></rs-switch>
					<rs-switch type="success" :state="true"></rs-switch>
					<rs-switch type="warning" :state="true"></rs-switch>
					<rs-switch type="error" :state="true"></rs-switch>
				</p>
				<p class="ps">可以设置四种不同样式</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-switch type="primary" :state="true"></rs-switch>
			<rs-switch type="success" :state="true"></rs-switch>
			<rs-switch type="warning" :state="true"></rs-switch>
			<rs-switch type="error" :state="true"></rs-switch>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
	</div>
</template>
<script>
	import {rsSwitch} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
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
							attr: 'type',
							instruction: '设置开关样式,有<em>primary / success / warning / error</em>四种样式',
							type: 'String',
							default: 'success',
						},
						{
							attr: 'state',
							instruction: '设置开/关状态',
							type: 'Boolean',
							default: 'false',
						},
					]
				},
			}	
		},
		components:{
			rsSwitch,
			rsTable,
			Mark
		}
	}
</script>