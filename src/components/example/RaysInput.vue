<template>
	<div class="example_body">
		<h2>input输入框</h2>
		<div><p>最基础的表单组件,包含了简单的校验,也可以自定义校验</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsInput} from 'rays'
			export default{
				components:{
					rsInput
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础输入框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-input holder="请输入信息"></rs-input></p>
				<p class="ps">基础输入框,相对原生input输入框,统一了不同浏览器的样式</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input holder="请输入信息"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.含文本信息输入框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="性别" holder="请输入信息"></rs-input>
				</p>
				<p class="ps">通过添加<em>label</em>属性,可以添加输入框的文本信息</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="性别" holder="请输入信息"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">3.行结构输入框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="年龄" holder="请输入信息" label-type="line" :important="true"></rs-input>
				</p>
				<p class="ps">可以通过<em>label-type</em>属性改成单行的结构,通过添加<em>important</em>属性添加必填星号</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="年龄" holder="请输入信息" label-type="line" :important="true"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">4.输入框加强</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input holder="加强" state="primary"></rs-input>
				</p>
				<p>
					<rs-input holder="成功" state="success"></rs-input>
				</p>
				<p>
					<rs-input holder="警告" state="warning"></rs-input>
				</p>
				<p>
					<rs-input holder="错误" state="error"></rs-input>
				</p>
				<p class="ps">对输入框的状态进行输入框样式加强</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input holder="加强" state="primary"></rs-input>
			<rs-input holder="成功" state="success"></rs-input>
			<rs-input holder="警告" state="warning"></rs-input>
			<rs-input holder="错误" state="error"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">5.密码输入框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="密码" type="password"></rs-input>
				</p>
				<p class="ps">通过对<em>type</em>属性设置为<em>password</em>将输入框转为密码输入</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="密码" type="password"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">6.禁用输入框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="民族" text="赛亚人" :disable="true"></rs-input>
				</p>
				<p class="ps">通过设置<em>disable</em>属性,禁用输入框</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="民族" text="赛亚人" :disable="true"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">7.输入框校验</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="手机号" holder="请输入联系电话" limit="phone"></rs-input>
				</p>
				<p>
					<rs-input label="Email" holder="请输入Email" limit="email"></rs-input>
				</p>
				<p>
					<rs-input label="身份证" holder="请输入身份证号" limit="identity"></rs-input>
				</p>
				<p>
					<rs-input label="邮政编码" holder="请输入邮政编码" limit="userDefined" :user-func="postcode"></rs-input>
				</p>
				<p class="ps">设置<em>limit</em>属性,通过匹配属性值,进行相关校验,目前有手机号,邮箱,身份证等信息校验,也可以通过设置userDefined属性值,来进行自定义校验,校验返回值请参看下面的API文档</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						postcode:{
							reg: /^\d{6}$/,
					        state: 'error',
					        tip: '请输入正确的邮政编码'
						}
					}
				},
			}
		</script>
		<template>
			<rs-input label="手机号" holder="请输入联系电话" limit="phone"></rs-input>
			<rs-input label="Email" holder="请输入Email" limit="email"></rs-input>
			<rs-input label="身份证" holder="请输入身份证号" limit="identity"></rs-input>
			<rs-input label="邮政编码" holder="请输入邮政编码" limit="userDefined" :user-func="postcode"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">8.字符数限制校验</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="账号" second-label="(限制2-4位)" holder="请输入账号" limit="range" :min="2" :max="4"></rs-input>
				</p>
				<p>
					<rs-input label="密码" second-label="(限制小于8位)" holder="请输入密码" type="password" limit="range" :max="8"></rs-input>
				</p>
				<p>
					<rs-input label="验证码" second-label="(限制大于2位)" holder="请输入短信验证码" limit="range" :min="2"></rs-input>
				</p>
				<p class="ps">设置<em>limit="range"</em>,并设置<em>min / max</em>属性,就可以设置字符数限制</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="账号" second-label="(限制2-4位)" holder="请输入账号" limit="range" :min="2" :max="4"></rs-input>
			<rs-input label="密码" second-label="(限制小于8位)" holder="请输入密码" type="password" limit="range" :max="8"></rs-input>
			<rs-input label="验证码" second-label="(限制大于2位)" holder="请输入短信验证码" limit="range" :min="2"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">9.文本域</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-input label="备注1" holder="请输入备注信息" :area="true" :row="5"></rs-input>
				</p>
				<p class="ps">设置<em>:area="true"</em>可以把输入框变成多行的文本域,<em>row</em>属性来设置文本域的行数</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-input label="备注1" holder="请输入备注信息" :area="true" :row="5"></rs-input>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>user-func</h4>
		<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
</template>
<script>
	import {rsInput} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
				postcode:{
					reg: /^\d{6}$/,
			        state: 'error',
			        tip: '请输入正确的邮政编码'
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
							attr: 'holder',
							instruction: '输入框的默认提示信息,发生输入事件将消失',
							type: 'String',
							default: '空',
						},
						{
							attr: 'label',
							instruction: '输入框的文本信息',
							type: 'String',
							default: '空',
						},
						{
							attr: 'label-type',
							instruction: '输入框文本信息呈现模式,分行<em>(head)</em>展示,同行<em>(line)</em>展示',
							type: 'String',
							default: 'head'
						},
						{
							attr: 'state',
							instruction: '输入框样式加强,有<em>primary / success / warning / error</em>四种状态',
							type: 'String',
							default: '空'
						},
						{
							attr: 'type',
							instruction: '输入框属性,目前只有<em>password / text</em>两种',
							type: 'String',
							default: 'text'
						},
						{
							attr: 'disable',
							instruction: '控制输入框是否禁用',
							type: 'Boolean',
							default: 'false'
						},
						{
							attr: 'limit',
							instruction: '输入框校验,目前提供<em>phone(手机号) / email(邮箱) / identity(身份证) / range(字符数限制)</em>四种校验,<em>range</em>校验需配合<em>min / max</em>属性使用,还有一种<em>userDefined(自定义)</em>校验,配合<em>user-func</em>属性进行自定义校验',
							type: 'String',
							default: '空'
						},
						{
							attr: 'user-func',
							instruction: '用户自定义校验函数,有<em>reg(校验规则) / state(错误提示样式) / tip(错误提示文本)</em>三种设置',
							type: 'Object',
							default: '空'
						},
						{
							attr: 'min',
							instruction: '设置<em>limit="range"</em>的前提下,设置最小输入值',
							type: 'Number',
							default: '1'
						},
						{
							attr: 'max',
							instruction: '设置<em>limit="range"</em>的前提下,设置最大输入值',
							type: 'Number',
							default: 'Infinity'
						},
						{
							attr: 'area',
							instruction: '输入框是否为多行文本域',
							type: 'Boolean',
							default: 'false'
						},
						{
							attr: 'row',
							instruction: '文本域行数设置',
							type: 'Number',
							default: '3'
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
							attr: 'reg',
							instruction: '设置自定义校验的规则,必须为正则表达式',
							type: '正则表达式',
							default: '空',
						},
						{
							attr: 'state',
							instruction: '设置自定义校验未通过情况下的提示状态,有<em>primary / success / warning / error</em>四种状态',
							type: 'String',
							default: '空',
						},
						{
							attr: 'tip',
							instruction: '置自定义校验未通过情况下的提示的文本信息',
							type: 'String',
							default: '空'
						}
					]
				},
			}
		},
		components:{
			rsInput,
			rsTable,
			Mark
		},
		methods:{

		}
	}
</script>