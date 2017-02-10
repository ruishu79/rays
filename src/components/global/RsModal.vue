<template>
	<div v-show="data.show">
		<div class="cover" @click.self="clickCover" >
			<div class="modal_style" :class="modalStyle" v-show="data.show" transition="modalact">
				<div class="modal_head">
					<slot name="head"></slot>
					<div class="closeBtn" title="关闭" @click="close"><i class="fa fa-close"></i></div>
				</div>
				<div class="modal_body">
					<slot></slot>
				</div>
				<div class="modal_foot">
					<slot name="foot"></slot>
				</div>
			</div>
		</div>	
	</div>
</template>
<style>
	.cover{background: rgba(0,0,0,.5); position: fixed; top: 0; left: 0; right: 0; bottom: 0;}
	.modal_style{width: 60%; background: #fff; border-radius: 6px; margin: 70px auto; max-height: 80vh; min-height: 100px; overflow-y:auto; box-shadow: 0 5px 10px rgba(0,0,0,.3);}
	.fullModal{width: 96%; margin: 20px auto;}
	.largeModal{width: 900px;}
	.normalModal{width: 600px;}
	.smallModal{width: 300px; margin-top: 25vh;}
	.modal_head{padding: 0 15px; line-height: 36px; font-size: 14px; color: #fff; background: #1ABC9C; text-align: left; position: relative;}
	.closeBtn{position: absolute; right: 0; top: 0; width: 36px; height: 36px; line-height: 36px; cursor: pointer; text-align: center; color: #E3E8EA;}
	.modal_body{padding: 15px 20px; line-height: 20px; color: rgba(52,73,94,1); font-size: 12px; text-align: left;}
	.modal_foot{margin-bottom: 15px; text-align: center;}
	.modalact-transition{
		transition: all .4s ease;
		transform: translateY(0);
		opacity: 1;
	}
	.modalact-enter, .modalact-leave{
		transform: translateY(-150px);
		opacity: 0;
	}
</style>
<script>
	import rsButton from '../common/RsButton.vue'
	export default{
		data(){
			return{
			}
		},
		components:{
			rsButton
		},
		props:{
			data:{
				show:{
					type:Boolean,
					default:false
				},
				size:{
					type:String,
					default:'auto'
				},
			},
			force: {
                type: Boolean,
                default: false
            },
		},
		computed:{
			modalStyle(){
				switch(this.data.size)
				{
					case 'full' :
						return 'fullModal'
						break
					case 'large' :
						return 'largeModal'
						break
					case 'normal' :
						return 'normalModal'
						break
					case 'small' :
						return 'smallModal'
						break
					default :
						break
				}
			}
		},
		methods:{
			close(){
				this.data.show=false
			},
			clickCover(){
				if(!this.force){
					this.close();
				}
			}
		}
	}
</script>