import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'main',
		path: '/',
		component:  () => import('./view/PostAdvertisement.vue')
	},

	// // !!!
	// {
	// 	name: 'telephones',
	// 	path: '/telephones',
	// 	component:  () => import('./component/PostTelephones.vue')
	// },
	{
		name: 'basket',
		path: '/basket',
		component: ()=> import('./view/PostBasket.vue')
	},
	{
		name: 'Balance',
		path: '/balance',
		component:  () => import('./view/PostBalance.vue')
	},
    {
		name: 'Entrance',
		path: '/entrance',
		component: () => import('./view/PostEntrance.vue')
	}]
})
const app = createApp(App)
// @ts-ignore
app.use(router)
app.mount('#app')



// npm install vue-router

// npm audit fix

