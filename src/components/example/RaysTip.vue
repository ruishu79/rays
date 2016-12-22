<template>
	<div class="example_body">
		<h2>Tip提示</h2>
		<div><p>文字提示气泡框，在鼠标悬停时显示</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTip} from 'rays'
			export default{
				components:{
					rsTip
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础提示</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-tip text="这里是提示哦" align="top">
						<span>鼠标移动到这里(上)</span>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="bottom">
						<span>鼠标移动到这里(下)</span>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="left">
						<span>鼠标移动到这里(左)</span>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="right">
						<span>鼠标移动到这里(右)</span>
					</rs-tip>
				</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-tip text="这里是提示哦" align="top">
				<span>鼠标移动到这里(上)</span>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="bottom">
				<span>鼠标移动到这里(下)</span>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="left">
				<span>鼠标移动到这里(左)</span>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="right">
				<span>鼠标移动到这里(右)</span>
			</rs-tip>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.与其他组件配合</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-tip text="这里是提示哦" align="top">
						<rs-button type="primary">按钮-上方显示</rs-button>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="bottom">
						<rs-button type="primary">按钮-下方显示</rs-button>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="left">
						<rs-button type="primary">按钮-左方显示</rs-button>
					</rs-tip>
				</p>
				<p>
					<rs-tip text="这里是提示哦" align="right">
						<rs-button type="primary">按钮-右方显示</rs-button>
					</rs-tip>
				</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTip} from 'rays'
			import {rsButton} from 'rays'
			export default{
				components:{
					rsTip,
					rsButton
				}
			}
		</script>
		<template>
			<rs-tip text="这里是提示哦" align="top">
				<rs-button type="primary">按钮-上方显示</rs-button>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="bottom">
				<rs-button type="primary">按钮-下方显示</rs-button>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="left">
				<rs-button type="primary">按钮-左方显示</rs-button>
			</rs-tip>
			<rs-tip text="这里是提示哦" align="right">
				<rs-button type="primary">按钮-右方显示</rs-button>
			</rs-tip>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<p>使用<em class="api_code">rs-tip</em>标签将需要添加tip提示的元素包住,即可完成提示框的添加</p>
	</div>
</template>
<style>
	.mt20{margin-top: 20px;}
</style>
<script>
	import {rsTip} from 'rays'
	import {rsButton} from 'rays'
	import {rsTable} from 'rays'
	import {rsInput} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		components:{
			Mark,
      		rsTable,
			rsTip,
			rsButton,
			rsInput
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
							attr: 'text',
							instruction: '提示框内文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'align',
							instruction: '提示框相对位置,有<em>top / bottom / left / right</em>四个方位',
							type: 'String',
							default: 'top',
						},
						{
							attr: 'top',
							instruction: '针对当期位置上下方向的调整,正数为向下调整,负数为向上调整',
							type: 'Number',
							default: '0',
						},
						{
							attr: 'left',
							instruction: '针对当期位置左右方向的调整,正数为向右调整,负数为向左调整',
							type: 'Number',
							default: '0',
						}
					]
				},
			}
		}
	}
</script>