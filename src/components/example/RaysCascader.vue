<style>
	.w40p{width: 40%;}
</style>
<template>
	<div class="example_body">
		<h2>Cascade级联选择</h2>
		<div><p>在层级关联的数据中进行逐级选择,可用于地区,业务层级等的选择</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsCascader} from 'rays'
			export default{
				components:{
					rsCascader
				}
			}
		</script>
	</textarea>
		</mark>
		<h4>1.基础级联选择</h4>
		<p class="w40p"><rs-cascader :data="cascadeDate"></rs-cascader></p>
		<div v-show="codeBox1">
			<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						cascadeDate:{
							label:'城市',
							labelType:'head',
							secondLabel:'(随便填)',
							important:true,
							default:"请选择所在位置",
							join:" / ",
							disable:false,
							option:[{
								value:'china',
								label:'中国',
								children:[{
									value:'liaoning',
									label:'辽宁',
									children:[{
										value:'shenyang',
										label:'沈阳',
										children:[{
											value:'shenhe',
											label:'沈河',
											children:[{
												value:'shandongmiao',
												label:'山东庙街道',
												children:[{
													value:'railway',
													label:'铁路小区'
												}]
											}]
										}]
									},
									{
										value:'dalian',
										label:'大连'
									},
									{
										value:'anshan',
										label:'鞍山'
									},
									{
										value:'fushun',
										label:'抚顺'
									},
									{
										value:'benxi',
										label:'本溪'
									}]
								},
								{
									value:'zhejiang',
									label:'浙江',
									children:[{
										value:'hangzhou',
										label:'杭州'
									},
									{
										value:'ningbo',
										label:'宁波'
									},
									{
										value:'jinhua',
										label:'金华'
									},
									{
										value:'quzhou',
										label:'衢州',
										disable:true
									}]
								},
								{
									value:'guangdong',
									label:'广东',
									children:[{
										value:'guangzhou',
										label:'广州'
									},
									{
										value:'shenzhen',
										label:'深圳'
									},
									{
										value:'zhuhai',
										label:'珠海'
									},
									{
										value:'huizhou',
										label:'惠州'
									}]
								}]
							},
							{
								value:'usa',
								label:'美国',
								children:[{
									value:'California',
									label:'加利福尼亚',
									children:[{
										value:'Los Angeles',
										label:'洛杉矶'
									},
									{
										value:'Orange',
										label:'奥兰治'
									},
									{
										value:'Nevada',
										label:'内华达'
									},
									{
										value:'Madera',
										label:'马德拉'
									},
									{
										value:'San Diego',
										label:'圣迭戈'
									}]
								},
								{
									value:'Florida',
									label:'佛罗里达',
									children:[{
										value:'Miami',
										label:'迈阿密'
									},
									{
										value:'Baker',
										label:'贝克'
									},
									{
										value:'Hillsborough',
										label:'希尔斯伯勒'
									},
									{
										value:'Saint Lucie',
										label:'圣卢西亚'
									}]
								}]
							}]
						}
					}
				},
				components:{
					rsCascader,
					rsTable,
					Mark
				}
			}
		</script>
		<rs-cascader :data="cascadeDate"></rs-cascader>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle1">{{codeBtn1}}</rs-button></p>
	</div>
	<h3>API</h3>
	<h4>props</h4>
	<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
	<h4>data</h4>
	<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
</template>
<script>
	import {rsCascader} from 'rays'
	import {rsTable} from 'rays'
	import {rsButton} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
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
							instruction: '包括了级联选择的所有配置,具体属性参看<em>data</em>属性',
							type: 'Object',
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
							attr: 'label',
							instruction: '级联选择器文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'secondLabel',
							instruction: '级联选择器文本二级',
							type: 'String',
							default: '空',
						},
						{
							attr: 'labelType',
							instruction: '级联选择器文本信息显示位置,<em>head(级联选择器上方) / line(级联选择器左侧同行)</em>两种位置',
							type: 'String',
							default: 'head',
						},
						{
							attr: 'important',
							instruction: '级联选择器是否为必填项,如果为<em>true</em>,前面加<em>*</em>',
							type: 'Boolean',
							default: 'false',
						},
						{
							attr: 'disable',
							instruction: '级联选择器是否禁用',
							type: 'String',
							default: '空',
						},
						{
							attr: 'default',
							instruction: '级联选择器默认提示信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'join',
							instruction: '选择个级联信息的间隔',
							type: 'String',
							default: 'false',
						},
						{
							attr: 'option',
							instruction: '<span class="api_must">[必选]</span>选择器option选项组成的数组元素,每个元素中包括以下属性: <p class="api_p"><em class="api_code">children</em>设置级联选择器子级内容,数组内对象结构与option结构相同<em>Array</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">disabled</em>设置该选项是否为禁用,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">value</em>该选项的文本信息,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">label</em>设置该选项文本信息,<em>String</em>类型,默认<em>空</em></p>',
							type: 'Array',
							default: '空',
						},
					]
				},
				codeBox1:false,
				codeBtn1:"显示代码",
				cascadeDate:{
					label:'城市',
					labelType:'head',
					secondLabel:'(随便填)',
					important:true,
					default:"请选择所在位置",
					join:" / ",
					disable:false,
					option:[{
						value:'china',
						label:'中国',
						children:[{
							value:'liaoning',
							label:'辽宁',
							children:[{
								value:'shenyang',
								label:'沈阳',
								children:[{
									value:'shenhe',
									label:'沈河',
									children:[{
										value:'shandongmiao',
										label:'山东庙街道',
										children:[{
											value:'railway',
											label:'铁路小区'
										}]
									}]
								}]
							},
							{
								value:'dalian',
								label:'大连'
							},
							{
								value:'anshan',
								label:'鞍山'
							},
							{
								value:'fushun',
								label:'抚顺'
							},
							{
								value:'benxi',
								label:'本溪'
							}]
						},
						{
							value:'zhejiang',
							label:'浙江',
							children:[{
								value:'hangzhou',
								label:'杭州'
							},
							{
								value:'ningbo',
								label:'宁波'
							},
							{
								value:'jinhua',
								label:'金华'
							},
							{
								value:'quzhou',
								label:'衢州',
								disable:true
							}]
						},
						{
							value:'guangdong',
							label:'广东',
							children:[{
								value:'guangzhou',
								label:'广州'
							},
							{
								value:'shenzhen',
								label:'深圳'
							},
							{
								value:'zhuhai',
								label:'珠海'
							},
							{
								value:'huizhou',
								label:'惠州'
							}]
						}]
					},
					{
						value:'usa',
						label:'美国',
						children:[{
							value:'California',
							label:'加利福尼亚',
							children:[{
								value:'Los Angeles',
								label:'洛杉矶'
							},
							{
								value:'Orange',
								label:'奥兰治'
							},
							{
								value:'Nevada',
								label:'内华达'
							},
							{
								value:'Madera',
								label:'马德拉'
							},
							{
								value:'San Diego',
								label:'圣迭戈'
							}]
						},
						{
							value:'Florida',
							label:'佛罗里达',
							children:[{
								value:'Miami',
								label:'迈阿密'
							},
							{
								value:'Baker',
								label:'贝克'
							},
							{
								value:'Hillsborough',
								label:'希尔斯伯勒'
							},
							{
								value:'Saint Lucie',
								label:'圣卢西亚'
							}]
						}]
					}]
				}
			}
		},
		components:{
			rsCascader,
			rsTable,
			rsButton,
			Mark
		},
		methods:{
			codeToggle1(){
				if(!this.codeBox1)
				{
					this.codeBtn1="隐藏代码"
					this.codeBox1=true
				}
				else
				{
					this.codeBtn1="显示代码"
					this.codeBox1=false
				}
			},
		}
	}
</script>