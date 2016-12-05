<style>
	.rs_tip_wrap{padding: 4px 8px; height: 26px; line-height: 18px; background: rgba(0,0,0,.7); border-radius: 4px; display: inline-block; color: #fff; font-size: 12px; position: fixed; z-index: 120; }
</style>
<template>
	<div class="rs_tip_wrap" :style="{
			'visibility': show,
            'top': position.y + 'px',
            'left': position.x + 'px'
        }">
		<slot></slot>
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
		ready(){
			this.$el.parentNode.addEventListener('mouseenter', this.showAct, false)
        	this.$el.parentNode.addEventListener('mouseleave', this.hideAct, false)
		},
		mounted () {
	        this.$el.parentNode.addEventListener('mouseenter', this.showAct, false)
	        this.$el.parentNode.addEventListener('mouseleave', this.hideAct, false)
	    },
		props:{
			align:{
				type:String,
				default:"top"
			}
		},
		computed:{

		},
		methods:{
			getPosition(e){
				const partentRect = this.$el.parentNode.getBoundingClientRect()
				console.log(partentRect)
				console.log(this.$el.clientWidth)
				if(this.align=="top")
				{
					this.position.x = partentRect.left + partentRect.width * 0.5 - this.$el.clientWidth * 0.5;
					this.position.y = partentRect.top - this.$el.clientHeight - 10;
				}
				else if(this.align=="bottom")
				{
					this.position.x = partentRect.left + partentRect.width * 0.5 - this.$el.clientWidth * 0.5;
					this.position.y = partentRect.top + partentRect.height + 10
				}
				else if(this.align=="left")
				{
					this.position.x = partentRect.left - this.$el.clientWidth - 10;
					this.position.y = partentRect.top + partentRect.height * 0.5 - this.$el.clientHeight*0.5;
				}
				else if(this.align=="right")
				{
					console.log(partentRect.left+"+"+partentRect.width)
					this.position.x = partentRect.left + partentRect.width + 10;
					this.position.y = partentRect.top + partentRect.height * 0.5 - this.$el.clientHeight*0.5;
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