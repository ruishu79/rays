<template>
	<rs-button type="primary" @click="info">信息</rs-button>
	<rs-button type="success" @click="success">成功</rs-button>
	<rs-button type="warning" @click="warning">警告</rs-button>
	<rs-button type="error" @click="error">错误</rs-button>
	<rs-notification :notice="noticeText"></rs-notification>
</template>
<style>
	
</style>
<script>
	import RsNotification from '../global/RsNotification.vue'
	import RsButton from '../common/RsButton.vue'
	export default{
		data(){
			return{
				noticeText:
				{
					text:'',
					state:'',
					delay:null
				}
			}
		},
		components:{
			RsNotification,
			RsButton
		},
		methods:{
			info(){
				this.noticeText.text='这是个通知';
				this.noticeText.state="info";
				this.noticeText.delay=3000;
			},
			success(){
				this.noticeText.text='成了';
				this.noticeText.state="success";
				this.noticeText.delay=3000;
			},
			warning(){
				this.noticeText.text='警报警报!入侵警报! 警报警报!入侵警报! 警报警报!入侵警报!'
				this.noticeText.state="warning"
				this.noticeText.delay=3000;
			},
			error(){
				this.noticeText.text='这真是个失误'
				this.noticeText.state="error"
			}
		}
	}
</script>