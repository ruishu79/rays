import Vue from 'vue'
import App from './App'

/*new*/
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Bootstrap from './lib/bootstrap-3.3.5-dist/css/bootstrap.css'
import Awesome from './lib/font-awesome-4.3.0/css/font-awesome.min.css'
import Hello from './components/Hello.vue'
import Home from './components/home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import marked from 'marked'
import highlight from 'highlight.js'

/*组件样例*/
//表格
import RaysTable from './components/example/RaysTable.vue'
//按钮
import RaysButton from './components/example/RaysButton.vue'
//复选框
import RaysCheckbox from './components/example/RaysCheckbox.vue'
//分页
import RosePagination from './components/example/RosePagination.vue'
//弹框
import RoseModal from './components/example/RoseModal.vue'
//通知
import RoseNotification from './components/example/RoseNotification.vue'
//输入框
import RaysInput from './components/example/RaysInput.vue'
//单选框
import RaysRadio from './components/example/RaysRadio.vue'
//数量输入
import RaysNumber from './components/example/RaysNumber.vue'
//数量输入
import RaysSwitch from './components/example/RaysSwitch.vue'
//选择器
import RaysSelect from './components/example/RaysSelect.vue'
//级联选择
import RaysCascader from './components/example/RaysCascader.vue'
//日期选择
import RaysDatepicker from './components/example/RaysDatepicker.vue'
//树
import RaysTree from './components/example/RaysTree.vue'
//下拉菜单
import RaysDownmenu from './components/example/RaysDownmenu.vue'
//盒子
import RaysBox from './components/example/RaysBox.vue'
//分页标签
import RaysTip from './components/example/RaysTip.vue'
//进度条
import RaysProgress from './components/example/RaysProgress.vue'
//时间线
import RaysTimeline from './components/example/RaysTimeline.vue'
//标签
import RaysTag from './components/example/RaysTag.vue'
//标签
import RaysBreadcrumb from './components/example/RaysBreadcrumb.vue'


//示例
import example from './view/example.vue'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
const router=new VueRouter()

//代码展示
marked.setOptions({
    highlight: function (code) {
        return window.highlight.highlightAuto(code).value
    }
})
window.highlight = highlight
window.marked = marked

// 路由map
router.map({
	'/hello':{
		component:Hello
	},
	'/Home':{
		component:Home
	},
	'/time-entries':{
		component:TimeEntries,
		subRoutes:{
			'/log-time':{
				component:LogTime
			}
		}
	},
	'/example/rays-table':{
		component:RaysTable
	},
	'/example/rays-button':{
		component:RaysButton
	},
	'/example/rays-checkbox':{
		component:RaysCheckbox
	},
	'/example/rose-pagination':{
		component:RosePagination
	},
	'/example/rose-modal':{
		component:RoseModal
	},
	'/example/rose-notification':{
		component:RoseNotification
	},
	'/example/rays-input':{
		component:RaysInput
	},
	'/example/rays-radio':{
		component:RaysRadio
	},
	'/example/rays-number':{
		component:RaysNumber
	},
	'/example/rays-switch':{
		component:RaysSwitch
	},
	'/example/rays-select':{
		component:RaysSelect
	},
	'/example/rays-cascader':{
		component:RaysCascader
	},
	'/example/rays-datepicker':{
		component:RaysDatepicker
	},
	'/example/rays-tree':{
		component:RaysTree
	},
	'/example/rays-downmenu':{
		component:RaysDownmenu
	},
	'/example/rays-box':{
		component:RaysBox
	},
	'/example/rays-tip':{
		component:RaysTip
	},
	'/example/rays-progress':{
		component:RaysProgress
	},
	'/example/rays-timeline':{
		component:RaysTimeline
	},
	'/example/rays-tag':{
		component:RaysTag
	},
	'/example/rays-breadcrumb':{
		component:RaysBreadcrumb
	},
	'/view/example':{
		component:example
	}
})
router.redirect({
	'*':'/Home'
})
router.start(App,"#app")
/*new end*/

/* eslint-disable no-new */
/*new Vue({
  el: 'body',
  components: { App }
})*/
