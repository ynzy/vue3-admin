/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
	dev: {
		baseApi: '/api',
		mockApi: 'https://mock.apifox.cn/m1/2033402-0-default'
	},
	test: {
		baseApi: '//test.futurefe.com/api',
		mockApi: 'https://mock.apifox.cn/m1/2033402-0-default'
	},
	prod: {
		baseApi: '//futurefe.com/api',
		mockApi: 'https://mock.apifox.cn/m1/2033402-0-default'
	}
}
export default {
	env,
	mock: false,
	namespace: 'manager',
	...EnvConfig[env]
}
