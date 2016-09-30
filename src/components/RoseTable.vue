<template>
	<rs-table :data="tableDate" :columns="tableColumns"></rs-table>
</template>
<script>
	import RsTable from './common/RsTable.vue'
	export default{
		components:{
			RsTable
		},
		data(){
			return{
				tableColumns: ['name', 'power'],
			    tableDate: [
			      { name: 'Chuck Norris', power: Infinity },
			      { name: 'Bruce Lee', power: 9000 },
			      { name: 'Jackie Chan', power: 7000 },
			      { name: 'Jet Li', power: 8000 }
			    ]
			}	
		}
	}
</script>