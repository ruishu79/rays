<template>
	<div class="example_body">
		<h2>Number数量输入</h2>
		<div><p>用来输入数值的输入框,带增减按钮进行数值的增减</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsNumber} from 'rays'
			export default{
				components:{
					rsNumber
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.默认数量输入</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-number></rs-number></p>
				<p class="ps">无设置,默认最小0,最大无限大,每次增减1</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-number></rs-number>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.自定义数量输入</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-number :num="4.98" :step="2.5" :min="-0.1" :max="5"></rs-number></p>
				<p class="ps">可以设置初始值,每次递增递减数量,最大值及最小值</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-number :num="4.98" :step="2.5" :min="-0.1" :max="5"></rs-number>
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
	import {rsNumber} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		components:{
			rsNumber,
			rsTable,
			Mark
		},
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
							attr: 'num',
							instruction: '设置初始数值',
							type: 'Number',
							default: '0',
						},
						{
							attr: 'step',
							instruction: '设置每次递增递减数值',
							type: 'Number',
							default: '1',
						},
						{
							attr: 'min',
							instruction: '设置最小值',
							type: 'Number',
							default: '0',
						},
						{
							attr: 'max',
							instruction: '设置最大值',
							type: 'Number',
							default: 'Infinity',
						},
					]
				},
			}
		}
	}
</script>