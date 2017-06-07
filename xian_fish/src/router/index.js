import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classes from '@/components/classes'
import Mint from 'mint-ui'

Vue.use(Mint);
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
}
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
    {
      path: '/classes',
      name: 'classes',
      component: classes
    }
  ]
})
