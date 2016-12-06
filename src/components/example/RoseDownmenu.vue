<template>
	<div class="row downmenu_bar">
		<div class="col-sm-2">
			<rs-downmenu text="通用组件">
				<a v-link="{path:'../example/rose-table'}">表格</a>
				<a v-link="{path:'../example/rose-button'}">按钮</a>
				<a v-link="{path:'../example/rose-tree'}">树</a>
			</rs-downmenu>
		</div>
		<div class="col-sm-2">
			<rs-downmenu text="表单组件" display="block">
				<a v-link="{path:'../example/rose-input'}">输入框</a>
				<a v-link="{path:'../example/rose-radio'}">单选框</a>
				<a v-link="{path:'../example/rose-cascader'}">级联选择</a>
				<a v-link="{path:'../example/rose-checkbox'}">复选框</a>
				<a v-link="{path:'../example/rose-number'}">数量输入</a>
				<a v-link="{path:'../example/rose-switch'}">开关</a>
				<a v-link="{path:'../example/rose-datepicker'}">日期</a>
				<a v-link="{path:'../example/rose-select'}">选择器</a>
			</rs-downmenu>
		</div>
	</div>
	<div class="row downmenu_bar_green">
		<div class="col-sm-2">
			<rs-downmenu text="通用组件">
				<a v-link="{path:'../example/rose-table'}">表格</a>
				<a v-link="{path:'../example/rose-button'}">按钮</a>
				<a v-link="{path:'../example/rose-tree'}">树</a>
			</rs-downmenu>
		</div>
		<div class="col-sm-2">
			<rs-downmenu text="表单组件" display="block">
				<a v-link="{path:'../example/rose-input'}">输入框</a>
				<a v-link="{path:'../example/rose-radio'}">单选框</a>
				<a v-link="{path:'../example/rose-cascader'}">级联选择</a>
				<a v-link="{path:'../example/rose-checkbox'}">复选框</a>
				<a v-link="{path:'../example/rose-number'}">数量输入</a>
				<a v-link="{path:'../example/rose-switch'}">开关</a>
				<a v-link="{path:'../example/rose-datepicker'}">日期</a>
				<a v-link="{path:'../example/rose-select'}">选择器</a>
			</rs-downmenu>
		</div>
	</div>
</template>
<style>
	.downmenu_bar{background: #ECF0F1; border-radius: 4px; color: rgba(52,73,94,1); margin-bottom: 20px;}
	.downmenu_bar_green{background: #1ABC9C; border-radius: 4px; color: #fff; margin-bottom: 20px;}
</style>
<script>
	import RsDownmenu from '../common/RsDownmenu.vue'
	export default{
		data(){
			return{
			}
		},
		components:{
			RsDownmenu
		}
	}
</script>