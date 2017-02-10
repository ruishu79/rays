<style>
	.sample_line{padding-top: 30px; border-top: 1px dashed #EAEAED;}
	.api_code{padding: 3px 4px; background: #F6F7F8; border-radius: 4px; margin-bottom: 5px; border: 1px solid #EAEAED;}
	.api_p{padding-left: 0!important; margin: 8px 0;}
	.mb20{margin-bottom: 20px;}
	.api_must{color: #E74C3C; font-style: normal; margin-right: 3px;}
</style>
<template>
	<div class="example_body">
		<h2>Table表格</h2>
		<div>
			<p>用于展示大量结构化数据,限于文字,图片数据展示请参看图片列表<a href="#">rs-img-list</a><br />包括了搜索,排序,分页,删除,自定义按钮功能</p>
		</div>
		<!-- 样例一 -->
		<h4>1.基础表格</h4>
		<p><rs-table :data="date1"></rs-table></p>
		<p>基础显示数据的表格</p>
		<!--样例代码-->
		<div v-show="codeBox1">
			<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-table :data="date1"></rs-table>
		</template>
	</textarea>
			</mark>
			<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTable} from 'rays'
			export default{
				components:{
					rsTable
				},
				data(){
					return{
						date1:{
							columns:[{
								key: 'id',
								value: 'ID',
							},{
								key: 'name',
								value: '姓名'
							},{
								key: 'age',
								value: '年龄',
							},{
								key: 'tel',
								value: '电话',
							}],
							tdDate:[
								{
									id: 1,
									name: '孙悟空',
									age: '20',
									tel: '13811111111',
								},{
									id: 2,
									name: '贝吉塔',
									age: '30',
									tel: '13822222222',
								},{
									id: 3,
									name: '短笛',
									age: '10',
									tel: '13833333333',
								},{
									id: 4,
									name: '龟仙人',
									age: '200',
									tel: '13844444444',
								},
							],
						},
					}
				}
			}
		</script>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle1">{{codeBtn1}}</rs-button></p>
		<!-- 样例二 -->
		<h4 class="sample_line">2.复选框表格</h4>
		<p><rs-table :data="date2" :option="option2"></rs-table></p>
		<p>通过添加<em>option.check:true</em>来添加首列复选框,并对各行内容设置<em>checkbox</em>属性,就可以对表格中各行进行选择</p>
		<div v-show="codeBox2">
			<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-table :data="date2" :option="option2"></rs-table>
		</template>
	</textarea>
			</mark>
			<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTable} from 'rays'
			export default{
				components:{
					rsTable
				},
				data(){
					return{
						option2:{
							check: true
						},
						date2:{
							columns:[{
								key: 'id',
								value: 'ID',
							},{
								key: 'name',
								value: '姓名'
							},{
								key: 'age',
								value: '年龄',
							},{
								key: 'tel',
								value: '电话',
							}],
							tdDate:[
								{
									id: 1,
									name: '孙悟空',
									age: '20',
									tel: '13811111111',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 2,
									name: '贝吉塔',
									age: '30',
									tel: '13822222222',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 3,
									name: '短笛',
									age: '10',
									tel: '13833333333',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 4,
									name: '龟仙人',
									age: '200',
									tel: '13844444444',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},
							],
						}
					}
				}
			}
		</script>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle2">{{codeBtn2}}</rs-button></p>
		<!-- 样例三 -->
		<h4 class="sample_line">3.分页表格</h4>
		<p><rs-table :data="date3" :option="option3"></rs-table></p>
		<p>对多列数据进行分页显示,需要引入<a v-link="{path:'../example/rose-pagination'}" target="_blank">rs-Pagination</a>组件,并设置<em>option.pagination:true</em>来添加分页,也可以通过<em>option.len</em>、<em>option.lenArr</em>、<em>option.pageLen</em>等属性来对分页进行配置</p>
		<div v-show="codeBox3">
			<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-table :data="date3" :option="option3"></rs-table>
		</template>
	</textarea>
			</mark>
			<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTable} from 'rays'
			export default{
				components:{
					rsTable
				},
				data(){
					return{
						option3:{
							pagination:true,
							len:5, //每页显示个数
							lenArr: [5, 10, 20], // 每页显示长度设置
		            		pageLen: 5, // 可显示的分页数
		            		activeNum:0 //起始页
						},
						date3:{
							columns:[{
								key: 'id',
								value: 'ID',
							},{
								key: 'name',
								value: '姓名'
							},{
								key: 'age',
								value: '年龄',
							},{
								key: 'tel',
								value: '电话',
							}],
							tdDate:[
								{
									id: 1,
									name: '孙悟空',
									age: '20',
									tel: '13811111111'
								},{
									id: 2,
									name: '贝吉塔',
									age: '30',
									tel: '13822222222'
								},{
									id: 3,
									name: '短笛',
									age: '10',
									tel: '13833333333'
								},{
									id: 4,
									name: '龟仙人',
									age: '200',
									tel: '13844444444'
								}
								,{
									id: 5,
									name: '小林',
									age: '21',
									tel: '13855555555'
								}
								,{
									id: 6,
									name: '布尔玛',
									age: '24',
									tel: '13866666666'
								}
								,{
									id: 7,
									name: '天津饭',
									age: '26',
									tel: '1387777777'
								}
								,{
									id: 8,
									name: '界王',
									age: '9999',
									tel: '13888888888'
								}
								,{
									id: 9,
									name: '特兰克斯',
									age: '0.5',
									tel: '138999999999'
								}
							],
						}
					}
				}
			}
		</script>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle3">{{codeBtn3}}</rs-button></p>
		<!-- 样例四 -->
		<h4 class="sample_line">4.筛选排序表格</h4>
		<p><rs-table :data="date4" :option="option4"></rs-table></p>
		<p>通过添加<em>option.search:true</em>属性,在表格头部添加对表格内容进行搜索的搜索框,通过在<em>columns</em>页头属性中设置<em>sort</em>属性,可以对各列添加排序功能</p>
		<div v-show="codeBox4">
			<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-table :data="date4" :option="option4"></rs-table>
		</template>
	</textarea>
			</mark>
			<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTable} from 'rays'
			export default{
				components:{
					rsTable
				},
				data(){
					return{
						option4:{
							search: true,
						},
						date4:{
							columns:[{
								key: 'id',
								value: 'ID',
								sort: 'normal'
							},{
								key: 'name',
								value: '姓名'
							},{
								key: 'age',
								value: '年龄',
								sort: 'number'
							},{
								key: 'tel',
								value: '电话',
							}],
							tdDate:[
								{
									id: 1,
									name: '孙悟空',
									age: '20',
									tel: '13811111111',
								},{
									id: 2,
									name: '贝吉塔',
									age: '30',
									tel: '13822222222',
								},{
									id: 3,
									name: '短笛',
									age: '10',
									tel: '13833333333',
								},{
									id: 4,
									name: '龟仙人',
									age: '200',
									tel: '13844444444',
								},
							],
						},
					}
				}
			}
		</script>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle4">{{codeBtn4}}</rs-button></p>
		<!-- 样例五 -->
		<h4 class="sample_line">5.按钮操作表格</h4>
		<p><rs-table :data="date5" :option="option5" :notification="tableNotice"></rs-table></p>
		<p>通过对<em>data</em>设置<em>control</em>属性,可以在表格的末尾添加操作列,根据对<em>control</em>属性的配置,可以添加不同的按钮,执行不同的操作,具体请参看下面的API文档。<br/>如果想添加批量删除,请先添加<em>checkbox</em>复选框功能,详情请参看示例2,然后通过设置<em>option.delBtn:true</em>来实现批量删除功能。<br/>如果需要操作通知提示,请引入<em>rsNotification</em>组件,并在组件内添加<em>notification</em>属性,并在引入js中初始化notification属性</p>
		<div v-show="codeBox5">
			<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-table :data="date5" :option="option5" :notification="tableNotice"></rs-table>
		</template>
	</textarea>
			</mark>
			<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsTable} from 'rays'
			import {rsNotification} from 'rays'
			export default{
				components:{
					rsTable,
					rsNotification
				},
				data(){
					return{
						option5:{
							delBtn: true,
							check: true
						},
						date5:{
							columns:[{
								key: 'id',
								value: 'ID',
								sort: 'normal'
							},{
								key: 'name',
								value: '姓名'
							},{
								key: 'age',
								value: '年龄',
								sort: 'normal'
							},{
								key: 'tel',
								value: '电话',
							}],
							tdDate:[
								{
									id: 1,
									name: '孙悟空',
									age: '20',
									tel: '13811111111',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 2,
									name: '贝吉塔',
									age: '30',
									tel: '13822222222',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 3,
									name: '短笛',
									age: '10',
									tel: '13833333333',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},{
									id: 4,
									name: '龟仙人',
									age: '200',
									tel: '13844444444',
									checkbox: {
				                        disabled: false,
				                        checked: false,
				                        text: ''
				                    }
								},
							],
							control: [
								{
									type: 'success',
									text: '通话',
									size: 'small',
									icon: 'phone',
									func: 'userDefined',
									userDefined:()=>{
										this.phone()
									}
								},
								{
									type: 'error',
									text: '删除',
									size: 'small',
									icon: 'trash',
									func: 'delItem'
								}
							]
						},
						methods:{
							phone(){
								this.tableNotice.text='通话中';
								this.tableNotice.state="success";
								this.tableNotice.delay=5000;
							},
						}
					}
				}
			}
		</script>
	</textarea>
			</mark>
		</div>
		<p><rs-button @click="codeToggle5">{{codeBtn5}}</rs-button></p>
		<h3>API</h3>
		<h4>props</h4>
		<p class="mb20"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>data</h4>
		<p class="mb20"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
	<!-- <rs-table :data="tableDate" :option="option9" :notification="tableNotice"></rs-table> -->
</template>
<script>
	import Mark from "../../mark.vue"
	import {rsTable} from 'rays'
	import {rsNotification} from 'rays'
	import {rsButton} from 'rays'
	import {rsCheckbox} from 'rays'
	export default{
		components:{
			Mark,
			rsTable,
			rsNotification,
			rsButton,
			rsCheckbox
		},
		data(){
			return{
				check01:{
					checked:true
				},
				codeBox1:false,
				codeBtn1:"显示代码",
				codeBox2:false,
				codeBtn2:"显示代码",
				codeBox3:false,
				codeBtn3:"显示代码",
				codeBox4:false,
				codeBtn4:"显示代码",
				codeBox5:false,
				codeBtn5:"显示代码",
				tableNotice:{
					text:'',
					state:'',
					delay:null
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
							instruction: '<span class="api_must">[必选]</span>表格数据对象,包括: <p class="api_p"><em class="api_code">columns</em>由表头信息组成的数组元素,每个元素中有<em class="api_code">key</em>、<em class="api_code">value</em>、<em class="api_code">sort</em>三个属性</p><p class="api_p"><em class="api_code">tdDate</em>由表格内容信息组成的数组元素,每个元素中的属性与<em>columns</em>表头数组中元素<em>key</em>的属性值一一对应,如果需要复选框,还需加入<em>checkbox</em>属性,并对其初始化配置</p><p class="api_p"><em class="api_code">control</em>给表格的末列添加操作功能,可配置删除按钮,也可配置自定义按钮,数组每个元素对应一个按钮,内有<em class="api_code">type</em>、<em class="api_code">text</em>、<em class="api_code">size</em>、<em class="api_code">icon</em>、<em class="api_code">func</em>、<em class="api_code">userDefined</em>属性</p>',
							type: 'Object',
							default: '空',
						},
						{
							attr: 'option',
							instruction: '表格功能设置包括<p class="api_p"><em class="api_code">align</em>设置表格文字对齐,分为<em>left / center / right</em>,<em>String</em>类型,默认<em>center</em></p><p class="api_p"><em class="api_code">search</em>是否添加搜索框功能,对表格内容进行检索,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">check</em>是否在第一行添加复选框,需要在表格内容中初始化复选框状态,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">delBtn</em>是否添加删除选中列功能,需要与check功能配合使用,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">pagination</em>是否添加分页功能,<em>Boolean</em>类型,默认<em>false</em></p><p class="api_p"><em class="api_code">len</em>分页每页显示个数,需要<em>pagination:true</em>,<em>Number</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">lenArr</em>添加自定义每页显示个数功能,需要<em>pagination:true</em>,<em>Array</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">pageLen</em>设置最长显示分页数,其他页数省略,需要<em>pagination:true</em>,<em>Number</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">activeNum</em>设置分页起始页,<em>0</em>为第一页,需要<em>pagination:true</em>,<em>Number</em>类型,默认<em>空</em></p>',
							type: 'Object',
							default: '空',
						},
						{
							attr: 'notification',
							instruction: '添加通知功能,需要引入<em>rsNotification</em>组件,一般通知绑定于操作列的按钮,需要初始化配置,包括<em class="api_code">text</em>、<em class="api_code">state</em>、<em class="api_code">delay</em>属性,详细设置方式请参看<a href="#!/example/rose-pagination" target="_blank">rsNotification</a>组件',
							type: 'Object',
							default: '空'
						}
					],
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
							attr: 'columns',
							instruction: '<span class="api_must">[必选]</span>表头信息组成的数组元素,每个元素中包括以下属性: <p class="api_p"><span class="api_must">[必选]</span><em class="api_code">key</em>设置每列关键字,用于对应表格内容中的属性,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><span class="api_must">[必选]</span><em class="api_code">value</em>设置每列页头文本内容,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">sort</em>对各列添加排序功能(可选),目前属性值只有<em>number</em>/<em>normal</em>两种,<em>String</em>类型,默认<em>空</em></p>',
							type: 'Array',
							default: '空',
						},
						{
							attr: 'tdDate',
							instruction: '<span class="api_must">[必选]</span>由表格内容信息组成的数组元素,每个元素中的属性与columns表头数组中元素key的属性值一一对应,如果需要复选框,还需加入checkbox属性,并对其初始化配置',
							type: 'Array',
							default: '空',
						},
						{
							attr: 'control',
							instruction: '给表格的末列添加操作功能,可配置删除按钮,也可配置自定义按钮,数组中每个元素对应一个按钮,每个元素包括以下属性 <p class="api_p"><em class="api_code">type</em>设置按钮颜色,有<em>primary / success / warning / error</em>四种,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">text</em>设置按钮内文字内容,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">size</em>设置按钮尺寸,有<em>small / normal / large / xlarge </em>四种,<em>String</em>类型,默认<em>normal</em></p><p class="api_p"><em class="api_code">icon</em>设置按钮图标,详细设置参看图标组件,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">func</em>设置按钮功能,目前有<em>delItem / userDefined</em>两种配置,用于删除或自定义,<em>String</em>类型,默认<em>空</em></p><p class="api_p"><em class="api_code">userDefined</em>如果<em>func</em>设置为<em>userDefined</em>那么需要添加该选项进行功能配置自定义,详细配置方法请参看示例5<em>Function</em>类型,默认<em>空</em></p>',
							type: 'Array',
							default: '空'
						}
					],
				},
				date1:{
					columns:[{
						key: 'id',
						value: 'ID',
					},{
						key: 'name',
						value: '姓名'
					},{
						key: 'age',
						value: '年龄',
					},{
						key: 'tel',
						value: '电话',
					}],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
						},
					],
				},
				date2:{
					columns:[{
						key: 'id',
						value: 'ID',
					},{
						key: 'name',
						value: '姓名'
					},{
						key: 'age',
						value: '年龄',
					},{
						key: 'tel',
						value: '电话',
					}],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},
					],
				},
				option2:{
					check: true
				},
				date3:{
					columns:[{
						key: 'id',
						value: 'ID',
					},{
						key: 'name',
						value: '姓名'
					},{
						key: 'age',
						value: '年龄',
					},{
						key: 'tel',
						value: '电话',
					}],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111'
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222'
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333'
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444'
						}
						,{
							id: 5,
							name: '小林',
							age: '21',
							tel: '13855555555'
						}
						,{
							id: 6,
							name: '布尔玛',
							age: '24',
							tel: '13866666666'
						}
						,{
							id: 7,
							name: '天津饭',
							age: '26',
							tel: '1387777777'
						}
						,{
							id: 8,
							name: '界王',
							age: '9999',
							tel: '13888888888'
						}
						,{
							id: 9,
							name: '特兰克斯',
							age: '0.5',
							tel: '138999999999'
						}
					],
				},
				option3:{
					pagination:true,
					len:5, //每页显示个数
					lenArr: [5, 10, 20], // 每页显示长度设置
            		pageLen: 5, // 可显示的分页数
            		activeNum:0 //起始页
				},
				date4:{
					columns:[{
						key: 'id',
						value: 'ID',
						sort: 'normal'
					},{
						key: 'name',
						value: '姓名'
					},{
						key: 'age',
						value: '年龄',
						sort: 'number'
					},{
						key: 'tel',
						value: '电话',
					}],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
						},
					],
				},
				option4:{
					search: true,
				},
				date5:{
					columns:[{
						key: 'id',
						value: 'ID',
						sort: 'normal'
					},{
						key: 'name',
						value: '姓名'
					},{
						key: 'age',
						value: '年龄',
						sort: 'normal'
					},{
						key: 'tel',
						value: '电话',
					}],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},
					],
					control: [
						{
							type: 'success',
							text: '通话',
							size: 'small',
							icon: 'phone',
							func: 'userDefined',
							userDefined:()=>{
								this.phone()
							}
						},
						{
							type: 'error',
							text: '删除',
							size: 'small',
							icon: 'trash',
							func: 'delItem'
						}
					],
				},
				option5:{
					delBtn: true,
					check: true
				},
				/*option9:{
					search: true,
					check: true,
					addBtn: true,
					delBtn: true,
					editBtn: true,
					pagination:true,
					len:5, //每页显示个数
					lenArr: [5, 10, 20], // 每页显示长度设置
            		pageLen: 5, // 可显示的分页数
            		activeNum:0 //起始页
				},
				tableDate:{
					columns: [
						{
							key: 'id',
							value: 'ID',
							sort: 'normal'
						},{
							key: 'name',
							value: '姓名'
						},{
							key: 'age',
							value: '年龄',
							sort: 'number'
						},{
							key: 'tel',
							value: '电话',
						}
					],
					control: [
						{
							text: '编辑',
							//size: 'small',
							icon: 'edit',
							func: 'editItem'
						},
						{
							type: 'success',
							text: '通话',
							size: 'small',
							icon: 'phone',
							func: 'userDefined',
							userDefined:()=>{
								this.phone()
							}
						},
						{
							type: 'error',
							text: '删除',
							size: 'small',
							icon: 'trash',
							func: 'delItem'
						}
					],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 5,
							name: '小林',
							age: '21',
							tel: '13855555555',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 6,
							name: '布尔玛',
							age: '24',
							tel: '13866666666',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 7,
							name: '天津饭',
							age: '26',
							tel: '1387777777',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 8,
							name: '界王',
							age: '9999',
							tel: '13888888888',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 9,
							name: '特兰克斯',
							age: '0.5',
							tel: '138999999999',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
					],
				}*/
			}
		},
		methods:{
			phone(){
				this.tableNotice.text='通话中';
				this.tableNotice.state="success";
				this.tableNotice.delay=5000;
			},
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
			codeToggle2(){
				if(!this.codeBox2)
				{
					this.codeBtn2="隐藏代码"
					this.codeBox2=true
				}
				else
				{
					this.codeBtn2="显示代码"
					this.codeBox2=false
				}
			},
			codeToggle3(){
				if(!this.codeBox3)
				{
					this.codeBtn3="隐藏代码"
					this.codeBox3=true
				}
				else
				{
					this.codeBtn3="显示代码"
					this.codeBox3=false
				}
			},
			codeToggle4(){
				if(!this.codeBox4)
				{
					this.codeBtn4="隐藏代码"
					this.codeBox4=true
				}
				else
				{
					this.codeBtn4="显示代码"
					this.codeBox4=false
				}
			},
			codeToggle5(){
				if(!this.codeBox5)
				{
					this.codeBtn5="隐藏代码"
					this.codeBox5=true
				}
				else
				{
					this.codeBtn5="显示代码"
					this.codeBox5=false
				}
			}
		}
	}
</script>