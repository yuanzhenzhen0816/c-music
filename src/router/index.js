import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/search',
      component:Search
    },
  	{
      path: '/rank',
      component: Rank
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/recommend',
      component:Recommend
    }
  ]
})
