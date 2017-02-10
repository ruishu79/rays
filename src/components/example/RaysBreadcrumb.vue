<template>
	<div class="example_body">
		<h2>Breadcrumd面包屑</h2>
		<div><p>用于显示当前页面位置,并可充作向上追溯导航</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsBreadcrumb} from 'rays'
			export default{
				components:{
					rsBreadcrumb
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.默认轨迹</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-breadcrumb :data="rsData"></rs-breadcrumb></p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						rsData:[{
							text:"首页",
							path:"rays-table"
						},
						{
							text:"产品管理",
							path:"rays-button"
						},
						{
							text:"产品入库"
						}]
					}
				}
			}
		</script>
		<template>
			<rs-breadcrumb :data="rsData" separator=">"></rs-breadcrumb>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.自定义图标轨迹</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-breadcrumb :data="rsData01" separator=">"></rs-breadcrumb></p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						rsData01:[{
							text:"首页",
							icon:"home",
							path:"rays-table"
						},
						{
							text:"产品管理",
							path:"rays-button"
						},
						{
							text:"产品入库",
							path:"rays-tree"
						}]
					}
				}
			}
		</script>
		<template>
			<rs-breadcrumb :data="rsData01" separator=">"></rs-breadcrumb>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
	</div>
	<h3>API</h3>
	<h4>props</h4>
	<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
	<h4>data</h4>
	<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
</template>
<script>
	import {rsBreadcrumb} from 'rays'
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
							instruction: '用于放置面包屑轨迹中每个节点的配置内容,数组各个元素内包括<em>text</em>、<em>path</em>、<em>icon</em>属性',
							type: 'Array',
							default: '空',
						},
						{
							attr: 'separator',
							instruction: '设置轨迹元素间的间隔符,默认间隔符为"<em>/</em>"',
							type: 'String',
							default: '/ ',
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
							attr: 'text',
							instruction: '设置轨迹元素的文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'path',
							instruction: '设置轨迹元素的链接路径',
							type: 'String',
							default: '空 ',
						},
						{
							attr: 'icon',
							instruction: '设置轨迹元素的图标,设置方式请参考图标组件',
							type: 'String',
							default: '空 ',
						}
					]
				},
				rsData:[{
					text:"首页",
					path:"hello"
				},
				{
					text:"产品管理",
					path:"rays-button"
				},
				{
					text:"产品入库",
				}],
				rsData01:[{
					text:"首页",
					icon:"home",
					path:"hello"
				},
				{
					text:"产品管理",
					icon:"tags",
					path:"rays-button"
				},
				{
					text:"产品入库",
					icon:"inbox",
					path:"rays-tree"
				}]
			}
		},
		components:{
			rsBreadcrumb,
			rsTable,
			Mark
		}
	}
</script>