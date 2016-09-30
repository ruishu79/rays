<template>
	<div class="ex_title">按钮类型</div>
	<div class="ex_content">
		<rs-button>默认按钮</rs-button>
		<rs-button type="primary">推荐按钮</rs-button>
		<rs-button type="success">成功按钮</rs-button>
		<rs-button type="warning">提醒按钮</rs-button>
		<rs-button type="error">警告按钮</rs-button>
	</div>
	<div class="ex_title">按钮尺寸</div>
	<div class="ex_content">
		<rs-button type="primary" size="xlarge">超大尺寸</rs-button>
		<rs-button type="primary" size="large">大尺寸</rs-button>
		<rs-button type="primary">普通尺寸</rs-button>
		<rs-button type="primary" size="small">小尺寸</rs-button>
	</div>
	<div class="ex_title">图标按钮</div>
	<div class="ex_content">
		<rs-button icon="search"></rs-button>
		<rs-button type="primary" icon="cloud"></rs-button>
		<rs-button type="success" icon="check"></rs-button>
		<rs-button type="warning" icon="bolt"></rs-button>
		<rs-button type="error" icon="close"></rs-button>
		<rs-button icon="download" icon-text="下载"></rs-button>
		<rs-button type="primary" icon="upload" icon-text="上传"></rs-button>
		<rs-button icon="spinner" icon-text="保存中" :loading="true"></rs-button>
	</div>
	<div class="ex_title">按钮禁用</div>
	<div class="ex_content">
		<rs-button :disable="true">禁用按钮</rs-button>
		<rs-button icon="check" :disable="true"></rs-button>
	</div>
	<div class="ex_title">组合按钮</div>
	<div class="ex_content">
		<rs-button-group>
			<rs-button>增加</rs-button>
			<rs-button>减少</rs-button>
			<rs-button>清空</rs-button>
		</rs-button-group>
	</div>
</template>
<style>
	.ex_title{font-size: 18px; font-weight: bold; line-height: 30px; margin-bottom: 10px; color:rgba(52,73,94,1); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}
	.ex_content{margin-bottom: 24px;}
</style>
<script>
	import rsButton from '../common/RsButton.vue'
	import rsButtonGroup from '../common/RsButtonGroup.vue'
	export default{
		components:{
			rsButton,
			rsButtonGroup
		},
	}
</script>