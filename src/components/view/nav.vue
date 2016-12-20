<template>
	<ul class="l_nav_class">
		<li>
			<dl class="l_nav_list">
				<dt>简介</dt>
				<dd><a v-link="{path:'../example/rose-table'}">快速开始</a></dd>
				<dd><a v-link="{path:'../example/rose-table'}">安装</a></dd>
			</dl>
		</li>
		<li>
			<dl class="l_nav_list">
				<dt>通用组件<span>(common)</span></dt>
				<dd><a v-link="{path:'../example/rays-table'}">表格<span>(rs-table)</span></a></dd>
				<dd><a v-link="{path:'../example/rays-button'}">按钮<span>(rs-button)</span></a></dd>
				<dd><a v-link="{path:'../example/rays-tree'}">树<span>(rs-tree)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-downmenu'}">下拉菜单<span>(rs-downmenu)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-box'}">盒子<span>(rs-box)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-tip'}">提示框<span>(rs-tip)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-progress'}">进度条<span>(rs-progress)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">
				<dd><a v-link="{path:'../example/rays-timeline'}">时间线<span>(rs-timeline)</span></a></dd>
				<dd><a v-link="{path:'../example/rays-tag'}">标签<span>(rs-tag)</span></a></dd>
			</dl>
		</li>
		<li>
			<dl class="l_nav_list">
				<dt>表单组件<span>(form)</span></dt>
				<dd><a v-link="{path:'../example/rose-input'}">输入框<span>(rs-input)</span></a></dd>
				<dd><a v-link="{path:'../form/checkbox.vue'}">复选框<span>(rs-checkbox)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-radio'}">单选框<span>(rs-radio)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-number'}">数量输入<span>(rs-number)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-switch'}">开关<span>(rs-switch)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-datepicker'}">日期<span>(rs-datepicker)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-select'}">选择器<span>(rs-select)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-cascader'}">级联选择<span>(rs-cascader)</span></a></dd>
			</dl>
		<li>
		<li>
			<dl class="l_nav_list">
				<dt>整体组件<span>(global)</span></dt>
				<dd><a v-link="{path:'../example/rose-notification'}">通知<span>(rs-notification)</span></a></dd>
				<dd><a v-link="{path:'../example/rays-breadcrumb'}">面包屑<span>(rs-breadcrumb)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-pagination'}">分页<span>(rs-pagination)</span></a></dd>
				<dd><a v-link="{path:'../example/rose-modal'}">弹框<span>(rs-message)</span></a></dd>
			</dl>
		</li>
		<li>
			<dl class="l_nav_list">
				<dt>图片组件<span>(image)</span></dt>
				<dd><a v-link="{path:'../example/rose-table'}">图片列表<span>(rs-img-list)</span><em>(未开发)</em></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">图片预览<span>(rs-img-preview)</span><em>(未开发)</em></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">图片轮播<span>(rs-img-scroll)</span><em>(未开发)</em></a></dd>
			</dl>
		</li>
		<li>
			<dl class="l_nav_list">
				<dt>图表组件<span>(chart)</span></dt>
				<dd><a v-link="{path:'../example/rose-table'}">柱状图<span>(rs-img-bar)</span><em>(未开发)</em></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">饼状图<span>(rs-img-pie)</span><em>(未开发)</em></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">线形图<span>(rs-img-line)</span><em>(未开发)</em></a></dd>
				<dd><a v-link="{path:'../example/rose-button'}">地图<span>(rs-img-map)</span><em>(未开发)</em></a></dd>
			</dl>
		</li>
		<li>
			<dl class="l_nav_list">
				<dt>其他<span>(icon)</span></dt>
				<dd><a v-link="{path:'../example/rose-table'}">图标库<span>(icon)</span></a></dd>
			</dl>
		</li>
	</ul>
</template>
<style>
	.l_nav_class{border-right: 1px solid #ECF0F1; padding-left: 0; padding-right: 20px;}
	.l_nav_class,.l_nav_class li{list-style: none;}
	.l_nav_list,.l_nav_list dt,.l_nav_list dd{list-style: none;}
	.l_nav_list dt{font-size: 14px; color: #34495E; font-weight: normal; line-height: 36px; margin-bottom: 5px;}
	.l_nav_list dd{font-size: 12px; line-height: 32px; color: #34495E;}
	.l_nav_list dd a{color: #34495E; text-decoration: none; display: block; padding-left: 10px; border-radius: 6px;}
	.l_nav_list dd a:hover{ background: #1ABC9C; color: #fff; }
	.l_nav_list dd a:hover span,.l_nav_list dd a:hover em{color: rgba(255,255,255,.7);}
	.l_nav_list dt span,.l_nav_list dd a span{ margin-left: 5px; color: #95A5A6;}
	.l_nav_list dt em,.l_nav_list dd a em{ margin-left: 5px; color: #F39C12; font-style: normal;}
</style>