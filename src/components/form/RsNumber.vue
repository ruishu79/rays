<style>
	.rs_number_wrap{height: 32px; margin-bottom: 10px;}
	.rs_numBtn{width: 32px; height: 32px; border: 1px solid #eaeaed; float: left; line-height: 32px; text-align: center; color: #95A5A6; cursor: pointer;}
	.rs_num_left{border-radius: 4px 0 0 4px;}
	.rs_num-right{border-radius: 0 4px 4px 0;}
	.rs_numBtn:hover{border-color: #1ABC9C; background: #1ABC9C; color: #fff;}
	.rs_number_input{width: 80px; height: 32px; line-height: 32px; float: left; border-top: 1px solid #eaeaed; border-bottom: 1px solid #eaeaed; border-right: 0; border-left: 0; padding: 0 10px; text-align: center; color:  rgba(52,73,94,1); outline: none;}
	.rs_num_disable,.rs_num_disable:hover{background: #f6f6f6; border: 1px solid #eaeaed; color: #eaeaed; cursor: not-allowed;}
</style>
<template>
	<div class="rs_number_wrap">
		<div class="rs_numBtn rs_num_left" @mouseup="decFunc()" :class="{'rs_num_disable':decDisable}"><i class="fa fa-minus"></i></div>
		<input type="text" class="rs_number_input" v-model="num" @change="range()">
		<div class="rs_numBtn rs_num_right" @mouseup="addFunc()" :class="{'rs_num_disable':addDisable}"><i class="fa fa-plus"></i></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isDisable:true
			}
		},
		props:{
			num:{
				type:Number,
				default(){
					return 0
				}
			},
			step:{
				type:Number,
				default(){
					return 1
				}
			},
			min:{
				type:Number,
				default(){
					return 0
				}
			},
			max:{
				type:Number,
				default(){
					return Infinity
				}
			}
		},
		computed:{
			fixed:function(){
				let p1,p2,p3;
				if(this.step.toString().split(".")[1])
				{
					p1=this.step.toString().split(".")[1].length;
				}
				else
				{
					p1=0
				}
				if(this.num.toString().split(".")[1])
				{
					p2=this.num.toString().split(".")[1].length;
				}
				else
				{
					p2=0
				}
				let point=Math.max(p1,p2);
				return point;
			},
			decDisable:function(){
				let dec=false;
				if(this.num<=this.min)
				{
					dec=true
				}
				return dec;
			},
			addDisable:function(){
				let add=false;
				if(this.num>=this.max)
				{
					add=true
				}
				return add
			}
		},
		methods:{
			decFunc(){
				if(!this.decDisable)
				{
					let decNum=(parseFloat(this.num)-this.step).toFixed(this.fixed);
					this.num=parseFloat(decNum);
					if(this.decDisable)
					{
						this.num=this.min;
					}
				}
			},
			addFunc(){
				if(!this.addDisable)
				{
					let addNum=(parseFloat(this.num)+this.step).toFixed(this.fixed);
					this.num=parseFloat(addNum);
					if(this.addDisable)
					{
						this.num=this.max;
					}
				}		
			},
			range(){
				if(parseFloat(this.num)<this.min)
				{
					this.num=this.min;
				}
				if(parseFloat(this.num)>this.max)
				{
					this.num=this.max;
				}
				if(!(/^\d+$/g).test(this.num))
				{
					this.num=1;
				}
			}
		}
	}
</script>