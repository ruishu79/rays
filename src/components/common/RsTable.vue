<template>
	<div>
		<div class="table_ctrl" v-if="setOption.search||setOption.addBtn||setOption.delBtn||setOption.editBtn">
			<rs-button v-if="setOption.addBtn" icon="plus" icon-text="新增" @click="addTable()"></rs-button>
			<rs-button v-if="setOption.delBtn" icon="trash" icon-text="删除" @click="delTable()"></rs-button>
			<input name="query" v-if="setOption.search" v-model="searchQuery" class="search_input" placeholder="输入对表格内容筛选">
		</div>
		<table class="rs_table table-hover" :class="tableStyle">
			<thead>
				<tr>
					<th v-if="setOption.check" class="check_column">
						<rs-checkbox :data="selectAll" @child-change="allCheck"></rs-checkbox>
					</th>
					<th v-for="col in data.columns" @click="toSort(col)" :class="{'sortcss' : col.sort, 'sortact' : sortFun == col.key}">{{col.value}}<span v-if="col.sort && (sortOrder[col.key]==1)" class="fa fa-angle-down sort_icon"></span><span v-if="col.sort && (sortOrder[col.key]==-1)" class="fa fa-angle-up sort_icon"></span></th>
					<th v-if="data.control">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(parentIndex,row) in tableList | filterBy searchQuery | orderBy sortKey sortOrder[sortFun]">
					<td v-if="setOption.check" class="check_column">
						<rs-checkbox :data="row.checkbox" v-on:child-change="checkNumChange"></rs-checkbox>
					</td>
					<td v-for="val in data.columns">{{{row[val.key]}}}</td>
					<td v-if="data.control">
						<rs-button v-for="btn in data.control" :size="btn.size||'small'" :type="btn.type" :icon="btn.icon" :icon-text="btn.text" :loading="btn.loading" :disable="btn.disable" @click="btnFunc($parent.$index,row,btn)">{{btn.text}}</rs-button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="clear mb10" v-if="setOption.pagination">
			<rs-pagination v-ref:page :async="false" :data="data.tdDate" :len.sync="setOption.len" :lens="setOption.lenArr" :page-len="setOption.pageLen" :active-num.sync="setOption.activeNum"></rs-pagination>
		</div>
		<rs-notification :notice="notification" v-if="setOption.delBtn"></rs-notification>
	</div>
</template>
<script>
	import rsCheckbox from '../form/RsCheckbox.vue'
	import rsButton from '../common/RsButton.vue'
	import rsPagination from '../global/RsPagination.vue'
	import RsNotification from '../global/RsNotification.vue'

	export default {
		components:{
			rsCheckbox,
			rsButton,
			rsPagination,
			RsNotification
		},
		data(){
			var sortOrder={}
			this.data.columns.forEach(function(col){
				if(col.sort)
				{
					sortOrder[col.key]=1
				}
			})
			var setOption={};
			if(this.option)
			{
				setOption=this.option;

			}else{
				setOption={
					search: false,
					check: false,
					addBtn: false,
					delBtn: false,
					editBtn: false,
					pagination:false,
					align:"center"
				}
			}
			
			return{
				/*tableNotice:{
					text:'',
					state:'',
					delay:null
				},*/
				selectAll:{
					checked:false,
				},
				searchQuery:'',
				sortKey:'',
				sortFun:'',
				sortOrder:sortOrder,
				orderCss:false,
				tableList: this.data.tdDate,
				setOption:setOption,
			}
		},
		events: {
            // 分页组件传回的表格数据
            'data' (data) {
            	if(data.length)
            	{
            		this.tableList = data
            	}
            },
        },
		props: {
		 	data:Object,
		 	option:Object,
		 	notification:Object
		 },
		computed:{
			tableStyle(){
				let tableStyle=[];
				switch(this.setOption.align){
					case "left":
						tableStyle.push("align_left")
						break
					case "center":
						tableStyle.push("align_center")
						break;
					case "right":
						tableStyle.push("align_right")
						break
					default:
						tableStyle.push("align_center")
						break
				}
				return tableStyle;
			}
		},
		methods:{
		 	selectAllAction (val) {
	            this.data.tdDate.forEach(row => {
	                row.checkbox.checked = val
	            })
	        },
	        allCheck(){
	        	if(this.selectAll.checked){
	        		this.data.tdDate.forEach(row => {
		        		row.checkbox.checked = true
		        	})
	        	}else{
	        		this.data.tdDate.forEach(row => {
		        		row.checkbox.checked = false
		        	})
	        	}
	        },
	        checkNumChange(){
	        	let num=0
	        	this.data.tdDate.forEach(row => {
	                if(row.checkbox.checked){
	                	num++
	                }
	            })
	            if(num==this.data.tdDate.length){
	            	this.selectAll.checked=true
	            }else{
	            	this.selectAll.checked=false
	            }
	        },
	        toSort(col){
	        	if(col.sort=="normal"){
	        		this.sortKey=col.key
	        		this.sortFun=col.key
	        		this.sortOrder[col.key]=this.sortOrder[col.key]*(-1)
	        	}else if(col.sort=="number"){
					this.sortKey=function(a,b){
						return a[col.key]-b[col.key]
					}
					this.sortFun=col.key
					this.sortOrder[col.key]=this.sortOrder[col.key]*(-1)
	        	}
	        },
	        btnFunc($index,row,btn){
	        	switch(btn.func){
	        		case 'delItem':
	        			this.delItem($index)
	        			break
	        		case 'editItem':
	        			alert("功能开发中")
	        			break
	        		case 'userDefined':
	        			this.userDefined(row,btn)
	        	}
	        },
	        delItem($index){
	        	//console.log($index);
	        	//console.log(this.setOption.len);
	        	this.data.tdDate.$remove(this.data.tdDate[this.setOption.activeNum*this.setOption.len+$index]);
	        	this.tableList.$remove(this.tableList[$index]);
	        	this.notification.text='删除成功!';
				this.notification.state="error";
				this.notification.delay=2000;

	        },
	        userDefined(row,btn){
	        	btn.userDefined(row,btn)
	        },
	        addTable(){
	        	alert("功能开发中...");
	        },
	        delTable(){
	        	let allDel=[]
	        	this.tableList.forEach(item => {
	        		if(item.checkbox.checked == true)
	        		{
	        			allDel.push(item)
	        		}
	        	})
	        	if(allDel.length==0)
	        	{
	        		alert("还没选中要删除的内容哦~")
	        	}
	        	else
	        	{
	        		for(let i=0;i<allDel.length;i++)
		        	{
		        		this.data.tdDate.$remove(allDel[i])
		        		this.tableList.$remove(allDel[i])
		        	}
	        	} 	
	        }
		 }
	}
</script>
<style>
	.rs_table{width: 100%; background: #fff; font-size: 12px; margin-bottom: 10px; border-radius: 6px; overflow: hidden; color:rgba(52,73,94,1); border: 1px solid #EAEAED; box-sizing: border-box; border-spacing: 0; border-collapse: separate;}
	.rs_table > tbody > tr:hover{background: #FAFBFB;}
	.rs_table th{min-width:80px; background: #F6F7F8; line-height: 20px; padding: 6px 12px; border-bottom: 1px solid #EAEAED;}
	.rs_table td{line-height: 20px; padding: 8px 12px; border-bottom: 1px solid #EAEAED;}
	.rs_table tr:last-child td{border-bottom: 0;}
	.table_ctrl{width: 100%; margin-bottom: 10px;}
	.search_input{width: 220px; height: 32px; line-height: 32px; padding: 0 15px; border-radius: 4px; border: 1px solid #EAEAED; color: rgba(52,73,94,1); outline: none; font-size: 12px;}
	.check_column{width: 8%;}
	.sortcss{cursor: pointer;}
	.sortact{color: #1ABC9C;}
	.sort_icon{margin-left: 5px;}
	.clear{clear: both; overflow: hidden;}
	.mb10{margin-bottom: 10px;}
	.align_left,.align_left th{text-align: left;}
	.align_right,.align_right th{text-align: right;}
	.align_center,.align_center th{text-align: center;}
</style>