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
		<script>
			export default{
				data () {
				    return {
				    	starttime01: ''
				    }
				}
			}
		</script>
		<template>
			<rs-datepicker :time="starttime01"></rs-datepicker>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.日期时间选择</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-datepicker :time="starttime02" date-type="min"></rs-datepicker></p>
				<p class="ps">设置<em>data-type="min"</em>属性,可以进行日期及时间的选择</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data () {
				    return {
				    	starttime02: ''
				    }
				}
			}
		</script>
		<template>
			<rs-datepicker :time="starttime02" date-type="min"></rs-datepicker>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">3.日期范围限制</h4>
		<div class="row">
			<div class="col-sm-4">
				<p><rs-datepicker :time="starttime03" :limit="limit"></rs-datepicker></p>
				<p class="ps">在<em>limit</em>属性设置日历可选时间范围,可以限制几号到几号,也可以限制星期几可选</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data () {
				    return {
				    	starttime03: '',
				    	limit: [{
						  type:'fromto',
						  from:'2016-12-10',
						  to:'2016-12-30'
						},
						{
					        type: 'weekday',
					        available: [1, 2, 3, 4, 5]
					    }]
					}
				}
			}
		</script>
		<template>
			<rs-datepicker :time="starttime03" :limit="limit"></rs-datepicker>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>limit</h4>
		<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
</template>
<script>
	import {rsDatepicker} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data () {
		    return {
		    	apiOption:{
					align:'left'
				},
				apiData:{
					columns:[{
						key: 'attr',
						value: '属性',
					},{
						key: 'instruction',
						value: '说明'
					},{
						key: 'type',
						value: '类型',
					},{
						key: 'default',
						value: '默认',
					}],
					tdDate:[
						{
							attr: 'time',
							instruction: '<span class="api_must">[必选]</span>YYYY-MM-DD / YYYY-MM-DD HH:mm 格式,来设置初始时间,必须设置,可为空',
							type: 'String',
							default: '空',
						},
						{
							attr: 'date-type',
							instruction: '选择类型,分为<em>day(日期) / min(时间)</em>两种',
							type: 'String',
							default: 'day',
						},
						{
							attr: 'limit',
							instruction: '用于对可选日期范围进行限制,数组类型,各个数组元素表示一个可选的时间段',
							type: 'Array',
							default: '空',
						},
					]
				},
				apiOption01:{
					align:'left'
				},
				apiData01:{
					columns:[{
						key: 'attr',
						value: '属性',
					},{
						key: 'instruction',
						value: '说明'
					},{
						key: 'type',
						value: '类型',
					},{
						key: 'default',
						value: '默认',
					}],
					tdDate:[
						{
							attr: 'type',
							instruction: '设置区间选择类型,有<em>fromto(从几号到几号) / weekday(限制周几可选)</em>两种类型格式',
							type: 'String',
							default: '空',
						},
						{
							attr: 'from',
							instruction: '如果<em>type</em>为<em>fromto</em>,该属性为可选的起始时间',
							type: 'String',
							default: 'day',
						},
						{
							attr: 'to',
							instruction: '如果<em>type</em>为<em>fromto</em>,该属性为可选的结束时间',
							type: 'String',
							default: '空',
						},
						{
							attr: 'available',
							instruction: '如果<em>type</em>为<em>weekday</em>,该属性为可选的星期,为数组类型,1-7为对应可选的周一至周日',
							type: 'Array',
							default: '空',
						},
					]
				},
		      starttime01: '',
		      starttime02: '',
		      starttime03: '2016-12-20',
		      limit: [{
				  type:'fromto',
				  from:'2016-12-10',
				  to:'2016-12-30'
				},
				{
			        type: 'weekday',
			        available: [1, 2, 3, 4, 5]
			    }]
		    }
		  },
		components:{
			rsDatepicker,
			rsTable,
			Mark
		}
	}
</script>