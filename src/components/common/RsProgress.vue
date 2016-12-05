<style>
	.rs_bar_bg{width: 80%; height: 16px; background: #f1f2f3; border-radius: 4px; overflow: hidden; float: left;}
	.rs_bar{height: 16px; background: #3498DB; border-radius: 4px;}
	.rs_bar_primary{background: #3498DB;}
	.rs_bar_success{background: #1ABC9C;}
	.rs_bar_warning{background: #F1C40F;}
	.rs_bar_error{background: #E74C3C;}
	.rs_bar_text{width: 20%; float: left; padding-left: 10px; line-height: 16px; font-size: 12px; color: rgba(52,73,94,1);}
	 .rs_bar{
       -webkit-background-size: 30px 30px;
       -moz-background-size: 30px 30px;
       -ms-background-size: 30px 30px;
       -o-background-size: 30px 30px;
       background-size: 30px 30px;
       background-image: -webkit-gradient(linear, left top, right bottom,color-stop(.25, rgba(255, 255, 255, .15)), color-stop(.25, transparent),color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .15)),color-stop(.75, rgba(255, 255, 255, .15)), color-stop(.75, transparent),to(transparent));
       background-image: -webkit-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,transparent 75%, transparent);
       background-image: -moz-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,  transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
       background-image: -ms-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,transparent 75%, transparent);
       background-image: -o-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,transparent 75%, transparent);
       background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,transparent 75%, transparent);
       -moz-animation: animate-stripes 3s linear infinite;
       -webkit-animation: animate-stripes 3s linear infinite;
     }

     @-moz-keyframes animate-stripes {
       0% {
         background-position: 0 0;
       }
       100% {
         background-position: 60px 0;
       }  
     }

     @-webkit-keyframes animate-stripes {
        0% {
           background-position: 0 0;
         }
         100% {
           background-position: 60px 0;
         }
     }
</style>
<template>
	<div class="rs_bar_wrap">
		<div class="rs_bar_bg">
			<div class="rs_bar" :style="{width:percent+'%'}" :class="barStyle"></div>
		</div>
		<div class="rs_bar_text">{{percent}}%</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:{
			percent:{
				type:Number,
				default:0
			},
			type:{
				type:String,
				default:"primary"
			}
		},
		computed:{
			barStyle(){
				switch(this.type){
					case 'primary':
						return 'rs_bar_primary'
					case 'success':
						return 'rs_bar_success'
					case 'warning':
						return 'rs_bar_warning'
					case 'error':
						return 'rs_bar_error'
					default:
						return 'rs_bar_primary'
				}
			}
		}
	}
</script>