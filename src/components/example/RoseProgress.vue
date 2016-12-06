<template>
	<div class="row" style="margin-bottom: 20px;">
		<div class="col-sm-4">
			<rs-progress :percent="30"></rs-progress>
		</div>
		<div class="col-sm-4">
			<rs-progress :percent="50" type="success"></rs-progress>
		</div>
		<div class="col-sm-4">
			<rs-progress :percent="100" type="error"></rs-progress>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-4">
			<rs-progress :percent="actPer" :type="actType" @click="act()"></rs-progress>
		</div>
	</div>
</template>
<script>
	import RsProgress from '../common/RsProgress.vue'
	export default{
		data(){
			return{
				actPer:10,
				actType:'primary'
			}
		},
		components:{
			RsProgress
		},
		methods:{
			act(){
				this.actPer=0;
				this.actType="primary";
				let timer=setInterval(()=>{
					if(this.actPer<100){
						this.actPer++
					}
					else{
						this.actType="warning";
						clearInterval(timer)
					}
				},50)
			}
		}
	}
</script>