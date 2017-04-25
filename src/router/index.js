import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import person from '@/person/person'
import userProfile from '@/person/profile/profile'
import userResume from '@/person/resume/resume'
// 简历编辑
import userResumeEditMain from '@/person/resume/edit/main'
import userResumeEditright from '@/person/resume/edit/right'
// 收藏夹
import userResumeCollectionMain from '@/person/resume/collection/main'
import userResumeCollectionRight from '@/person/resume/collection/right'
// 关注盒
import userResumeFollowMain from '@/person/resume/follow/main'
import userResumeFollowRight from '@/person/resume/follow/right'
// 投递箱
import userResumeStatusMain from '@/person/resume/status/main'
import userResumeStatusRight from '@/person/resume/status/right'
// 订阅栏
import userResumeSubscribeMain from '@/person/resume/subscribe/main'
import userResumeSubscribeRight from '@/person/resume/subscribe/right'

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
					redirect: { name: 'person-resume-edit' },
					name: 'person-resume',
					component: userResume,
					children: [
						{
							path: 'edit',
							name: 'person-resume-edit',
							components: {
								default: userResumeEditMain,
								'right-container': userResumeEditright
							}
						},
						{
							path: 'collection',
							name: 'person-resume-collection',
							components: {
								default: userResumeCollectionMain,
								'right-container': userResumeCollectionRight
							}
						},
						{
							path: 'follow',
							name: 'person-resume-follow',
							components: {
								default: userResumeFollowMain,
								'right-container': userResumeFollowRight
							}
						},
						{
							path: 'status',
							name: 'person-resume-status',
							components: {
								default: userResumeStatusMain,
								'right-container': userResumeStatusRight
							}
						},
						{
							path: 'subscribe',
							name: 'person-resume-subscribe',
							components: {
								default: userResumeSubscribeMain,
								'right-container': userResumeSubscribeRight
							}
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
