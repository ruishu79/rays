<style>
	.homeBody{font-size: 14px; line-height: 2em; color: rgba(52,73,94,1); padding-bottom: 50px;}
	.homeBody p{padding-left: 2em;}
	.homeBody p strong{ color: #1ABC9C; margin: 0 3px; font-style: italic;}
	.homeBody p>em{ color: #1ABC9C; margin: 0 3px; font-style: normal;}
	.homeBody h1,.homeBody h2,.homeBody h3,.homeBody h4,.homeBody h5{font-family: "Microsoft Yahei","微软雅黑";}
	.homeBody h4{padding-left: 1em;}
	.ps{line-height: 20px; margin-top: 22px; padding-left: 2em;}
	.example_body{font-size: 14px; line-height: 2em; color: rgba(52,73,94,1); padding-bottom: 50px;}
	.example_body .col-sm-4>p,.example_body>p,.ex_content>p{padding-left: 2em;}
	.example_body p strong{ color: #1ABC9C; margin: 0 3px; font-style: italic;}
	.example_body p>em{ color: #1ABC9C; margin: 0 3px; font-style: normal;}
	.example_body h1,.example_body h2,.example_body h3,.example_body h4,.example_body h5{font-family: "Microsoft Yahei","微软雅黑";}
	.example_body h4{padding-left: 1em; margin-top: 15px;}
</style>
<template>
	<div class="homeBody">
		<h2>RAYS-UI 快速开始</h2>
		<p>rays-ui是一个基于vue.js开发的组件库,目的是帮助你快速完成产品的开发</p>
		<h3>特点</h3>
		<ul>
			<li>webpack + vue + bootstrap 的开发模式</li>
			<li>通过babel使用ES6语法进行开发使用</li>
			<li>引用bootstrap响应式布局及部分样式</li>
			<li>引用Font Awesome图标库</li>
			<li>引用Echarts图表</li>
			<li>Flat风格设计,兼顾了大数据量展示</li>
			<li>推荐使用数据驱动的前端思想,根据需要,也可引用jQuery进行DOM操作</li>
		</ul>
		<h3>安装</h3>
		<div>
			<p>1.下载安装 <a href="http://nodejs.cn/" target="_blank">npm</a></p>
			<p>2.在github下载<a href="https://github.com/ruishu79/rays" target="_blank"> rays-ui </a>框架</p>
			<p>3.运行<em>npm install</em>安装依赖文件</p>
			<p>4.运行<em>npm run dev</em>开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器,访问地址:<em>http://localhost:8080</em></p>
		</div>
		<h3>使用</h3>
		<div><p>尝试使用一个最简单<strong>button</strong>按钮组件</p></div>
		<h4>引用</h4>
		<div><p>通过import引入组件库内<strong>rs-button</strong>组件,并在export输出模块添加组件</p></div>
		<mark>
<textarea class="rs-mark-text">
	<script>
		import {rsButton} from 'rays'
		export default{
			components:{
				rsButton
			}
		}
	</script>
</textarea>
		</mark>
		<div><p>再模板中添加<strong>rs-button</strong>組件,并配置type的样式参数</p></div>
		<mark>
<textarea class="rs-mark-text">
	<template>
		<rs-button type="success">按钮组件</rs-button>
	</template>
</textarea>
		</mark>
		<h4>效果</h4>
		<div>
			<p>这个按钮就是刚才定义的组件</p>
			<p><rs-button type="success">按钮组件</rs-button></p>
		</div>
		<h3>版本</h3>
		<p>当前版本: v0.1.2</p>
		<h3>兼容性</h3>

		<p>支持 Vue.js 1.x 版本<br/>由于 Vue.js是基于Object.defineProperty实现数据追踪，只能支持<strong>IE8及以上</strong>的浏览器。</p>
		<h3>相关内容文档</h3>
		<ul>
			<li><a href="http://vuejs.org.cn/guide/" target="_blank">Vue官方文档</a></li>
			<li><a href="http://webpackdoc.com/" target="_blank">Webpack中文指南</a></li>
			<li><a href="http://es6.ruanyifeng.com/" target="_blank">ES6入门</a></li>
			<li><a href="http://www.bootcss.com/" target="_blank">Bootstrap中文网</a></li>
			<li><a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Font Awesome</a></li>
			<li><a href="https://github.com/vuejs/vue-router/tree/1.0/docs/en">vue-router</a></li>
			<li><a href="https://github.com/pagekit/vue-resource/blob/master/docs/http.md" target="_blank">vue-resource</a></li>
		</ul>
		<h3>参考开源项目</h3>
		<ul>
			<li><a href="https://luojilab.github.io/radon-ui/#!/" target="_blank">Radon-UI</a></li>
			<li><a href="https://github.com/hilongjw/vue-datepicker" target="_blank">Vue-datepicker</a></li>
			<li><a href="https://github.com/luozhihao/BootPage" target="_blank">BootPage</a></li>
		</ul>
	</div>
</template>
<script>
	import Mark from "../mark.vue"
	import {rsButton} from 'rays'
	export default{
		components:{
			Mark,
			rsButton
		}
	}
</script>