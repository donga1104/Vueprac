import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/book',
    name:'BookList',
    component:BookList
  },
  {
    path:'/book/:id',
    name:'Book',
    component:BookDetail,
    props: route => ({    // functionモード
      id: Number(route.params.id),  // URLで渡されるのがStringの為、キャスト
      title: route.params.title,
      content: route.params.content,
    })
  },
  {
    path:'/item/:id',
    name:'Item',
    component: ItemView
  },
  {
    path:'*',  // 設定しているパス以外の全て
    redirect:'/'  // 存在しないパスの場合はルートに戻る 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
