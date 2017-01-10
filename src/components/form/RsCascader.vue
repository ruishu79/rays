<style>
	.rs_cascader_wrap{ width: 100%; background: #fff; border: 1px solid #eaeaed; height: 32px; line-height: 30px; border-radius: 4px; color: rgba(52,73,94,1); padding: 0 10px; font-size: 12px; outline: none; cursor: pointer; position: relative; margin-bottom: 15px;}
	.rs_cascader_arrow{width: 12px; height: 12px; position: absolute; top: 9px; right: 9px; font-size: 12px; text-align: center; line-height: 12px; color: #95A5A6;}
	.rs_cascader_wrap:focus,.rs_cascader_wrap:hover{border-color: #1ABC9C; box-shadow: 0 0 8px rgba(26,188,156,.2)}
	.rs_cascader_big_wrap{width: 999px; position: absolute; top: 34px; left: 0; z-index: 110;}
	.rs_cascader_option_wrap{min-width: 80px; max-height: 300px; background: #f3f4f5; border-radius: 4px; overflow: hidden; float: left;}
	.rs_cascader_list{min-width: 80px; float: left; list-style: none; padding-left: 0; margin-bottom: 0; border-right: 1px solid #fff; overflow: auto; height: 100%;}
	.rs_cascader_list:last-child{border-right: 0;}
	.rs_cascader_list li{padding: 6px 12px 6px 10px; line-height: 20px; list-style: none;}
	.rs_cascader_list li:hover{background: #e1e4e7;}
	.rs_option_focus,.rs_option_focus:hover{background: #1ABC9C; color: #fff;}
	.cascader-down-transition{
		transition: all .3s ease;
		transform: translateY(0);
		opacity: 1;
	}
	.cascader-down-enter{
		transform: translateY(30px);
		opacity: 0;
	}
	.cascader-down-leave{
		transform: translateY(20px);
		opacity: 0;
	}

	.rs_cascader_search{height: 32px; line-height: 32px;}
	.rs_cascader_search input{background: none; border: 0; padding: 0 10px; width: 100%; outline: none;}
	.rs_cascader_disabled{background: #ecf0f1; cursor: not-allowed;}
	.rs_cascader_disabled:focus,.rs_cascader_disabled:hover{border-color: #eaeaed; box-shadow:none;}
	.rs_cascader_label_head{font-weight: normal; font-size: 12px; padding-left: 6px;}
	.rs_cascader_label_line{font-weight: normal; float: left; width: 30%; text-align: right; padding-right: 10px; line-height: 32px; font-size: 12px; margin-bottom: 0;}
	.rs_cascader_label_head .rs_cascader_second_label{margin-left: 8px; color: #95A5A6;}
	.rs_cascader_label_line .rs_cascader_second_label{margin-left: 3px; color: #95A5A6;}
	.rs_cascader_important{margin-left: 3px; color: #E74C3C; font-size: 14px; position: relative; top: 3px; font-weight: bold;}
	.rs_cascader_line{width: 70%; float: left;}
	.rs_cascader_text{height: 32px; overflow: hidden;}
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
	.rs_cascader_list .rs_cascader_select,.rs_cascader_list .rs_cascader_select:hover{background: #1ABC9C; color: #fff;}
	.rs_cascader_disable{background: #ecf0f1; cursor: not-allowed;}
	.rs_cascader_disable:focus,.rs_cascader_disable:hover{border-color: #eaeaed; box-shadow:none;}
	.rs_cascader_list .rs_cascader_option_disable,.rs_cascader_list .rs_cascader_option_disable:hover{color: #BDC3C7; cursor: not-allowed; background: #f3f4f5;}
</style>
<template>
	<div>
		<label v-if="data.labelType=='line'&&data.label" class="rs_cascader_label_line">{{data.label}}<span class="rs_cascader_second_label" v-if="data.secondLabel">{{data.secondLabel}}</span><span class="rs_cascader_important" v-if="data.important">*</span></label>
        <label v-if="data.labelType=='head'&&data.label" class="rs_cascader_label_head">{{data.label}}<span class="rs_cascader_second_label" v-if="data.secondLabel">{{data.secondLabel}}</span><span class="rs_cascader_important" v-if="data.important">*</span></label>
		<div class="rs_cascader_wrap" @click="openCascader()" :class="{'rs_cascader_disable':data.disable}">
			<div class="rs_cascader_text">
				<span v-if="cascaderText.length==0">{{data.default}}</span>
				<span>{{cascaderText.join(data.join)}}</span>
			</div>
			<div class="rs_cascader_arrow"><i class="fa fa-angle-down"></i></div>
			<div class="rs_cascader_big_wrap" v-show="selecting"  v-if="!(data.disable)" transition="select-down">
				<div class="rs_cascader_option_wrap" :style="{height:maxNum*32+'px'}">
					<ul class="rs_cascader_list" v-for="(col,group) in list">
						<li v-for="(row,op) in group" @click="cascaderNext(col,row,op,$event)" :class="{'rs_cascader_select':op.select,'rs_cascader_option_disable':op.disable}">{{op.label}}</li>
					</ul>
				</div>
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
				list:[],
				cascaderIndex:[],
				maxNum:0,
				cascaderText:[],
				selecting:false
			}
		},
		ready(){
			let baseList=[]
			this.data.option.forEach(op=>{
				baseList.push({label:op.label,value:op.value,select:false,disable:op.disable})
			});
			this.maxNum=this.data.option.length;
			this.list.push(baseList);
			window.addEventListener('click',this.close,true);	
		},
		props:{
			data:Object
		},
		computed:{

		},
		methods:{
			close(e){
				if(!catIn(e.target,this.$el))
				{
					this.selecting=false;
					//this.searchText='';
				}	
			},
			openCascader(){
				this.selecting=!this.selecting;
			},
			cascaderNext(col,row,op,e){
				if(op.disable)
				{
					this.close();
				}
				else{
					e.stopPropagation();
					let childrenList=[];
					let next=this.data.option;
					this.list.splice(col+1,this.list.length-col-1);
					this.cascaderIndex.splice(col,this.cascaderIndex.length-col);
					this.cascaderText.splice(col,this.cascaderText.length-col);
					this.cascaderIndex[col]=row;
					this.list.forEach(listObj=>{
						listObj.forEach(obj=>{
							obj.select=false;
						})
					});
					for(let i=0;i<this.cascaderIndex.length;i++)
					{
						next=next[this.cascaderIndex[i]].children
					}
					if(next){
						next.forEach(opText=>{
							childrenList.push({label:opText.label,value:opText.value,select:false,disable:opText.disable});
						});
						this.list.push(childrenList);
					}else{
						this.selecting=false;
					}
					this.cascaderIndex.forEach((val,index)=>{
						this.list[index][val].select=true;
					});
					console.log(this.cascaderIndex+this.list);
					this.maxNum=0;
					this.list.forEach(num=>{
						if(num.length>this.maxNum)
						{
							this.maxNum=num.length;
						}
					});
					this.cascaderText.push(op.label);
				}
			}
		}
	}
</script>