<template>
	<button class="rs_btn" :class="btnStyle">
		<span v-if="!iconText">
			<slot></slot>
		</span>
		<i v-if="icon" class="fa" :class="iconStyle"></i>
		<span v-if="iconText" class="icon_text">{{iconText}}</span>
	</button>
</template>
<style>
	.rs_btn{display: inline-block; text-align: center; cursor: pointer; vertical-align: middle; font-size: 12px; padding: 6px 10px; line-height: 18px; outline: none; color: rgba(52,73,94,1); background: #fff; border: 1px solid #EAEAED; border-radius: 4px; min-width: 80px; margin: 0 2px;}
	.rs_btn:hover{border-color: #1ABC9C; color: #1ABC9C;}
	.primary{background: #3498DB; border-color: #3498DB; color: #fff;}
	.primary:hover{background: #67b2e4; color: #fff; border-color: #67b2e4;}
	.success{background: #1ABC9C; border-color: #1ABC9C; color: #fff;}
	.success:hover{background: #53cdb5; color: #fff; border-color: #53cdb5;}
	.warning{background: #F1C40F; border-color: #F1C40F; color: #fff;}
	.warning:hover{background: #f5d34b; color: #fff; border-color: #f5d34b;}
	.error{background: #E74C3C; border-color: #E74C3C; color: #fff;}
	.error:hover{background: #ed796d; color: #fff; border-color: #ed796d;}
	.rs_xlarge{line-height: 36px; font-size: 18px; font-weight: bold; padding: 10px 30px;}
	.rs_large{line-height: 24px; font-size: 14px; padding: 8px 15px;}
	.rs_small{line-height: 16px; font-size: 12px; padding: 3px 5px; min-width: auto;}
	.rs_icon_btn{border-radius: 50%; width: 32px; min-width: auto;}
	.icon_text{margin-left: 3px;}
	.rs_btn_disable{cursor: not-allowed; opacity: .5; background: #ECF0F1; border-color: #ECF0F1; color: #95A5A6;}
	.rs_btn_disable:hover{background: #ECF0F1; border-color: #ECF0F1; color: #95A5A6;}
</style>
<script>
	export default{
		props:{
			type:{
				type:String
			},
			size:{
				type:String
			},
			icon:{
				type:String
			},
			iconText:{
				type:String
			},
			loading:{
				type:Boolean,
				default (){
					return false
				}
			},
			disable:{
				type:Boolean,
				default (){
					return false
				}
			}
		},
		computed:{
			iconStyle(){
				let iconStyle="fa-"+this.icon
				if(this.loading)
				{
					iconStyle=iconStyle+" fa-spin"
				}
				return iconStyle
			},
			btnStyle(){
				let allClass=[]
				switch(this.type){
					case 'primary':
						allClass.push('primary')
						break
					case 'success':
						allClass.push('success')
						break
					case 'warning':
						allClass.push('warning')
						break
					case 'error':
						allClass.push('error')
						break
				}
				switch(this.size){
					case 'xlarge':
						allClass.push('rs_xlarge')
						break
					case 'large':
						allClass.push('rs_large')
						break
					case 'small':
						allClass.push('rs_small')
						break
				}
				if(this.icon&&(!this.iconText)){
					allClass.push('rs_icon_btn')
				}
				if(this.disable){
					allClass.push('rs_btn_disable')
				}
				return allClass
			}

		}
	}
</script>