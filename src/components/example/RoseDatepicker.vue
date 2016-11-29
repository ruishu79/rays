<template>
	<div class="row">
		<div class="col-sm-3">
			<rs-datepicker :time="starttime" date-type="min" :limit="limit"></rs-datepicker>
		</div>
		<div class="col-sm-3">
			<rs-datepicker :time="starttime" date-type="day" :limit="limit"></rs-datepicker>
		</div>
	</div>
	
</template>
<script>
	import RsDatepicker from '../form/RsDatepicker.vue'
	export default{
		data () {
		    return {
		      // for Vue 1.0
		      starttime: '',
		      endtime: '',
		      testTime: '',
		      multiTime: '',
		      // limit: [{
		      //   type: 'weekday',
		      //   available: [1, 2, 3, 4, 5]
		      // },
		      // {
		      //   type: 'fromto',
		      //   from: '1988-02-01',
		      //   //to: '2016-02-20'
		      // }]
		    }
		  },
		components:{
			RsDatepicker,
		}
	}
</script>