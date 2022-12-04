import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			name: 'home',
			path: '/',
			meta: {
				title: '首页'
			},
			component: Home,
			redirect: '/welcome',
			children: [
				{
					name: 'welcome',
					path: '/welcome',
					meta: {
						title: '欢迎体验Vue3全栈课程'
					},
					component: () => import('@/views/Welcome.vue')
				}
			]
		},
		{
			name: 'login',
			path: '/login',
			meta: {
				title: '登录'
			},
			component: () => import('@/views/Login.vue')
		},
		{
			name: '404',
			path: '/404',
			meta: {
				title: '页面不存在'
			},
			component: () => import('@/views/404.vue')
		}
	]
})

export default router
