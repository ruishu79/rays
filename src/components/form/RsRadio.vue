<style>
.rs_radio_wrap{cursor: pointer; line-height: 18px; margin-right: 30px;}
.rs_radio_input{display: none;}
.rs_radio{width: 18px; height: 18px; border: 2px solid #eaeaed; border-radius: 50%; padding: 3px; background: #fff; float: left;}
.rs_radio_wrap:hover .rs_radio{border-color: #1ABC9C;}
.rs_radio_checked,.rs_radio_checked:hover{ border-color: #1ABC9C; }
.rs_radio_disable{background: #f6f6f6; border-color: #eaeaed;}
.rs_radio_wrap:hover .rs_radio_disable{border-color: #eaeaed; background: #f6f6f6;}
.rs_radio_disable .rs_radio_dot{background: #D8D8DE;}
.rs_radio_dot{width: 8px; height: 8px; border-radius: 50%; background: #1ABC9C;}
.rs_radio_text{font-weight: normal; margin-left: 8px; font-size: 12px; color: rgba(52,73,94,1); float: left;}
</style>
<template>
	<label class="rs_radio_wrap" v-for="radio in data" @mouseup="radioCheck(radio,$event)">
		<div class="rs_radio" v-if="!radio.checked" :class={'rs_radio_disable':radio.disabled}>
		</div>
		<div class="rs_radio rs_radio_checked" v-if="radio.checked" :class={'rs_radio_disable':radio.disabled}>
			<div class="rs_radio_dot"></div>
		</div>
		<span class="rs_radio_text">{{radio.text}}</span>
		<input type="radio" class="rs_radio_input" :checked="radio.checked" :disabled="radio.disabled" />
	</label>	
</template>
<script>
	export default{
		props:{
			data:Array
		},
		computed:{
		},
		methods:{
			radioCheck(radio,e){
				let radioState=radio.checked;
				if(!radio.disabled&&e.button==0)
				{
					this.data.forEach(obj=>{
						if(!obj.disabled)
						{
							obj.checked=false;
						}
					})
					if(!radioState)
					{
						radio.checked=true;
					}
				}
			}
		}
	}
</script>