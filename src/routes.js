import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import individualCategory from './components/individualCategory.vue'
import createSituation from './components/createSituation.vue'
import userProfile from './components/userProfile.vue'

export default [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/individualCategory/:id', component: individualCategory},
    {path: '/createSituation', component: createSituation},
    {path: '/userProfile/:id', component: userProfile}
]