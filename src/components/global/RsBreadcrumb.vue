<style>
	.rs_breadcrumb_item{font-size: 12px; line-height: 20px;}
	.rs_breadcrumb_item:last-child .rs_breadcrumb_separator{display: none;}
	.rs_breadcrumb_separator{font-family: "Airal"; color: #95A5A6; font-style: normal; margin: 0 6px;}
	.rs_breadcrumb_icon{font-size: 16px; margin-right: 3px; position: relative; top: 1px;}
	.isLink:hover{cursor: pointer; color: #1ABC9C;}
</style>
<template>
	<div>
		<span class="rs_breadcrumb_item" v-for="item in data" :class="{'isLink':item.path}">
			<em class="rs_breadcrumb_icon fa" :class="rs_breadcrumb_icon(item)" v-if="item.icon"></em>
			<span class="rs_breadcrumb_text" @click="jump(item)">{{item.text}}</span>
			<i class="rs_breadcrumb_separator">{{separator}}</i>
		</span>
	</div>
</template>
<script>
	export default{
		props:{
			data:Array,
			separator:{
				type:String,
				default:"/"
			}
		},
		methods:{
			rs_breadcrumb_icon(item){
				let iconStyle=" fa-"+item.icon;
				return iconStyle;
			},
			jump(item){
				if (item.path) {
	                this.$route.router.go(item.path)
	            }
			}
		}
	}
</script>