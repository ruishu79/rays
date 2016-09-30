<template>
	<div class="notification_list">
		<div class="notification_wrap" v-for="(index,block) in noticeArray" v-if="block.text" transition="notification-act">
			<div class="notification_state"><i class="fa" :class="block.state"></i></div>
			<div class="notification_text">{{block.text}}</div>
			<div class="notification_close"><i class="fa fa-close" title="关闭" @click="notificationClose(block,$index)"></i></div>
		</div>
	</div>
</template>
<style>
	.notification_box{width: 260px; padding: 20px; background: #fff; border: 1px solid #ECF0F1; box-shadow: 0 3px 8px rgba(0,0,0,.3); border-radius: 6px;}
	.notification_state{width: 20px; height: 20px; font-size: 20px; line-height: 20px; float: left; margin-right: 15px;}
	.notification_text{width: 180px; line-height: 20px; float: left; font-size: 12px; color: rgba(52,73,94,1);}
	.infoColor{color: #3498DB;}
	.successColor{color: #1ABC9C;}
	.warningColor{color: #E67E22;}
	.errorColor{color: #E74C3C;}
	.notification_close{width: 24px; height: 24px; position: absolute; right: 0; top: 0; font-size: 14px; color: #BDC3C7; line-height: 24px; text-align: center; cursor: pointer;}
	.notification-act-transition{
		transition: all .3s ease;
		transform: translateY(0);
		opacity: 1;
	}
	.notification-act-enter{
		transform: translateY(150px);
		opacity: 0;
	}
	.notification-act-leave{
		transform: translateX(100px);
		opacity: 0;
	}
	.notification_list{width: 300px; position: fixed; right: 20px; bottom: 20px; }
	.notification_wrap{width: 300px; padding: 20px; background: #fff; border: 1px solid #ECF0F1; box-shadow: 0 3px 8px rgba(0,0,0,.3); border-radius: 6px; overflow: hidden; margin-bottom: 15px; position: relative;}
</style>
<script>
	export default{
		data(){
			let delayId=0;
			return{
				noticeArray:[],
				delayId:delayId
			}
		},
		props:{
			notice:{
				text:String,
				state:String,
				delay:Number
			}
		},
		watch:{
			'notice.text':{
				deep:true,
				handler:function(){
					let noticeIcon=this.notice.state;
					let that=this;
					switch(noticeIcon){
						case 'info':
							noticeIcon='fa-info-circle infoColor'
							break;
						case 'success':
							noticeIcon='fa-check-circle successColor'
							break;
						case 'warning':
							noticeIcon='fa-exclamation-circle warningColor'
							break;
						case 'error':
							noticeIcon='fa-times-circle errorColor'
							break;
						default:
							break;
					}
					if(this.notice.text){
						this.noticeArray.push({text:this.notice.text,state:noticeIcon,delay:this.notice.delay,delayId:this.delayId});
						this.delayId++;
					}
					if(this.notice.delay)
					{
						let noticeLength=that.noticeArray.length-1;
						let objId=that.noticeArray[noticeLength].delayId;
						setTimeout(function(){
							that.noticeArray.forEach(obj=>{
									if(obj.delayId==objId)
									{
										that.noticeArray.$remove(obj);
									}
								}
							)
						},this.notice.delay)
					}
					this.notice.text='';
					this.notice.state='';
					this.notice.delay=null;
				}
			}
		},
		computed:{
		},
		methods:{
			notificationClose(block,$index){
				this.noticeArray.$remove(this.noticeArray[$index])
			},
			delayClose(){
				this.noticeArray.pop();
			}
		}
	}
</script>