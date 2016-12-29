<template>
	<div class="example_body">
		<h2>Datepicker日期</h2>
		<div><p>用来选择日期,包括年月日及时间</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsDatepicker} from 'rays'
			export default{
				components:{
					rsDatepicker
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础日期选择</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-datepicker :time="starttime01"></rs-datepicker></p>
				<p class="ps">基础日期选择,必须配置<em>time</em>属性,设置初始时间或者设置为空,才能正常使用组件</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<script>
				export default{
					data () {
					    return {
					    	starttime01: ''
					    }
					}
				}
			</script>
			<rs-datepicker :time="starttime01"></rs-datepicker>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<!-- <rs-datepicker :time="starttime" date-type="min" :limit="limit"></rs-datepicker> -->
		</div>
		<div class="col-sm-3">
			<!-- <rs-datepicker :time="tt" date-type="day" :limit="limit"></rs-datepicker> -->
		</div>
	</div>
	
</template>
<script>
	import {rsDatepicker} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data () {
		    return {
		      starttime01: '',
		      starttime02: '',
		      limit: [{
				  type:'fromto',
				  from:'2016-12-10',
				  to:'2016-12-30'
				}]
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
			rsDatepicker,
			rsTable,
			Mark
		}
	}
</script>