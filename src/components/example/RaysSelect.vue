<template>
	<div class="example_body">
		<h2>Select选择器</h2>
		<div><p>相对于原生的选择器,统一的不同浏览器中的样式,增加了搜索及禁用功能</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsSelect} from 'rays'
			export default{
				components:{
					rsSelect
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础选择器</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-select :data="selectData01"></rs-select></p>
				<p class="ps">基础的选择器,通原生的select标签</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					selectData01:{
						default:"--请选择--"
						option:[
							{
								selected:false,
								disabled:false,
								value:'选项一',
								id:1
							},
							{
								selected:false,
								disabled:false,
								value:'选项二',
								id:2
							},
							{
								selected:false,
								disabled:false,
								value:'选项三',
								id:3
							},
						]
					}
				}
			}
		</script>
		<template>
			<rs-select :data="selectData01"></rs-select>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.含文本信息选择器</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-select :data="selectData02"></rs-select></p>
				<p class="ps">通过添加<em>label</em>属性,可以添加选择器的文本信息</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					selectData01:{
						label:'国家',
						labelType:'head',
						default:"请选择所在国家",
						option:[
							{
								selected:false,
								disabled:false,
								value:'CHINA',
								id:1
							},
							{
								selected:false,
								disabled:false,
								value:'USA',
								id:2
							},
							{
								selected:false,
								disabled:false,
								value:'JAPAN',
								id:3
							},
						]
					}
				}
			}
		</script>
		<template>
			<rs-select :data="selectData02"></rs-select>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">3.带搜索选择器</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-select :data="selectData03"></rs-select></p>
				<p class="ps">通过给<em>data</em>对象添加<em>search</em>属性,来添加选择器的筛选功能</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					selectData03:{
						label:'城市',
						labelType:'line',
						important:true,
						default:"请选择所在城市",
						search:true,
						option:[
							{
								selected:true,
								disabled:false,
								value:'沈阳(ShenYang)',
								id:1
							},
							{
								selected:false,
								disabled:false,
								value:'北京(BeiJing)',
								id:2
							},
							{
								selected:false,
								disabled:false,
								value:'上海(Shanghai)',
								id:3
							},
						]
					},
				}
			}
		</script>
		<template>
			<rs-select :data="selectData03"></rs-select>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">3.禁用与局部禁用</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-select :data="selectData04"></rs-select></p>
				<p><rs-select :data="selectData05"></rs-select></p>
				<p class="ps">给<em>data</em>属性添加<em>disabled</em>属性,对整个组件进行禁用,在option数组的元素中添加<em>disabled</em>属性,对单个选项进行禁用</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			data(){
				return{
					selectData04:{
						label:'星球',
						labelType:'line',
						default:"请选择所在星球",
						disabled:true,
						option:[
							{
								selected:true,
								disabled:false,
								value:'地球',
								id:1
							},
							{
								selected:false,
								disabled:false,
								value:'月球',
								id:2
							}
						]
					},
					selectData05:{
						label:'星系',
						labelType:'line',
						default:"选择星系",
						option:[
							{
								selected:false,
								disabled:false,
								value:'太阳系',
								id:1
							},
							{
								selected:false,
								disabled:false,
								value:'比邻星系',
								id:2
							},
							{
								selected:false,
								disabled:true,
								value:'M78星云',
								id:3
							},
						]
					}
				}
			}
		</script>
		<template>
			<rs-select :data="selectData04"></rs-select>
			<rs-select :data="selectData05"></rs-select>
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
	import {rsSelect} from 'rays'
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
							instruction: '包括了选择器的所有配置,具体属性参看<em>data</em>属性',
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
							instruction: '选择器文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'labelType',
							instruction: '选择器文本信息显示位置,<em>head(选择器上方) / line(选择器左侧同行)</em>两种位置',
							type: 'String',
							default: 'head',
						},
						{
							attr: 'important',
							instruction: '选择器是否为必填项,如果为<em>true</em>,前面加<em>*</em>',
							type: 'Boolean',
							default: 'false',
						},
						{
							attr: 'default',
							instruction: '选择器默认提示信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'search',
							instruction: '选择器是否添加搜索功能',
							type: 'Boolean',
							default: 'false',
						},
						{
							attr: 'option',
							instruction: '<span class="api_must">[必选]</span>选择器option选项组成的数组元素,每个元素中包括以下属性: <p class="api_p"><em class="api_code">select</em>设置该选项是否为选中,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">disabled</em>设置该选项是否为禁用,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">value</em>该选项的文本信息,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">id</em>设置该选项的id值,<em>Number</em>类型,默认<em>空</em></p>',
							type: 'Array',
							default: '空',
						},
					]
				},
				selectData01:{
					default:"--请选择--",
					option:[
						{
							selected:false,
							disabled:false,
							value:'选项一',
							id:1
						},
						{
							selected:false,
							disabled:false,
							value:'选项二',
							id:2
						},
						{
							selected:false,
							disabled:false,
							value:'选项三',
							id:3
						},
					]
				},
				selectData03:{
					label:'城市',
					labelType:'line',
					important:true,
					default:"请选择所在城市",
					search:true,
					option:[
						{
							selected:true,
							disabled:false,
							value:'沈阳(ShenYang)',
							id:1
						},
						{
							selected:false,
							disabled:false,
							value:'北京(BeiJing)',
							id:2
						},
						{
							selected:false,
							disabled:false,
							value:'上海(Shanghai)',
							id:3
						},
					]
				},
				selectData02:{
					label:'国家',
					labelType:'head',
					default:"请选择所在国家",
					option:[
						{
							selected:false,
							disabled:false,
							value:'CHINA',
							id:1
						},
						{
							selected:false,
							disabled:false,
							value:'USA',
							id:2
						},
						{
							selected:false,
							disabled:false,
							value:'JAPAN',
							id:3
						},
					]
				},
				selectData04:{
					label:'星球',
					labelType:'line',
					default:"请选择所在星球",
					disabled:true,
					option:[
						{
							selected:true,
							disabled:false,
							value:'地球',
							id:1
						},
						{
							selected:false,
							disabled:false,
							value:'月球',
							id:2
						}
					]
				},
				selectData05:{
					label:'星系',
					labelType:'line',
					default:"选择星系",
					option:[
						{
							selected:false,
							disabled:false,
							value:'太阳系',
							id:1
						},
						{
							selected:false,
							disabled:false,
							value:'比邻星系',
							id:2
						},
						{
							selected:false,
							disabled:true,
							value:'M78星云',
							id:3
						},
					]
				}
			}
		},
		components:{
			rsSelect,
			rsTable,
			Mark
		}
	}
</script>