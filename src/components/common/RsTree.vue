<style>
	.rs_tree,.rs_tree li{list-style: none; font-size: 12px; line-height: 24px; color:rgba(52,73,94,1);}
	.rs_tree{padding-left: 20px;}
	.rs_tree li{overflow: hidden; padding: 2px 0;}
	.rs_tree_text{cursor: pointer; display: inline-block; padding: 0 6px 0 6px; border-radius: 4px;}
	.rs_tree_text:hover{ background: #ECF0F1;}
	.rs_tree_text em{font-size: 14px; margin-right: 4px; position: relative; top:1px;}
	.rs_tree_dot{width: 6px; height: 6px; border-radius: 50%; background: rgba(52,73,94,1); position: relative; top: -1px; display: inline-block; margin-right: 4px;}
	.node-down-transition{
		transition: all .3s ease;
		transform: scaleY(1);
		opacity: 1;
		transform-origin:center top;
	}
	.node-down-enter{
		transform: scaleY(0);
		opacity: 0;
	}
	.node-down-leave{
		transform: scaleY(0);
		opacity: 0;
	}
	.rs_tree_focus{background: #1ABC9C; color: #fff;}
	.rs_tree_focus:hover{background: #1ABC9C;}
	.rs_tree_focus .rs_tree_dot{background: #fff;}
	.rs_tree_icon{display: none; margin-right: 4px; font-size: 14px; position: relative; top:1px;}
	.rs_tree_icon:hover{color: #1ABC9C;}
	.rs_tree_focus .rs_tree_icon{color: rgba(255,255,255,.7);}
	.rs_tree_focus .rs_tree_icon:hover{color: rgba(255,255,255,1);}
	.rs_tree_text:hover .rs_tree_icon{display: inline-block;}
	.rs_tree_label{margin-right: 8px;}

	.rs_edit_input{width: 100px; height: 18px; line-height: 18px; border: 1px solid rgba(255,255,255,.3); outline: none; background: rgba(255,255,255,.1); display: none; padding:0 6px; margin: 3px 5px 3px 0;}
	/*.rs_is_del_box{width: 100px; height: 25px; line-height: 25px; float: right; overflow: hidden; display: none; margin-left: 5px;}
	.rs_is_del_box span{width: 50px; text-align: center; height: 25px; display: inline-block; float: left; }
	.rs_del_cannel{background: #bdc3c7; color: #fff;}
	.rs_del_del{background: #E74C3C; color: #fff;}*/
</style>
<template>
	<div>
		<ul class="rs_tree">
			<li v-for="(index,node) in treeData">
				<div @click="childrenShow(node,$event,$index)" class="rs_tree_text">
					<span class="rs_tree_dot" v-if="!isFolder(node)"></span>
					<em class="fa fa-folder" v-if="isFolder(node)&&!node.isShow"></em>
					<em class="fa fa-folder-open" v-if="isFolder(node)&&node.isShow"></em>
					<span class="rs_tree_label">{{node.text}}</span>
					<input type="text" class="rs_edit_input" v-model="node.text" @click="stop($event)" @keyup.enter="editEnd()">
					<div class="rs_tree_icon" v-if="node.add" @click="addItem(node,$event,$index)" title="新增"><i class="fa fa-plus"></i></div>
					<div class="rs_tree_icon" v-if="node.edit" @click="editItem(node,$event)" title="编辑"><i class="fa fa-edit"></i></div>
					<div class="rs_tree_icon" v-if="node.del" @click="delItem(node,$event)" title="删除"><i class="fa fa-trash"></i></div>
					<!-- <div class="rs_is_del_box">
						<span class="rs_del_cannel">取消</span>
						<span @click="delItem(node,$event)" class="rs_del_del">删除</span>
					</div> -->
				</div>
				<items v-if="isFolder(node)" v-show="node.isShow" :tree-data="node.children" transition="node-down"></items>
			</li>
		</ul>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default{
		name:"items",
		data(){
			return{
				isFocus:false,
				isEdit:false,
				isDel:false,
			}
		},
		props:{
			treeData:Array
		},
		components:{
			
		},
		computed:{
		},
		ready(){
			window.addEventListener('click',this.editEnd,false);	
		},
		methods:{
			isFolder:function(node){
				return node.children&&node.children.length
			},
			childrenShow:function(node,e,index){
				e.stopPropagation();
				if(node.isShow!=undefined)
				{
					node.isShow = !node.isShow;
				}
				$(".rs_tree_text").removeClass("rs_tree_focus");
				if($(e.target).hasClass("rs_tree_text"))
				{
					if(this.isFolder(node))
					{
						if(!node.isShow){
							$(e.target).removeClass("rs_tree_focus");
						}
						else{
							$(e.target).addClass("rs_tree_focus");
						}
					}
					else
					{
						$(e.target).addClass("rs_tree_focus");
					}	
				}
				else
				{
					if(this.isFolder(node))
					{
						if(!node.isShow){
							$(e.target).parent(".rs_tree_text").removeClass("rs_tree_focus");
						}
						else{
							$(e.target).parent(".rs_tree_text").addClass("rs_tree_focus");
						}
					}
					else
					{
						$(e.target).parent(".rs_tree_text").addClass("rs_tree_focus");
					}
				}
				this.editEnd();
			},
			stop(e){
				e.stopPropagation();
				//alert("1");
			},
			addItem(node,e,index){
				e.stopPropagation();
				if(node.children)
				{
					node.children.unshift({
						text : '新建文件',
						add : true,
						edit : true,
						del : true,
					});
				}
				else
				{
					this.$set('treeData['+index+'].isShow',true);
					this.$set('treeData['+index+'].children',[{
						text : '新建文件',
						add : true,
						edit : true,
						del : true,
					}]);
				}
				node.isShow = true;
				this.editEnd();
			},
			delAsk(node,e,index){
				e.stopPropagation();
				let delBtn;
				if($(e.target).hasClass("rs_tree_icon"))
				{
					delBtn=$(e.target);
				}
				else{
					delBtn=$(e.target).parent(".rs_tree_icon")
				}
				$(".rs_is_del_box").hide();
				delBtn.next(".rs_is_del_box").show();
				delItem(node,e)
			},
			delItem(node,e){
				e.stopPropagation();
				this.treeData.$remove(node);
				this.editEnd();
			},
			editItem(node,e){
				e.stopPropagation();
				this.editEnd();
				let editBtn=$(e.target);
				editBtn.parents(".rs_tree").find(".rs_tree_text").removeClass("rs_tree_focus");
				if(editBtn.hasClass("rs_tree_icon"))
				{
					editBtn.prevAll(".rs_edit_input").show();
					editBtn.prevAll(".rs_edit_input").select();
					editBtn.prevAll(".rs_tree_label").hide();
					editBtn.parent(".rs_tree_text").addClass("rs_tree_focus");
				}
				else
				{
					editBtn.parent(".rs_tree_icon").prevAll(".rs_edit_input").show();
					editBtn.parent(".rs_tree_icon").prevAll(".rs_edit_input").select();
					editBtn.parent(".rs_tree_icon").prevAll(".rs_tree_label").hide();
					editBtn.parent(".rs_tree_icon").parent(".rs_tree_text").addClass("rs_tree_focus");
				}
				
				this.isEdit=true;
			},
			editEnd(){
				$(".rs_tree_label").show();
				$(".rs_edit_input").hide();
			},
		}
	}
</script>