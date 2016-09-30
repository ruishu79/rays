<template>
	<rs-button @click="openMDS">基础小弹框</rs-button>
	<rs-button @click="openMDSF">功能小弹框</rs-button>
	<rs-button @click="openMDN">一般弹框</rs-button>
	<rs-button @click="openMDL">大弹框</rs-button>
	<rs-button @click="openMDF">全屏弹框</rs-button>
	<rs-modal :set-modal="modalDataSmall">
		<div>
			这里是一个小弹框
		</div>
	</rs-modal>
	<rs-modal :set-modal="modalDataSmallFun" :force="true">
		<div slot="head">小弹框</div>
		<div>
			这里是一个小弹框 <br/> size:'small'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDSF">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :set-modal="modalDataNormal" :force="true">
		<div slot="head">一般弹框</div>
		<div>
			这里是一个一般弹框 <br/> size:'normal'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDN">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :set-modal="modalDataLarge" :force="true">
		<div slot="head">大弹框</div>
		<div>
			这里是一个大弹框 <br/> size:'large'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDL">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :set-modal="modalDataFull" :force="true">
		<div slot="head">全屏弹框</div>
		<div>
			这里是一个全屏弹框 <br/> size:'full'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDF">取消</rs-button>
		</div>
	</rs-modal>
</template>
<script>
	import rsButton from '../common/RsButton.vue'
	import rsModal from '../global/RsModal.vue'
	export default{
		data(){
			return{
				modalDataSmall:{
					show:false,
					size:'small',	
				},
				modalDataSmallFun:{
					show:false,
					size:'small',	
				},
				modalDataNormal:{
					show:false,
					size:'normal',	
				},
				modalDataLarge:{
					show:false,
					size:'large',	
				},
				modalDataFull:{
					show:false,
					size:'full',	
				},
			}
		},
		components:{
			rsModal,
			rsButton
		},
		methods:{
			openMDS(){
				this.modalDataSmall.show=true
			},
			openMDSF(){
				this.modalDataSmallFun.show=true
			},
			closeMDSF(){
				this.modalDataSmallFun.show=false
			},
			openMDN(){
				this.modalDataNormal.show=true
			},
			closeMDN(){
				this.modalDataNormal.show=false
			},
			openMDL(){
				this.modalDataLarge.show=true
			},
			closeMDL(){
				this.modalDataLarge.show=false
			},
			openMDF(){
				this.modalDataFull.show=true
			},
			closeMDF(){
				this.modalDataFull.show=false
			},
		}
	}
</script>