<template>
	<div>
		<div class="table_ctrl" v-if="table.options.search||table.options.addBtn||table.options.delBtn||table.options.editBtn">
			<rs-button v-if="table.options.addBtn" icon="plus" icon-text="新增" @click="addTable()"></rs-button>
			<rs-button v-if="table.options.delBtn" icon="trash" icon-text="删除" @click="delTable()"></rs-button>
			<input name="query" v-if="table.options.search" v-model="searchQuery" class="search_input" placeholder="输入对表格内容筛选">
		</div>
		<table class="rs_table table-hover">
			<thead>
				<tr>
					<th v-if="table.options.check" class="check_column">
						<rs-checkbox :checkbox="selectAll" @child-change="allCheck"></rs-checkbox>
					</th>
					<th v-for="col in table.columns" @click="toSort(col)" :class="{'sortcss' : col.sort, 'sortact' : sortFun == col.key}">{{col.value}}<span v-if="col.sort && (sortOrder[col.key]==1)" class="fa fa-angle-down sort_icon"></span><span v-if="col.sort && (sortOrder[col.key]==-1)" class="fa fa-angle-up sort_icon"></span></th>
					<th v-if="table.control">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(parentIndex,row) in tableList | filterBy searchQuery | orderBy sortKey sortOrder[sortFun]">
					<td v-if="table.options.check" class="check_column">
						<rs-checkbox :checkbox="row.checkbox" v-on:child-change="checkNumChange"></rs-checkbox>
					</td>
					<td v-for="val in table.columns">{{row[val.key]}}</td>
					<td v-if="table.control">
						<rs-button v-for="btn in table.control" :size="btn.size||'small'" :type="btn.type" :icon="btn.icon" :icon-text="btn.text" :loading="btn.loading" :disable="btn.disable" @click="btnFunc($parent.$index,row,btn)">{{btn.text}}</rs-button>
					</td>
				</tr>
			</tbody>
		</table>
		<rs-pagination v-ref:page :async="false" :data="table.tdDate" :len.sync="table.options.len" :lens="table.options.lenArr" :page-len="table.options.pageLen" :active-num.sync="table.options.activeNum"></rs-pagination>
		<rs-notification :notice="notification"></rs-notification>
	</div>
</template>
<script>
	import rsCheckbox from '../form/checkbox.vue'
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
			this.table.columns.forEach(function(col){
				if(col.sort)
				{
					sortOrder[col.key]=1
				}
			})
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
				tableList: []
			}
		},
		events: {
            // 分页组件传回的表格数据
            'data' (data) {
                this.tableList = data
            },
        },
		props: {
		 	table:Object,
		 	notification:Object
		 },
		 methods:{
		 	selectAllAction (val) {
	            this.table.tdDate.forEach(row => {
	                row.checkbox.checked = val
	            })
	        },
	        allCheck(){
	        	if(this.selectAll.checked){
	        		this.table.tdDate.forEach(row => {
		        		row.checkbox.checked = true
		        	})
	        	}else{
	        		this.table.tdDate.forEach(row => {
		        		row.checkbox.checked = false
		        	})
	        	}
	        },
	        checkNumChange(){
	        	let num=0
	        	this.table.tdDate.forEach(row => {
	                if(row.checkbox.checked){
	                	num++
	                }
	            })
	            if(num==this.table.tdDate.length){
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
	        	console.log(this.table.options.len);
	        	this.table.tdDate.$remove(this.table.tdDate[this.table.options.activeNum*this.table.options.len+$index]);
	        	this.tableList.$remove(this.tableList[$index]);
	        	this.notification.text='删除成功!';
				this.notification.state="error";
				this.notification.delay=2000;

	        },
	        userDefined(row,btn){
	        	btn.userDefined(row,btn)
	        },
	        addTable(){
	        	alert("功能开发中...")
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
		        		this.table.tdDate.$remove(allDel[i])
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
	.rs_table th{background: #F6F7F8; line-height: 20px; padding: 6px 10px; text-align: center; border-bottom: 1px solid #EAEAED;}
	.rs_table td{line-height: 20px; padding: 8px 10px; text-align: center; border-bottom: 1px solid #EAEAED;}
	.rs_table tr:last-child td{border-bottom: 0;}
	.table_ctrl{width: 100%; margin-bottom: 10px;}
	.search_input{width: 220px; height: 32px; line-height: 32px; padding: 0 15px; border-radius: 4px; border: 1px solid #EAEAED; color: rgba(52,73,94,1); outline: none; font-size: 12px;}
	.check_column{width: 8%;}
	.sortcss{cursor: pointer;}
	.sortact{color: #1ABC9C;}
	.sort_icon{margin-left: 5px;}
</style>