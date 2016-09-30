<template>
	<rs-table :table="tableDate" :notification="tableNotice"></rs-table>
</template>
<script>
	import RsTable from '../common/RsTable.vue'
	import RsNotification from '../global/RsNotification.vue'
	export default{
		components:{
			RsTable,
			RsNotification
		},
		data(){
			return{
				tableNotice:{
					text:'',
					state:'',
					delay:null
				},
				tableDate:{
					options:{
						search: true,
						check: true,
						addBtn: true,
						delBtn: true,
						editBtn: true,
						len:5, //每页显示个数
						lenArr: [5, 10, 20], // 每页显示长度设置
                		pageLen: 5, // 可显示的分页数
                		activeNum:0 //起始页
					},
					columns: [
						{
							key: 'id',
							value: 'ID',
							sort: 'normal'
						},{
							key: 'name',
							value: '姓名'
						},{
							key: 'age',
							value: '年龄',
							sort: 'number'
						},{
							key: 'tel',
							value: '电话',
						}
					],
					control: [
						{
							text: '编辑',
							//size: 'small',
							icon: 'edit',
							func: 'editItem'
						},
						{
							type: 'success',
							text: '通话',
							size: 'small',
							icon: 'phone',
							func: 'userDefined',
							userDefined:()=>{
								this.phone()
							}
						},
						{
							type: 'error',
							text: '删除',
							size: 'small',
							icon: 'trash',
							func: 'delItem'
						}
					],
					tdDate:[
						{
							id: 1,
							name: '孙悟空',
							age: '20',
							tel: '13811111111',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 2,
							name: '贝吉塔',
							age: '30',
							tel: '13822222222',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 3,
							name: '短笛',
							age: '10',
							tel: '13833333333',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						},{
							id: 4,
							name: '龟仙人',
							age: '200',
							tel: '13844444444',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 5,
							name: '小林',
							age: '21',
							tel: '13855555555',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 6,
							name: '布尔玛',
							age: '24',
							tel: '13866666666',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 7,
							name: '天津饭',
							age: '26',
							tel: '1387777777',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 8,
							name: '界王',
							age: '9999',
							tel: '13888888888',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
						,{
							id: 9,
							name: '特兰克斯',
							age: '0.5',
							tel: '138999999999',
							checkbox: {
		                        disabled: false,
		                        checked: false,
		                        text: ''
		                    }
						}
					],
				}
			}
		},
		methods:{
			phone(){
				this.tableNotice.text='通话中';
				this.tableNotice.state="success";
				this.tableNotice.delay=5000;
			}
		}
	}
</script>