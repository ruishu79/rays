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
