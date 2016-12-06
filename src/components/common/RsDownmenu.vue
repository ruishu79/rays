<style>
.rs_dm_wrap{width: 100%; height: 40px; line-height: 40px; padding: 0 12px; font-size: 12px; outline: none; cursor: pointer; position: relative;}
.rs_dm_wrap:hover{background: rgba(0,0,0,.1);}
.rs_dm_wrap_focus,.rs_dm_wrap_focus:hover{background: rgba(0,0,0,.1);}
.rs_dm_dt{font-size: 14px;}

.rs_dm_downicon{float: right; margin-top: 10px;}
.rs_dm_list{width: 100%; position: absolute; top:45px; left: 0; background: #f3f4f5; border-radius: 4px; overflow: hidden; z-index: 110;}
.rs_dm_list>a{width: 100%; line-height: 20px; padding: 6px 12px; display: block; color: rgba(52,73,94,1); text-decoration: none;}
.rs_dm_list>a:hover{text-decoration: none; background: rgba(0,0,0,.1); color: rgba(52,73,94,1);}

.rs_dm_list_block{width: 400%; position: absolute; top:45px; left: 0; background: #f3f4f5; border-radius: 4px; overflow: hidden; padding: 4px 8px;}
.rs_dm_list_block>a{width: 25%; line-height: 20px; padding: 4px 5px; margin: 2px 0; display: block; float: left; text-align: center; color: rgba(52,73,94,1); text-decoration: none;}
.rs_dm_list_block>a:hover{text-decoration: none; background: rgba(0,0,0,.1); color: rgba(52,73,94,1);}


.rs_dm_item{width: 100%; line-height: 20px; padding: 6px 12px; display: block; color: rgba(52,73,94,1); text-decoration: none;}
.rs_dm_item:hover{text-decoration: none; background: rgba(0,0,0,.1); color: rgba(52,73,94,1);}
.menu-down-transition{
	transition: all .3s ease;
	transform: translateY(0);
	opacity: 1;
}
.menu-down-enter{
	transform: translateY(30px);
	opacity: 0;
}
.menu-down-leave{
	transform: translateY(20px);
	opacity: 0;
}

</style>
<template>
	<div>
		<div class="rs_dm_wrap" :class="{'rs_dm_wrap_focus':isShow}">
			<div class="rs_dm_dt" @click="toggle()"><span>{{text}}</span><em class="rs_dm_downicon fa fa-sort-down"></em></div>
			<div class="rs_dm_list" v-show="isShow" transition="menu-down" :class="{'rs_dm_list_block': (display=='block')}">
				<!-- <a class="rs_dm_item" v-for="item in data.children" v-link="item.link">{{item.label}}</a> -->
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
	var catIn = function catIn(target, parent) {
	    var path = [];
	    var parentNode = target;
	    while (parentNode && parentNode !== document.body) {
	        path.push(parentNode);
	        parentNode = parentNode.parentNode;

	    }
	    return path.indexOf(parent) !== -1;
	};
	export default{
		data(){
			return{
				//isShow:true
			}
		},
		props:{
			text:String,
			display:{
				type:String,
				default:'normal'
			},
			isShow:{
				type:Boolean,
				default:false
			}
		},
		computed:{

		},
		ready(){
			window.addEventListener('click',this.close,true);	
		},
		methods:{
			toggle(){
				this.isShow=!this.isShow;
			},
			close(e){
				if(!catIn(e.target,this.$el))
				{
					this.isShow=false;
				}	
			},
		}
	}
</script>