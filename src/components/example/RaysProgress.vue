<template>
	<div class="example_body">
		<h2>Progress进度条</h2>
		<div><p>用于显示当前操作或任务进度的组件</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsProgress} from 'rays'
			export default{
				components:{
					rsProgress
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础进度条</h4>
		<div class="row">
			<div class="col-sm-4">
				<p style="overflow: hidden;">
					<rs-progress :percent="30"></rs-progress>
				</p>
				<p style="overflow: hidden;">
					<rs-progress :percent="50" type="success"></rs-progress>
				</p>
				<p style="overflow: hidden;">
					<rs-progress :percent="100" type="error"></rs-progress>
				</p>
				<p class="ps">基础的进度条,可设置初始位置及风格样式</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-progress :percent="30"></rs-progress>
			<rs-progress :percent="50" type="success"></rs-progress>
			<rs-progress :percent="100" type="error"></rs-progress>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.交互进度条</h4>
		<div class="row">
			<div class="col-sm-4">
				<p>点击进度条</p>
				<p style="overflow: hidden;">
					<rs-progress :percent="actPer" :type="actType" @click="act()"></rs-progress>
				</p>
				<p class="ps">进度条的动画及触发事件,需自定义</p>
			</div>
			<div class="col-sm-8">
				<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsProgress} from 'rays'
			export default{
				data(){
					return{
						actPer:10,
						actType:'primary'
					}
				},
				components:{
					rsProgress
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
		<template>
			<rs-progress :percent="actPer" :type="actType" @click="act()"></rs-progress>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<p>进度条动画事件需额外添加事件,通过对<em>percent</em>属性的调整来设置进度条动画</p>
	</div>
</template>
<script>
	import {rsProgress} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		data(){
			return{
				actPer:10,
				actType:'primary',
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
							attr: 'percent',
							instruction: '控制进度条显示的百分比',
							type: 'Number',
							default: '0',
						},
						{
							attr: 'type',
							instruction: '进度条颜色样式,有<em>primary / success / warning / error</em>四种样式',
							type: 'String',
							default: 'primary',
						}
					]
				},
			}
		},
		components:{
			Mark,
      		rsTable,
			rsProgress
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