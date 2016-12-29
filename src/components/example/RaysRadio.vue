<template>
	<div class="example_body">
		<h2>Radio单选框</h2>
		<div><p>用于对一组选项进行单项选择</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsRaido} from 'rays'
			export default{
				components:{
					rsRaido
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础单选框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-radio :data="radio01"></rs-radio></p>
				<p class="ps">单选数据为数组类型,全部元素都在data中</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					radio01:[
						{
							check:true,
							text:"男",
						},
						{
							check:false,
							text:"女",
						}
					]
				}
			}
		</script>
		<template>
			<rs-radio :data="radio01"></rs-radio>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.禁用单选框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-radio :data="radio02"></rs-radio></p>
				<p class="ps"><em>data</em>数组元素中添加<em>disabled="true</em>,来禁用选项</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					radio02:[
						{
							check:true,
							text:"沈阳",
							disabled:true
						},
						{
							check:false,
							text:"抚顺",
							disabled:true
						},
						{
							check:false,
							text:"辽阳",
							disabled:true
						}
					],
				}
			}
		</script>
		<template>
			<rs-radio :data="radio02"></rs-radio>
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
	import {rsRadio} from "rays"
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
							attr: 'data',
							instruction: '包括了单选框的所有配置,有<em>checked / text / disabled </em>三种属性',
							type: 'String',
							default: '空',
						},
					]
				},
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
							attr: 'checked',
							instruction: '<span class="api_must">[必选]</span>是否选中状态',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'disabled',
							instruction: '是否禁用单选框',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'text',
							instruction: '单选框文本信息',
							type: 'String',
							default: '空',
						},
					]
				},
				radio02:[
					{
						checked:true,
						text:"沈阳",
						disabled:true
					},
					{
						checked:false,
						text:"抚顺",
						disabled:true
					},
					{
						checked:false,
						text:"辽阳",
						disabled:true
					}
				],
				radio01:[
					{
						checked:true,
						text:"男",
					},
					{
						checked:false,
						text:"女",
					}
				]
			}
		},
		components:{
			rsRadio,
			rsTable,
			Mark
		}
	}
</script>