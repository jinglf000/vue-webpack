import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import person from '@/person/person'
import userProfile from '@/person/profile/profile'
import userResume from '@/person/resume/resume'

Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior (to, form, savePosition) {
	},
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		}, {
			path: '/home',
			name: 'home',
			component: home
		}, {
			path: '/person',
			name: 'person',
			component: person,
			children: [
				{
					path: 'resume',
					component: userResume
				},
				{
					path: 'profile',
					component: userProfile
				}
			]
		}
	]
})
