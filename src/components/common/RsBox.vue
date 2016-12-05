<style>
	.rs_box_wrap{width: 100%; border: 1px solid #eaeaed;}
	.rs_box_head{width: 100%; line-height: 20px; padding: 10px 15px; border-bottom: 1px solid #eaeaed; font-size: 14px; background: #f3f4f5;}
	.rs_box_body{width: 100%; padding: 12px 15px 15px;}

	.box_primary{background: #3498DB; color: #fff; border: 1px solid #3498DB;}
	.box_primary .rs_box_head{background: #67b2e4; color: #fff; border-bottom: 1px solid rgba(255,255,255,.3);}
	.head_primary{background: #fff; color: rgba(52,73,94,1); border: 1px solid #67b2e4;}
	.head_primary .rs_box_head{background: #67b2e4; color: #fff; border-bottom: 1px solid #67b2e4;}

	.box_success{background: #1ABC9C; color: #fff; border: 1px solid #1ABC9C;}
	.box_success .rs_box_head{background: #53cdb5; color: #fff; border-bottom: 1px solid rgba(255,255,255,.3);}
	.head_success{background: #fff; color: rgba(52,73,94,1); border: 1px solid #53cdb5;}
	.head_success .rs_box_head{background: #53cdb5; color: #fff; border-bottom: 1px solid #53cdb5;}

	.box_warning{background: #F1C40F; color: #fff; border: 1px solid #F1C40F;}
	.box_warning .rs_box_head{background: #f5d34b; color: #fff; border-bottom: 1px solid rgba(255,255,255,.3);}
	.head_warning{background: #fff; color: rgba(52,73,94,1); border: 1px solid #f5d34b;}
	.head_warning .rs_box_head{background: #f5d34b; color: #fff; border-bottom: 1px solid #f5d34b;}

	.box_error{background: #E74C3C; color: #fff; border: 1px solid #E74C3C;}
	.box_error .rs_box_head{background: #ed796d; color: #fff; border-bottom: 1px solid rgba(255,255,255,.3);}
	.head_error{background: #fff; color: rgba(52,73,94,1); border: 1px solid #ed796d;}
	.head_error .rs_box_head{background: #ed796d; color: #fff; border-bottom: 1px solid #ed796d;}
</style>
<template>
	<div>
		<div class="rs_box_wrap" :class="boxStyle">
			<div class="rs_box_head">{{head}}</div>
			<div class="rs_box_body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			boxStyle(){
				let allClass=[]
				switch(this.type){
					case 'primary':
						allClass.push('box_primary')
						break
					case 'success':
						allClass.push('box_success')
						break
					case 'warning':
						allClass.push('box_warning')
						break
					case 'error':
						allClass.push('box_error')
						break
					case 'head-primary':
						allClass.push('head_primary')
						break
					case 'head-success':
						allClass.push('head_success')
						break
					case 'head-warning':
						allClass.push('head_warning')
						break
					case 'head-error':
						allClass.push('head_error')
						break
					default:
						break
				}
				return allClass
			}
		},
		props:{
			head:String,
			type:String
		}
	}
</script>