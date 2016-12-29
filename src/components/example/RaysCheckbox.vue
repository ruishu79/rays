<template>
	<div class="example_body">
		<h2>Checkbox复选框</h2>
		<div><p>用于对一组选项进行多项选择</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsCheckbox} from 'rays'
			export default{
				components:{
					rsCheckbox
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础复选框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-checkbox :data="check01"></rs-checkbox></p>
				<p><rs-checkbox :data="check02"></rs-checkbox></p>
				<p><rs-checkbox :data="check03"></rs-checkbox></p>
				<p class="ps">复选框数据都放在<em>data</em>属性中</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					check01:{
						checked:true,
						text:"选项一"
					},
					check02:{
						checked:false,
						text:"选项二"
					},
					check03:{
						checked:false,
						text:"选项三"
					},
				}
			}
		</script>
		<template>
			<rs-checkbox :data="check01"></rs-checkbox>
			<rs-checkbox :data="check02"></rs-checkbox>
			<rs-checkbox :data="check03"></rs-checkbox>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.禁用复选框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-checkbox :data="check04"></rs-checkbox></p>
				<p><rs-checkbox :data="check05"></rs-checkbox></p>
				<p><rs-checkbox :data="check06"></rs-checkbox></p>
				<p class="ps">给<em>data</em>添加<em>disabled:true</em>即可禁用复选框</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					check04:{
						checked:false,
						disabled:true,
						text:"选项四"
					},
					check05:{
						checked:false,
						disabled:true,
						text:"选项五"
					},
					check06:{
						checked:false,
						disabled:true,
						text:"选项六"
					},
				}
			}
		</script>
		<template>
			<rs-checkbox :data="check04"></rs-checkbox>
			<rs-checkbox :data="check05"></rs-checkbox>
			<rs-checkbox :data="check06"></rs-checkbox>
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
	import {rsCheckbox} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		components:{
			rsCheckbox,
			rsTable,
			Mark
		},
		data(){
			return{
				check01:{
					checked:true,
					text:"选项一"
				},
				check02:{
					checked:false,
					text:"选项二"
				},
				check03:{
					checked:false,
					text:"选项三"
				},
				check04:{
					disabled:true,
					checked:true,
					text:"选项一"
				},
				check05:{
					disabled:true,
					checked:false,
					text:"选项二"
				},
				check06:{
					disabled:true,
					checked:false,
					text:"选项三"
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
							instruction: '包括了复选框的所有配置,有<em>checked / text / disabled </em>三种属性',
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
							instruction: '是否禁用复选框',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'text',
							instruction: '复选框文本信息',
							type: 'String',
							default: '空',
						},
					]
				},
			}
		}
	}
</script>