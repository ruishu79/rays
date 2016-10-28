<template>
	<div class="row">
		<div class="col-sm-12">
			<rs-number></rs-number>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<rs-number :num="4.98" :step="2.5" :min="-0.1" :max="5"></rs-number>
		</div>
	</div>
</template>
<script>
	import rsNumber from '../form/RsNumber.vue'
	export default{
		components:{
			rsNumber
		}
	}
</script>