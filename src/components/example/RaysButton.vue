<template>
<div class="example_body">
	<h2>Button按钮</h2>
	<div><p>用于触发即时事件操作的组件</p></div>
	<h4>统一引用方式</h4>
	<mark>
<textarea class="rs-mark-text">
	<script>
		import {rsButton} from 'rays'
		export default{
			components:{
				rsButton
			}
		}
	</script>
</textarea>
	</mark>
	<h4 class="example_h4_title">1.基础按钮</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="ex_content">
				<p><rs-button>默认按钮</rs-button></p>
				<p>
					<rs-button type="primary">推荐按钮</rs-button>
					<rs-button type="success">成功按钮</rs-button>
				</p>
				<p>
					<rs-button type="warning">提醒按钮</rs-button>
					<rs-button type="error">警告按钮</rs-button>
				</p>
			</div>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button>默认按钮</rs-button>
		<rs-button type="primary">推荐按钮</rs-button>
		<rs-button type="success">成功按钮</rs-button>
		<rs-button type="warning">提醒按钮</rs-button>
		<rs-button type="error">警告按钮</rs-button>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">2.不同尺寸按钮</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="ex_content">
				<p>
					<rs-button type="primary" size="xlarge">超大尺寸</rs-button>					
				</p>
				<p>
					<rs-button type="primary" size="large">大尺寸</rs-button>
				</p>
				<p>
					<rs-button type="primary">普通尺寸</rs-button>
				</p>
				<p>
					<rs-button type="primary" size="small">小尺寸</rs-button>
				</p>
			</div>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button type="primary" size="xlarge">超大尺寸</rs-button>
		<rs-button type="primary" size="large">大尺寸</rs-button>
		<rs-button type="primary">普通尺寸</rs-button>
		<rs-button type="primary" size="small">小尺寸</rs-button>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">3.图标按钮</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="ex_content">
				<p><rs-button icon="search"></rs-button></p>
				<p>
					<rs-button type="primary" icon="cloud"></rs-button>
					<rs-button type="success" icon="check"></rs-button>
					<rs-button type="warning" icon="bolt"></rs-button>
					<rs-button type="error" icon="close"></rs-button>
				</p>
				<p>
					<rs-button icon="download" icon-text="下载"></rs-button>
					<rs-button type="primary" icon="upload" icon-text="上传"></rs-button>
				</p>
				<p><rs-button icon="spinner" icon-text="保存中" :loading="true"></rs-button></p>
			</div>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button icon="search"></rs-button>
		<rs-button type="primary" icon="cloud"></rs-button>
		<rs-button type="success" icon="check"></rs-button>
		<rs-button type="warning" icon="bolt"></rs-button>
		<rs-button type="error" icon="close"></rs-button>
		<rs-button icon="download" icon-text="下载"></rs-button>
		<rs-button type="primary" icon="upload" icon-text="上传"></rs-button>
		<rs-button icon="spinner" icon-text="保存中" :loading="true"></rs-button>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">4.禁用按钮</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="ex_content">
				<p>
					<rs-button :disable="true">禁用按钮</rs-button>
					<rs-button icon="check" :disable="true"></rs-button>
				</p>
			</div>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button :disable="true">禁用按钮</rs-button>
		<rs-button icon="check" :disable="true"></rs-button>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">5.组合按钮</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="ex_content">
				<p>
					<rs-button-group>
						<rs-button>增加</rs-button>
						<rs-button>减少</rs-button>
					</rs-button-group>
				</p>
			</div>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<script>
		import {rsButton} from 'rays'
		import {rsButtonGroup} from 'rays'
		export default{
			components:{
				rsButton,
				rsButtonGroup
			},
		}
	</script>
</textarea>
			</mark>
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button-group>
			<rs-button>增加</rs-button>
			<rs-button>减少</rs-button>
		</rs-button-group>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h3>API</h3>
	<h4>props</h4>
	<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
	<h4>rs-button-group</h4>
	<p>组合组合,需要引入rsButtonGroup组件,使用<em class="api_code">rs-button-group</em>标签包裹需要组合的<em class="api_code">rs-button</em>标签,即可完成按钮的组合</p>
	
</div>
</template>
<style>
	.ex_title{font-size: 18px; font-weight: bold; line-height: 30px; margin-bottom: 10px; color:rgba(52,73,94,1); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}
	.ex_content{margin-bottom: 24px;}
	.example_h4_title{padding-top: 20px; padding-bottom: 10px; border-top: 1px dashed #EAEAED; margin-top: 25px;}
	.example_em_wrap em{ color: #1ABC9C; margin: 0 3px; font-style: normal;}
</style>
<script>
	import Mark from "../../mark.vue"
	import {rsButton} from 'rays'
	import {rsButtonGroup} from 'rays'
	import {rsTable} from 'rays'
	export default{
		components:{
			Mark,
			rsButton,
			rsButtonGroup,
			rsTable
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
							instruction: '按钮颜色,除了默认颜色还有<em>primary / success / warning / error</em>主题颜色',
							type: 'String',
							default: '空',
						},
						{
							attr: 'size',
							instruction: '按钮尺寸,除了默认尺寸还有<em>xlarge / large / small</em>尺寸',
							type: 'String',
							default: '空',
						},
						{
							attr: 'icon',
							instruction: '按钮图标,具体配置参数请参照图标组件,如需添加文字,需添加<em>icon-text</em>属性,如需图标旋转,需添加<em>loading</em>属性',
							type: 'String',
							default: '空'
						},
						{
							attr: 'icon-text',
							instruction: '图标按钮的文字属性,图标按钮不同于一般按钮,按钮内文字需在icon-text属性中配置',
							type: 'String',
							default: '空'
						},
						{
							attr: 'loading',
							instruction: '控制按钮图标是否旋转',
							type: 'Boolean',
							default: 'false'
						},
						{
							attr: 'disable',
							instruction: '控制按钮是否禁用',
							type: 'Boolean',
							default: 'true'
						}
					]
				},
			}
		}
	}
</script>