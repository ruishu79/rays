<template>
	<div class="row">
		<div class="col-sm-3">
			<span>鼠标移动到这里(上)<rs-tip align="top">这里是提示哦</rs-tip></span>
		</div>
		<div class="col-sm-3">
			<span>鼠标移动到这里(下)<rs-tip align="bottom">这里是提示哦</rs-tip></span>
		</div>
		<div class="col-sm-3">
			<span>鼠标移动到这里(左)<rs-tip align="left">这里是提示哦</rs-tip></span>
		</div>
		<div class="col-sm-3">
			<span>鼠标移动到这里(右)<rs-tip align="right">这里是提示哦</rs-tip></span>
		</div>
	</div>
	<div class="row" style="margin-top: 20px;">
		<div class="col-sm-3">
			<rs-button type="primary">按钮-上方显示<rs-tip align="top">这里是提示哦</rs-tip></rs-button>
		</div>
		<div class="col-sm-3">
			<rs-button type="success">按钮-下方显示<rs-tip align="bottom">这里是提示哦</rs-tip></rs-button>
		</div>
		<div class="col-sm-3">
			<rs-button type="warning">按钮-左方显示<rs-tip align="left">这里是提示哦</rs-tip></rs-button>
		</div>
		<div class="col-sm-3">
			<rs-button type="error">按钮-右方显示<rs-tip align="right">这里是提示哦</rs-tip></rs-button>
		</div>
	</div>
</template>
<script>
	import RsTip from '../common/RsTip.vue'
	import RsButton from '../common/RsButton.vue'
	export default{
		components:{
			RsTip,
			RsButton
		}
	}
</script>