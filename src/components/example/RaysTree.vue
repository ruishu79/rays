<template>
	<div class="example_body">
		<h2>Tree树</h2>
		<div><p>用于展示文件夹,组织架构,国家地区等树形结构的组件。除了可以完整展示层级关系,还可以对层级关系进行增加,删除,修改</p></div>
		<h4>统一引用方式</h4>
		<mark>
<textarea class="rs-mark-text">
	<script>
		import {RsTree} from 'rays'
		export default{
			components:{
				RsTree
			}
		}
	</script>
</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础树</h4>
		<div class="row">
			<div class="col-sm-4">
				<div class="ex_content">
					<p><rs-tree :data="treeDate01"></rs-tree></p>
					<p class="ps">基础的树形组件,所有数据都放到<em>data</em>对象中</p>
				</div>
			</div>
			<div class="col-sm-8">
				<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-tree :data="treeDate01"></rs-tree>
	</template>
</textarea>
				</mark>
				<mark>
<textarea class="rs-mark-text">
	<script>
		export default{
			data(){
				treeDate01:[
					{
						text : '中国',
						isShow : true,
						children : [{
							text : '辽宁',
						},
						{
							text : '浙江',
						},
						{
							text : '北京',
						}]
					}
				],
			}
		}
	</script>
</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.多层级树</h4>
		<div class="row">
			<div class="col-sm-4">
				<div class="ex_content">
					<p><rs-tree :data="treeDate02"></rs-tree></p>
					<p class="ps">在<em>data</em>对象中的<em>children</em>属性,添加如第一层的结构即可无限向下添加更多的层级</p>
				</div>
			</div>
			<div class="col-sm-8">
				<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-tree :data="treeDate02"></rs-tree>
	</template>
</textarea>
				</mark>
				<mark>
<textarea class="rs-mark-text">
	<script>
		export default{
			data(){
				treeDate02:[
					{
						text : '中国',
						isShow : true,
						children : [{
							text : '辽宁',
							isShow : true,
							children : [{
								text : '沈阳',
							},
							{
								text : '大连',
							},
							{
								text : '鞍山',
							}]
						},
						{
							text : '浙江',
							isShow : false,
							children : [{
								text : '杭州',
							},
							{
								text : '宁波',
							},]
						},
						{
							text : '北京',
						}]
					}
				],
			}
		}
	</script>
</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">3.可编辑树</h4>
		<div class="row">
			<div class="col-sm-4">
				<div class="ex_content">
					<p><rs-tree :data="treeDate03"></rs-tree></p>
					<p>通过设置<em>add / edit / del</em>属性来添加各个节点的新建/编辑/删除功能,新建的节点将默认拥有这三个功能</p>
				</div>
			</div>
			<div class="col-sm-8">
				<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-tree :data="treeDate03"></rs-tree>
	</template>
</textarea>
				</mark>
				<mark>
<textarea class="rs-mark-text">
	<script>
		export default{
			data(){
				treeDate03:[
					{
						text : '中国',
						add : true,
						edit : true,
						del : false,
						isShow : true,
						children : [{
							text : '辽宁',
							add : true,
							edit : true,
							del : false,
							isShow : false,
							children : [{
								text : '沈阳',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '大连',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '鞍山',
								add : true,
								edit : true,
								del : true,
							}]
						},
						{
							text : '浙江',
							add : true,
							edit : true,
							del : false,
							isShow : false,
							children : [{
								text : '杭州',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '宁波',
								add : true,
								edit : true,
								del : true,
							},]
						},
						{
							text : '北京',
							add : true,
							edit : false,
							del : false,
						}]
					}
				]
			}
		}
	</script>
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
	import Mark from "../../mark.vue"
	import {rsTree} from 'rays'
	import {rsTable} from 'rays'
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
							instruction: '<span class="api_must">[必选]</span>包括了树的所有数据及操作配置,数组中元素为树组件的一级结构,包括<em class="api_code">text</em>、<em class="api_code">isShow</em>、<em class="api_code">add</em>、<em class="api_code">del</em>、<em class="api_code">edit</em>、<em class="api_code">children</em>属性',
							type: 'Array',
							default: '空',
						}
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
							instruction: '<span class="api_must">[必选]</span>为该层级结构的文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'isShow',
							instruction: '<span class="api_must">[必选]</span>如果该层级包含子级元素,控制子级元素隐藏/显示',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'add',
							instruction: '是否可对该层级进行增加子级操作',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'del',
							instruction: '是否可对该层级进行删除操作',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'edit',
							instruction: '是否可对该层级进行编辑操作',
							type: 'Boolean',
							default: '空',
						},
						{
							attr: 'children',
							instruction: '该层级的子级数据内容,子级数据结构同一级内容',
							type: 'Array',
							default: '空',
						},
					]
				},
				treeDate01:[
					{
						text : '中国',
						isShow : true,
						children : [{
							text : '辽宁',
						},
						{
							text : '浙江',
						},
						{
							text : '北京',
						}]
					}
				],
				treeDate02:[
					{
						text : '中国',
						isShow : true,
						children : [{
							text : '辽宁',
							isShow : true,
							children : [{
								text : '沈阳',
							},
							{
								text : '大连',
							},
							{
								text : '鞍山',
							}]
						},
						{
							text : '浙江',
							isShow : false,
							children : [{
								text : '杭州',
							},
							{
								text : '宁波',
							},]
						},
						{
							text : '北京',
						}]
					}
				],
				treeDate03:[
					{
						text : '中国',
						add : true,
						edit : true,
						del : false,
						isShow : true,
						children : [{
							text : '辽宁',
							add : true,
							edit : true,
							del : false,
							isShow : false,
							children : [{
								text : '沈阳',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '大连',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '鞍山',
								add : true,
								edit : true,
								del : true,
							}]
						},
						{
							text : '浙江',
							add : true,
							edit : true,
							del : false,
							isShow : false,
							children : [{
								text : '杭州',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '宁波',
								add : true,
								edit : true,
								del : true,
							},]
						},
						{
							text : '北京',
							add : true,
							edit : false,
							del : false,
						}]
					}
				],
				treeDate:[
					{
						text : '中国',
						add : true,
						edit : true,
						del : false,
						isShow : false,
						children : [{
							text : '辽宁',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '沈阳',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '大连',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '鞍山',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '抚顺',
								add : false,
								edit : true,
								del : true,
							}]
						},
						{
							text : '浙江',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '杭州',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '宁波',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '衢州',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '台州',
								add : false,
								edit : true,
								del : true,
							}]
						},
						{
							text : '广东',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '广州',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '深圳',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '汕头',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '珠海',
								add : false,
								edit : false,
								del : true,
							}]
						},
						{
							text : '北京',
							add : true,
							edit : true,
							del : false,
						}]
					}
				],	
			}
		},
		components:{
			rsTree,
			Mark,
			rsTable
		}
	}
</script>