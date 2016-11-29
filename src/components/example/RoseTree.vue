<template>
	<div class="row">
		<div class="col-sm-6"><rs-tree :tree-data="treeDate"></rs-tree></div>
	</div>
</template>
<script>
	import RsTree from '../common/RsTree.vue'
	export default{
		data(){
			return{
				treeDate:[
					{
						text : '中国',
						add : true,
						edit : true,
						del : false,
						isShow : false,
						children : [{
							text : '辽宁',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '沈阳',
								add : true,
								edit : true,
								del : true,
							},
							{
								text : '大连',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '鞍山',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '抚顺',
								add : false,
								edit : true,
								del : true,
							}]
						},
						{
							text : '浙江',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '杭州',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '宁波',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '衢州',
								add : false,
								edit : true,
								del : true,
							},
							{
								text : '台州',
								add : false,
								edit : true,
								del : true,
							}]
						},
						{
							text : '广东',
							add : true,
							edit : true,
							del : true,
							isShow : true,
							children : [{
								text : '广州',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '深圳',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '汕头',
								add : false,
								edit : false,
								del : true,
							},
							{
								text : '珠海',
								add : false,
								edit : false,
								del : true,
							}]
						},
						{
							text : '北京',
							add : true,
							edit : true,
							del : false,
						}]
					}
				],	
			}
		},
		components:{
			RsTree
		}
	}
</script>