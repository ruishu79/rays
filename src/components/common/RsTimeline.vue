<style>
	.rs_timeline_list,.rs_timeline_item{list-style: none;}
	.rs_timeline_item{position: relative; padding-bottom: 60px; line-height: 20px; font-size: 12px;}
	.rs_timeline_item .fa{float: left; font-size: 17px;}
	.rs_timeline_content{float: left; margin-left: 10px; }
	.rs_timeline_text{}
	.rs_timeline_data{font-weight: bold; font-size: 14px; font-family: 'Arial'; line-height: 18px;}
	.rs_time_line{width: 0px; height: 48px; border-right: 1px solid #BDC3C7; position: absolute; left: 6px; top: 15px; }
	.rs_timeline_item:last-child .rs_time_line{display: none;}

	.timeline_icon_primary{color: #3498DB;}
	.timeline_icon_success{color: #1ABC9C;}
	.timeline_icon_warning{color: #F1C40F;}
	.timeline_icon_error{color: #E74C3C;}
	.timeline_icon_none{color: #BDC3C7;}
	
	.timeline_line_primary{border-color: #3498DB;}
	.timeline_line_success{border-color: #1ABC9C;}
	.timeline_line_warning{border-color: #F1C40F;}
	.timeline_line_error{border-color: #E74C3C;}
	.timeline_line_none{border-color: #BDC3C7;}

	.timeline_line_dot{border-right-style: dashed;}

</style>
<template>
	<div>
		<ul class="rs_timeline_list">
			<li class="rs_timeline_item" v-for="item in data">
				<div class="rs_time_line" :class="lineStyle(item)"></div>
				<em class="fa" :class="iconStyle(item)"></em>
				<div class="rs_timeline_content">
					<div class="rs_timeline_data">{{item.date}}</div>
					<div class="rs_timeline_text">{{item.text}}</div>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			data:Array
		},
		methods:{
			lineStyle:function(item){
				let lineStyle
				if(item.line=="dot")
				{
					lineStyle=lineStyle+" timeline_line_dot"
				}
				switch(item.state){
					case 'primary':
						lineStyle=lineStyle+" timeline_line_primary"
						break
					case 'success':
						lineStyle=lineStyle+" timeline_line_success"
						break
					case 'warning':
						lineStyle=lineStyle+" timeline_line_warning"
						break
					case 'error':
						lineStyle=lineStyle+" timeline_line_error"
						break
					default:
						lineStyle=lineStyle+" timeline_icon_none"
						break
				}
				return lineStyle
			},
			iconStyle:function(item){
				let iconStyle
				if(item.icon)
				{
					iconStyle="fa-"+item.icon
				}
				else
				{
					iconStyle="fa-circle"
				}
				if(item.loading)
				{
					iconStyle=iconStyle+" fa-spin"
				}
				switch(item.state){
					case 'primary':
						iconStyle=iconStyle+" timeline_icon_primary"
						break
					case 'success':
						iconStyle=iconStyle+" timeline_icon_success"
						break
					case 'warning':
						iconStyle=iconStyle+" timeline_icon_warning"
						break
					case 'error':
						iconStyle=iconStyle+" timeline_icon_error"
						break
					default:
						iconStyle=iconStyle+" timeline_icon_none"
						break
				}
				return iconStyle
			}
		}
	}
</script>