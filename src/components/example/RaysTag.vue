<template>
	<div class="example_body">
		<h2>Tag标签</h2>
		<div><p>对页面元素进行标记分类</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTag} from 'rays'
			export default{
				components:{
					rsTag
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础标签</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-tag>标签一</rs-tag><rs-tag type="primary">标签二</rs-tag><rs-tag type="success">标签三</rs-tag></p>
				<p><rs-tag type="warning">标签四</rs-tag><rs-tag type="error">标签五</rs-tag></p>
				<p class="ps">标签文本信息,写在<em>rs-tag</em>标签内</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-tag>标签一</rs-tag>
			<rs-tag type="primary">标签二</rs-tag>
			<rs-tag type="success">标签三</rs-tag>
			<rs-tag type="warning">标签四</rs-tag>
			<rs-tag type="error">标签五</rs-tag>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.图标标签</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-tag icon="cog">标签六</rs-tag><rs-tag type="primary" icon="cloud">标签七</rs-tag><rs-tag type="success" icon="trophy">标签八</rs-tag></p>
				<p><rs-tag type="warning" icon="star">标签九</rs-tag><rs-tag type="error" icon="times-circle">标签十</rs-tag></p>
				<p class="ps">设置<em>icon</em>属性,在标签文本前加图标,具体属性值请参看图标组件</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-tag icon="cog">标签六</rs-tag>
			<rs-tag type="primary" icon="cloud">标签七</rs-tag>
			<rs-tag type="success" icon="trophy">标签八</rs-tag>
			<rs-tag type="warning" icon="star">标签九</rs-tag>
			<rs-tag type="error" icon="times-circle">标签十</rs-tag>
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
	import {rsTag} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		components:{
			rsTag,
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
							attr: 'type',
							instruction: '标签的颜色样式,有<em>none / primary / success / warning / error</em>五种样式',
							type: 'String',
							default: '空 / none',
						},
						{
							attr: 'icon',
							instruction: '标签文本前添加图标,具体图请参看图标组件',
							type: 'String',
							default: '空 ',
						},
					]
				},
			}
		}
	}
</script>