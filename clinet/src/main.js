import Vue from 'vue'
import App from './App'
import plugin from "./plugins/base-ui"

import {
  DatePicker,
  TimePicker,
  Timeline,
  TimelineItem,
  Card
} from 'element-ui'

import "element-ui/lib/theme-chalk/index.css"
import "./static/scss/flexble"
import "./static/icon/iconfont.css"
import router from "./router/index"
import store from "./store/index"


Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Card)

Vue.config.productionTip = false

Vue.use(plugin)

// Vue.use(ElementUI);
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
export default vm;
