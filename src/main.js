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

/*组件样例*/
//表格
import RoseTable from './components/example/RoseTable.vue'
//按钮
import RoseButton from './components/example/RoseButton.vue'
//复选框
import checkbox from './components/form/checkbox.vue'
//分页
import RosePagination from './components/example/RosePagination.vue'
//弹框
import RoseModal from './components/example/RoseModal.vue'
//通知
import RoseNotification from './components/example/RoseNotification.vue'
//输入框
import RoseInput from './components/example/RoseInput.vue'
//单选框
import RoseRadio from './components/example/RoseRadio.vue'
//数量输入
import RoseNumber from './components/example/RoseNumber.vue'
//数量输入
import RoseSwitch from './components/example/RoseSwitch.vue'
//选择器
import RoseSelect from './components/example/RoseSelect.vue'
//级联选择
import RoseCascader from './components/example/RoseCascader.vue'
//日期选择
import RoseDatepicker from './components/example/RoseDatepicker.vue'
//树
import RoseTree from './components/example/RoseTree.vue'
//下拉菜单
import RoseDownmenu from './components/example/RoseDownmenu.vue'
//盒子
import RoseBox from './components/example/RoseBox.vue'
//分页标签
import RoseTip from './components/example/RoseTip.vue'
//进度条
import RoseProgress from './components/example/RoseProgress.vue'
//时间线
import RaysTimeline from './components/example/RaysTimeline.vue'
//标签
import RaysTag from './components/example/RaysTag.vue'
//标签
import RaysBreadcrumb from './components/example/RaysBreadcrumb.vue'


// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
const router=new VueRouter()
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
	'/example/rose-table':{
		component:RoseTable
	},
	'/example/rose-button':{
		component:RoseButton
	},
	'/form/checkbox':{
		component:checkbox
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
	'/example/rose-input':{
		component:RoseInput
	},
	'/example/rose-radio':{
		component:RoseRadio
	},
	'/example/rose-number':{
		component:RoseNumber
	},
	'/example/rose-switch':{
		component:RoseSwitch
	},
	'/example/rose-select':{
		component:RoseSelect
	},
	'/example/rose-cascader':{
		component:RoseCascader
	},
	'/example/rose-datepicker':{
		component:RoseDatepicker
	},
	'/example/rose-tree':{
		component:RoseTree
	},
	'/example/rose-downmenu':{
		component:RoseDownmenu
	},
	'/example/rose-box':{
		component:RoseBox
	},
	'/example/rose-tip':{
		component:RoseTip
	},
	'/example/rose-progress':{
		component:RoseProgress
	},
	'/example/rays-timeline':{
		component:RaysTimeline
	},
	'/example/rays-tag':{
		component:RaysTag
	},
	'/example/rays-breadcrumb':{
		component:RaysBreadcrumb
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
