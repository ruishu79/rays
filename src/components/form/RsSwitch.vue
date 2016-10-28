<style>
	.rs_switch{width: 50px; height:24px; margin-bottom: 10px;}
	.rs_switch_bg{width: 50px; height: 24px; border-radius: 16px; background: #eaeaed; position: relative; cursor: pointer;transition: all .3s ease;}
	.rs_switch_btn{width: 20px; height: 20px; border-radius: 50%; background: #fff; position: absolute; left: 2px; top: 2px; transition: all .4s ease;}
	.rs_switch_on{background: #1ABC9C;}
	.rs_switch_on .rs_switch_btn{left: auto; left: 28px;}
	.rs_switch_on.rs_switch_info{background: #3498DB;}
	.rs_switch_on.rs_switch_success{background: #1ABC9C;}
	.rs_switch_on.rs_switch_warning{background: #E67E22;}
	.rs_switch_on.rs_switch_error{background: #E74C3C;}
</style>
<template>
	<div class="rs_switch">
		<div class="rs_switch_bg" :class="switchState" @click="switchAcht()">
			<div class="rs_switch_btn"></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:{
			switchdata:Object
		},
		computed:{
			switchState(){
				let style=[];
				switch(this.switchdata.color){
					case 'info':
						style.push("rs_switch_info")
						break
					case 'success':
						style.push("rs_switch_success")
						break
					case 'warning':
						style.push("rs_switch_warning")
						break
					case 'error':
						style.push("rs_switch_error")
						break
					default:
						break
				}
				if(this.switchdata.state)
				{
					style.push("rs_switch_on")
				}
				return style;
			}
		},
		methods:{
			switchAcht(){
				this.switchdata.state=!this.switchdata.state;
			}
		}
	}
</script>