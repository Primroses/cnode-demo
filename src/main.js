// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import Router from 'vue-router'
import store from './store'

// import './utils/flexible'

Vue.use(Router)
Vue.config.productionTip = false
// import Promise from "promise-polyfill";

/* eslint-disable no-new */

/* eslint-disable */
// 路由拦截

if (localStorage.getItem('userInfo')) {
	store.commit('LOGINSTATE', JSON.parse(localStorage.getItem('loginState')));
}

const router = new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
		return savedPosition ? savedPosition : {
			x: 0,
			y: 0
		}
	}
})

router.beforeEach((to, from, next) => {
  if (to.path != '/index/mine') {
    if (localStorage.getItem("loginState")) {
      next();
    } else {
      alert("请先登录~")
      next('/index/mine')
      query: { redirect: to.fullPath }
    }
  }
  else {
    next()
  }
})

new Vue({
  el: '#app',
  store,
  router,
  // 引入的是app 这个模板
  components: { App },
  // 告诉浏览器用 app这个模板来渲染
  template: '<App/>'
})
