<template>
	<div class="example_body">
		<h2>Modal弹框</h2>
		<div><p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，引导用户进行的操作</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsModal} from 'rays'
			export default{
				components:{
					rsModal
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础弹框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-button @click="openMDS">基础小弹框</rs-button>
				</p>
				<p class="ps">基础的弹框,需要一个事件去触发弹框的显示,这里使用了<em>button</em>的<em>click</em>事件去触发弹框,将弹框组件放在页面的最下方,可以避免很多问题</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-button @click="openMDS">基础小弹框</rs-button>
			<rs-modal :data="modalDataSmall">
				<div>
					这里是一个小弹框
				</div>
			</rs-modal>
		</template>
	</textarea>
				</mark>
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
						modalDataSmall:{
							show:false,
							size:'small',	
						}
					}
				},
				methods:{
					openMDS(){
						this.modalDataSmall.show=true
					}
				}
			}
		</script>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.扩展弹框</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-button @click="openMDSF">功能小弹框</rs-button>
					<rs-button @click="openMDN">一般弹框</rs-button>
				</p>
				<p>
					<rs-button @click="openMDL">大弹框</rs-button>
					<rs-button @click="openMDF">全屏弹框</rs-button>
				</p>
				<p class="ps">弹框提供全屏/大/中/小,四种尺寸,并且可以添加弹框标题及功能按钮</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-button @click="openMDSF">功能小弹框</rs-button>
			<rs-button @click="openMDN">一般弹框</rs-button>
			<rs-button @click="openMDL">大弹框</rs-button>
			<rs-button @click="openMDF">全屏弹框</rs-button>
			<rs-modal :data="modalDataSmallFun" :force="true">
				<div slot="head">小弹框</div>
				<div>
					这里是一个小弹框 <br/> size:'small'
				</div>
				<div slot="foot">
					<rs-button>确认</rs-button>
					<rs-button @click="closeMDSF">取消</rs-button>
				</div>
			</rs-modal>
			<rs-modal :data="modalDataNormal" :force="true">
				<div slot="head">一般弹框</div>
				<div>
					这里是一个一般弹框 <br/> size:'normal'
				</div>
				<div slot="foot">
					<rs-button>确认</rs-button>
					<rs-button @click="closeMDN">取消</rs-button>
				</div>
			</rs-modal>
			<rs-modal :data="modalDataLarge" :force="true">
				<div slot="head">大弹框</div>
				<div>
					这里是一个大弹框 <br/> size:'large'
				</div>
				<div slot="foot">
					<rs-button>确认</rs-button>
					<rs-button @click="closeMDL">取消</rs-button>
				</div>
			</rs-modal>
			<rs-modal :data="modalDataFull" :force="true">
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
	</textarea>
				</mark>
				<mark>
	<textarea class="rs-mark-text">
		<script>
			export default{
				data(){
					return{
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
						}
					}
				},
				methods:{
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
					}
				}
			}
		</script>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>data</h4>
		<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
	</div>
	
	
	<rs-modal :data="modalDataSmall">
		<div>
			这里是一个小弹框
		</div>
	</rs-modal>
	<rs-modal :data="modalDataSmallFun" :force="true">
		<div slot="head">小弹框</div>
		<div>
			这里是一个小弹框 <br/> size:'small'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDSF">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :data="modalDataNormal" :force="true">
		<div slot="head">一般弹框</div>
		<div>
			这里是一个一般弹框 <br/> size:'normal'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDN">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :data="modalDataLarge" :force="true">
		<div slot="head">大弹框</div>
		<div>
			这里是一个大弹框 <br/> size:'large'
		</div>
		<div slot="foot">
			<rs-button>确认</rs-button>
			<rs-button @click="closeMDL">取消</rs-button>
		</div>
	</rs-modal>
	<rs-modal :data="modalDataFull" :force="true">
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
	import {rsButton} from 'rays'
	import {rsModal} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
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
							attr: 'data',
							instruction: '<span class="api_must">必选</span>用于配置弹框属性',
							type: 'Object',
							default: '空',
						},
						{
							attr: 'force',
							instruction: '是否禁用遮罩层关闭功能',
							type: 'Boolean',
							default: 'false(不禁用)',
						}
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
							attr: 'show',
							instruction: '<span class="api_must">必选</span>用于配置弹框当前<em>显示 / 隐藏</em>状态',
							type: 'Boolean',
							default: 'false',
						},
						{
							attr: 'size',
							instruction: '设置弹框尺寸,目前有<em>small</em>、<em>normal</em>、<em>large</em>、<em>full</em>四种尺寸',
							type: 'String',
							default: 'normal',
						}
					]
				},
			}
		},
		components:{
			rsModal,
			rsButton,
			rsTable,
			Mark
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