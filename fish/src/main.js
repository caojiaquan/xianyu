// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Select,DatePicker,Input,Button} from 'element-ui'
import App from './App'
import router from './router'
Vue.use(MintUi)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Input);
Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
