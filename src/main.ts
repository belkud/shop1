import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'main',
		path: '/',
		component:  () => import('./view/PostAdvertisement.vue')
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
const pinia = createPinia()
app.use(router).use(pinia)
app.mount('#app')



// npm install vue-router

// npm audit fix

