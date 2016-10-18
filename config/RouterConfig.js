import Home from '../src/components/home/home.vue'
export default[
	{
		path:'/',
		redirect:'/index',
	},
	{
		path:'/index',
		component: Home,
        auth: true 
	}
]