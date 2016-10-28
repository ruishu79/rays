<template>
	<rs-switch :switchdata="switchA"></rs-switch>
	<rs-switch :switchdata="switchB"></rs-switch>
	<rs-switch :switchdata="switchC"></rs-switch>
	<rs-switch :switchdata="switchD"></rs-switch>
	<rs-switch :switchdata="switchE"></rs-switch>
</template>
<script>
	import RsSwitch from '../form/RsSwitch.vue'
	export default{
		data(){
			return{
				switchA:{
					state:false,
					color:"success"
				},
				switchB:{
					state:true,
					color:"success"
				},
				switchC:{
					state:true,
					color:"info"
				},
				switchD:{
					state:true,
					color:"warning"
				},
				switchE:{
					state:true,
					color:"error"
				}
			}	
		},
		components:{
			RsSwitch
		}
	}
</script>