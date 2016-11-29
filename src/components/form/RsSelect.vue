<style>
	.rs_select_wrap{ width: 100%; background: #fff; border: 1px solid #eaeaed; height: 32px; line-height: 30px; border-radius: 4px; color: rgba(52,73,94,1); padding: 0 10px; font-size: 12px; outline: none; cursor: pointer; position: relative; margin-bottom: 15px;}
	.rs_select_arrow{width: 12px; height: 12px; position: absolute; top: 9px; right: 9px; font-size: 12px; text-align: center; line-height: 12px; color: #95A5A6;}
	.rs_select_wrap:focus,.rs_select_wrap:hover{border-color: #1ABC9C; box-shadow: 0 0 8px rgba(26,188,156,.2)}
	.rs_option_wrap{min-width: 120px; position: absolute; top:34px; left: 0; background: #f3f4f5; border-radius: 4px; overflow: hidden; z-index: 110;}
	.rs_option{padding: 6px 10px; line-height: 20px;}
	.rs_option:hover{background: #e1e4e7;}
	.rs_option_focus,.rs_option_focus:hover{background: #1ABC9C; color: #fff;}
	.rs_option_disable,.rs_option_disable:hover{color: #BDC3C7; cursor: not-allowed; background: #f3f4f5;}
	.select-down-transition{
		transition: all .3s ease;
		transform: translateY(0);
		opacity: 1;
	}
	.select-down-enter{
		transform: translateY(30px);
		opacity: 0;
	}
	.select-down-leave{
		transform: translateY(20px);
		opacity: 0;
	}

	.rs_select_search{height: 32px; line-height: 32px;}
	.rs_select_search input{background: none; border: 0; padding: 0 10px; width: 100%; outline: none;}
	.rs_select_disable{background: #ecf0f1; cursor: not-allowed;}
	.rs_select_disable:focus,.rs_select_disable:hover{border-color: #eaeaed; box-shadow:none;}
	.rs_select_label_head{font-weight: normal; font-size: 12px; padding-left: 6px;}
	.rs_select_label_line{font-weight: normal; float: left; width: 30%; text-align: right; padding-right: 10px; line-height: 32px; font-size: 12px; margin-bottom: 0;}
	.rs_select_label_head .rs_select_second_label{margin-left: 8px; color: #95A5A6;}
	.rs_select_label_line .rs_select_second_label{margin-left: 3px; color: #95A5A6;}
	.rs_select_important{margin-left: 3px; color: #E74C3C; font-size: 14px; position: relative; top: 3px; font-weight: bold;}
	.rs_select_line{width: 70%; float: left;}
	.rs_select_text{height: 32px; overflow: hidden;}
</style>
<template>
	<div>
		<label v-if="select.labelType=='line'&&select.label" class="rs_select_label_line">{{select.label}}<span class="rs_select_second_label" v-if="select.secondLabel">{{select.secondLabel}}</span><span class="rs_select_important" v-if="select.important">*</span></label>
        <label v-if="select.labelType=='head'&&select.label" class="rs_select_label_head">{{select.label}}<span class="rs_select_second_label" v-if="select.secondLabel">{{select.secondLabel}}</span><span class="rs_select_important" v-if="select.important">*</span></label>
		<div class="rs_select_wrap" :class="mainStyle" @click="toSelect($event)">
			<div class="rs_select_text">
				<span>{{selectFocus}}</span>
			</div>
			<div class="rs_select_arrow"><i class="fa fa-angle-down"></i></div>
			<div class="rs_option_wrap" v-show="selecting" transition="select-down" v-if="!(select.disable)">
				<div class="rs_select_search" v-if="select.search">
					<input type="text" placeholder="搜索..." @click="searchClick($event)" v-model="searchText">
				</div>
				<div
					class="rs_option"
					v-for="op in select.option | filterBy searchText in 'value'"
					:class="{'rs_option_focus':op.selected,'rs_option_disable':op.disabled}"
					@click="selectOption(op,$event)"
				>{{op.value}}</div>
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
				selecting:false,
				searchText:''
			}
		},
		props:{
			select:Object,
		},
		computed:{
			selectFocus:function(){
				let isSelect=this.select.default;
				this.select.option.forEach(op=>{
					if(op.selected)
					{
						isSelect=op.value;
						//break
					}
				});
				return isSelect;
			},
			mainStyle:function(){
				let allClass=[];
	            switch(this.select.labelType){
	                case 'line':
	                    allClass.push("rs_select_line")
	                    break
	                case 'head':
	                    allClass.push("rs_select_head")
	                    break
	                default:
	                    allClass.push("rs_select_head")
	                    break
	            }
	            if(this.select.disable)
	            {
	                allClass.push("rs_select_disable");
	            }
	            return allClass;
			}
		},
		ready(){
			window.addEventListener('click',this.close,true);	
		},
		// mounted(){
		// 	window.addEventListener('click',this.close,false);	
		// },
		// beforeDestroy(){
		// 	window.addEventListener('click',this.close,false);	
		// },
		methods:{
			toSelect(e){
				//e.stopPropagation();
				//console.log(this.selecting);
				this.selecting=!this.selecting;
				if(!this.selecting)
				{
					this.searchText='';
				}
				
			},
			close(e){
				if(!catIn(e.target,this.$el))
				{
					this.selecting=false;
					this.searchText='';
				}	
			},
			searchClick(e){
				e.stopPropagation();
			},
			selectOption(op,e){
				e.stopPropagation();
				if(!op.disabled)
				{
					this.select.option.forEach(em=>{
						em.selected=false;
					})
					op.selected=true;
					this.selecting=false;
					this.searchText='';
				}
				else
				{
					this.selecting=false;
					this.searchText='';
				}
				
			}
		}
	}
</script>