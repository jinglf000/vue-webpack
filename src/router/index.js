import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import person from '@/person/person'
import userProfile from '@/person/profile/profile'
import userResume from '@/person/resume/resume'
import userResumeEdit from '@/person/resume/edit/edit'
import userResumeCollection from '@/person/resume/collection/collection'
import userResumeFollow from '@/person/resume/follow/follow'
import userResumeStatus from '@/person/resume/status/status'
import userResumeSubscribe from '@/person/resume/subscribe/subscribe'

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
					name: 'person-resume',
					component: userResume,
					children: [
						{
							path: 'edit',
							name: 'person-resume-edit',
							component: userResumeEdit
						},
						{
							path: 'collection',
							name: 'person-resume-collection',
							component: userResumeCollection
						},
						{
							path: 'follow',
							name: 'person-resume-follow',
							component: userResumeFollow
						},
						{
							path: 'status',
							name: 'person-resume-status',
							component: userResumeStatus
						},
						{
							path: 'subscribe',
							name: 'person-resume-subscribe',
							component: userResumeSubscribe
						}
					]
				},
				{
					path: 'profile',
					component: userProfile
				}
			]
		}
	]
})
