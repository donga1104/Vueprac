import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import ItemView from '../views/ItemView.vue'
import NotFound from '@/components/NotFound.vue'
import User from '@/views/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'


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
    // redirect:'/'  // 存在しないパスの場合はルートに戻る（方法１） 
    name: 'name', // 404エラーページを作成し遷移させる（方法２）
    component: NotFound 
  },
  {
    path:'/user',
    // name を書くとネストの場合はエラーとなる
    component: User,
    children:[  // ネスト
      {
        path:'profile',
        component: UserProfile
      },
      {
        path:'post',
        component: UserPost
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
