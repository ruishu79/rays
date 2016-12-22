<style>
	.rs_tip_wrap{ display: block; float: left; position: absolute; z-index: 120; overflow: visible; width: auto; box-sizing: }
	.rs_tip_box{display: inline-block; position: relative;}
	.rs_tip_text{max-width: 250px; color: #fff; text-align: left; white-space: nowrap; padding: 4px 8px; line-height: 18px; background: rgba(0,0,0,.7); border-radius: 4px; color: #fff; font-size: 12px;}
	.rs_tip_arrow{width: 8px; height: 5px; line-height: 5px; color: rgba(0,0,0,.7); position: absolute;}
	.rs_tip_arrow .fa{line-height: 5px;}
	.rs_tip_top{margin-left: 15px;}
	.rs_tip_bottom{margin-left: 15px; top: -5px;}
	.rs_tip_left{top: 8px; right: -5px; width: 5px; height: 8px; line-height: 8px; font-size: 16px;}
	.rs_tip_right{top: 8px; left: -5px; width: 5px; height: 8px; line-height: 8px; font-size: 16px;}
	.rs_tip_left .fa,.rs_tip_right .fa{line-height: 8px;}
</style>
<template>
	<!-- <div class="rs_tip_wrap" :style="{
			'visibility': show,
            'top': position.y + 'px',
            'left': position.x + 'px'
        }">
		<slot></slot>
	</div> -->
	<div class="rs_tip_box" @mouseenter="showAct()" @mouseleave="hideAct()">
		<slot></slot>
		<div class="rs_tip_wrap" :style="{
			'visibility': show,
            'top': position.y + 'px',
            'left': position.x + 'px'
        }">
        	<div class="rs_tip_text">{{text}}</div>
        	<div class="rs_tip_arrow" :class="arrowStyle"><i class="fa" :class="arrowIcon"></i></div>
        </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show: 'hidden',
				position:{
					x:0,
					y:0
				}
			}
		},
		// ready(){
		// 	this.$el.parentNode.addEventListener('mouseenter', this.showAct, false)
  //       	this.$el.parentNode.addEventListener('mouseleave', this.hideAct, false)
		// },
		// mounted () {
	 //        this.$el.parentNode.addEventListener('mouseenter', this.showAct, false)
	 //        this.$el.parentNode.addEventListener('mouseleave', this.hideAct, false)
	 //    },
		props:{
			align:{
				type:String,
				default:"top"
			},
			top:{
				type:Number,
				default:0
			},
			left:{
				type:Number,
				default:0
			},
			text:String
		},
		computed:{
			arrowStyle(){
				switch(this.align){
					case "top":
						return "rs_tip_top"
					case "bottom":
						return "rs_tip_bottom"
					case "left":
						return "rs_tip_left"
					case "right":
						return "rs_tip_right"
				}
			},
			arrowIcon(){
				switch(this.align){
					case "top":
						return "fa-caret-down"
					case "bottom":
						return "fa-caret-up"
					case "left":
						return "fa-caret-right"
					case "right":
						return "fa-caret-left"
				}
			}
		},
		methods:{
			getPosition(e){
				//const partentRect = this.$el.getBoundingClientRect();
				const tipRect = this.$el.children[1];
				//console.log(tipRect)
				//console.log(this.$el.clientWidth)
				if(this.align=="top")
				{
					this.position.x = 0+this.left;
					this.position.y = -tipRect.clientHeight-5+this.top;
				}
				else if(this.align=="bottom")
				{
					this.position.x = 0+this.left;
					this.position.y = this.$el.clientHeight+5+this.top;
				}
				else if(this.align=="left")
				{
					this.position.x = -tipRect.clientWidth-4+this.left;
					this.position.y = 0+this.top;
				}
				else if(this.align=="right")
				{
					this.position.x = this.$el.clientWidth+4+this.left;
					this.position.y = 0+this.top;
				}
			},
			showAct(){
				this.show = 'visible'
				this.getPosition();
			},
			hideAct(){
				this.show = 'hidden'
			}
		}
	}
</script>