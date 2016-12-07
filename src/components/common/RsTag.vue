<style>
	.rs_tag_box{background: #BDC3C7; color: #fff; display: inline-block; margin-right: 3px; padding: 3px 6px; line-height: 18px; font-size: 12px;}
	.rs_tag_primary{background: #3498DB;}
	.rs_tag_success{background: #1ABC9C;}
	.rs_tag_warning{background: #F1C40F;}
	.rs_tag_error{background: #E74C3C;}
	.rs_tag_icon{margin: 1px 1px 0;}
</style>
<template>
	<div class="rs_tag_box" :class="tagStyle">
		<em v-if="icon" class="fa rs_tag_icon" :class="tagIcon"></em>
		<slot></slot>
	</div>
</template>
<script>
	export default{
		props:{
			type:String,
			icon:String
		},
		computed:{
			tagIcon(){
				let icon;
				icon="fa-"+this.icon;
				return icon
			},
			tagStyle(){
				let tag;
				switch(this.type){
					case "primary":
						tag="rs_tag_primary"
						break;
					case "success":
						tag="rs_tag_success"
						break;
					case "warning":
						tag="rs_tag_warning"
						break;
					case "error":
						tag="rs_tag_error"
						break;
					default:
						break;
				}
				return tag;
			}
		}
	}
</script>