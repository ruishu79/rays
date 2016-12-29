<style>
	.example_text{text-indent: 2em; font-size: 12px; line-height: 20px;}
	.mb25{margin-bottom: 25px;}
</style>
<template>
	<div class="example_body">
		<h2>Box盒子</h2>
		<div><p>基础的布局容器,可以用来展示文字,列表等内容</p></div>
		<h4>统一引用方式</h4>
		<mark>
	<textarea class="rs-mark-text">
		<script>
			import {rsBox} from 'rays'
			export default{
				components:{
					rsBox
				}
			}
		</script>
	</textarea>
		</mark>
		<h4 class="example_h4_title">1.基础盒子</h4>
		<div class="row">
			<div class="col-sm-5">
				<rs-box head="vue是什么">
					<div class="example_text">Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。</div>
				</rs-box>
				<p class="ps"><em>rs-box</em>标签内添加任意的内容,即可将内容封进盒子里去</p>
			</div>
			<div class="col-sm-7">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-box head="vue是什么">
				<div class="example_text">Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。</div>
			</rs-box>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h4 class="example_h4_title">2.颜色主题盒子</h4>
		<div class="row">
			<div class="col-sm-5">
				<rs-box head="vue是什么" type="head-primary">
					<div class="example_text">Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。</div>
				</rs-box>
				<p class="ps">设置<em>type</em>属性来设置盒子样式,8种样式请参看下面的api文档</p>
			</div>
			<div class="col-sm-7">
				<mark>
	<textarea class="rs-mark-text">
		<template>
			<rs-box head="vue是什么" type="head-primary">
				<div class="example_text">Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。</div>
			</rs-box>
		</template>
	</textarea>
				</mark>
			</div>
		</div>
		<h3>API</h3>
		<h4>props</h4>
		<p class="example_em_wrap"><rs-table :data="apiData" :option="apiOption"></rs-table></p>
		<p>盒子内的具体内容可直接写在<em class="api_code">rs-box</em>标签内</p>
	</div>
</template>
<script>
	import {rsBox} from 'rays'
	import {rsTable} from 'rays'
	import Mark from "../../mark.vue"
	export default{
		components:{
			Mark,
      		rsTable,
			rsBox
		},
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
		              attr: 'head',
		              instruction: '盒子标题文本信息',
		              type: 'String',
		              default: '空',
		            },
		            {
		              attr: 'type',
		              instruction: '盒子整体样式,目前有4种页头主题样式及4种整体主题样式,分别是<em>head-primary / head-success / head-warning / head-error / primary / success / warning / error</em>',
		              type: 'String',
		              default: 'normal',
		            },
		          ]
		        },
			}
		}
	}
</script>