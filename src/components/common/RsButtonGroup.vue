<template>
	<div class="rs_btn_group">
		<slot></slot>
	</div>
</template>
<style>
	.rs_btn_group{display: inline-block; margin-bottom: 8px;}
	.rs_btn_group .rs_btn{margin: 0 -2.5px;}
	.rs_btn_group .rs_btn:hover{position: relative;}
	.rs_btn_group>.rs_btn:not(:first-child):not(:last-child){border-radius: 0;}
	.rs_btn_group>.rs_btn:first-child{border-bottom-right-radius:0; border-top-right-radius:0;}
	.rs_btn_group>.rs_btn:last-child{border-bottom-left-radius:0; border-top-left-radius:0;}
</style>