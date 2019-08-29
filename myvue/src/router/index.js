import Vue from 'vue'
import Router from 'vue-router'
import secondcomponent from '../components/secondcomponent'
import Main from '../views/Main'
import Login from '../views/Login'
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
import Test from '../views/Test'
Vue.use(Router)


const First={template:'<div><h2>Frist component page</h2></div>'}
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/second',
      component: secondcomponent 
    },
    {
      path:'/first',
      component:First
    },{
      path:'/main',
      name:'Main',
      component:Main,
      children:[
        {path:'/user/profile/:id',component:UserProfile,name:'UserProfile'},
        {path:'/user/list',component:UserList}
      ]
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/test',
      component:Test,
      name:'Test'
    }
  ]
})
