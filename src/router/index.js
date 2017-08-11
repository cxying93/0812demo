import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['./../components/Login'], resolve)
const Home = resolve => require(['./../components/Home'], resolve)
const Page1 = resolve => require(['./../components/Page1'], resolve)

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/home/page1'
	}, {
		path: '/login',
		component: Login
	}, {
		path: '/home',
		component: Home,
		children: [{
			path: 'page1',
			component: Page1
		}]
	}]
})