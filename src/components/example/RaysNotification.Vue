<template>
	<div class="example_body">
		<h2>Notification通知</h2>
		<div><p>通过事件触发或系统推送一个显示在界面右下角的全局通知</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsNotification} from 'rays'
			export default{
				components:{
					rsNotification
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础通知</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>
					<rs-button type="primary" @click="info">信息</rs-button>
					<rs-button type="success" @click="success">成功</rs-button>
				</p>
				<p>
					<rs-button type="warning" @click="warning">警告</rs-button>
					<rs-button type="error" @click="error">错误</rs-button>
				</p>
				<rs-notification :data="noticeText"></rs-notification>
				<p class="ps">四种不同样式的通知,用于不用情况</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<script>
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
						rsNotification,
						rsButton,
						rsTable,
						Mark
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
							this.noticeText.text='警报警报!入侵警报! 警报警报!入侵警报! 警报警报!入侵警报!';
							this.noticeText.state="warning";
							this.noticeText.delay=3000;
						},
						error(){
							this.noticeText.text='这真是个失误';
							this.noticeText.state="error";
						}
					}
				}
			</script>
			<rs-button type="primary" @click="info">信息</rs-button>
			<rs-button type="success" @click="success">成功</rs-button>
			<rs-button type="warning" @click="warning">警告</rs-button>
			<rs-button type="error" @click="error">错误</rs-button>
			<rs-notification :data="noticeText"></rs-notification>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<!--row End-->
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<h4>data</h4>
		<p class="example_em_wrap"><rs-table :data="apiData01" :option="apiOption01"></rs-table></p>
		<p><em>data</em>配置初始化通知样式、内容及显示时间,通过其他事件触发通知的显示</p>
	</div>
</template>
<style>
	
</style>
<script>
	import {rsNotification} from 'rays'
	import {rsButton} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
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
		              instruction: '<span class="api_must">[必选]</span>包含通知的所有配置,必须进行初始化配置',
		              type: 'Object',
		              default: '空',
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
		              attr: 'text',
		              instruction: '<span class="api_must">[必选]</span>通知内容文本信息',
		              type: 'String',
		              default: '空',
		            },
		            {
		              attr: 'state',
		              instruction: '<span class="api_must">[必选]</span>通知状态样式,目前有<em>primary / success / warning / danger</em>四种样式',
		              type: 'String',
		              default: '空',
		            },
		            {
		              attr: 'delay',
		              instruction: '<span class="api_must">[必选]</span>设置通知显示多少毫秒,默认为<em>null</em>,通知永久显示',
		              type: 'Number',
		              default: '空',
		            },
		          ]
		        },
				noticeText:
				{
					text:'',
					state:'',
					delay:null
				}
			}
		},
		components:{
			rsNotification,
			rsButton,
			rsTable,
			Mark
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