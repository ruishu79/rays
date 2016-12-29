<template>
<div class="example_body">
	<h2>Downmenu下拉菜单</h2>
	<div><p>用于展示折叠的下拉菜单,一般用于导航</p></div>
	<h4>统一引用方式</h4>
	<mark>
<textarea class="rs-mark-text">
	<script>
		import {rsDownmenu} from 'rays'
		export default{
			components:{
				rsDownmenu
			}
		}
	</script>
</textarea>
	</mark>
	<h4 class="example_h4_title">1.下拉菜单</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="col-sm-8">
				<rs-downmenu text="通用组件">
					<a v-link="{path:'../example/rays-table'}">表格</a>
					<a v-link="{path:'../example/rays-button'}">按钮</a>
					<a v-link="{path:'../example/rays-tree'}">树</a>
				</rs-downmenu>
			</div>
			<div class="clear"></div>
			<p class="ps">最基础的下拉菜单</p>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-downmenu text="通用组件">
			<a v-link="{path:'../example/rays-table'}">表格</a>
			<a v-link="{path:'../example/rays-button'}">按钮</a>
			<a v-link="{path:'../example/rays-tree'}">树</a>
		</rs-downmenu>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">2.块状下拉菜单</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="col-sm-8">
				<rs-downmenu text="表单组件" display="block">
					<a v-link="{path:'../example/rays-input'}">输入框</a>
					<a v-link="{path:'../example/rays-radio'}">单选框</a>
					<a v-link="{path:'../example/rays-cascader'}">级联选择</a>
					<a v-link="{path:'../example/rays-checkbox'}">复选框</a>
					<a v-link="{path:'../example/rays-number'}">数量输入</a>
					<a v-link="{path:'../example/rays-switch'}">开关</a>
					<a v-link="{path:'../example/rays-datepicker'}">日期</a>
					<a v-link="{path:'../example/rays-select'}">选择器</a>
				</rs-downmenu>
			</div>
			<div class="clear"></div>
			<p class="ps">如果拥有很多的二级菜单,那么推荐使用块状菜单,每行4个菜单项</p>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-downmenu text="表单组件" display="block">
			<a v-link="{path:'../example/rays-input'}">输入框</a>
			<a v-link="{path:'../example/rays-radio'}">单选框</a>
			<a v-link="{path:'../example/rays-cascader'}">级联选择</a>
			<a v-link="{path:'../example/rays-checkbox'}">复选框</a>
			<a v-link="{path:'../example/rays-number'}">数量输入</a>
			<a v-link="{path:'../example/rays-switch'}">开关</a>
			<a v-link="{path:'../example/rays-datepicker'}">日期</a>
			<a v-link="{path:'../example/rays-select'}">选择器</a>
		</rs-downmenu>
	</template>
</textarea>
			</mark>
		</div>
	</div>
	<h4 class="example_h4_title">3.组合下拉菜单</h4>
	<div class="row">
		<div class="col-sm-4">
			<div class="row downmenu_bar_green">
				<div class="col-sm-6">
					<rs-downmenu text="通用组件">
						<a v-link="{path:'../example/rays-table'}">表格</a>
						<a v-link="{path:'../example/rays-button'}">按钮</a>
						<a v-link="{path:'../example/rays-tree'}">树</a>
					</rs-downmenu>
				</div>
				<div class="col-sm-6">
					<rs-downmenu text="表单组件" display="block">
						<a v-link="{path:'../example/rays-input'}">输入框</a>
						<a v-link="{path:'../example/rays-radio'}">单选框</a>
						<a v-link="{path:'../example/rays-cascader'}">级联选择</a>
						<a v-link="{path:'../example/rays-checkbox'}">复选框</a>
						<a v-link="{path:'../example/rays-number'}">数量输入</a>
						<a v-link="{path:'../example/rays-switch'}">开关</a>
						<a v-link="{path:'../example/rays-datepicker'}">日期</a>
						<a v-link="{path:'../example/rays-select'}">选择器</a>
					</rs-downmenu>
				</div>
			</div>
			<div class="clear"></div>
			<p class="ps">如果需要一个组合的导航,需要自行设置区域及背景色,之后将多个下拉菜单放入其中</p>
		</div>
		<div class="col-sm-8">
			<mark>
<textarea class="rs-mark-text">
	<template>
	<div class="row downmenu_bar_green">
		<div class="col-sm-6">
			<rs-downmenu text="通用组件">
				<a v-link="{path:'../example/rays-table'}">表格</a>
				<a v-link="{path:'../example/rays-button'}">按钮</a>
				<a v-link="{path:'../example/rays-tree'}">树</a>
			</rs-downmenu>
		</div>
		<div class="col-sm-6">
			<rs-downmenu text="表单组件" display="block">
				<a v-link="{path:'../example/rays-input'}">输入框</a>
				<a v-link="{path:'../example/rays-radio'}">单选框</a>
				<a v-link="{path:'../example/rays-cascader'}">级联选择</a>
				<a v-link="{path:'../example/rays-checkbox'}">复选框</a>
				<a v-link="{path:'../example/rays-number'}">数量输入</a>
				<a v-link="{path:'../example/rays-switch'}">开关</a>
				<a v-link="{path:'../example/rays-datepicker'}">日期</a>
				<a v-link="{path:'../example/rays-select'}">选择器</a>
			</rs-downmenu>
		</div>
	</div>
	<style>
		.downmenu_bar_green{background: #1ABC9C; border-radius: 4px; color: #fff; margin-bottom: 20px;}
	</style>
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
<style>
	.downmenu_bar{background: #ECF0F1; border-radius: 4px; color: rgba(52,73,94,1); margin-bottom: 20px;}
	.downmenu_bar_green{background: #1ABC9C; border-radius: 4px; color: #fff; margin-bottom: 20px;}
</style>
<script>
	import {rsDownmenu} from 'rays'
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
		              attr: 'text',
		              instruction: '下拉菜单文本信息',
		              type: 'String',
		              default: '空',
		            },
		            {
		              attr: 'display',
		              instruction: '下拉菜单以单列显示或者以块状横线向显示,参数值为<em>normal / block</em>',
		              type: 'String',
		              default: 'normal',
		            },
		            {
		              attr: 'isShow',
		              instruction: '当前下拉菜单是否展示',
		              type: 'Boolean',
		              default: 'false'
		            }
		          ]
		        },
			}
		},
		components:{
			Mark,
      rsTable,
			rsDownmenu
		}
	}
</script>