import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Recommend from 'components/recommend/recommend';
import Singer from 'components/singer/singer';
import Search from 'components/search/search';
import Rank from 'components/rank/rank';
import SingerDetail from 'components/singer-detail/singer-detail';
import TopList from 'components/top-list/top-list'
import MusicList from 'components/music-list/music-list'
import UserLogin from 'components/user-login/user-login'
import UserCenter from 'components/user-center/user-center';

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ":id",
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children:[
        {
          path: ':id',
          component: TopList
        }]
    },
    {
      path: '/user/login',
      name: 'user',
      component:UserLogin,
    },
    {
      path: '/user/center',
      component: UserCenter,
      meta:{
        requiresAuth:true
      }
    }

  ]
});
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    //console.log(router.app.$options.store.state.userName)
    let user = router.app.$options.store.state.userName;
    if(!user){
      next({
        path:'/recommend'
      })
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router;
